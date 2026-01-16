import React, { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element && window.lenis) {
      window.lenis.scrollTo(element, {
        offset: -60,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      })
    } else if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-2xl border-b border-zinc-100' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="shrink-0">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`text-lg lg:text-xl font-light tracking-wide transition-all duration-500 ${
                  isScrolled ? 'text-zinc-900' : 'text-zinc-900'
                }`}
              >
                Hate Speech Detection
              </button>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1">
                {['Home', 'Demo', 'Catalogue', 'Research', 'About'].map((item, index) => {
                  const sectionId = item === 'Home' ? 'hero' : item === 'About' ? 'architecture' : item.toLowerCase()
                  return (
                    <button
                      key={item}
                      onClick={() => scrollToSection(sectionId)}
                      className={`relative px-4 py-2 text-sm font-light transition-all duration-300 group ${
                        isScrolled ? 'text-zinc-600 hover:text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'
                      }`}
                    >
                      <span className="relative z-10">{item}</span>
                      <div className="absolute inset-0 rounded-lg bg-zinc-100 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-8 h-8 flex flex-col justify-center items-center group"
                aria-label="Toggle menu"
              >
                <span 
                  className={`block h-0.5 w-6 bg-zinc-700 transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''
                  }`}
                />
                <span 
                  className={`block h-0.5 w-6 bg-zinc-700 transition-all duration-300 ease-out mt-1 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span 
                  className={`block h-0.5 w-6 bg-zinc-700 transition-all duration-300 ease-out mt-1 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out ${
        isMobileMenuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-white/95 backdrop-blur-2xl transition-all duration-500 ease-out ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`relative h-full flex flex-col justify-center items-center transition-all duration-700 ease-out ${
          isMobileMenuOpen ? 'translate-y-0' : 'translate-y-8'
        }`}>
          <div className="text-center space-y-8">
            {/* Mobile Menu Items */}
            {[
              { name: 'Home', id: 'hero' },
              { name: 'Demo', id: 'demo' },
              { name: 'Catalogue', id: 'catalogue' },
              { name: 'Research', id: 'research' },
              { name: 'About', id: 'architecture' }
            ].map((item, index) => (
              <div 
                key={item.name}
                className={`transition-all duration-500 ease-out ${
                  isMobileMenuOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <button
                  onClick={() => {
                    scrollToSection(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className="block text-2xl font-light text-zinc-700 hover:text-zinc-900 transition-colors duration-300"
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
