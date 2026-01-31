// ============================================
// CONTEXT SETUP (FIXED FOR TSX)
// ============================================
"use client";

import React, { createContext, useContext, ReactNode } from "react";

// Define types for your data
interface CaseStudyPreview {
  id: string;
  title: string;
  image: string;
  description: string;
  cta: string;
  bgColor: string;
  link: string;
  numbers?: string[];
  result?: string;
}

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyDetailed {
  title: string;
  subtitle: string;
  image: string;
  challenge: string;
  results: string;
  metrics: Metric[];
  resultImages: string[];
}

interface CaseStudiesDetailed {
  [key: string]: CaseStudyDetailed;
}

interface CaseStudiesContextType {
  caseStudiesPreview: CaseStudyPreview[];
  caseStudiesDetailed: CaseStudiesDetailed;
}

// Create the context with a proper type
const CaseStudiesContext = createContext<CaseStudiesContextType | undefined>(
  undefined
);

interface CaseStudiesProviderProps {
  children: ReactNode;
}

const caseStudiesPreview = [
  {
    id: "blainy-saas",
    title: "Case Study 1: Blainy - SaaS Scaled to ~85K Users",
    image: "/images/blainy-dashboard.jpg",
    description: "Scaled from zero to 85K organic users in 12 months with pure strategy and no ad spend.",
    numbers: [
      "85,000+ organic users in 12 months",
      "30M+ search impressions across platforms",
      "Zero ad spend, 100% organic growth",
    ],
    cta: "Want ~85K Users? Read the Full Story →",
    bgColor: "#F4F2EF",
    link: "/case-studies/blainy-saas"
  },
  {
    id: "reddit-marketing",
    title: "Case Study 2: Reddit Marketing - Thousands of Organic Users",
    image: "/images/reddit-dashboard.jpg",
    description: "Generated 7,331 users for Hify and thousands more for Blainy through authentic Reddit engagement.",
    numbers: [
      "7,331 organic users generated for Hify",
      "831 conversions in single 30-day period",
      "Higher conversion rate than paid channels",
    ],
    cta: "See How I Did It →",
    bgColor: "#E5DBEB",
    link: "/case-studies/reddit-marketing"
  },
  {
    id: "everdry-local",
    title: "Case Study 3: Service Business - Everdry Waterproofing",
    image: "/images/local-business.jpg",
    description:
      "Helped local waterproofing business dominate their market through strategic local SEO and review campaigns.",
    numbers: [
      "220% increase in organic traffic",
      "3x more qualified local leads",
      "100+ new 5-star Google reviews"
    ],
    result:
      "Increased local visibility. More qualified leads. Stronger online presence.",
    cta: "Need Local Marketing? Let's Talk →",
    bgColor: "#D2E8C8",
    link: "/case-studies/everdry-local",
  },
  {
    id: "multi-channel-social",
    title: "Case Study 4: Multi-Channel Social - Thousands of Conversions",
    image: "/images/social-dashboard.jpg",
    description: "Orchestrated 6-platform social media strategy delivering massive reach and thousands of conversions.",
    numbers: [
      "3M+ Instagram reach achieved",
      "225K+ Threads impressions generated",
      "80K+ YouTube views in 30 days",
    ],
    cta: "Scale Your Social Presence →",
    bgColor: "#DCE4EA",
    link: "/case-studies/multi-channel-social"
  },
];

const caseStudiesDetailed: CaseStudiesDetailed = {
  "reddit-marketing": {
    title: "Reddit Marketing – Thousands of Organic Users",
    subtitle: "Generated 7,331 users for Hify and thousands more for Blainy through authentic Reddit engagement.",
    image: "/images/reddit-dashboard.jpg",
    challenge:
      "Most companies treat Reddit like a billboard. They spam links and get banned. Traditional ads were expensive and not converting for B2B SaaS. Needed high-intent users without massive ad budgets. Had to crack Reddit without looking promotional.",
    results:
      "Generated 7,331 organic users for Hify and thousands more for Blainy through value-first content and authentic community engagement. 831 conversions in single month with $0 ad spend and higher conversion rate than paid channels.",
    metrics: [
      { value: "7,331", label: "Organic Users (Hify)" },
      { value: "831", label: "Conversions (30 Days)" },
      { value: "$0", label: "Ad Spend" },
    ],
    resultImages: [
      "/blainy/1.jfif",
      "/blainy/2.jfif",
    ],
  },
  "everdry-local": {
    title: "Everdry Waterproofing – Local Market Domination",
    subtitle: "Helping a local waterproofing business dominate search results and generate consistent leads.",
    image: "/images/local-business.jpg",
    challenge:
      "Local service business in a competitive market needed steady lead flow and stronger Google visibility.",
    results:
      "Achieved higher rankings in Google local pack, increased calls and inquiries, and boosted 5-star reviews.",
    metrics: [
      { value: "180%", label: "Increase in Local Visibility" },
      { value: "3×", label: "More Qualified Leads" },
      { value: "95+", label: "New 5-Star Reviews" },
    ],
    resultImages: [
      "/images/results/local-map-ranking.jpg",
      "/images/results/reviews-growth.jpg",
      "/images/results/lead-graph.jpg",
    ],
  },
  "blainy-saas": {
    title: "Blainy SaaS – 85K Users Through Organic Growth",
    subtitle: "Scaled an AI writing tool to 85,000 users organically in 12 months.",
    image: "/images/saas-growth.jpg",
    challenge:
      "Launching a new AI SaaS against competitors like Jasper and Grammarly with $0 ad budget.",
    results:
      "Built organic traffic engine through SEO, Reddit, and social media — achieving 85,000+ users in a year.",
    metrics: [
      { value: "~85K", label: "Users in 12 Months" },
      { value: "~30M", label: "Search Impressions" },
      { value: "$0", label: "Ad Spend" },
    ],
    resultImages: [
      "/blainy/1.jfif",
      "/blainy/2.jfif",
    ],
  },
  "multi-channel-social": {
    title: "Multi-Channel Social Campaigns – 6 Platforms, 3M+ Reach",
    subtitle: "Created a unified social strategy driving conversions across 6 major platforms.",
    image: "/images/social-marketing.jpg",
    challenge:
      "SaaS clients were missing audiences by focusing on one or two platforms. Needed cross-platform growth.",
    results:
      "Repurposed content strategy that drove millions of impressions and thousands of conversions.",
    metrics: [
      { value: "3M+", label: "Instagram Reach" },
      { value: "225K+", label: "Threads Impressions" },
      { value: "80K+", label: "YouTube Views" },
    ],
    resultImages: [
      "/images/results/social-reach.jpg",
      "/images/results/engagement-stats.jpg",
      "/images/results/conversion-graph.jpg",
    ],
  },
};

export const CaseStudiesProvider: React.FC<CaseStudiesProviderProps> = ({
  children,
}) => {
  const value: CaseStudiesContextType = {
    caseStudiesPreview,
    caseStudiesDetailed,
  };

  return (
    <CaseStudiesContext.Provider value={value}>
      {children}
    </CaseStudiesContext.Provider>
  );
};

// Custom hook to use the context safely
export const useCaseStudies = (): CaseStudiesContextType => {
  const context = useContext(CaseStudiesContext);
  if (!context) {
    throw new Error("useCaseStudies must be used within CaseStudiesProvider");
  } 
  return context;
};

// Optional: Helper hook to get a specific case study by ID
export const useCaseStudy = (id: string) => {
  const { caseStudiesPreview, caseStudiesDetailed } = useCaseStudies();

  return {
    preview: caseStudiesPreview.find((study) => study.id === id),
    detailed: caseStudiesDetailed[id],
  };
};

export default CaseStudiesContext;