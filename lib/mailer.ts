import nodemailer from 'nodemailer'

// Email configuration interface
interface EmailConfig {
  to: string
  subject: string
  html: string
  replyTo?: string
}

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
}

// Send email function
export const sendEmail = async ({ to, subject, html, replyTo }: EmailConfig) => {
  try {
    const transporter = createTransporter()

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to,
      subject,
      html,
      replyTo: replyTo || process.env.GMAIL_USER,
    }

    const result = await transporter.sendMail(mailOptions)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Contact form email template
export const createContactEmailTemplate = (name: string, email: string, message: string) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 15px; }
        .field label { font-weight: bold; color: #555; }
        .field p { margin: 5px 0; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #667eea; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>You have received a new message from your website contact form.</p>
        </div>
        <div class="content">
          <div class="field">
            <label>Name:</label>
            <p>${name}</p>
          </div>
          <div class="field">
            <label>Email:</label>
            <p>${email}</p>
          </div>
          <div class="field">
            <label>Message:</label>
            <p>${message}</p>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the Zafron Advisors contact form.</p>
          <p>Please reply directly to this email to respond to the inquiry.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Auto-reply email template
export const createAutoReplyTemplate = (name: string) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for contacting Zafron Advisors</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        .message { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 20px 0; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
        .contact-info { background: #e3f2fd; padding: 15px; border-radius: 8px; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">Zafron Advisors</div>
          <p>Thank you for reaching out to us!</p>
        </div>
        <div class="content">
          <h2>Dear ${name},</h2>
          
          <div class="message">
            <p>Thank you for contacting Zafron Advisors. We have received your message and appreciate your interest in our services.</p>
            
            <p>Our team will review your inquiry and get back to you within 24-48 hours. We pride ourselves on providing prompt and professional responses to all client communications.</p>
            
            <p>In the meantime, feel free to explore our website to learn more about our comprehensive financial management services including:</p>
            <ul>
              <li>Project Management</li>
              <li>Financial Reports</li>
              <li>Software Integration</li>
              <li>IT Outsourcing Solutions</li>
            </ul>
          </div>

          <div class="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Zafron Advisors</strong><br>
            Islamabad, Pakistan<br>
            Email: info@zafronadvisors.com</p>
          </div>
        </div>
        <div class="footer">
          <p>This is an automated response. Please do not reply to this email.</p>
          <p>© 2025 Zafron Advisors. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `
}