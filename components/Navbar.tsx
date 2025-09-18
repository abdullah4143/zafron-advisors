'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // GSAP animation for navbar on load
    gsap.fromTo('.navbar', 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/process#services' },
    { name: 'Process', href: '/process' },
    { name: 'Contact', href: '/contact' },
  ]

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.2,
      ease: 'power2.out'
    })
  }

  const handleLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.2,
      ease: 'power2.out'
    })
  }

  return (
    <nav className="navbar fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="glass rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-gradient"
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            Zafron Advisors
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  pathname === item.href
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-white/50'
                }`}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${
                  isOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    pathname === item.href
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-700 hover:bg-white/30'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar