import React from 'react'

// Icon Components matching Figma
function SparkleIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z" fill="currentColor" />
      </svg>
    </div>
  )
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    </div>
  )
}

function PresentationIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M3 3h18v12H3V3z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M8 21l4-4 4 4" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M12 17v4" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M8 9l3 3-3 3" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    </div>
  )
}

function PuzzleIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h6v6H4V4z" fill="currentColor" />
        <path d="M14 4h6v6h-6V4z" fill="currentColor" />
        <path d="M4 14h6v6H4v-6z" fill="currentColor" />
        <path d="M14 14h6v6h-6v-6z" fill="currentColor" />
      </svg>
    </div>
  )
}

const FeaturesSection = () => {
  const features = [
    {
      title: "Imagine",
      description: "Spark your vision and share the idea",
      icon: <SparkleIcon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-[#3992fb] flex items-center justify-center" />
    },
    {
      title: "Propose", 
      description: "Frame your idea with clarity and purpose",
      icon: <TargetIcon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-[#3992fb] flex items-center justify-center" />
    },
    {
      title: "Discuss",
      description: "Collaborate openly with your community", 
      icon: <PresentationIcon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-[#3992fb] flex items-center justify-center" />
    },
    {
      title: "Decide",
      description: "Reach fair and trusted consensus together",
      icon: <PuzzleIcon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-[#3992fb] flex items-center justify-center" />
    }
  ]

  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-[#383838] text-center mb-12 sm:mb-16"
          style={{
            fontSize: 'clamp(1.25rem, 4vw, 2.1875rem)',
            lineHeight: 'clamp(1.75rem, 5vw, 3.875rem)',
            fontFamily: 'var(--font-rubik)',
            fontWeight: 600
          }}
        >
          Simple, Transparent, Empowering
        </h2>
        
        {/* Features Grid - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center h-auto min-h-[280px] flex flex-col justify-center">
              {feature.icon}
              <h3 
                className="text-black mb-3 sm:mb-4 text-center"
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5625rem)',
                  lineHeight: 'clamp(1.5rem, 4vw, 3.875rem)',
                  fontFamily: 'var(--font-rubik)',
                  fontWeight: 600
                }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-[#383838] text-center flex-1 flex items-center justify-center"
                style={{
                  fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
                  lineHeight: 'clamp(1.25rem, 2.5vw, 1.9375rem)',
                  fontFamily: 'var(--font-rubik)',
                  fontWeight: 300
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection