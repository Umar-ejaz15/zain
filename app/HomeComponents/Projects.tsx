"use client";

import React from "react";
import ProjectCaseStudy from "./ProjectCaseStudy";
import Button from "./Button";
import { useCaseStudies } from "@/context/CaseStudiesContext";

export default function Projects() {
  const { caseStudiesPreview } = useCaseStudies();

  return (
    <section style={{ background: "linear-gradient(to bottom, #ECEBE4, #F8F6F4)" }}>
      <div className="text-center py-10 md:py-14 px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
          Explore My Projects
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
          My works are a blend of innovative thinking and practical solutions, ensuring they are both unique and effective.
        </p>
      </div>
      <ProjectCaseStudy caseData={caseStudiesPreview} />
      <div className="max-w-7xl mx-auto py-10 md:py-14">
        <Button />
      </div>
    </section>
  );
}