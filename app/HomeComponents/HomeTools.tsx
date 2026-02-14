"use client";
import React from "react";

export default function HomeTools() {
  const logos = [
    { name: "Amoxt Solutions", img: "/companies/amoxt_cover.jpg" },
    { name: "Blainy", img: "/companies/blainy-logo-full-3xl.png" },
    { name: "Hify", img: "/companies/hify.webp" },
    { name: "Everdry Waterproofing", img: "/companies/images.jpg" },
    { name: "Infinix Solutions", img: "/companies/images_3.png" },
    { name: "Blainy Logo", img: "/companies/blainy_logo.jpg" },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="bg-[#ECEBE4] py-16 md:py-20 px-4 flex flex-col items-center text-center overflow-hidden">
      {/* Headline */}
      <h2 className="text-2xl md:text-4xl font-semibold text-[#1C1C1E] mb-10 px-4">
        Companies I Work With
      </h2>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden mb-5">
        {/* Marquee Track */}
        <div className="flex animate-marquee">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-10 flex items-center justify-center"
            >
              <img
                src={logo.img}
                alt={logo.name}
                className="w-40 h-20 object-contain object-center opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <p className="text-[#55524D] text-lg mt-4 max-w-2xl px-4">
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
