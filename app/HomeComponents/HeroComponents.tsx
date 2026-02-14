import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto rounded-3xl w-full flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24" style={{ background: "linear-gradient(to bottom, #F8F6F4, #ECEBE4)" }}>
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-14 lg:gap-24">
        
        {/* Left Section */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* Intro Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#E0DED8] rounded-full shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C4A47C]" />
            <span className="text-sm font-medium text-[#3B3A38]">Hey, I'm Zain Ameen</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1C1C1C] leading-tight tracking-tight">
            Building Scalable <br className="hidden sm:block" />
            <span className="text-[#C4A47C]">Digital Products</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg text-[#55524D] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I'm a developer and data-driven strategist who helps startups and brands
            design, build, and grow their web experiences with precision and intent.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <Link
              href="/case-studies"
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
          <div className="relative w-72 sm:w-80 md:w-[24rem] lg:w-[28rem] aspect-square rounded-[32px] overflow-hidden shadow-xl bg-[#E6B17E]">
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
