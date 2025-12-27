import React from 'react'
import { heroMotion, fundedByTheEuropean, ngiLogo, nexGeneration, sensifai } from '@/assets'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen max-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src={heroMotion} type="video/mp4" />
        </video>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-4 pt-16 pb-4 sm:pb-8">
        
        {/* Main Content Container */}
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          {/* Main Title - Responsive sizing */}
          <div className="text-center mb-4 sm:mb-6 mt-4 sm:mt-8">
            <h1 
              className="font-bold text-center mb-2 sm:mb-4 gradient-text"
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 8.75rem)',
                lineHeight: 'clamp(2.5rem, 7vw, 7.125rem)',
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(158.70deg, rgba(118, 194, 252, 1) 17.719%, rgba(57, 146, 251, 1) 68.414%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}
            >
              Aerium
            </h1>
            
            {/* Subtitle */}
            <h2 
              className="font-light text-[#00234a] text-center mb-6 sm:mb-8"
              style={{
                fontSize: 'clamp(1rem, 3.5vw, 3.4rem)',
                lineHeight: 'clamp(1.4rem, 4.5vw, 6rem)',
                fontFamily: 'var(--font-rubik)'
              }}
            >
              Building Bright Consensus
            </h2>
          </div>
          
          {/* Version Badge - Responsive design */}
          <div className="relative mb-6 sm:mb-8">
            <div 
              className="flex items-center bg-white rounded-full shadow-lg px-4 sm:px-6 py-2 sm:py-3 mx-auto max-w-sm"
              style={{
                boxShadow: '0px 3.817px 15.268px 0px rgba(0,0,0,0.1)'
              }}
            >
              <div className="flex items-center w-full">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#3992FB" />
                </svg>
                <span 
                  className="font-light text-black flex-1 text-center sm:text-left text-sm sm:text-base"
                  style={{
                    fontFamily: 'var(--font-rubik)'
                  }}
                >
                  the new and improved 1.0v release
                </span>
                <div className="w-2 h-2 ml-3 rotate-[270deg]">
                  <div className="w-full h-full border-t-2 border-r-2 border-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons - Responsive design */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-28">
            <button 
              className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-white font-bold rounded-2xl text-sm sm:text-base hover:scale-105 transition-transform max-w-xs sm:max-w-none"
              style={{
                backgroundImage: 'linear-gradient(151.97deg, rgba(118, 194, 252, 1) 17.719%, rgba(57, 146, 251, 1) 68.414%)'
              }}
            >
              Start now
            </button>
            <button 
              className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 font-bold border border-[#76c2fc] rounded-2xl text-sm sm:text-base hover:scale-105 transition-transform max-w-xs sm:max-w-none"
              style={{
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(157.58deg, rgba(118, 194, 252, 1) 17.719%, rgba(57, 146, 251, 1) 68.414%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}
            >
              Our works
            </button>
          </div>
          
          {/* Description - Responsive typography */}
          <p 
            className="font-light text-black text-center max-w-4xl mx-auto px-2 sm:px-4"
            style={{
              fontSize: 'clamp(0.8rem, 2.2vw, 1.4375rem)',
              lineHeight: 'clamp(1.2rem, 2.8vw, 2.2rem)',
              fontFamily: 'var(--font-rubik)'
            }}
          >
            <span>Join a new era of collaboration and consensus. </span>
            <span 
              className="font-semibold"
              style={{
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(174.93deg, rgba(118, 194, 252, 1) 17.719%, rgba(57, 146, 251, 1) 68.414%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}
            >
              Aerium
            </span>
            <span> empowers communities to build trust, clarity, and future-ready decisions together.</span>
          </p>
        </div>
        
        {/* Company Logos - Better positioning for mobile and desktop */}
        <div className="flex items-center justify-center space-x-3 sm:space-x-6 opacity-60 px-4 -mt-4 sm:-mt-8">
          <Image src={fundedByTheEuropean} alt="Funded by the European Union" className="h-6 sm:h-10 lg:h-14 w-auto filter grayscale" />
          <Image src={ngiLogo} alt="NGI Logo" className="h-6 sm:h-10 lg:h-14 w-auto filter grayscale" />
          <Image src={nexGeneration} alt="Next Generation Internet" className="h-6 sm:h-10 lg:h-14 w-auto filter grayscale" />
          <Image src={sensifai} alt="Sensifai" className="h-6 sm:h-10 lg:h-14 w-auto filter grayscale" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection