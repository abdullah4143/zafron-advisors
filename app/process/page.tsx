'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import AnimatedSection from '@/components/AnimatedSection'
import ProcessStep from '@/components/ProcessStep'
import RefundPolicy from '@/components/RefundPolicy'

export default function ProcessPage() {
  useEffect(() => {
    // Hero animation
    gsap.fromTo('.process-hero', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
  }, [])

  const processSteps = [
    {
      title: 'Initial Contact',
      description: 'You reach out to us through our website, email, or phone. We&apos;ll acknowledge your inquiry within 24 hours and schedule a convenient time to discuss your needs in detail.'
    },
    {
      title: 'Requirement Analysis',
      description: 'We analyze your financial and project needs through a comprehensive consultation. Our team reviews your current systems, challenges, and goals to understand the scope of work required.'
    },
    {
      title: 'Solution Outlines',
      description: 'We provide a tailored roadmap of possible solutions with detailed timelines and deliverables. You&apos;ll receive a comprehensive proposal outlining our recommended approach and expected outcomes.'
    },
    {
      title: 'Payment Confirmation',
      description: 'Once agreed, payment is processed to initiate the project. We provide clear invoicing and multiple payment options for your convenience. All terms are transparently communicated.'
    },
    {
      title: 'Project Execution',
      description: 'Our team starts work immediately, keeping you updated at each milestone. Regular progress reports ensure you&apos;re always informed about the project status and any important developments.'
    },
    {
      title: 'Delivery',
      description: 'Final solution is delivered with full documentation and support. We provide comprehensive training, ongoing support options, and ensure a smooth transition to your new systems.'
    }
  ]

  return (
    <div className="min-h-screen mt-8 pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container-custom">
          <div className="process-hero text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Onboarding Process</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              We make collaboration simple and transparent
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How We Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A step-by-step guide to our collaborative process, designed for clarity and results
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="slideUp" stagger={0.2}>
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <ProcessStep
                    key={index}
                    step={index + 1}
                    title={step.title}
                    description={step.description}
                    isLast={index === processSteps.length - 1}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Services & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures quality, transparency, and successful outcomes
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-600 text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Thorough Analysis</h3>
                <p className="text-gray-600">We take time to understand your unique needs and challenges before proposing solutions.</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-green-600 text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Clear Documentation</h3>
                <p className="text-gray-600">Every step is documented with clear deliverables, timelines, and expectations.</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-purple-600 text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaborative Approach</h3>
                <p className="text-gray-600">We work closely with your team to ensure smooth integration and knowledge transfer.</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-orange-600 text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Turnaround</h3>
                <p className="text-gray-600">Efficient processes that deliver results without compromising on quality.</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-red-600 text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Mitigation</h3>
                <p className="text-gray-600">Structured approach minimizes project risks and ensures successful delivery.</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-indigo-600 text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Results-Focused</h3>
                <p className="text-gray-600">Every step is designed to deliver measurable value and achieve your business objectives.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Refund Policy Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <RefundPolicy />
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Typical Project Timeline
              </h2>
              <p className="text-xl mb-12 opacity-95">
                While every project is unique, here&apos;s what you can typically expect
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">📅</div>
                  <h3 className="text-xl font-semibold mb-2">Week 1</h3>
                  <p className="opacity-90">Analysis & Planning Phase</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-2">Week 2-4</h3>
                  <p className="opacity-90">Implementation & Development</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold mb-2">Week 5</h3>
                  <p className="opacity-90">Testing, Delivery & Support</p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white/10 rounded-xl">
                <p className="text-lg opacity-95">
                  <strong>Note:</strong> Timeline may vary based on project complexity and scope. 
                  We provide detailed timelines during the proposal phase.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection animation="scaleIn">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let&apos;s begin your project with our proven process. Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold btn-hover inline-block transform transition-all duration-300 hover:bg-primary-600"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/about"
                  className="border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-full text-lg font-semibold btn-hover inline-block transform transition-all duration-300 hover:bg-primary-500 hover:text-white"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}