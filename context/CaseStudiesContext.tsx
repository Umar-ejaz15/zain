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

interface CaseStudiesDetailed {
  [key: string]: any; // You can replace 'any' with a detailed interface later
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
      "~85,000 organic users in 12 months",
      "~30M search impressions (Google + Bing)",
      "Thousands of users from Reddit alone",
      "831 Reddit conversions in 30 days",
      "100s of paying customers",
      "$0 spent on ads",
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
      "7,331 organic users for Hify",
      "831 conversions in single month",
      "Thousands more for Blainy",
      "$0 ad spend",
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
    "↑ 220% Organic Traffic Growth",
    "3× More Local Leads",
    "100+ New Google Reviews"
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
      "Thousands of social-driven conversions",
      "~80K+ YouTube views in 30 days",
      "~225K+ Threads impressions",
      "~3M Instagram reach",
      "6 platforms managed simultaneously",
    ],
    cta: "Scale Your Social Presence →",
    bgColor: "#DCE4EA",
    link: "/case-studies/multi-channel-social"
  },
];

// Detailed Case Study Pages Data
const caseStudiesDetailed = {
  "blainy-saas": {
    hero: {
      headline: "How I Scaled a SaaS to ~85,000 Users in 12 Months (100% Organic)",
      stats: [
        { label: "Users Generated", value: "~85,000" },
        { label: "Search Impressions", value: "~30M" },
        { label: "Reddit Users", value: "Thousands" },
        { label: "Timeline", value: "12 Months" },
        { label: "Ad Spend", value: "$0" },
      ]
    },
    overview: {
      client: "Amoxt Solutions (Blainy)",
      industry: "SaaS / AI Writing Assistant",
      timeline: "April 2024 - April 2025",
      role: "Product Growth Specialist",
      challenge: "Launch AI tool against established players (Grammarly, Jasper, Copy.ai) with zero budget, zero brand awareness, and zero users. Needed organic, scalable growth targeting students, researchers, academics, and content creators globally."
    },
    strategies: [
      {
        title: "Multi-Channel SEO Engine",
        description: "Built topical authority around 200+ academic writing keywords through strategic content creation and link building.",
        actions: [
          "Published 150+ blog posts targeting student pain points",
          "Created SEO content for Google, Bing, Reddit, YouTube",
          "Guest posting on 30+ education sites for backlinks",
          "Built topical authority around 200+ keywords"
        ],
        results: [
          "~30M search impressions in 12 months",
          "Page 1 rankings for competitive keywords",
          "Organic traffic compounds monthly",
          "Search became #1 acquisition channel"
        ]
      },
      {
        title: "Reddit Marketing Machine",
        description: "Built reputation through value-first engagement across 25+ relevant subreddits without promotional spam.",
        actions: [
          "Identified 25+ relevant subreddits",
          "Built reputation through value-first engagement",
          "Answered questions without being promotional",
          "Executed content-driven SEO for Reddit indexing"
        ],
        results: [
          "Thousands of users from Reddit alone",
          "831 conversions in single month",
          "$0 spent on ads",
          "Higher retention than paid channels"
        ]
      },
      {
        title: "Social Media Growth System",
        description: "Platform-specific strategies across 6 platforms with content tailored to each audience.",
        actions: [
          "LinkedIn thought leadership",
          "TikTok educational content",
          "YouTube tutorials and demos",
          "Pinterest visual guides",
          "Instagram engagement campaigns",
          "Threads community building"
        ],
        results: [
          "~80,000+ YouTube views in 30 days",
          "~225,000+ Threads impressions",
          "~3M Instagram reach",
          "Thousands of social-driven conversions"
        ]
      },
      {
        title: "Email Lifecycle Marketing",
        description: "Segmented campaigns driving activation, retention, and revenue.",
        actions: [
          "Segmented users by behavior and intent",
          "Welcome sequences for activation",
          "Feature discovery campaigns",
          "Re-engagement for dormant users",
          "Upgrade campaigns for free users"
        ],
        results: [
          "35%+ open rates (above industry average)",
          "8%+ click-through rates",
          "Better user activation",
          "Email became revenue driver"
        ]
      },
      {
        title: "Strategic Partnerships",
        description: "Expanded reach through academic communities, influencers, and B2B relationships.",
        actions: [
          "Collaborated with academic communities",
          "Built influencer partnerships",
          "B2B partnerships with universities",
          "Created affiliate program",
          "Investor outreach (pitch deck creation)"
        ],
        results: [
          "Expanded market reach",
          "Access to new user segments",
          "Credibility boost",
          "Additional revenue streams"
        ]
      }
    ],
    keyTakeaways: [
      {
        title: "Organic Beats Paid (Long-Term)",
        description: "Initial investment in content and SEO pays off for years. Paid ads stop when budget stops."
      },
      {
        title: "Reddit Is Underutilized Goldmine",
        description: "Most companies ignore Reddit or spam it. Authentic engagement generates thousands of quality users."
      },
      {
        title: "Multi-Channel Compounds",
        description: "One channel is risky. Six channels create compounding growth. Users see you everywhere."
      },
      {
        title: "Systems > Tactics",
        description: "Random tactics die. Systems scale. Built frameworks that work month after month."
      },
      {
        title: "Organic Growth Has Better Economics",
        description: "Lower CAC. Better retention. Higher LTV. Sustainable over time."
      }
    ],
    tools: ["Google Analytics 4", "SEMrush", "Ahrefs", "Reddit Analytics", "LinkedIn Analytics", "YouTube Studio", "TikTok Analytics", "Email Automation", "Google Search Console"]
  },

  "reddit-marketing": {
    hero: {
      headline: "How I Generated Thousands of Users Through Reddit (Without Looking Spammy)",
      stats: [
        { label: "Users (Hify)", value: "7,331" },
        { label: "Users (Blainy)", value: "Thousands" },
        { label: "Monthly Conversions", value: "831" },
        { label: "Ad Spend", value: "$0" },
        { label: "vs Paid Channels", value: "Higher CR" },
      ]
    },
    challenge: {
      description: "Most companies treat Reddit like a billboard—they spam links and get banned. Traditional ads were expensive and not converting for B2B SaaS. Needed high-intent users without massive ad budgets while cracking Reddit without looking promotional."
    },
    whyRedditWorks: [
      {
        title: "High-Intent Users",
        description: "People actively looking for solutions, asking questions, researching—in buying mode."
      },
      {
        title: "Lower Competition",
        description: "Most marketers ignore Reddit or do it wrong. Less noise means more opportunity."
      },
      {
        title: "Long-Term Value",
        description: "Content lives forever. Indexed by Google. Drives traffic for months or years."
      },
      {
        title: "Community Trust",
        description: "Communities trust peer recommendations more than ads. Build trust = generate leads."
      }
    ],
    strategy: [
      {
        phase: "Research & Selection",
        description: "Identified 25+ relevant subreddits and analyzed their culture, rules, and audience.",
        actions: [
          "Analyzed rules and culture of each subreddit",
          "Studied what content performs well",
          "Found where target audience hangs out",
          "Mapped pain points to communities"
        ],
        criteria: "Active community (1000+ members), target audience present, allows helpful content, moderators responsive, low spam tolerance"
      },
      {
        phase: "Authority Building",
        description: "Joined as regular member, building karma and reputation through genuine value.",
        actions: [
          "Answered questions without links",
          "Provided genuine value first",
          "Built comment karma and reputation",
          "Understood community dynamics"
        ],
        timeInvestment: "30-60 minutes daily with genuine engagement"
      },
      {
        phase: "Value-First Content",
        description: "Created deeply helpful posts solving problems without promoting.",
        contentTypes: [
          "'How I solved X problem' posts",
          "Comparison guides (honest, balanced)",
          "Free tools and resources",
          "Case studies with real numbers",
          "AMAs (Ask Me Anything)"
        ]
      },
      {
        phase: "Content-Driven SEO",
        description: "Optimized Reddit posts for Google indexing to drive long-term traffic.",
        actions: [
          "Used keywords naturally in titles",
          "Created comprehensive, detailed content",
          "Encouraged upvotes and engagement",
          "Built internal links between posts"
        ],
        result: "Reddit posts ranked on Google, driving traffic for months after posting"
      },
      {
        phase: "Non-Promotional CTAs",
        description: "Let people come to you instead of pushing links.",
        tactics: [
          "Never direct links in posts",
          "Offered value first, link second",
          "'DM me if you want more details'",
          "Profile link to website",
          "Let people ask for more info"
        ]
      }
    ],
    results: {
      hify: {
        users: "7,331 organic users in 8 months",
        conversions: "831 conversions in single month",
        traffic: "2.6K clicks, 46K impressions",
        spend: "$0 ad spend"
      },
      blainy: {
        users: "Thousands of users from Reddit",
        conversions: "831 conversions in 30 days",
        quality: "Higher quality than paid channels",
        retention: "Better retention rates"
      }
    },
    framework: [
      "Find your subreddits (where target audience lives)",
      "Lurk and learn (understand culture)",
      "Build karma (engage genuinely)",
      "Create value-first content (solve problems)",
      "Let people come to you (soft CTAs)",
      "Track and optimize (see what works)",
      "Scale winning tactics (repeat what converts)"
    ],
    mistakesAvoided: [
      "Posting promotional links immediately",
      "Copy-pasting same content across subreddits",
      "Ignoring community rules",
      "Being overly salesy in comments",
      "Creating account just to promote",
      "Not engaging with comments on posts",
      "Giving up after 2 weeks"
    ],
    keyTakeaways: [
      {
        title: "Reddit Is Underutilized",
        description: "Most companies ignore it or spam it. Massive opportunity for those who do it right."
      },
      {
        title: "Trust Beats Ads",
        description: "Community recommendations convert better than paid ads. Build trust, generate leads."
      },
      {
        title: "Long-Term Compounding",
        description: "Reddit content lives forever. Indexed by Google. Works while you sleep."
      },
      {
        title: "Quality Over Quantity",
        description: "One great post > 100 spammy posts. Focus on depth and value."
      },
      {
        title: "Patience Required",
        description: "Not instant. Takes 2-3 months to see momentum. But compounds over time."
      }
    ]
  },

  "everdry-local": {
    hero: {
      headline: "How I Help Service Businesses Dominate Local Markets",
      focus: "Local SEO. Lead generation. Review campaigns. Google Business optimization."
    },
    overview: {
      client: "Everdry Waterproofing of Michiana",
      industry: "Home Services / Waterproofing",
      location: "Michiana Area (US)",
      timeline: "July 2025 - Present",
      role: "Marketing Specialist",
      challenge: "Local service business in competitive market needing consistent pipeline of qualified leads. Competitors ranked higher for 'waterproofing near me' searches. Reputation scattered. Online presence weak."
    },
    strategies: [
      {
        title: "Google Business Profile Domination",
        actions: [
          "Optimized Google Business Profile completely",
          "Added high-quality photos (before/after work)",
          "Posted regular updates (weekly)",
          "Responded to every review within 24 hours",
          "Used Q&A section for common questions",
          "Built local citations across 50+ directories"
        ],
        results: [
          "Higher local pack rankings",
          "More map impressions",
          "Increased calls from Google",
          "Better visibility in 'near me' searches"
        ]
      },
      {
        title: "Local SEO Strategy",
        actions: [
          "Keyword research for local intent",
          "Created location-specific landing pages",
          "Built city-level service pages",
          "Optimized meta titles/descriptions for local",
          "Schema markup for local business",
          "Local backlinks from community sites"
        ],
        focusAreas: [
          "Basement waterproofing",
          "Foundation repair",
          "Crawl space encapsulation",
          "Sump pump installation",
          "Emergency services"
        ]
      },
      {
        title: "Review Generation System",
        description: "Reviews = trust = conversions. Service businesses live or die by reputation.",
        actions: [
          "Built automated review request system",
          "SMS and email review requests post-job",
          "Made it easy (direct links to Google)",
          "Responded to all reviews (positive and negative)",
          "Showcased reviews on website"
        ]
      },
      {
        title: "Educational Content Marketing",
        description: "Homeowners research before buying. Educational content builds trust and ranks on Google.",
        content: [
          "'Signs you need basement waterproofing'",
          "'How to choose waterproofing contractor'",
          "'DIY vs professional waterproofing'",
          "Before/after case studies",
          "Video content (YouTube for local SEO)"
        ]
      },
      {
        title: "Facebook Local Campaigns",
        actions: [
          "Geographic targeting (Michiana area only)",
          "Homeowner demographic targeting",
          "Seasonal campaigns (spring flooding season)",
          "Before/after image ads",
          "Customer testimonial ads",
          "Lead generation forms"
        ]
      },
      {
        title: "Service Area Expansion",
        actions: [
          "Identified neighboring cities for expansion",
          "Created location pages for each",
          "Built local backlinks",
          "Targeted 'city + waterproofing' keywords",
          "Expanded Google Ads to new areas"
        ]
      }
    ],
    results: {
      visibility: [
        "Better Google Business Profile rankings",
        "More map pack appearances",
        "Higher 'near me' search visibility"
      ],
      leads: [
        "Increased website inquiries",
        "More phone calls",
        "Better lead quality",
        "Lower cost per lead"
      ],
      reputation: [
        "More 5-star reviews",
        "Better review response rate",
        "Improved online presence",
        "Trust signals for prospects"
      ],
      pipeline: [
        "Consistent monthly leads",
        "Less reliance on referrals",
        "Scalable lead generation system"
      ]
    },
    serviceVsSaaS: {
      differences: [
        "Geographic focus (not global)",
        "Google Business Profile is critical",
        "Reviews are make-or-break",
        "Phone calls > website signups",
        "Seasonal factors matter",
        "Trust signals more important",
        "Local backlinks > global backlinks"
      ],
      principle: "Same growth frameworks, just adapted for local markets."
    },
    tools: ["Google Business Profile", "Google Ads", "Facebook Ads", "Local SEO Tools", "Review Management Software", "Call Tracking"]
  },

  "multi-channel-social": {
    hero: {
      headline: "How I Drove Thousands of Conversions Across 6 Social Platforms",
      stats: [
        { label: "Conversions", value: "Thousands" },
        { label: "YouTube Views (30d)", value: "~80K+" },
        { label: "Threads Impressions", value: "~225K+" },
        { label: "Instagram Reach", value: "~3M" },
        { label: "Platforms Managed", value: "6" },
      ]
    },
    overview: {
      client: "Multiple SaaS Clients (Blainy, Hify, Others)",
      industry: "SaaS / Technology",
      timeline: "2024 - 2025",
      role: "Social Media Growth Strategist",
      challenge: "Most SaaS companies focus on one or two social platforms, missing massive opportunities. Needed cohesive multi-platform strategy that compounds reach and drives actual conversions—not just vanity metrics."
    },
    whyMultiChannel: [
      {
        title: "Audience Fragmentation",
        description: "Your audience isn't on just one platform. They're everywhere. Meet them where they are."
      },
      {
        title: "Compounding Reach",
        description: "6 platforms = 6x opportunities to be discovered. Each platform feeds the others."
      },
      {
        title: "Risk Mitigation",
        description: "Algorithm changes on one platform won't kill your entire social strategy."
      },
      {
        title: "Different Intent Levels",
        description: "YouTube = education. Instagram = discovery. LinkedIn = B2B. Match content to intent."
      }
    ],
    platformStrategies: [
      {
        platform: "YouTube",
        strategy: "Educational long-form content",
        content: [
          "Product tutorials and demos",
          "How-to guides for target audience",
          "Feature deep-dives",
          "Customer success stories",
          "Industry insights and trends"
        ],
        results: [
          "~80,000+ views in 30 days",
          "High-intent traffic to website",
          "SEO benefits (YouTube = Google)",
          "Authority building"
        ]
      },
      {
        platform: "LinkedIn",
        strategy: "Thought leadership and B2B networking",
        content: [
          "Industry insights and analysis",
          "Behind-the-scenes of growth",
          "Team highlights and culture",
          "Customer success stories",
          "Data-driven posts with real numbers"
        ],
        results: [
          "B2B lead generation",
          "Partnership opportunities",
          "Credibility in industry",
          "High-quality connections"
        ]
      },
      {
        platform: "TikTok",
        strategy: "Short-form educational entertainment",
        content: [
          "Quick tips and hacks",
          "Problem-solution format",
          "Trending audio with value",
          "Behind-the-scenes snippets",
          "User-generated content features"
        ],
        results: [
          "Viral reach potential",
          "Younger audience acquisition",
          "Brand awareness",
          "Traffic spikes from viral posts"
        ]
      },
      {
        platform: "Instagram",
        strategy: "Visual storytelling and community",
        content: [
          "Carousel posts with value",
          "Reels with educational hooks",
          "Stories for engagement",
          "User testimonials and reviews",
          "Product updates and features"
        ],
        results: [
          "~3M reach in campaign period",
          "Community engagement",
          "Visual brand presence",
          "Story conversions"
        ]
      },
      {
        platform: "Threads",
        strategy: "Real-time engagement and micro-content",
        content: [
          "Quick insights and thoughts",
          "Engaging with trending topics",
          "Community conversations",
          "Mini case studies",
          "Behind-the-scenes updates"
        ],
        results: [
          "~225,000+ impressions",
          "High engagement rates",
          "Community building",
          "Traffic to other platforms"
        ]
      },
      {
        platform: "Pinterest",
        strategy: "Visual discovery and evergreen content",
        content: [
          "Infographics and guides",
          "Step-by-step tutorials",
          "Templates and resources",
          "Inspirational quotes with branding",
          "Product feature showcases"
        ],
        results: [
          "~50K impressions monthly",
          "Long-tail traffic",
          "Female audience reach",
          "Evergreen content performance"
        ]
      }
    ],
    contentFramework: {
      title: "The 3E Content System",
      pillars: [
        {
          name: "Educate",
          description: "Teach something valuable. Solve a problem. Build authority.",
          platforms: "YouTube, LinkedIn, Instagram Carousels"
        },
        {
          name: "Entertain",
          description: "Make people smile. Use humor. Be relatable. Stop the scroll.",
          platforms: "TikTok, Instagram Reels, Threads"
        },
        {
          name: "Engage",
          description: "Start conversations. Ask questions. Build community.",
          platforms: "All platforms, especially Threads and Instagram Stories"
        }
      ]
    },
    distributionStrategy: {
      title: "Content Repurposing System",
      description: "One piece of content becomes 20+ assets across platforms.",
      example: [
        "Create YouTube tutorial (10 min) →",
        "Extract 5 short clips for TikTok/Reels",
        "Create carousel from key points (Instagram/LinkedIn)",
        "Write thread breaking down tutorial (Threads/Twitter)",
        "Design infographic for Pinterest",
        "Share behind-the-scenes in Stories",
        "Embed video in blog post",
        "Send highlights in email newsletter"
      ]
    },
    results: {
      overview: "Thousands of social-driven conversions across multiple clients",
      metrics: [
        "~80K+ YouTube views in 30 days",
        "~225K+ Threads impressions",
        "~3M Instagram reach",
        "~50K Pinterest impressions monthly",
        "Thousands of conversions tracked",
        "Multi-platform brand presence",
        "Engaged communities, not just followers"
      ]
    },
    keyTakeaways: [
      {
        title: "One Platform Is Risky",
        description: "Algorithm changes, platform decline, or policy shifts can destroy single-channel strategies."
      },
      {
        title: "Repurposing Is Key",
        description: "Don't create unique content for each platform. Adapt one core piece into many formats."
      },
      {
        title: "Engagement > Followers",
        description: "10K engaged followers beat 100K ghost followers. Focus on community, not vanity metrics."
      },
      {
        title: "Platform-Specific Optimization",
        description: "What works on LinkedIn won't work on TikTok. Respect each platform's culture and format."
      },
      {
        title: "Consistency Compounds",
        description: "Daily posting for 6 months beats sporadic viral attempts. Systems > one-hit wonders."
      }
    ],
    tools: ["YouTube Studio", "LinkedIn Analytics", "TikTok Analytics", "Instagram Insights", "Threads Analytics", "Pinterest Analytics", "Content Calendar Tools", "Video Editing Software", "Design Tools (Canva)", "Social Scheduling Tools"]
  }
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
