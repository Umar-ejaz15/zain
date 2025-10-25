import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-tl from-[#EDEBE7] to-[#F8F6F4] max-w-7xl mx-auto rounded-3xl w-full flex items-center justify-center px-6 sm:px-10 py-16 sm:py-24">
      <div className=" mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Section */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* Intro Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 border border-[#E0DED8] rounded-full shadow-sm backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C4A47C]" />
            <span className="text-sm font-medium text-[#3B3A38]">Hey, I’m Zain Ameen</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1C1C1C] leading-tight tracking-tight">
            Building Scalable <br className="hidden sm:block" />
            <span className="text-[#C4A47C]">Digital Products</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-[#55524D] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I’m a developer and data-driven strategist who helps startups and brands 
            design, build, and grow their web experiences with precision and intent.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <Link
              href="/projects"
              className="bg-[#1C1C1C] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#2C2C2E] transition-all duration-300 shadow-md"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="border border-[#1C1C1C] text-[#1C1C1C] px-8 py-3.5 rounded-full font-medium hover:bg-[#1C1C1C] hover:text-white transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-64 sm:w-80 md:w-[22rem] lg:w-[26rem] aspect-square rounded-[32px] overflow-hidden shadow-xl bg-[#E6B17E]/10">
            <img
              src="/zain.jpg"
              alt="Zain Ameen portrait"
              className="w-full h-full object-cover rounded-[32px] hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
