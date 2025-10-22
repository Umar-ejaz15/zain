"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import FooterCTA from "../HomeComponents/FooterCTA";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const allCaseStudies = [
    {
      id: 1,
      title: "Blainy - SaaS Scaled to ~85K Users",
      category: "SaaS",
      image: "/images/blainy-dashboard.jpg",
      excerpt: "Scaled from zero to 85K organic users in 12 months with $0 ad spend",
      metrics: ["85K Users", "30M Impressions", "831 Reddit Conversions"],
      bgColor: "#E5DBEB",
    },
    {
      id: 2,
      title: "Reddit Marketing - Thousands of Organic Users",
      category: "Marketing",
      image: "/images/reddit-dashboard.jpg",
      excerpt: "Generated 7,331 organic users and 831 conversions in a single month",
      metrics: ["7.3K Users", "$0 Ad Spend", "Higher ROI than Paid"],
      bgColor: "#F4F2EF",
    },
    {
      id: 3,
      title: "Everdry Waterproofing - Local Service Business",
      category: "Service Business",
      image: "/images/local-business.jpg",
      excerpt: "Local SEO domination for a waterproofing service company",
      metrics: ["Top Rankings", "More Leads", "Higher Visibility"],
      bgColor: "#DCE4EA",
    },
    {
      id: 4,
      title: "Multi-Channel Social - Thousands of Conversions",
      category: "Social Media",
      image: "/images/social-dashboard.jpg",
      excerpt: "Managing 6 platforms simultaneously with massive reach",
      metrics: ["80K+ YouTube Views", "3M+ Instagram Reach", "6 Platforms"],
      bgColor: "#F4F2EF",
    },
    {
      id: 5,
      title: "Hify - Video Messaging Platform Growth",
      category: "SaaS",
      image: "/images/hify-growth.jpg",
      excerpt: "Explosive growth through strategic Reddit marketing",
      metrics: ["Rapid User Growth", "Community Building", "Organic Traffic"],
      bgColor: "#E5DBEB",
    },
    {
      id: 6,
      title: "Content Marketing Strategy - Tech Startup",
      category: "Content Marketing",
      image: "/images/content-strategy.jpg",
      excerpt: "Built thought leadership through strategic content",
      metrics: ["50+ Articles", "High Engagement", "Brand Authority"],
      bgColor: "#DCE4EA",
    },
  ];

  const categories = ["All", "SaaS", "Marketing", "Service Business", "Social Media", "Content Marketing"];

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
                <Link href={`/case-studies/${study.id}`}>
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