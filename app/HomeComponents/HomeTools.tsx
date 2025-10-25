"use client";
import React from "react";

export default function HomeTools() {
  const logos = [
    { name: "Amoxt Solutions", img: "/amox.jpg" },
    { name: "Everdry Waterproofing", img: "/everdry.gif" },
    { name: "Hify", img: "/HIGHFY.avif" },
    { name: "Infinix Solutions", img: "/infinix.png" },
    { name: "HubSpot Certified", img: "/hubspot.svg" },
    { name: "SEMrush Certified", img: "/semrush.jpg" },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="max-w-7xl mx-auto py-10 mt-5 rounded-[32px] flex flex-col items-center text-center overflow-hidden ">
      {/* Headline */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10 px-4">
        Trusted By SaaS & Service Companies
      </h2>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden mb-5">
        {/* Left Fade */}
       

        {/* Marquee Track */}
        <div className="flex animate-marquee">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-center min-w-[160px] h-[100px]"
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
