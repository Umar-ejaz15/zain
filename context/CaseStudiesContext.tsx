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
  image2?: string;
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
  strategy: string;
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
    title: "Case Study 1: Blainy - SaaS Scaled to 85K Users",
    image: "/blainy/1.jfif",
    image2: "/blainy/2.jfif",
    description: "Scaled from zero to 85K organic users in 12 months with pure strategy and no ad spend.",
    numbers: [
      "85,000+ organic users in 12 months",
      "30M+ search impressions across platforms",
      "Zero ad spend, 100% organic growth",
    ],
    cta: "Want 85K Users? Read the Full Story →",
    bgColor: "#F4F2EF",
    link: "/case-studies/blainy-saas"
  },
  {
    id: "reddit-growth",
    title: "Case Study 2: Reddit Growth - 5,847 Conversions in 60 Days With Zero Ad Spend",
    image: "/reddit-growth/2.png",
    image2: "/reddit-growth/3.png",
    description: "Client was spending $8K/month on ads with poor ROI. I built a Reddit growth system that generated 5,847 sign-ups and 687 paying customers in 60 days - without spending a dollar on ads.",
    numbers: [
      "5,847 sign-ups in 60 days",
      "687 paying customers acquired",
      "CAC reduced from $45 to $0",
    ],
    cta: "See How I Did It →",
    bgColor: "#D2E8C8",
    link: "/case-studies/reddit-growth"
  },
  {
    id: "seo-growth",
    title: "Case Study 3: 8M Search Impressions - SEO System That Scaled Traffic 5,699% in 12M",
    image: "/seo-growth/0.png",
    image2: "/seo-growth/1.png",
    description: "AI SaaS client had zero organic visibility and was burning $12K/month on ads. I built a complete SEO system from scratch that delivered 27.5M+ search impressions and 5,699% traffic growth.",
    numbers: [
      "27.5M+ search impressions generated",
      "5,699% organic traffic growth in 12 months",
      "847 keywords ranked on page 1",
    ],
    cta: "See the Full SEO Breakdown →",
    bgColor: "#DCE4EA",
    link: "/case-studies/seo-growth"
  },
  {
    id: "multi-platform",
    title: "Case Study 4: Multi-Platform Growth - 4M Instagram, 600K Pinterest, 80K YouTube Views",
    image: "/multi-platform/0.png",
    image2: "/multi-platform/1.png",
    description: "SaaS company had dormant social accounts with no strategy or results. I built platform-specific growth systems across 5 channels in 30 days.",
    numbers: [
      "4M Instagram reach with 2,847 link clicks",
      "250K Pinterest impressions with 4.2K clicks",
      "80K YouTube views in 30 days",
    ],
    cta: "See the Multi-Platform Strategy →",
    bgColor: "#E5DBEB",
    link: "/case-studies/multi-platform"
  },
];

const caseStudiesDetailed: CaseStudiesDetailed = {
  "blainy-saas": {
    title: "Blainy SaaS – 85K Users Through Organic Growth",
    subtitle: "Scaled an AI writing tool to 85,000 users organically in 12 months.",
    image: "/blainy/1.jfif",
    challenge:
      "Blainy was a brand-new AI writing tool entering one of the most competitive SaaS markets — going head-to-head with well-funded incumbents like Jasper, Grammarly, and Copy.ai. The company had zero brand recognition, no existing user base, and absolutely no budget for paid advertising. The founding team needed a way to acquire thousands of users quickly and sustainably without burning through cash on ads that might not convert. Traditional marketing playbooks were off the table — we needed a scrappy, high-leverage growth strategy that could compete with companies spending millions on acquisition.",
    strategy:
      "I designed a full-funnel organic growth engine built on three pillars: SEO, Reddit community marketing, and multi-platform social distribution. For SEO, I conducted deep keyword research targeting long-tail, high-intent queries that competitors were ignoring — phrases like 'AI essay writer for students' and 'free AI writing assistant.' I built out 60+ SEO-optimized pages including comparison articles, how-to guides, and use-case landing pages. On Reddit, I identified 25+ subreddits where our target users actively discussed writing tools, and built genuine authority through value-first participation before introducing Blainy as a solution. For social, I created platform-specific content strategies for Instagram, TikTok, and YouTube to drive awareness and backlinks.",
    results:
      "The organic growth engine delivered transformative results. Within 12 months, Blainy grew from zero to 85,000+ registered users — entirely through organic channels with $0 in ad spend. The SEO strategy generated over 30M search impressions across Google and Bing, with hundreds of keywords ranking on page 1. Reddit became the #2 traffic source, driving thousands of high-intent sign-ups monthly through evergreen posts that continued generating traffic long after publication. The social media strategy amplified brand awareness across platforms, creating a compounding growth loop where SEO, social proof, and community engagement reinforced each other. User activation rates exceeded industry benchmarks by 2x, and organic word-of-mouth became a significant growth driver by month 8.",
    metrics: [
      { value: "85K", label: "Users in 12 Months" },
      { value: "30M+", label: "Search Impressions" },
      { value: "$0", label: "Ad Spend" },
    ],
    resultImages: [
      "/blainy/1.jfif",
      "/blainy/2.jfif",
    ],
  },
  "reddit-growth": {
    title: "Reddit Growth: 5,847 Conversions in 60 Days With Zero Ad Spend",
    subtitle: "Reddit Growth Strategist | Community Building & Conversion Optimization",
    image: "/reddit-growth/0.png",
    challenge:
      "The client, a B2B SaaS company, was hemorrhaging $8,000/month on paid advertising with diminishing returns. Their cost per acquisition had ballooned to $45 per user, and the quality of paid traffic was declining — high bounce rates, low activation, and poor retention. They needed an alternative acquisition channel that could deliver high-intent users at a fraction of the cost. Reddit was an untapped opportunity, but the platform is notoriously hostile to promotional content, making it one of the hardest channels to crack without getting banned or downvoted into oblivion.",
    strategy:
      "I developed a systematic Reddit growth framework built on authenticity and value-first engagement. Phase 1 involved deep subreddit research — I analyzed 100+ communities and identified 35 high-intent subreddits where our target audience actively discussed problems our product solved. Phase 2 focused on authority building — I created accounts with genuine participation, answering questions, sharing insights, and earning credibility over 2 weeks before any product mention. Phase 3 was the content engine — I crafted solution-focused posts that naturally wove in the product as one of several recommendations, using soft CTAs that felt helpful rather than promotional. Each post was optimized for Reddit's algorithm (timing, title hooks, engagement seeding) and for Google SEO so they'd rank long-term. Phase 4 was scaling — I built a repeatable system with templates, subreddit rotation schedules, and engagement tracking.",
    results:
      "The Reddit growth system delivered extraordinary results in just 60 days. We generated 5,847 verified sign-ups and converted 687 into paying customers — all with zero ad spend. Customer acquisition cost dropped from $45 to effectively $0. Reddit became the #2 traffic source for the entire company, surpassing paid channels that had years of optimization. The accounts earned 47,000+ karma, establishing long-term credibility. Most importantly, I created 30+ evergreen posts that continue driving consistent traffic and conversions 12+ months after publication — they rank on Google for high-intent keywords, creating a compounding organic asset. The system now generates new leads daily without any ongoing ad spend, and the framework has been templated for repeatable execution across new subreddits.",
    metrics: [
      { value: "5,847", label: "Conversions in 60 Days" },
      { value: "687", label: "Paying Customers" },
      { value: "$0", label: "Ad Spend" },
    ],
    resultImages: [
      "/reddit-growth/0.png",
      "/reddit-growth/1.png",
      "/reddit-growth/2.png",
      "/reddit-growth/3.png",
      "/reddit-growth/4.png",
      "/reddit-growth/5.png",
      "/reddit-growth/6.png",
      "/reddit-growth/7.png",
      "/reddit-growth/8.png",
      "/reddit-growth/9.png",
      "/reddit-growth/10.png",
    ],
  },
  "seo-growth": {
    title: "8M Search Impressions: SEO System That Scaled Traffic 5,699% in 12M",
    subtitle: "SEO Strategist & Growth Lead | Technical SEO, Content, Link Building",
    image: "/seo-growth/0.png",
    challenge:
      "An AI SaaS client had virtually zero organic visibility — their website was getting just 412 monthly visitors from search. They were entirely dependent on paid advertising, burning through $12,000/month on Google and Facebook ads with a rising CAC and shrinking margins. The product was strong, but discovery was broken. They needed to build an entire organic acquisition channel from the ground up to reduce ad dependency, lower CAC, and create a sustainable growth engine that would compound over time rather than reset to zero every month when ad budgets paused.",
    strategy:
      "I executed a comprehensive four-phase SEO strategy. Phase 1: Technical Foundation — I ran a full technical audit and fixed 47 critical issues including crawl errors, duplicate content, broken internal links, missing schema markup, slow page speeds, and mobile usability problems. Phase 2: Keyword Strategy — I researched and mapped 200+ high-intent keywords across the funnel, focusing on comparison queries ('Blainy vs Jasper'), problem-aware searches ('best AI writing tool for essays'), and bottom-funnel terms with clear purchase intent. Phase 3: Content Engine — I produced 85 SEO-optimized content pieces including detailed comparison pages, comprehensive how-to guides, use-case landing pages, and programmatic content targeting long-tail variations. Each piece was built with proper internal linking, schema markup, and conversion-optimized CTAs. Phase 4: Authority Building — I executed a targeted link building campaign that earned 147 quality backlinks from relevant SaaS directories, tech blogs, and educational resources.",
    results:
      "The SEO system delivered transformational results over 12 months. Organic traffic exploded from 412 to 23,890 monthly visitors — a 5,699% increase. The site generated 27.5M+ total search impressions across Google and Bing. We ranked 847 keywords on page 1 of Google, including highly competitive terms that previously seemed unreachable. The organic channel generated thousands of free trial sign-ups and directly converted 412 users into paying customers. Most critically, the client was able to completely eliminate their $12K/month ad spend — organic became the #1 and only traffic source. The content assets continue to compound, with month-over-month traffic growth accelerating as domain authority increases and older content matures in rankings.",
    metrics: [
      { value: "27.5M+", label: "Search Impressions" },
      { value: "5,699%", label: "Traffic Growth" },
      { value: "847", label: "Page 1 Keywords" },
    ],
    resultImages: [
      "/seo-growth/0.png",
      "/seo-growth/1.png",
    ],
  },
  "multi-platform": {
    title: "Multi-Platform Growth: 4M Instagram, 600K Pinterest, 80K YouTube Views",
    subtitle: "Multi-Channel Social Media Strategist | Platform-Specific Growth Systems",
    image: "/multi-platform/0.png",
    challenge:
      "A SaaS company had social media accounts across five platforms that were essentially dormant — inconsistent posting, no content strategy, zero engagement, and no measurable business impact. The accounts existed but generated no traffic, no leads, and no brand awareness. The team had tried generic social media approaches before (posting the same content everywhere) with no results. They needed someone who understood that each platform has its own algorithm, audience behavior, and content format — and could build tailored systems for each one that actually drove business outcomes, not just vanity metrics.",
    strategy:
      "I built platform-specific growth systems for five channels, each with custom content strategies optimized for that platform's algorithm and user behavior. Instagram: I created a mix of educational carousels breaking down complex topics into visual slides, Reels leveraging trending audio with product demonstrations, and Stories with interactive polls and Q&As to drive engagement. Pinterest: I designed SEO-optimized pin graphics targeting high-search-volume keywords in our niche, with keyword-rich descriptions and strategic board organization to maximize discoverability. YouTube: I produced tutorial-style videos showing real use cases, optimized titles and thumbnails for CTR, and built end-screen funnels to drive website traffic. TikTok: I used trend-jacking frameworks — identifying trending sounds and formats, then adapting them with product-relevant hooks in the first 1-2 seconds. Threads: I adopted a conversation-first approach, engaging in relevant discussions and sharing bite-sized insights that drove profile visits and follows.",
    results:
      "The multi-platform strategy delivered massive results in just 30 days. Instagram generated 4M reach with 2,847 direct link clicks to the website — a channel that previously drove zero traffic. Pinterest hit 250,000 impressions with 4,200 clicks, and pins continued gaining traction weeks after posting due to Pinterest's search-based discovery model. YouTube accumulated 80,000 views across tutorial content, with an average watch time 3x above our initial benchmark. Threads generated 225,000 reach through strategic conversation participation. TikTok content achieved viral traction with multiple videos exceeding 100K views. Combined, social media transformed from a dead channel into a viable lead generation engine, driving thousands of new users to the platform. The content systems were documented and templatized so the internal team could maintain momentum independently.",
    metrics: [
      { value: "4M", label: "Instagram Reach" },
      { value: "600K", label: "Pinterest Impressions" },
      { value: "80K", label: "YouTube Views" },
    ],
    resultImages: [
      "/multi-platform/0.png",
      "/multi-platform/1.png",
      "/multi-platform/2.png",
      "/multi-platform/3.png",
      "/multi-platform/4.png",
      "/multi-platform/5.png",
      "/multi-platform/6.png",
      "/multi-platform/7.png",
      "/multi-platform/8.png",
      "/multi-platform/9.png",
      "/multi-platform/10.png",
      "/multi-platform/11.png",
      "/multi-platform/12.png",
      "/multi-platform/13.png",
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