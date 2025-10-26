"use client";
import FooterCTA from '@/app/HomeComponents/FooterCTA';
import { useCaseStudy } from '@/context/CaseStudiesContext';
import { useParams } from 'next/navigation';
import React from 'react';

export default function SeperateProject() {
  // Get the dynamic ID from URL params
  const params = useParams();
  const caseStudyId = params?.id as string || 'everdry-local';
  
  const { detailed } = useCaseStudy(caseStudyId);

  if (!detailed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Case study not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {detailed.title}
        </h1>
        <p className="text-gray-600 max-w-2xl">
          {detailed.subtitle}
        </p>

        {/* Hero Gradient Image */}
        <div className="mt-12 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-400 via-purple-300 to-orange-300 h-80 flex items-center justify-center relative">
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-pink-200 via-blue-200 to-orange-200 opacity-90 blur-3xl"></div>
          <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-pink-300/80 via-blue-300/80 to-cyan-200/80 shadow-2xl"></div>
        </div>

        {/* Sidebar and Content Grid */}
        <div className="grid grid-cols-5 gap-12 mt-16">
          {/* Sidebar */}
          <div className="col-span-1 space-y-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-6 h-6 bg-green-500 rounded"></div>
              <span className="font-semibold text-gray-900">Project</span>
            </div>
            
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-gray-500 mb-1">Industry</div>
                <div className="text-gray-900">
                  {caseStudyId === 'everdry-local' ? 'Local Service' : 
                   caseStudyId === 'blainy-saas' ? 'SaaS' : 
                   caseStudyId === 'reddit-marketing' ? 'B2B SaaS' :
                   'Social Media'}
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Services</div>
                <div className="text-gray-900">
                  {caseStudyId === 'everdry-local' ? 'Local SEO' : 
                   caseStudyId === 'blainy-saas' ? 'Growth Marketing' : 
                   caseStudyId === 'reddit-marketing' ? 'Reddit Marketing' :
                   'Multi-Channel Social'}
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Duration</div>
                <div className="text-gray-900">
                  {caseStudyId === 'blainy-saas' ? '12 Months' : 
                   caseStudyId === 'reddit-marketing' ? '8 Months' :
                   '6 Months'}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-4 space-y-8">
            {/* Challenge Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenge</h2>
              <p className="text-gray-600 leading-relaxed">
                {detailed.challenge}
              </p>
            </div>

            {/* Results Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {detailed.results}
              </p>
            </div>

            {/* Stats */}
            {detailed.metrics && detailed.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-8 py-8">
                {detailed.metrics.map((metric, index) => (
                  <div key={index}>
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Image Gallery */}
        {detailed.resultImages && detailed.resultImages.length > 0 && (
          <div className="mt-16 space-y-6">
            {/* First Image - Full Width */}
            {detailed.resultImages[0] && (
              <div className="rounded-3xl overflow-hidden h-full">
                <img 
                  src={detailed.resultImages[0]} 
                  alt="Result 1"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Second Image - Full Width */}
            {detailed.resultImages[1] && (
              <div className="rounded-3xl overflow-hidden h-full">
                <img 
                  src={detailed.resultImages[1]} 
                  alt="Result 2"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Bottom Grid - Two Images Side by Side (if 3+ images exist) */}
            {detailed.resultImages.length > 2 && (
              <div className="grid grid-cols-2 gap-6">
                {detailed.resultImages.slice(2).map((image, index) => (
                  <div key={index} className="rounded-3xl overflow-hidden h-64">
                    <img 
                      src={image} 
                      alt={`Result ${index + 3}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <FooterCTA/>
    </div>
  );
}