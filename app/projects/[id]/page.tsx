"use client";
import FooterCTA from '@/app/HomeComponents/FooterCTA';
import Testimonials from '@/app/HomeComponents/Testimonials';
import { useCaseStudy } from '@/context/CaseStudiesContext';
import { useParams } from 'next/navigation';
import React from 'react';

export default function SeperateProject() {
  // Get the dynamic ID from URL params
  const params = useParams();
  const caseStudyId = params?.id || 'everdry-local';
  
  const { detailed } = useCaseStudy(caseStudyId as string);

  if (!detailed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Case study not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-4xl mx-auto flex justify-center items-center flex-col  font-bold text-gray-900 mb-4">
          {detailed.title}
        </h1>
        <p className="text-gray-600 text-center w-full">
          {detailed.subtitle}
        </p>

        {/* Hero Gradient Image */}
        <div className="mt-12 rounded-3xl h-[600px] overflow-hidden bg-gradient-to-br from-blue-400 via-purple-300 to-orange-300  flex items-center justify-center relative">
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-pink-200 via-blue-200 to-orange-200 opacity-90 blur-3xl"></div>
          <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-pink-300/80 via-blue-300/80 to-cyan-200/80 shadow-2xl"></div>
        </div>

        {/* Sidebar and Content Grid */}
        <div className="grid grid-cols-5 gap-12 mt-16">
          {/* Sidebar */}
          <div className="col-span-1 space-y-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-6 h-6 bg-green-500 rounded"></div>
              <span className="font-semibold text-gray-900 text-2xl">Project</span>
            </div>
            
            <div className="space-y-4 text-md">
              <div>
                <div className="text-gray-500 font-semibold text-xl mb-1">Industry</div>
                <div className="text-gray-900">
                  {caseStudyId === 'everdry-local' ? 'Local Service' : 
                   caseStudyId === 'blainy-saas' ? 'SaaS' : 
                   'Social Media'}
                </div>
              </div>
              <div>
                <div className="text-gray-500 font-semibold text-xl  mb-1">Services</div>
                <div className="text-gray-900">
                  {caseStudyId === 'everdry-local' ? 'Local SEO' : 
                   caseStudyId === 'blainy-saas' ? 'Growth Marketing' : 
                   'Multi-Channel Social'}
                </div>
              </div>
              <div>
                <div className="text-gray-500 font-semibold text-xl mb-1">Duration</div>
                <div className="text-gray-900">
                  {caseStudyId === 'blainy-saas' ? '12 Months' : '6 Months'}
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
                {detailed.metrics.map((metric: { value: string; label: string }, index: number) => (
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
        <div className="mt-16 space-y-6">
          {/* Floating Discs Image */}
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-pink-200 via-orange-100 to-orange-200 h-96 flex items-center justify-center relative">
            <div className="relative">
              <div className="w-48 h-32 rounded-full bg-gradient-to-br from-pink-100 to-white shadow-2xl transform -rotate-12 absolute -top-8 left-12"></div>
              <div className="w-56 h-36 rounded-full bg-gradient-to-br from-blue-100 to-white shadow-2xl transform rotate-6"></div>
              <div className="w-40 h-28 rounded-full bg-gradient-to-br from-pink-50 to-white shadow-2xl transform -rotate-6 absolute -bottom-6 right-8"></div>
            </div>
          </div>

          {/* Wave Pattern Image */}
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-blue-50 h-96 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="space-y-3">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="h-1 bg-white/40 rounded-full"
                    style={{
                      width: `${200 + i * 40}px`,
                      marginLeft: `${i * 20}px`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Grid Images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 h-64 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-2 w-full px-12">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="h-px bg-purple-300/50"
                      style={{
                        transform: `translateX(${i * 8}px)`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 via-gray-100 to-cyan-100 h-64 relative">
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(135deg, rgba(219, 234, 254, 0.5) 0%, rgba(243, 244, 246, 0.5) 50%, rgba(207, 250, 254, 0.5) 100%)'
              }}></div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials/>
      <FooterCTA/>
    </div>
  );
}