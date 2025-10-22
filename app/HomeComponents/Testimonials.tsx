"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Zain took our SaaS from zero to ~85,000 users in a year. All organic. His Reddit strategy alone brought thousands of qualified users without spending a dollar. He's a growth architect, not just a marketer.",
      author: "Founder",
      company: "Amoxt Solutions (Blainy)",
      rating: 5,
    },
    {
      id: 2,
      text: "We needed B2B leads fast. Zain delivered 7,331 users and 831 Reddit conversions in weeks. His systems work. Period.",
      author: "Marketing Lead",
      company: "Hify",
      rating: 5,
    },
    {
      id: 3,
      text: "As a service business, we needed local leads. Zain built our Google presence, optimized our SEO, and generated consistent qualified leads. Best ROI we've seen.",
      author: "Owner",
      company: "Everdry Waterproofing",
      rating: 5,
    },
    {
      id: 4,
      text: "His multi-channel approach brought visibility we couldn't achieve alone. LinkedIn, Reddit, TikTok—he knows how each platform works and delivers results.",
      author: "CEO",
      company: "Tech Startup",
      rating: 5,
    },
    {
      id: 5,
      text: "Zain built email campaigns that actually converted. Above-industry open rates, better CTRs, and real user activation. He knows retention inside out.",
      author: "Product Manager",
      company: "SaaS Company",
      rating: 5,
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const StarRating = () => (
    <div className="flex gap-1 mb-4 mt-5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-[#E6B17E] fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="bg-[#F9F7F4] py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1C1C1E] leading-tight mb-6">
            What Clients Say About
            <br />
            <span className="text-[#E6B17E]">Working With Me</span>
          </h2>

          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm">
            <svg
              className="w-5 h-5 text-[#A6A6A6]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Most projects are under NDA — here are testimonials I can share.
            </span>
          </div>
        </motion.div>

        {/* Marquee */}
        <div className="relative">
          <div className="flex animate-marquee-slow hover:pause gap-6 py-8">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[420px] bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#F0EDE9]"
              >
                <StarRating />

                <p className="text-[#1C1C1E] leading-relaxed mb-6 text-base">
                  “{testimonial.text}”
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-[#E6B17E]/30 flex items-center justify-center text-[#1C1C1E] font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C1C1E]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-slow {
          animation: marquee-slow 45s linear infinite;
          display: flex;
          width: max-content;
        }

        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
