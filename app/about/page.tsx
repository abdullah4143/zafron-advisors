'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import AnimatedSection from '@/components/AnimatedSection'

export default function AboutPage() {
  useEffect(() => {
    // Hero animation
    gsap.fromTo('.about-hero', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
  }, [])

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: '📊' },
    { number: '25+', label: 'Happy Clients', icon: '😊' },
    { number: '3+', label: 'Years Experience', icon: '⭐' },
    { number: '100%', label: 'Client Satisfaction', icon: '🎯' }
  ]

  const values = [
    {
      title: 'Transparency',
      description: 'We believe in open communication and clear processes. No hidden fees, no surprises.',
      icon: '🔍'
    },
    {
      title: 'Expertise',
      description: 'Our team combines technical knowledge with business acumen to deliver optimal solutions.',
      icon: '🎓'
    },
    {
      title: 'Reliability',
      description: 'Consistent delivery on time and within budget. You can count on us to meet commitments.',
      icon: '🛡️'
    },
    {
      title: 'Innovation',
      description: 'We stay current with the latest technologies and methodologies to serve you better.',
      icon: '💡'
    }
  ]

  return (
    <div className="min-h-screen pt-24 mt-8">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container-custom">
          <div className="about-hero text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient">Zafron Advisors</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Your trusted partner for financial management and business growth in Islamabad, Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="slideUp">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                      Zafron Advisors is a finance management company headquartered in Islamabad at 
                      G11 Markaz, Islamabad Arcade, 3rd Floor T11. We specialize in project management, 
                      Data Analytics, and the integration of finance software into business systems.
                    </p>
                    <p>
                      Our approach combines technical expertise with a client-first mindset, 
                      ensuring transparency and reliability in all our services. We understand 
                      that every business is unique, and we tailor our solutions accordingly.
                    </p>
                    <p>
                      Founded with the vision to simplify complex financial processes, we have 
                      helped numerous businesses streamline their operations and achieve sustainable growth.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                    <p className="text-lg leading-relaxed opacity-95">
                      To empower businesses with smarter financial management solutions 
                      that drive growth, improve efficiency, and create lasting value 
                      for our clients and their stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client success
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" stagger={0.2}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our relationship with clients
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl flex-shrink-0">{value.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Based in Islamabad
              </h2>
              <p className="text-xl mb-8 opacity-95 leading-relaxed">
                Proudly serving businesses across Pakistan and beyond from our headquarters 
                in the capital city. Our strategic location allows us to understand local 
                business dynamics while maintaining global standards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl mb-4">🏢</div>
                  <h3 className="font-semibold mb-2">Modern Workspace</h3>
                  <p className="opacity-90">State-of-the-art facilities for optimal productivity</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4">🌐</div>
                  <h3 className="font-semibold mb-2">Global Reach</h3>
                  <p className="opacity-90">Local presence with international standards</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4">🤝</div>
                  <h3 className="font-semibold mb-2">Community Focus</h3>
                  <p className="opacity-90">Supporting local business growth and development</p>
                </div>
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
                Ready to Work Together?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let&apos;s discuss how we can help transform your financial processes and drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold btn-hover inline-block transform transition-all duration-300 hover:bg-primary-600"
                >
                  Get in Touch
                </a>
                <a 
                  href="/process"
                  className="border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-full text-lg font-semibold btn-hover inline-block transform transition-all duration-300 hover:bg-primary-500 hover:text-white"
                >
                  Our Process
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}