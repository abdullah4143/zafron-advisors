'use client'

import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import AnimatedSection from '@/components/AnimatedSection'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    // Hero animation
    gsap.fromTo('.contact-hero', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Validate form data
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all fields')
      }

      // Simulate form processing with a delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Show success message
      setSubmitStatus('success')
      setStatusMessage(
        'Thank you for your message! We have received your inquiry and will get back to you within 24-48 hours. ' +
        'In the meantime, feel free to call us at +92 322 621 9972 for immediate assistance.'
      )
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setSubmitStatus('idle')
      }, 5000)
      
    } catch (error) {
      setSubmitStatus('error')
      setStatusMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-24 mt-8">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container-custom">
          <div className="contact-hero text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let&apos;s <span className="text-gradient">Talk</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Have a project in mind or need financial guidance? Reach out to us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Information */}
              <AnimatedSection animation="slideLeft">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      Get in Touch
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Ready to transform your financial processes? We&apos;re here to help you 
                      streamline operations and drive growth.
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-primary-600 text-xl">📍</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                        <p className="text-gray-600">Zafron Advisors<br />G11 Markaz, Islamabad Arcade<br />3rd Floor T11, Islamabad, Pakistan</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-primary-600 text-xl">📞</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">+92 322 621 9972</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-primary-600 text-xl">✉️</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">info@zafronadvisors.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-primary-600 text-xl">⏰</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>

                  {/* Why Contact Us */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Why Contact Us?</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center space-x-3">
                        <span className="text-green-500">✓</span>
                        <span>Free initial consultation</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="text-green-500">✓</span>
                        <span>Quick response within 24 hours</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="text-green-500">✓</span>
                        <span>Customized solutions for your business</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="text-green-500">✓</span>
                        <span>Transparent pricing and timeline</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact Form */}
              <AnimatedSection animation="slideRight">
                <div className="contact-form bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your project or question..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold btn-hover transition-all duration-300 hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="success-message mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-green-500 text-xl">✅</span>
                        <p className="text-green-800">{statusMessage}</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-red-500 text-xl">❌</span>
                        <p className="text-red-800">{statusMessage}</p>
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Happens Next?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-600 text-2xl">1️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">We Respond</h3>
                  <p className="text-gray-600">You&apos;ll hear back from us within 24 hours of your submission.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-600 text-2xl">2️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">We Discuss</h3>
                  <p className="text-gray-600">We&apos;ll schedule a consultation to understand your needs better.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-600 text-2xl">3️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">We Deliver</h3>
                  <p className="text-gray-600">We&apos;ll provide a customized proposal and timeline for your project.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}