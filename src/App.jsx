import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ModelDemo from './components/ModelDemo'
import Catalogue from './components/Catalogue'
import Research from './components/Research'
import Abstract from './components/Abstract'
import ProblemStatement from './components/ProblemStatement'
import Architecture from './components/Architecture'
import Footer from './components/Footer'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Failsafe: automatically hide loader after maximum time
    const failsafe = setTimeout(() => {
      console.log('Failsafe triggered - hiding loader')
      setIsLoading(false)
    }, 4000) // 4 seconds maximum

    return () => clearTimeout(failsafe)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      // Initialize Lenis after loading is complete
      const lenis = new Lenis({
        smooth: true,
        duration: 1.2
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      // Make Lenis available globally for navigation
      window.lenis = lenis

      // GSAP animations for page content - trigger after a short delay
      setTimeout(() => {
        gsap.from('.fade-in', {
          duration: 0.5,
          y: 30,
          opacity: 0,
          stagger: 0.2,
          ease: 'power3.out'
        })
      }, 100)

      return () => {
        lenis.destroy()
        window.lenis = null
      }
    }
  }, [isLoading])



  console.log('Main content should be visible now')

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="demo">
          <ModelDemo />
        </section>
        <section id="catalogue">
          <Catalogue />
        </section>
        <section id="research">
          <Research />
        </section>
        <section id="abstract">
          <Abstract />
        </section>
        <section>
          <ProblemStatement />
        </section>
        <section id="architecture">
          <Architecture />
        </section>
      </main>
      <Footer />
    </div>
  )
}
