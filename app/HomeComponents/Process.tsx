"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Phase {
  number: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

export default function Process() {
  const [activePhase, setActivePhase] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  const phases: Phase[] = [
    {
      number: "01",
      title: "Discover",
      description:
        "Deep dive into your business. Competitor analysis. Audience research. Opportunity mapping. Find what competitors miss.",
      image: "/1.avif",
      color: "#F4F2EF",
    },
    {
      number: "02",
      title: "Define",
      description:
        "Build your growth roadmap. GTM strategy. Messaging framework. Channel selection. 90-day action plan.",
      image: "/2.avif",
      color: "#F9F7F4",
    },
    {
      number: "03",
      title: "Develop",
      description:
        "Execute the plan. Content creation. SEO optimization. Community building. Campaign launches. Weekly optimization.",
      image: "/3.avif",
      color: "#F7F5F3",
    },
    {
      number: "04",
      title: "Deliver",
      description:
        "Track everything. Analyze data. Optimize what works. Scale winning channels. Report results monthly.",
      image: "/4.avif",
      color: "#FFF8F2",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      phaseRefs.current.forEach((ref, index) => {
        if (ref) {
          const elementTop = ref.offsetTop;
          const elementBottom = elementTop + ref.offsetHeight;
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActivePhase(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F8F7F5] max-w-7xl rounded-3xl mx-auto py-24 px-5">
      <div className="">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1C1C1E] leading-tight">
            My 4-Phase System for
            <br />
            <span className="text-[#E6B17E]">Predictable Growth</span>
          </h2>
        </motion.div>

        {/* Process Container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left - Phases */}
          <div className="lg:w-1/2 space-y-32">
            {phases.map((phase, index) => (
              <div
                key={index}
                ref={(el) => {
                  phaseRefs.current[index] = el;
                }}
                className="min-h-[60vh] flex items-center"
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full"
                >
                  <div
                    className="rounded-3xl p-10  transition-all duration-500"
                    style={{
                      transform:
                        activePhase === index ? "scale(1.02)" : "scale(1)",
                      opacity: activePhase === index ? 1 : 0.6,
                    }}
                  >
                    {/* Phase Number Line */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-6xl font-bold text-[#1C1C1E]/20">
                        {phase.number}
                      </span>
                      <div className="h-1 flex-1 rounded-full">
                        <div
                          className="h-full bg-[#E6B17E] rounded-full transition-all duration-500"
                          style={{
                            width: activePhase === index ? "100%" : "0%",
                          }}
                        ></div>
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-semibold text-[#1C1C1E] mb-4">
                      Phase {index + 1}: {phase.title}
                    </h3>
                    <p className="text-lg text-[#4A4A4A] leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Right - Sticky Images */}
          <div className="lg:w-2/4 relative">
            <div className="sticky top-24  aspect-square hidden lg:block">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700"
                  style={{
                    opacity: activePhase === index ? 1 : 0,
                    transform:
                      activePhase === index ? "scale(1)" : "scale(0.95)",
                    zIndex: activePhase === index ? 10 : 0,
                  }}
                >
                  <img
                    src={phase.image}
                    alt={phase.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                    <div className="text-white">
                      <span className="text-7xl font-bold opacity-80">
                        {phase.number}
                      </span>
                      <p className="text-2xl font-bold mt-2">{phase.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24"
        >
          <p className="text-2xl md:text-3xl font-semibold text-[#1C1C1E]">
            No guesswork.{" "}
            <span className="text-[#E6B17E]">Just systems that scale.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
