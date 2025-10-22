import React from "react";
import ProjectCaseStudy from "./ProjectCaseStudy";

export default function Projects() {
  const caseData = [
    {
      title: "Case Study 1: Blainy - SaaS Scaled to ~85K Users",
      image: "/images/blainy-dashboard.jpg",
      description:
        "Blainy scaled from zero to 85K organic users with pure strategy and no ad spend.",
      numbers: [
        "~85,000 organic users in 12 months",
        "~30M search impressions (Google + Bing)",
        "Thousands of users from Reddit alone",
        "831 Reddit conversions in 30 days",
        "100s of paying customers",
        "$0 spent on ads",
      ],
      cta: "Want ~85K Users? Read the Full Story →",
      bgColor: "#E5DBEB", // Light purple
    },
    {
      title: "Case Study 2: Reddit Marketing - Thousands of Organic Users",
      image: "/images/reddit-dashboard.jpg",
      numbers: [
        "7,331 organic users for Hify",
        "831 conversions in single month",
        "Thousands more for Blainy",
        "$0 ad spend",
        "Higher conversion rate than paid channels",
      ],
      cta: "See How I Did It →",
      bgColor: "#F4F2EF", // Warm beige
    },
    {
      title: "Case Study 3: Service Business - Everdry Waterproofing",
      image: "/images/local-business.jpg",
      result:
        "Increased local visibility. More qualified leads. Stronger online presence.",
      cta: "Need Local Marketing? Let's Talk →",
      bgColor: "#DCE4EA", // Light blue
    },
    {
      title: "Case Study 4: Multi-Channel Social - Thousands of Conversions",
      image: "/images/social-dashboard.jpg",
      numbers: [
        "Thousands of social-driven conversions",
        "~80K+ YouTube views in 30 days",
        "~225K+ Threads impressions",
        "~3M Instagram reach",
        "6 platforms managed simultaneously",
      ],
      cta: "Scale Your Social Presence →",
      bgColor: "#F4F2EF", // Warm beige (alternate)
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center py-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          Explore My Projects
        </h1>
        <p className="text-xl text-gray-600">Real Growth. Real Numbers. No BS</p>
      </div>
      <ProjectCaseStudy caseData={caseData} />
    </section>
  );
}
