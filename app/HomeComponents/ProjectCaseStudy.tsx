"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type CaseStudy = {
  id: string; // Add id field
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
    <section id="cards" className="relative flex flex-col items-center gap-0 py-10 px-4">
      {caseData.map((item, index) => (
        <div
          key={index}
          className="w-full card card__content max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 rounded-3xl px-6 sm:px-10 lg:px-16 py-12 lg:py-16 shadow-sm hover:shadow-md transition-shadow duration-300"
          style={{ backgroundColor: item.bgColor }}
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {item.title}
            </h2>

            {item.description && (
              <p className="text-lg text-gray-700 leading-relaxed">
                {item.description}
              </p>
            )}

            {item.numbers && (
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  The Numbers
                </h3>
                <ul className="space-y-2.5 text-gray-800">
                  {item.numbers.map((num, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold mt-1">✓</span>
                      <span className="text-base">{num}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.challenge && (
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  The Challenge
                </h3>
                <p className="text-base text-gray-800 leading-relaxed">
                  {item.challenge}
                </p>
              </div>
            )}

            {item.strategy && (
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  My Strategy
                </h3>
                <p className="text-base text-gray-800 leading-relaxed">
                  {item.strategy}
                </p>
              </div>
            )}

            {item.result && (
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  The Result
                </h3>
                <p className="text-base text-gray-800 leading-relaxed">
                  {item.result}
                </p>
              </div>
            )}

            <Link
              href={`/projects/${item.id}`}
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg mt-4"
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="w-full max-w-xl rounded-2xl overflow-hidden shadow-xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}