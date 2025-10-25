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
    <section
      id="cards"
      className="relative flex flex-col items-center max-w-7xl mx-auto  rounded-3xl gap-10 py-16 px-4 sm:px-6 bg-[#F4F2EE]  lg:px-8"
    >
      {caseData.map((item, index) => (
        <div
          key={index}
          className="w-full card card__content max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 rounded-3xl px-6 sm:px-10 lg:px-16 py-12 lg:py-16 shadow-sm hover:shadow-lg transition-all duration-300"
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
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {item.description}
              </p>
            )}

          

            <Link
              href={`/projects/${item.id}`}
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-7 py-3.5 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md mt-4"
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
            <div className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 sm:h-80 lg:h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
