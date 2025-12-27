import React from 'react'
import Image from 'next/image'
import { typography } from '@/assets'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex items-center">
              <Image 
                src={typography} 
                alt="Aerium Network Logo" 
                width={120} 
                height={48} 
                className="w-auto h-8 sm:h-10 md:h-12"
              />
            </div>
            <div className="w-px h-[28px] sm:h-[32px] md:h-[35.5px] bg-gray-300 ml-4 sm:ml-6 md:ml-8" />
            
            {/* Navigation Links - Hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 ml-4 lg:ml-8">
              <a href="#" className="font-medium text-[14px] lg:text-[18px] text-[#00234a] hover:text-[#3992fb] transition-colors">
                Solutions
              </a>
              <div className="w-[7px] lg:w-[9px] h-[4px] lg:h-[5px] opacity-50">
                <div className="w-full h-full bg-gradient-to-r from-[#76c2fc] to-[#3992fb] rounded-full" />
              </div>
              <a href="#" className="font-medium text-[14px] lg:text-[18px] text-[#00234a] hover:text-[#3992fb] transition-colors">
                Company
              </a>
            </nav>
          </div>
          
          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Language Switch - Hidden on small mobile */}
            {/* <div className="hidden sm:flex items-center space-x-2">
              <svg className="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path d="M12 3c2.5 4.5 2.5 10.5 0 18" stroke="currentColor" strokeWidth="2" />
                <path d="M12 3c-2.5 4.5-2.5 10.5 0 18" stroke="currentColor" strokeWidth="2" />
                <path d="M3 12h18" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="font-medium text-[14px] lg:text-[18px] text-black">Eng</span>
            </div>
             */}
            {/* Start Button */}
            <button className="px-[20px] sm:px-[25px] lg:px-[30px] py-[12px] sm:py-[13px] lg:py-[15px] rounded-[12px] lg:rounded-[16px] font-bold text-[10px] sm:text-[11px] lg:text-[12px] text-white hover:scale-105 transition-transform" style={{ backgroundImage: "linear-gradient(146.81deg, rgba(118, 194, 252, 1) 17.719%, rgba(57, 146, 251, 1) 68.414%)" }}>
              Start now
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header