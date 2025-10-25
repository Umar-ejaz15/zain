"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const footerColumns = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "What I Do",
      links: [
        { label: "SaaS Product Growth", href: "#services" },
        { label: "Service Business Marketing", href: "#services" },
        { label: "Reddit Marketing", href: "#services" },
        { label: "Multi-Channel SEO", href: "#services" },
        { label: "Local Lead Generation", href: "#services" },
      ],
    },
    {
      title: "Free Resources",
      links: [
        { label: "Book Strategy Call", href: "https://calendly.com/zain-ameen", external: true },
        { label: "Read Case Studies", href: "/case-studies" },
        { label: "View Portfolio", href: "#projects" },
        { label: "Free Marketing Audit", href: "#contact" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/zain-ameen/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/zainnameen",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:contact@zainameen.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-t from-[#EDEBE7] to-[#F8F6F4] text-[#3B3A38] border-t border-[#D6D3CE]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10">
        {/* Logo and tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-semibold text-[#1C1C1C] mb-3">
            Zain Ul Abdin
          </h3>
          <p className="text-[#5A5854] max-w-md text-lg">
            Growth Specialist for SaaS & Services. Building organic systems that scale.
          </p>
        </motion.div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {footerColumns.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h4 className="font-semibold text-[#1C1C1C] text-lg mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#5A5854] hover:text-[#C4A47C] transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[#5A5854] hover:text-[#C4A47C] transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-[#1C1C1C] text-lg mb-4">
              Connect
            </h4>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full bg-[#EAE8E2] hover:bg-[#C4A47C] flex items-center justify-center text-[#3B3A38] hover:text-white transition-all duration-300 hover:scale-105"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="mt-6">
              <a
                href="https://calendly.com/zain-ameen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#2C2C2E] text-white px-6 py-3 rounded-full font-medium text-sm transition-all duration-300"
              >
                Book a Call
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-[#D6D3CE] my-8"></div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#77736C]"
        >
          <p className="text-center md:text-left">
            © 2025 Zain Ul Abdin | Growth Specialist for SaaS & Services | All Rights Reserved
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#C4A47C] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#C4A47C] transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
