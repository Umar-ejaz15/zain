"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type CaseStudy = {
  id: string;
  title: string;
  image: string;
  description?: string;
  numbers?: string[];
  challenge?: string;
  strategy?: string;
  result?: string;
  cta: string;
  bgColor: string;
};

interface ProjectCaseStudyProps {
  caseData: CaseStudy[];
}

export default function ProjectCaseStudy({ caseData }: ProjectCaseStudyProps) {
  return (
    <section
      id="cards"
      className="relative flex flex-col items-center max-w-7xl mx-auto rounded-3xl gap-2 py-20 px-6 sm:px-8 bg-gradient-to-br from-[#F8F6F4] to-[#ECEBE4]"
    >
      {caseData.map((item, index) => (
        <motion.div
          key={item.id || index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`w-full flex card card-content flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 rounded-3xl p-8 sm:p-10 lg:p-14 shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-all duration-300`}
          style={{
            background: `linear-gradient(135deg, ${item.bgColor}, ${item.bgColor}dd)`,
          }}
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug">
              {item.title}
            </h2>

            {item.description && (
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {item.description}
              </p>
            )}

            {/* Numbers Section */}
            {item.numbers && item.numbers.length > 0 && (
              <ul className="flex flex-col sm:flex-col gap-3 sm:gap-2 pt-2">
                {item.numbers.map((num, idx) => (
                  <li
                    key={idx}
                    className="text-lg font-semibold text-gray-900 bg-white/70 backdrop-blur-sm rounded-xl px-4 py-2 shadow-sm"
                  >
                    {num}
                  </li>
                ))}
              </ul>
            )}

            <Link
              href={`/projects/${item.id}`}
              className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3.5 rounded-full font-medium transition-transform duration-300 hover:scale-[1.04] active:scale-95 shadow-md"
            >
              {item.cta}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white/60 backdrop-blur-sm">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 sm:h-80 lg:h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
