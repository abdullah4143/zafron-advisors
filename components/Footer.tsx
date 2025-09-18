'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'

const Footer = () => {
  useEffect(() => {
    // GSAP animation for footer
    gsap.fromTo('.footer', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  return (
    <footer className="footer bg-gray-900 text-white py-8 mt-16">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-gray-300">
            © 2025 Zafron Advisors, Islamabad. All Rights Reserved.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-gray-400">
            <span>G11 Markaz, Islamabad Arcade, 3rd Floor T11</span>
            <span className="hidden sm:inline">•</span>
            <span>+92 322 621 9972</span>
            <span className="hidden sm:inline">•</span>
            <span>Professional Financial Management Services</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer