'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn'
  delay?: number
  duration?: number
  stagger?: number
}

const AnimatedSection = ({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 0.8,
  stagger = 0
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const element = sectionRef.current
    const childElements = element.children

    // Animation configurations
    const animations = {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1, duration, delay, ease: 'power3.out' }
      },
      slideUp: {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0, duration, delay, ease: 'power3.out' }
      },
      slideLeft: {
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0, duration, delay, ease: 'power3.out' }
      },
      slideRight: {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0, duration, delay, ease: 'power3.out' }
      },
      scaleIn: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1, duration, delay, ease: 'back.out(1.7)' }
      }
    }

    const config = animations[animation]

    if (stagger > 0 && childElements.length > 0) {
      // Animate children with stagger
      gsap.fromTo(childElements, config.from, {
        ...config.to,
        stagger,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })
    } else {
      // Animate the entire section
      gsap.fromTo(element, config.from, {
        ...config.to,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [animation, delay, duration, stagger])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}

export default AnimatedSection