"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you work with SaaS or service businesses?",
      answer:
        "Both. I specialize in SaaS products (like Blainy - ~85K users) and service businesses (like Everdry Waterproofing). Same growth principles. Different execution.",
    },
    {
      question: "How fast can I see results?",
      answer:
        "Reddit and social can generate leads in 30 days. SEO takes 60-90 days for momentum. I focus on sustainable growth, not quick hacks that die.",
    },
    {
      question: "Can you replicate the ~85K users result?",
      answer:
        "Every business is different. But I use the same systems: multi-channel SEO, Reddit marketing, social media, email campaigns. The framework scales.",
    },
    {
      question: "What makes Reddit marketing work?",
      answer:
        "Authenticity. I don't spam. I build community trust. Value-first content. Non-promotional engagement. That's why I've generated thousands of users with $0 ad spend.",
    },
    {
      question: "Do you handle paid ads too?",
      answer:
        "Yes. Meta Ads, Google Ads, retargeting. But my strength is organic growth. Lower CAC. Better retention. Sustainable over time.",
    },
    {
      question: "What's your pricing?",
      answer:
        "Depends on scope. SaaS projects differ from service businesses. Book a free call and I'll create a custom proposal.",
    },
    {
      question: "Can you work remotely?",
      answer:
        "Absolutely. I've worked with clients across US, Europe, Asia. Remote is my default.",
    },
    {
      question: "What if I need just SEO or just Reddit?",
      answer:
        "No problem. I offer individual services or full-stack growth. We'll figure out what you need.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F9F7F4] max-w-7xl mt-5 rounded-3xl mx-auto py-20 px-4">
      <div className="">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1C1C1E] leading-tight">
            Questions?{" "}
            <span className="text-[#E6B17E]">Here Are Quick Answers.</span>
          </h2>
          <p className="mt-4 text-sm text-[#A6A6A6]">
            Short, direct answers — if you want more detail we can jump on a quick call.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: index * 0.04 }}
              className="bg-white border border-[#F0EDE9] rounded-2xl shadow-sm hover:shadow-md transition-all duration-250"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-5 flex items-center justify-between text-left group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-start gap-4 flex-1">
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold`}
                    style={{
                      background: openIndex === index ? "#E6B17E" : "#F4F2EF",
                      color: openIndex === index ? "#1C1C1E" : "#1C1C1E",
                      border: openIndex === index ? "none" : "1px solid #EFECE8",
                    }}
                  >
                    Q{index + 1}
                  </span>

                  <h3
                    className="text-base md:text-lg font-medium text-[#1C1C1E] transition-colors"
                    style={{ marginTop: 2 }}
                  >
                    {faq.question}
                  </h3>
                </div>

                <svg
                  className={`w-6 h-6 text-[#A6A6A6] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#E6B17E]" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 pl-20 bg-[#F9F7F4]">
                      <p className="text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center mt-12"
        >
          <p className="text-[#4A4A4A] mb-5">
            Still have a question? I offer a free 20-minute discovery call.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#E6B17E] hover:bg-[#D4A866] text-[#1C1C1E] px-6 py-3 rounded-full font-semibold text-lg transition-all duration-200 shadow-md"
            aria-label="Book a free call"
          >
            Book a Free Call
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
