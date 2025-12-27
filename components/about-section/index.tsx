import React from 'react'
import { aeriumVisionConsensus } from '@/assets'

const AboutSection = () => {
  return (
    <section className="relative py-16 sm:py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Responsive text */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 
              className="font-semibold text-black mb-6 sm:mb-8"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.1875rem)',
                lineHeight: 'clamp(2rem, 5vw, 3.875rem)',
                fontFamily: 'var(--font-rubik)'
              }}
            >
              Redefining Consensus for the Future
            </h2>
            
            <div className="space-y-4">
              <p 
                className="text-black"
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.4375rem)',
                  lineHeight: 'clamp(1.5rem, 4vw, 4.4375rem)',
                  fontFamily: 'var(--font-rubik)',
                  fontWeight: 300
                }}
              >
                <span 
                  className="font-semibold"
                  style={{
                    WebkitTextFillColor: 'transparent',
                    backgroundImage: 'linear-gradient(140.57deg, rgba(118, 194, 252, 1) 17.719%, rgba(57, 146, 251, 1) 68.414%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text'
                  }}
                >
                  Aerium
                </span>
                <span> is a platform designed to transform the way communities agree, decide, and grow. With transparency and innovation at its core, </span>
                <span 
                  className="font-semibold"
                  style={{
                    WebkitTextFillColor: 'transparent',
                    backgroundImage: 'linear-gradient(140.57deg, rgba(118, 194, 252, 1) 17.719%, rgba(57, 146, 251, 1) 68.414%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text'
                  }}
                >
                  Aerium
                </span>
                <span> makes collaboration not only possible but effortless.</span>
              </p>
              
              <p 
                className="text-black"
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.4375rem)',
                  lineHeight: 'clamp(1.5rem, 3vw, 2.875rem)',
                  fontFamily: 'var(--font-rubik)',
                  fontWeight: 300
                }}
              >
                We envision a world where collective intelligence drives progress.{' '}
                <span 
                  className="font-medium"
                  style={{
                    WebkitTextFillColor: 'transparent',
                    backgroundImage: 'linear-gradient(140.57deg, rgba(118, 194, 252, 1) 17.719%, rgba(57, 146, 251, 1) 68.414%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text'
                  }}
                >
                  Aerium
                </span>
                {' '}is building a space where trust, technology, and human connection create meaningful change.
              </p>
            </div>
          </div>
          
          {/* Right Content - Video Background */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square rounded-2xl overflow-hidden mix-blend-hard-light max-w-md mx-auto lg:max-w-none">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={aeriumVisionConsensus} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection