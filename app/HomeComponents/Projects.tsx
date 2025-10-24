"use client";

import React from "react";
import ProjectCaseStudy from "./ProjectCaseStudy";
import { useCaseStudies } from "@/context/CaseStudiesContext";

export default function Projects() {
  const { caseStudiesPreview } = useCaseStudies();

  return (
    <section className="py-16">
      <div className="text-center py-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          Explore My Projects
        </h1>
        <p className="text-xl text-gray-600">Real Growth. Real Numbers. No BS</p>
      </div>
      <ProjectCaseStudy caseData={caseStudiesPreview} />
    </section>
  );
}