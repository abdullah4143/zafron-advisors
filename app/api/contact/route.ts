import { NextRequest, NextResponse } from 'next/server'
import { sendEmail, createContactEmailTemplate, createAutoReplyTemplate } from '@/lib/mailer'

// Rate limiting (simple in-memory store - use Redis in production)
const rateLimit = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_MAX = 5 // max requests
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const userLimit = rateLimit.get(ip)

  if (!userLimit || now > userLimit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (userLimit.count >= RATE_LIMIT_MAX) {
    return false
  }

  userLimit.count += 1
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Check environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing email configuration')
      return NextResponse.json(
        { success: false, message: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Get IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate input lengths
    if (name.length > 100 || email.length > 100 || message.length > 1000) {
      return NextResponse.json(
        { success: false, message: 'Input too long' },
        { status: 400 }
      )
    }

    // Sanitize inputs (basic XSS prevention)
    const sanitizedName = name.replace(/[<>]/g, '')
    const sanitizedEmail = email.replace(/[<>]/g, '')
    const sanitizedMessage = message.replace(/[<>]/g, '')

    // Send notification email to company
    const notificationHtml = createContactEmailTemplate(sanitizedName, sanitizedEmail, sanitizedMessage)
    const notificationResult = await sendEmail({
      to: process.env.GMAIL_USER!,
      subject: `New Contact Form Submission from ${sanitizedName}`,
      html: notificationHtml,
      replyTo: sanitizedEmail,
    })

    if (!notificationResult.success) {
      console.error('Failed to send notification email:', notificationResult.error)
      return NextResponse.json(
        { success: false, message: 'Failed to send message' },
        { status: 500 }
      )
    }

    // Send auto-reply to user
    const autoReplyHtml = createAutoReplyTemplate(sanitizedName)
    const autoReplyResult = await sendEmail({
      to: sanitizedEmail,
      subject: 'Thank you for contacting Zafron Advisors',
      html: autoReplyHtml,
    })

    // Log auto-reply result but don't fail the request if it fails
    if (!autoReplyResult.success) {
      console.warn('Failed to send auto-reply email:', autoReplyResult.error)
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.',
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}