"use client";

import React from "react";
import ProjectCaseStudy from "./ProjectCaseStudy";
import { useCaseStudies } from "@/context/CaseStudiesContext";

export default function Projects() {
  const { caseStudiesPreview } = useCaseStudies();

  return (
    <section className="">
      <div className="text-center py-16 md:py-20 px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
          Explore My Projects
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
          My works are a blend of innovative thinking and practical solutions, ensuring they are both unique and effective.
        </p>
      </div>
      <ProjectCaseStudy caseData={caseStudiesPreview} />
    </section>
  );
}