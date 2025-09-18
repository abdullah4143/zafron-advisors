'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}

const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleHover = () => {
    if (!cardRef.current) return
    
    gsap.to(cardRef.current, {
      y: -10,
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out'
    })
    
    gsap.to(cardRef.current.querySelector('.service-icon'), {
      rotation: 360,
      duration: 0.6,
      ease: 'power2.out'
    })
  }

  const handleLeave = () => {
    if (!cardRef.current) return
    
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="service-icon text-4xl mb-6 text-primary-500 group-hover:text-primary-600 transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
      
      <div className="mt-6 inline-flex items-center text-primary-500 font-medium group-hover:text-primary-600 transition-colors duration-300">
        Learn More
        <svg 
          className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}

export default ServiceCard