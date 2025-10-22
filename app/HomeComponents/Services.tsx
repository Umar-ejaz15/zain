"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Services() {
  const [activeTab, setActiveTab] = useState("Product Growth");

  const tabs = ["Product Growth", "Service Marketing", "Multi-Channel SEO", "Reddit Marketing"];

  const tabContent = {
    "Product Growth": {
      subtitle: "SaaS & Tech Product Marketing",
      title: "Full-Funnel Growth\nfor Tech Products",
      description: "GTM strategy. User acquisition. Retention. SEO, Reddit, social, email—everything you need to scale.",
      result: "~85K users in 12 months. Organic.",
      buttonText: "Grow Your SaaS Product",
      gradient1: "from-[#C8DCC8] to-[#E4EAE4]",
      gradient2: "from-[#DDE6DD] to-[#C2D3C2]"
    },
    "Service Marketing": {
      subtitle: "Local & Service Business Growth",
      title: "Dominate Your\nLocal Market",
      description: "Local SEO. Lead generation. Reputation management. Google Business optimization. Review campaigns. Ads that convert.",
      result: "More leads. Lower CAC. Predictable pipeline.",
      buttonText: "Scale Your Service Business",
      gradient1: "from-[#DDE7EE] to-[#C8D6E4]",
      gradient2: "from-[#EAF1F5] to-[#D3E0EA]"
    },
    "Multi-Channel SEO": {
      subtitle: "Omnichannel Search Dominance",
      title: "Rank Everywhere\nThat Matters",
      description: "Google, Bing, Reddit, YouTube ranking. Content that compounds monthly. Backlinks. Authority. Page 1 positions.",
      result: "~30M impressions. Thousands of leads.",
      buttonText: "Start SEO Strategy",
      gradient1: "from-[#E3E8DC] to-[#D4DECC]",
      gradient2: "from-[#E8EFE1] to-[#DCE7D6]"
    },
    "Reddit Marketing": {
      subtitle: "Authentic Community Growth",
      title: "Convert Without\nSpending on Ads",
      description: "Non-promotional community strategies. Thousands of users without ads. Authentic engagement that converts.",
      result: "831 conversions in 30 days. $0 spent.",
      buttonText: "Master Reddit Marketing",
      gradient1: "from-[#E9E4DA] to-[#E2DDD1]",
      gradient2: "from-[#F0ECE3] to-[#E6E1D7]"
    }
  };

  return (
    <section className="bg-[#F8F6F4] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8"
            >
              Growth Systems That Work{" "}
              <span className="bg-gradient-to-r from-[#4A6670] to-[#6A857D] bg-clip-text text-transparent">
                for SaaS & Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-700 mb-8 leading-relaxed"
            >
              Full-funnel marketing strategies that drive real results. From user acquisition to retention, local SEO to Reddit growth—everything you need to scale.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-[#4A6670] to-[#6A857D] hover:from-[#3E5A64] hover:to-[#5B766F] text-white px-8 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Let's Build Your Growth System
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            >
              {[
                { label: "Years experience", value: "14" },
                { label: "Projects completed", value: "91" },
                { label: "Startup funding", value: "$100m" },
                { label: "Industries served", value: "10" }
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
                  <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Tabs and Preview */}
          <div>
            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex gap-6 mb-8 overflow-x-auto pb-2"
            >
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap pb-2 font-medium transition-colors relative ${
                    activeTab === tab
                      ? "text-gray-900"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4A6670]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </motion.div>

            {/* Preview Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#E4E2DA] rounded-[3rem] p-8 shadow-xl"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                {/* Mockup Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#4A6670] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">SL</span>
                    </div>
                  </div>
                  <div className="hidden lg:flex gap-6 text-sm text-gray-500">
                    <span>Case Studies</span>
                    <span>Experience</span>
                    <span>Blog</span>
                    <span>FAQ</span>
                    <span>Get in Touch</span>
                  </div>
                </div>

                {/* Mockup Content */}
                <div className="mb-8">
                  <p className="text-xs text-gray-500 mb-2">{tabContent[activeTab].subtitle}</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {tabContent[activeTab].title.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i === 0 && <br />}
                      </React.Fragment>
                    ))}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {tabContent[activeTab].description}
                  </p>
                  <button className="bg-[#4A6670] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#3E5A64] transition-all">
                    {tabContent[activeTab].buttonText}
                  </button>
                </div>

                {/* Mockup Images */}
                <div className="flex gap-4">
                  <div
                    className={`flex-1 bg-gradient-to-br ${tabContent[activeTab].gradient1} rounded-2xl h-32`}
                  ></div>
                  <div
                    className={`w-32 bg-gradient-to-br ${tabContent[activeTab].gradient2} rounded-2xl overflow-hidden`}
                  >
                    <div className="h-24 bg-gray-200 rounded-t-2xl"></div>
                    <div className="h-8 bg-white flex items-center justify-center">
                      <span className="text-xs text-green-700 font-medium">
                        ● Accepting new clients
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Neutral Accent Shapes */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-[#CBD5D1] rounded-3xl h-32"></div>
                <div className="bg-[#AFC2BB] rounded-3xl h-32"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
