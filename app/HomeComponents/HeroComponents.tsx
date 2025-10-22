import React from "react";

export default function Hero() {
  return (
    <section className="bg-[#F9F7F4] w-full min-h-screen flex items-center justify-center px-6 py-20 rounded-3xl">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Section */}
        <div className="flex-1 space-y-8">
          {/* Small Intro */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E6B17E]"></span>
            <span className="text-sm font-medium text-gray-700">
              Hey, I'm Zain Ameen
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#1C1C1E] leading-tight">
            Building Scalable <br className="hidden sm:block" />
            <span className="text-[#E6B17E]">Digital Products</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            I’m a developer and data-driven strategist who helps startups and brands 
            design, build, and grow their web experiences with precision and intent.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-[#1C1C1E] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2C2C2E] transition-all duration-300 shadow-md">
              View My Work
            </button>
            <button className="border border-[#1C1C1E] text-[#1C1C1E] px-8 py-4 rounded-full font-medium hover:bg-[#1C1C1E] hover:text-white transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md rounded-[32px] overflow-hidden shadow-xl bg-[#E6B17E]/10">
            <img
              src="/zain.jpg"
              alt="Zain Ameen portrait"
              className="w-full h-full object-cover rounded-[32px]"
            />
            <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-md">
              <span className="text-sm font-medium text-[#1C1C1E]">
                Available for Freelance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
