'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import AnimatedSection from '../components/AnimatedSection'
import ServiceCard from '../components/ServiceCard'

const HomePage = () => {
  useEffect(() => {
    // Hero section animations
    const tl = gsap.timeline()
    
    tl.fromTo('.hero-headline', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.hero-subheadline', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5'
    )
    .fromTo('.hero-cta', 
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.3'
    )

    // Service icons animation
    gsap.fromTo('.service-icons > *', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: 'power3.out', 
        delay: 1.5 
      }
    )
  }, [])

  const services = [
    {
      title: 'Project Management',
      description: 'From planning to execution, we help you manage projects efficiently with proven methodologies and expert oversight.',
      icon: '📋'
    },
    {
      title: 'Financial Reports',
      description: 'Accurate and actionable reports for smarter decision-making. Get insights that drive your business forward.',
      icon: '📊'
    },
    {
      title: 'Software Integration',
      description: 'Seamless integration of finance tools into your existing systems. Minimize disruption, maximize efficiency.',
      icon: '🔗'
    },
    {
      title: 'Outsourcing',
      description: 'We partner with IT firms to handle complex integration tasks. Focus on your core business while we handle the tech.',
      icon: '🤝'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-40 pb-20">
        <div className="container-custom text-center">
          <h1 className="hero-headline text-5xl md:text-7xl font-bold text-gray-900 mb-8 pt-16 leading-tight">
            Zafron <span className="text-gradient">Advisors</span>
          </h1>
          
          <p className="hero-subheadline text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Your Trusted Partner in Financial Excellence
          </p>

          <p className="text-lg text-gray-500 mb-16 max-w-2xl mx-auto leading-relaxed">
            Professional financial consulting and project management services 
            tailored for businesses in Islamabad and beyond
          </p>

          {/* Service Icons */}
          <div className="service-icons">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
              <span className="text-gray-500 text-sm font-medium px-4">Our Expertise</span>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
            </div>
            <div className="flex justify-center items-center space-x-8 opacity-70">
              <div className="text-4xl transform hover:scale-110 transition-transform duration-300" title="Project Management">📋</div>
              <div className="text-4xl transform hover:scale-110 transition-transform duration-300" title="Financial Reports">📊</div>
              <div className="text-4xl transform hover:scale-110 transition-transform duration-300" title="System Integration">🔗</div>
              <div className="text-4xl transform hover:scale-110 transition-transform duration-300" title="Strategic Partnerships">🤝</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial management solutions tailored to your business needs
            </p>
          </AnimatedSection>

          <AnimatedSection 
            animation="slideUp" 
            stagger={0.2}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={<span className="text-4xl">{service.icon}</span>}
                index={index}
              />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="slideUp" className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Why Choose Zafron Advisors?
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn" delay={0.3}>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                      Clarity & Expertise from Islamabad
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      Located at G11 Markaz, Islamabad Arcade, we bring clarity and expertise to every project. 
                      Our goal is to simplify finance management so you can focus on growth.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      With years of experience in financial systems and project management, 
                      we understand the unique challenges businesses face when integrating 
                      new technologies with existing workflows.
                    </p>
                    <Link 
                      href="/about"
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300"
                    >
                      Learn More About Us
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-primary-600 text-xl">🎯</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Results-Driven</h4>
                        <p className="text-gray-600">We focus on delivering measurable outcomes that impact your bottom line.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-primary-600 text-xl">⚡</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Rapid Implementation</h4>
                        <p className="text-gray-600">Quick turnaround times without compromising on quality or reliability.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-primary-600 text-xl">🛡️</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Transparent Process</h4>
                        <p className="text-gray-600">Clear communication and transparent pricing with no hidden costs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <AnimatedSection animation="scaleIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let&apos;s discuss how we can streamline your financial processes and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold btn-hover inline-block transform transition-all duration-300 hover:bg-gray-100"
              >
                Start Your Project
              </Link>
              <Link 
                href="/process"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold btn-hover inline-block transform transition-all duration-300 hover:bg-white hover:text-primary-600"
              >
                View Our Process
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default HomePage