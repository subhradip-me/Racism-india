import React from 'react'

export default function Hero() {
  const scrollToDemo = () => {
    if (window.lenis) {
      window.lenis.scrollTo(document.getElementById('demo'), {
        offset: -80,
        duration: 1.5
      })
    } else {
      document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToResearch = () => {
    if (window.lenis) {
      window.lenis.scrollTo(document.getElementById('research'), {
        offset: -80,
        duration: 1.5
      })
    } else {
      document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Ultra minimal background */}
      <div className="absolute inset-0 bg-white"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Academic badge */}
        <div className="fade-in mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-600 text-xs font-medium tracking-wide">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
            <span>RESEARCH DEMONSTRATION</span>
          </div>
        </div>
        
        {/* Research title */}
        <div className="fade-in mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-zinc-900 tracking-tight leading-tight mb-6">
            Hate Speech Detection<br />Against Indians
          </h1>
        </div>
        
        {/* Subtitle */}
        <div className="fade-in mb-16">
          <p className="text-lg sm:text-xl text-zinc-600 max-w-3xl mx-auto font-light leading-relaxed">
            A BLSTM-based NLP Model for Detecting Anti-Indian Hate in Online Text
          </p>
        </div>
        
        {/* Academic CTAs */}
        <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToDemo}
            className="bg-zinc-900 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-zinc-800"
          >
            Try the Model
          </button>
          <button 
            onClick={scrollToResearch}
            className="bg-white text-zinc-900 px-8 py-3 rounded-full font-medium border border-zinc-300 transition-all duration-300 hover:bg-zinc-50"
          >
            View Research
          </button>
        </div>
      </div>
    </div>
  )
}
