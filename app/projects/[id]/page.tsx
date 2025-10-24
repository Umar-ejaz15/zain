"use client";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, TrendingUp, Target, Lightbulb, Wrench } from "lucide-react";
import { useCaseStudy } from "@/context/CaseStudiesContext";

export default function CaseStudyDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const { preview, detailed } = useCaseStudy(id);

  if (!detailed || !preview) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F6F4]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <Link href="/projects" className="text-indigo-600 hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F4]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium mb-8 group transition-all"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Case Studies
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              {detailed.hero.headline}
            </h1>

            {/* Stats Grid */}
            {detailed.hero.stats && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
                {detailed.hero.stats.map((stat: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-indigo-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Hero Focus (for cases without stats) */}
            {detailed.hero.focus && (
              <p className="text-xl md:text-2xl text-gray-700 font-medium mt-8">
                {detailed.hero.focus}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      {detailed.overview && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <Target className="text-indigo-600" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Overview</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Client</p>
                  <p className="text-lg text-gray-900 font-semibold">{detailed.overview.client}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Industry</p>
                  <p className="text-lg text-gray-900 font-semibold">{detailed.overview.industry}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Timeline</p>
                  <p className="text-lg text-gray-900 font-semibold">{detailed.overview.timeline}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Role</p>
                  <p className="text-lg text-gray-900 font-semibold">{detailed.overview.role}</p>
                </div>
                {detailed.overview.location && (
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Location</p>
                    <p className="text-lg text-gray-900 font-semibold">{detailed.overview.location}</p>
                  </div>
                )}
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-l-4 border-amber-500">
                <p className="text-sm font-bold text-amber-900 uppercase tracking-wider mb-3">The Challenge</p>
                <p className="text-lg text-gray-800 leading-relaxed">{detailed.overview.challenge}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Challenge Section (for Reddit case study) */}
      {detailed.challenge && (
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 border-l-4 border-red-500"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <p className="text-xl text-gray-800 leading-relaxed">{detailed.challenge.description}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Why It Works Section (Reddit & Multi-channel) */}
      {(detailed.whyRedditWorks || detailed.whyMultiChannel) && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                {detailed.whyRedditWorks ? "Why Reddit Works" : "Why Multi-Channel Works"}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {(detailed.whyRedditWorks || detailed.whyMultiChannel)?.map((item: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Strategy/Strategies Section */}
      {(detailed.strategies || detailed.strategy) && (
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-12">
                <TrendingUp className="text-indigo-600" size={40} />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
                  {detailed.strategies ? "My Strategy" : "The Strategy"}
                </h2>
              </div>

              <div className="space-y-8">
                {detailed.strategies?.map((strategy: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                          {strategy.title || strategy.phase}
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">{strategy.description}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    {strategy.actions && (
                      <div className="mb-6 bg-blue-50 rounded-2xl p-6">
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Wrench size={20} className="text-indigo-600" />
                          What I Did:
                        </h4>
                        <ul className="space-y-3">
                          {strategy.actions.map((action: string, i: number) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="text-indigo-600 mt-1 flex-shrink-0" size={20} />
                              <span className="text-gray-800">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Content Types */}
                    {strategy.contentTypes && (
                      <div className="mb-6 bg-purple-50 rounded-2xl p-6">
                        <h4 className="font-bold text-gray-900 mb-4">Content Types That Worked:</h4>
                        <ul className="space-y-3">
                          {strategy.contentTypes.map((type: string, i: number) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                              <span className="text-gray-800">{type}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tactics */}
                    {strategy.tactics && (
                      <div className="mb-6 bg-green-50 rounded-2xl p-6">
                        <h4 className="font-bold text-gray-900 mb-4">Tactics:</h4>
                        <ul className="space-y-3">
                          {strategy.tactics.map((tactic: string, i: number) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                              <span className="text-gray-800">{tactic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Focus Areas */}
                    {strategy.focusAreas && (
                      <div className="mb-6 bg-amber-50 rounded-2xl p-6">
                        <h4 className="font-bold text-gray-900 mb-4">Focus Areas:</h4>
                        <div className="flex flex-wrap gap-3">
                          {strategy.focusAreas.map((area: string, i: number) => (
                            <span key={i} className="bg-amber-200 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold">
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    {strategy.content && (
                      <div className="mb-6 bg-teal-50 rounded-2xl p-6">
                        <h4 className="font-bold text-gray-900 mb-4">Content Created:</h4>
                        <ul className="space-y-3">
                          {strategy.content.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                              <span className="text-gray-800">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Results */}
                    {strategy.results && (
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-500">
                        <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                          <TrendingUp size={20} />
                          Results:
                        </h4>
                        <ul className="space-y-3">
                          {strategy.results.map((result: string, i: number) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="text-green-600 font-bold text-xl">→</span>
                              <span className="text-gray-800 font-medium">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Criteria */}
                    {strategy.criteria && (
                      <div className="mt-4 text-sm text-gray-600 italic bg-gray-50 rounded-xl p-4">
                        <strong>Selection Criteria:</strong> {strategy.criteria}
                      </div>
                    )}

                    {/* Time Investment */}
                    {strategy.timeInvestment && (
                      <div className="mt-4 text-sm text-indigo-700 font-semibold bg-indigo-50 rounded-xl p-4">
                        ⏱️ Time Investment: {strategy.timeInvestment}
                      </div>
                    )}

                    {/* Single Result */}
                    {strategy.result && (
                      <div className="mt-4 bg-green-50 rounded-xl p-4 border-l-4 border-green-500">
                        <p className="text-gray-800 font-medium">{strategy.result}</p>
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Reddit Strategy Phases */}
                {detailed.strategy?.map((phase: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-3xl p-8 md:p-10 shadow-xl"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      Phase {index + 1}: {phase.phase}
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">{phase.description}</p>

                    {phase.actions && (
                      <div className="mb-4 bg-blue-50 rounded-2xl p-6">
                        <ul className="space-y-3">
                          {phase.actions.map((action: string, i: number) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="text-indigo-600 mt-1 flex-shrink-0" size={20} />
                              <span className="text-gray-800">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {phase.contentTypes && (
                      <div className="bg-purple-50 rounded-2xl p-6">
                        <h4 className="font-bold mb-3">Content Types:</h4>
                        <ul className="space-y-2">
                          {phase.contentTypes.map((type: string, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span>{type}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Platform Strategies (Multi-channel) */}
      {detailed.platformStrategies && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Platform-Specific Strategies
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {detailed.platformStrategies.map((platform: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <h3 className="text-2xl font-bold text-indigo-600 mb-2">{platform.platform}</h3>
                  <p className="text-gray-600 font-medium mb-4">{platform.strategy}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Content:</h4>
                    <ul className="space-y-2 text-sm">
                      {platform.content.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-indigo-600">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Results:</h4>
                    <ul className="space-y-1 text-sm">
                      {platform.results.map((result: string, i: number) => (
                        <li key={i} className="text-gray-700">→ {result}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {detailed.results && (
        <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
                The Results
              </h2>

              {/* Service Business Results */}
              {detailed.results.visibility && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-4">Visibility</h3>
                    <ul className="space-y-2 text-sm">
                      {detailed.results.visibility.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-green-600 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-4">Leads</h3>
                    <ul className="space-y-2 text-sm">
                      {detailed.results.leads.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-green-600 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-4">Reputation</h3>
                    <ul className="space-y-2 text-sm">
                      {detailed.results.reputation.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-green-600 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-4">Pipeline</h3>
                    <ul className="space-y-2 text-sm">
                      {detailed.results.pipeline.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-green-600 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Reddit Results */}
              {detailed.results.hify && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-xl">
                    <h3 className="text-2xl font-bold text-indigo-600 mb-6">Hify Results</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="text-green-600 mt-1" size={24} />
                        <div>
                          <p className="font-semibold text-gray-900">Users</p>
                          <p className="text-gray-700">{detailed.results.hify.users}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="text-green-600 mt-1" size={24} />
                        <div>
                          <p className="font-semibold text-gray-900">Conversions</p>
                          <p className="text-gray-700">{detailed.results.hify.conversions}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="text-green-600 mt-1" size={24} />
                        <div>
                          <p className="font-semibold text-gray-900">Traffic</p>
                          <p className="text-gray-700">{detailed.results.hify.traffic}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-xl">
                    <h3 className="text-2xl font-bold text-purple-600 mb-6">Blainy Results</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="text-green-600 mt-1" size={24} />
                        <div>
                          <p className="font-semibold text-gray-900">Users</p>
                          <p className="text-gray-700">{detailed.results.blainy.users}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="text-green-600 mt-1" size={24} />
                        <div>
                          <p className="font-semibold text-gray-900">Quality</p>
                          <p className="text-gray-700">{detailed.results.blainy.quality}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="text-green-600 mt-1" size={24} />
                        <div>
                          <p className="font-semibold text-gray-900">Retention</p>
                          <p className="text-gray-700">{detailed.results.blainy.retention}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Multi-channel Results */}
              {detailed.results.overview && (
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <p className="text-xl text-gray-700 mb-6">{detailed.results.overview}</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {detailed.results.metrics.map((metric: string, i: number) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="text-green-600 mt-1" size={20} />
                        <span className="text-gray-800">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Key Takeaways */}
      {detailed.keyTakeaways && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-12">
                <Lightbulb className="text-amber-500" size={40} />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
                  Key Takeaways
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {detailed.keyTakeaways.map((takeaway: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-amber-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {takeaway.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{takeaway.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Framework (Reddit Marketing) */}
      {detailed.framework && (
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
                Reddit Marketing Framework
              </h2>

              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <ol className="space-y-4">
                  {detailed.framework.map((step: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-lg text-gray-800 pt-1.5">{step}</p>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Mistakes Avoided (Reddit) */}
      {detailed.mistakesAvoided && (
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Common Mistakes I Avoided
              </h2>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 shadow-xl border-2 border-red-200">
                <ul className="space-y-4">
                  {detailed.mistakesAvoided.map((mistake: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-red-600 font-bold text-2xl flex-shrink-0">✗</span>
                      <span className="text-lg text-gray-800 pt-1">{mistake}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Content Framework (Multi-channel) */}
      {detailed.contentFramework && (
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
                {detailed.contentFramework.title}
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {detailed.contentFramework.pillars.map((pillar: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
                  >
                    <h3 className="text-3xl font-bold text-indigo-600 mb-4">{pillar.name}</h3>
                    <p className="text-gray-800 mb-4 leading-relaxed">{pillar.description}</p>
                    <p className="text-sm text-gray-600 font-medium">
                      <strong>Best for:</strong> {pillar.platforms}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Distribution Strategy (Multi-channel) */}
      {detailed.distributionStrategy && (
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                {detailed.distributionStrategy.title}
              </h2>
              <p className="text-xl text-gray-700 text-center mb-12">
                {detailed.distributionStrategy.description}
              </p>

              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="space-y-3">
                  {detailed.distributionStrategy.example.map((step: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-3 text-gray-800 text-lg"
                    >
                      {index === 0 ? (
                        <span className="text-indigo-600 font-bold">🎬</span>
                      ) : (
                        <span className="text-indigo-600 font-bold">→</span>
                      )}
                      <span>{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Service vs SaaS (Local Business) */}
      {detailed.serviceVsSaaS && (
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Service Business vs SaaS Marketing
              </h2>

              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Differences:</h3>
                <ul className="space-y-3 mb-8">
                  {detailed.serviceVsSaaS.differences.map((diff: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-indigo-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-800">{diff}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border-l-4 border-indigo-500">
                  <p className="text-lg text-gray-800 font-medium italic">
                    {detailed.serviceVsSaaS.principle}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Tools Used */}
      {detailed.tools && (
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-12">
                <Wrench className="text-gray-700" size={40} />
                <h2 className="text-4xl font-bold text-gray-900 text-center">Tools Used</h2>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {detailed.tools.map((tool: string, index: number) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white text-gray-900 px-5 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Want Results Like This?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're launching a SaaS, scaling a service business, or dominating social media—I can replicate this system for you.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-indigo-600 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Book Your Free Strategy Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-12 px-4 bg-[#F8F6F4]">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold text-lg group transition-all"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            View All Case Studies
          </Link>
        </div>
      </section>
    </div>
  );
}