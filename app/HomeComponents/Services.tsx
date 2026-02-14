"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  "Product Growth",
  "Service Marketing",
  "Multi-Channel SEO",
  "Reddit Marketing",
] as const;
type TabType = (typeof tabs)[number];

interface TabContent {
  subtitle: string;
  title: string;
  description: string;
  result: string;
  buttonText: string;
  gradient1: string;
  gradient2: string;
}

const tabContent: Record<TabType, TabContent> = {
  "Product Growth": {
    subtitle: "SaaS & Tech Product Marketing",
    title: "Full-Funnel Growth\nfor Tech Products",
    description:
      "GTM strategy. User acquisition. Retention. SEO, Reddit, social, email—everything you need to scale.",
    result: "85K users in 12 months. Organic.",
    buttonText: "Grow Your SaaS Product",
    gradient1: "from-[#DEE7E2] to-[#CAD8D1]",
    gradient2: "from-[#E9F1ED] to-[#D3E0DB]",
  },
  "Service Marketing": {
    subtitle: "Local & Service Business Growth",
    title: "Dominate Your\nLocal Market",
    description:
      "Local SEO. Lead generation. Reputation management. Google Business optimization. Review campaigns. Ads that convert.",
    result: "More leads. Lower CAC. Predictable pipeline.",
    buttonText: "Scale Your Service Business",
    gradient1: "from-[#DCE5EB] to-[#C9D6E0]",
    gradient2: "from-[#E7EEF2] to-[#D5E1EA]",
  },
  "Multi-Channel SEO": {
    subtitle: "Omnichannel Search Dominance",
    title: "Rank Everywhere\nThat Matters",
    description:
      "Google, Bing, Reddit, YouTube ranking. Content that compounds monthly. Backlinks. Authority. Page 1 positions.",
    result: "30M impressions. Thousands of leads.",
    buttonText: "Start SEO Strategy",
    gradient1: "from-[#E3E9E0] to-[#D4DED2]",
    gradient2: "from-[#EAF0E6] to-[#DDE7DA]",
  },
  "Reddit Marketing": {
    subtitle: "Authentic Community Growth",
    title: "Convert Without\nSpending on Ads",
    description:
      "Non-promotional community strategies. Thousands of users without ads. Authentic engagement that converts.",
    result: "831 conversions in 30 days. $0 spent.",
    buttonText: "Master Reddit Marketing",
    gradient1: "from-[#EEE8DF] to-[#E3DED5]",
    gradient2: "from-[#F3EFE8] to-[#E9E4DB]",
  },
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<TabType>("Product Growth");

  return (
    <section className="bg-[#F8F6F4] max-w-7xl mx-auto rounded-3xl px-6 md:px-12 lg:px-16 py-24 md:py-28 mt-5">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8"
          >
            Growth Systems That Work{" "}
            <span className="text-[#E6B27E]">
              for SaaS & Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-700 mb-8 leading-relaxed"
          >
            Full-funnel marketing strategies that drive real results. From user
            acquisition to retention, local SEO to Reddit growth—everything you
            need to scale.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-[#E6B27E] to-[#E6B27E] hover:from-[#fab672] hover:to-[#d19860] text-white px-8 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Let's Build Your Growth System
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16"
          >
            {[
              { label: "Years experience", value: "14" },
              { label: "Projects completed", value: "91" },
              { label: "Startup funding", value: "$100m" },
              { label: "Industries served", value: "10" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-gray-600 text-xs md:text-sm mb-1 md:mb-2">{stat.label}</p>
                <p className="text-3xl md:text-4xl font-bold text-gray-900">
                  {stat.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="flex gap-4 md:gap-6 mb-8 pb-2 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap pb-2 px-2 text-sm md:text-base font-medium transition-colors relative flex-shrink-0 ${
                  activeTab === tab
                    ? "text-gray-900"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E6B27E]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#ECEBE6] rounded-[3rem] p-8 shadow-xl"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="mb-8">
                <p className="text-xs text-gray-500 mb-2">
                  {tabContent[activeTab].subtitle}
                </p>
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
                <button className="bg-[#E6B27E] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#d19860] transition-all">
                  {tabContent[activeTab].buttonText}
                </button>
              </div>

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

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-[#D5DDD8] rounded-3xl h-32"></div>
              <div className="bg-[#B8C7C0] rounded-3xl h-32"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
