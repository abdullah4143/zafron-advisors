'use client'

import { useState, useRef } from 'react'
import { gsap } from 'gsap'

interface PolicyItem {
  title: string
  description: string
  icon: string
}

const RefundPolicy = () => {
  const [openItem, setOpenItem] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const policyItems: PolicyItem[] = [
    {
      title: 'Full Refund Policy (Within 3 Hours)',
      description: 'If a client backs out within 3 hours of payment, a full 100% refund will be issued immediately. This applies to all services and packages. No questions asked, no deductions, no processing fees. The refund will be processed back to the original payment method within 3-5 business days. This policy ensures clients have adequate time to reconsider their decision without any financial penalty.',
      icon: '⏰'
    },
    {
      title: 'Partial Refund Policy (After 3 Hours)',
      description: 'After the initial 3-hour grace period, a 10% administrative fee will be deducted from the total amount to cover project initiation costs, team allocation, initial analysis, and administrative processing. The remaining 90% will be refunded within 5-7 business days. This deduction covers the immediate costs incurred when we begin project preparation and resource allocation.',
      icon: '💰'
    },
    {
      title: 'Work-in-Progress Refunds',
      description: 'For ongoing projects, refunds are calculated based on work completed. Completed milestones are non-refundable, while remaining milestones can be refunded minus a 15% administrative fee. All delivered work, documentation, and intellectual property remain with the client. A detailed breakdown of completed vs. remaining work will be provided.',
      icon: '�'
    },
    {
      title: 'Dispute Resolution & Mediation',
      description: 'In case of bank disputes, payment gateway issues, or disagreements regarding refund amounts, both parties agree to resolve issues through good faith mediation. We work with certified financial mediators and maintain transparent documentation of all transactions. Emergency contact: +92 322 621 9972 for urgent payment disputes.',
      icon: '🤝'
    },
    {
      title: 'Refund Processing Timeline',
      description: 'Bank transfers: 3-5 business days | Credit/Debit cards: 5-10 business days | Digital wallets: 1-3 business days | International transfers: 7-14 business days. Processing times may vary based on your bank and payment method. We provide tracking reference numbers for all refund transactions and email confirmations at each step.',
      icon: '⏱️'
    },
    {
      title: 'Non-Refundable Circumstances',
      description: 'Refunds are not applicable for: completed projects delivered as per agreement, third-party software licenses purchased on client behalf, custom development work after final approval, consultation fees for meetings already conducted, and emergency/rush project premiums. These terms are clearly outlined in our service agreements.',
      icon: '❌'
    }
  ]

  const toggleItem = (index: number) => {
    const isCurrentlyOpen = openItem === index
    const newOpenItem = isCurrentlyOpen ? null : index
    
    setOpenItem(newOpenItem)

    // Animate the content
    if (!containerRef.current) return
    
    const items = containerRef.current.querySelectorAll('.policy-item')
    const clickedItem = items[index]
    const content = clickedItem?.querySelector('.policy-content')
    const arrow = clickedItem?.querySelector('.policy-arrow')

    if (content && arrow) {
      if (isCurrentlyOpen) {
        // Closing
        gsap.to(content, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
        gsap.to(arrow, {
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
      } else {
        // Opening
        gsap.set(content, { height: 'auto' })
        const targetHeight = content.scrollHeight
        gsap.fromTo(content,
          { height: 0, opacity: 0 },
          { height: targetHeight, opacity: 1, duration: 0.3, ease: 'power2.out' }
        )
        gsap.to(arrow, {
          rotation: 180,
          duration: 0.3,
          ease: 'power2.out'
        })
      }
    }

    // Add shake effect to the card
    gsap.to(clickedItem, {
      x: 0,
      keyframes: [
        { x: -2, duration: 0.1 },
        { x: 2, duration: 0.1 },
        { x: -2, duration: 0.1 },
        { x: 2, duration: 0.1 },
        { x: 0, duration: 0.1 }
      ],
      ease: 'power2.out'
    })
  }

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Our Refund Policy
        </h2>
        <p className="text-gray-600 text-lg">
          We believe in transparency and fair business practices
        </p>
      </div>

      <div className="space-y-4">
        {policyItems.map((item, index) => (
          <div
            key={index}
            className="policy-item bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              onClick={() => toggleItem(index)}
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
              <svg
                className="policy-arrow w-5 h-5 text-gray-500 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            <div className="policy-content overflow-hidden" style={{ height: 0, opacity: 0 }}>
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
        <div className="flex items-start space-x-3">
          <span className="text-blue-500 text-xl">ℹ️</span>
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">Important Refund Information</h4>
            <p className="text-blue-800 text-sm mb-3">
              All refund requests must be submitted in writing via email to info@zafronadvisors.com with subject line &quot;Refund Request&quot;. 
              Include your order number, payment details, and reason for refund. Processing time is typically 3-5 business days after approval.
            </p>
            <p className="text-blue-800 text-sm mb-3">
              <strong>Contact Information:</strong><br />
              📧 Email: info@zafronadvisors.com<br />
              📞 Phone: +92 322 621 9972<br />
              📍 Address: G11 Markaz, Islamabad Arcade, 3rd Floor T11
            </p>
            <p className="text-blue-800 text-sm">
              We reserve the right to review each case individually to ensure fair treatment for all parties. 
              All refund policies are subject to Pakistani financial regulations and our terms of service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RefundPolicy