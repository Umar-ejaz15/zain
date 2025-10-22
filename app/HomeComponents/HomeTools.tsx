"use client"
import React from "react";

export default function HomeTools() {
  const logos = [
    { name: "Amoxt Solutions", img: "/logos/amoxt.png" },
    { name: "Everdry Waterproofing", img: "/logos/everdry.png" },
    { name: "Hify", img: "/logos/hify.png" },
    { name: "Infinix Solutions", img: "/logos/infinix.png" },
    { name: "HubSpot Certified", img: "/logos/hubspot.png" },
    { name: "SEMrush Certified", img: "/logos/semrush.png" },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="bg-[#F8F6F4] w-full py-20 mt-5 rounded-[32px] flex flex-col items-center text-center overflow-hidden">
      {/* Headline */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10 px-4">
        Trusted By SaaS & Service Companies
      </h2>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden mb-10">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F8F6F4] to-transparent z-10 pointer-events-none"></div>
        
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F8F6F4] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="flex animate-marquee hover:pause">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 bg-white rounded-2xl shadow-sm p-6 flex items-center justify-center min-w-[140px] h-[100px]"
            >
              <img
                src={logo.img}
                alt={logo.name}
                className="w-20 h-20 object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <p className="text-gray-700 text-lg mt-4 max-w-2xl px-4">
        Helping tech startups and service businesses scale from traction to
        momentum.
      </p>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
          display: flex;
          width: max-content;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}