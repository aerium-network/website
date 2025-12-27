import React from 'react'

const RoadmapSection = () => {
  return (
    <section className="relative py-16 sm:py-20 px-4 bg-gray-50 overflow-hidden">
      {/* Background Hero Section with transformed image */}
      <div className="absolute left-0 top-0 w-full h-[400px] sm:h-[700px] flex items-center justify-center">
        <div className="transform rotate-180 scale-y-[-100%] opacity-[0.23] w-full h-full">
          <div className="w-full h-full bg-gradient-to-b from-blue-100 to-transparent" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 text-left">
          <h2 
            className="font-semibold text-black mb-6 sm:mb-8"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.1875rem)',
              lineHeight: 'clamp(2rem, 5vw, 3.875rem)',
              fontFamily: 'var(--font-rubik)'
            }}
          >
            The Path We Walk Together
          </h2>
          
          <p 
            className="text-black max-w-full"
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.4375rem)',
              lineHeight: 'clamp(1.5rem, 3vw, 3rem)',
              fontFamily: 'var(--font-rubik)',
              fontWeight: 300
            }}
          >
            <span>From launch to global adoption, </span>
            <span 
              className="font-semibold"
              style={{
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(169.59deg, rgba(118, 194, 252, 1) 17.719%, rgba(57, 146, 251, 1) 68.414%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}
            >
              Aerium
            </span>
            <span> is guided by milestones that reflect our mission: clarity, participation, and empowerment. Together, we build step by step toward a brighter tomorrow.</span>
          </p>
        </div>
        
        {/* Roadmap Infographic - Responsive layout */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 rounded-xl p-6 sm:p-8 opacity-80">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-8">
              {/* Milestone 1 */}
              <div className="text-center flex-1 min-w-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center" style={{ backgroundImage: 'linear-gradient(146.81deg, rgba(118, 194, 252, 1) 17.719%, rgba(57, 146, 251, 1) 68.414%)' }}>
                  <span className="text-white font-bold text-xl sm:text-2xl">1</span>
                </div>
                <h3 className="font-semibold text-base sm:text-lg text-black mb-2">Launch</h3>
                <p className="text-gray-600 text-xs sm:text-sm max-w-32 mx-auto">
                  Platform foundation and initial release
                </p>
              </div>
              
              {/* Connecting Line - Hidden on mobile */}
              <div className="hidden sm:block flex-1 h-0.5 max-w-20" style={{ backgroundImage: 'linear-gradient(90deg, rgba(118, 194, 252, 1) 0%, rgba(57, 146, 251, 1) 100%)' }} />
              
              {/* Milestone 2 */}
              <div className="text-center flex-1 min-w-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center" style={{ backgroundImage: 'linear-gradient(146.81deg, rgba(118, 194, 252, 1) 17.719%, rgba(57, 146, 251, 1) 68.414%)' }}>
                  <span className="text-white font-bold text-xl sm:text-2xl">2</span>
                </div>
                <h3 className="font-semibold text-base sm:text-lg text-black mb-2">Growth</h3>
                <p className="text-gray-600 text-xs sm:text-sm max-w-32 mx-auto">
                  Community expansion and feature enhancement
                </p>
              </div>
              
              {/* Connecting Line - Hidden on mobile */}
              <div className="hidden sm:block flex-1 h-0.5 max-w-20" style={{ backgroundImage: 'linear-gradient(90deg, rgba(118, 194, 252, 1) 0%, rgba(57, 146, 251, 1) 100%)' }} />
              
              {/* Milestone 3 */}
              <div className="text-center flex-1 min-w-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center" style={{ backgroundImage: 'linear-gradient(146.81deg, rgba(118, 194, 252, 1) 17.719%, rgba(57, 146, 251, 1) 68.414%)' }}>
                  <span className="text-white font-bold text-xl sm:text-2xl">3</span>
                </div>
                <h3 className="font-semibold text-base sm:text-lg text-black mb-2">Global</h3>
                <p className="text-gray-600 text-xs sm:text-sm max-w-32 mx-auto">
                  Worldwide adoption and ecosystem maturity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadmapSection