"use client";

import React from "react";
import ProjectCaseStudy from "./ProjectCaseStudy";
import { useCaseStudies } from "@/context/CaseStudiesContext";

export default function Projects() {
  const { caseStudiesPreview } = useCaseStudies();

  return (
    <section className="">
      <div className="text-center py-10 px-4">
        <h1 className="text-5xl md:text-4xl font-bold mb-6 text-gray-900">
          Explore My Projects
        </h1>
        <p className="text-xl text-gray-600">Our works are a blend of innovative thinking and practical solutions, ensuring they are both unique and effective.

</p>
      </div>
      <ProjectCaseStudy caseData={caseStudiesPreview} />
    </section>
  );
}