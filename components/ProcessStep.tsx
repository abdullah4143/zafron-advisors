'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'

interface ProcessStepProps {
  step: number
  title: string
  description: string
  isLast?: boolean
}

const ProcessStep = ({ step, title, description, isLast = false }: ProcessStepProps) => {
  const stepRef = useRef<HTMLDivElement>(null)

  const handleHover = () => {
    if (!stepRef.current) return
    
    gsap.to(stepRef.current.querySelector('.step-number'), {
      scale: 1.2,
      backgroundColor: '#0ea5e9',
      color: '#ffffff',
      duration: 0.3,
      ease: 'power2.out'
    })
    
    gsap.to(stepRef.current.querySelector('.step-content'), {
      x: 10,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleLeave = () => {
    if (!stepRef.current) return
    
    gsap.to(stepRef.current.querySelector('.step-number'), {
      scale: 1,
      backgroundColor: '#e0f2fe',
      color: '#0ea5e9',
      duration: 0.3,
      ease: 'power2.out'
    })
    
    gsap.to(stepRef.current.querySelector('.step-content'), {
      x: 0,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  return (
    <div
      ref={stepRef}
      className="relative flex items-start group"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {/* Step number */}
      <div className="step-number flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-500 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 z-10">
        {step}
      </div>

      {/* Connecting line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-24 bg-gradient-to-b from-primary-200 to-transparent"></div>
      )}

      {/* Content */}
      <div className="step-content ml-6 flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ProcessStep