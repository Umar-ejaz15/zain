"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import FooterCTA from "../HomeComponents/FooterCTA";
import { useCaseStudies } from "@/context/CaseStudiesContext";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const { caseStudiesPreview } = useCaseStudies();

  // Map preview data to match your component structure
  const allCaseStudies = caseStudiesPreview.map((study, index) => ({
    id: study.id,
    title: study.title.replace(/^Case Study \d+:\s*/, ""), // Remove "Case Study 1:" prefix
    category: getCategoryFromId(study.id),
    image: study.image,
    excerpt: study.description,
    metrics: study.numbers?.slice(0, 3) || [study.result || "View Results"],
    bgColor: study.bgColor,
  }));

  // Helper function to assign categories
  function getCategoryFromId(id: string): string {
    const categoryMap: Record<string, string> = {
      "blainy-saas": "SaaS",
      "reddit-marketing": "Marketing",
      "everdry-local": "Service Business",
      "multi-channel-social": "Social Media",
    };
    return categoryMap[id] || "Marketing";
  }

  const categories = ["All", "SaaS", "Marketing", "Service Business", "Social Media"];

  const filteredProjects = filter === "All" 
    ? allCaseStudies 
    : allCaseStudies.filter(study => study.category === filter);

  return (
    <div className="min-h-screen bg-[#F8F6F4]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Real growth stories. Real numbers. No fluff.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-gray-900 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/projects/${study.id}`}>
                  <div
                    className="rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                    style={{ backgroundColor: study.bgColor }}
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-900">
                        {study.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-700 mb-4 flex-1">
                        {study.excerpt}
                      </p>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.metrics.map((metric, i) => (
                          <span
                            key={i}
                            className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-gray-800"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FooterCTA/>
    </div>
  );
}