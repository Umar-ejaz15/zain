"use client";
import React from "react";
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
      className="relative flex flex-col items-center max-w-7xl mx-auto rounded-3xl gap-6 py-24 px-6 sm:px-8 bg-[#F8F6F4]"
    >
      {caseData.map((item, index) => (
        <div
          key={item.id || index}
          className="w-full flex card card-content flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16 rounded-3xl p-8 sm:p-12 lg:p-16 bg-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug">
              {item.title}
            </h2>

            {item.description && (
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {item.description}
              </p>
            )}

            {/* Numbers Section with Web-themed SVG Icons */}
            {item.numbers && item.numbers.length > 0 && (
              <ul className="flex flex-col gap-4 pt-2">
                {item.numbers.map((num, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-base font-medium text-gray-800"
                  >
                    <svg
                      className="w-6 h-6 flex-shrink-0 mt-0.5 text-[#E6B27E]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{num}</span>
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
          </div>

          {/* Right Images */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/* Top Full Image */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Bottom Half Image */}
            <div className="relative w-full h-32 sm:h-40 lg:h-48 rounded-2xl overflow-hidden shadow-md"
              style={{ backgroundColor: item.bgColor }}
            >
              <img
                src={item.image}
                alt={`${item.title} detail`}
                className="w-full h-full object-cover opacity-40 transition-all duration-500 hover:opacity-60"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
