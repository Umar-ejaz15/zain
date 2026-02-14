"use client";
import Link from "next/link";

type CaseStudy = {
  id: string;
  title: string;
  image: string;
  image2?: string;
  description?: string;
  numbers?: string[];
  challenge?: string;
  strategy?: string;
  result?: string;
  cta: string;
  bgColor: string;
};

interface ProjectCaseStudyProps {
  caseData: CaseStudy[];
}

export default function ProjectCaseStudy({ caseData }: ProjectCaseStudyProps) {
  return (
    <section
      id="cards"
      className="relative flex flex-col items-center max-w-[1400px] mx-auto gap-8 py-24 px-6 sm:px-12"
    >
      {caseData.map((item, index) => (
        <div
          key={item.id || index}
          className="w-full card card-content rounded-3xl shadow-[0_10px_40px_-14px_rgba(0,0,0,0.05)]"
          style={{ backgroundColor: item.bgColor }}
        >
          <div className="flex flex-col-reverse lg:flex-row items-stretch gap-0 p-8 sm:p-10 lg:py-14 lg:pl-14 lg:pr-8">
            {/* Left Content */}
            <div className="w-full lg:w-[45%] flex flex-col justify-between pt-6 lg:pt-0 lg:pr-10">
              {/* Top Group: Title + Description + Pills */}
              <div className="space-y-5">
                {/* Title */}
                <h2 className="text-2xl sm:text-[1.75rem] lg:text-[2rem] font-semibold text-[#111011] leading-[1.2] tracking-[-0.02em]">
                  {item.title}
                </h2>

                {/* Description */}
                {item.description && (
                  <p className="text-[15px] text-[#111011]/75 leading-[1.65]">
                    {item.description}
                  </p>
                )}

                {/* Feature Pills */}
                {item.numbers && item.numbers.length > 0 && (
                  <div className="flex flex-col gap-3">
                    {item.numbers.map((num, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-2.5 bg-white rounded-[36px] px-4 py-2.5 w-fit"
                      >
                        <span
                          className="w-5 h-5 flex-shrink-0 rounded-[36px]"
                          style={{
                            background:
                              "radial-gradient(100% 100% at 25% 100%, rgb(205, 87, 255) 0%, rgb(255, 206, 31) 100%)",
                          }}
                        />
                        <span className="text-sm font-medium text-[#111011]">
                          {num}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* View Project Link - pushed to bottom */}
              <Link
                href={`/case-studies/${item.id}`}
                className="inline-flex items-center gap-1.5 group mt-10"
              >
                <span className="text-[15px] text-[#111011]/60">
                  View Project
                </span>
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="rgba(17, 16, 17, 0.6)"
                >
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </Link>
            </div>

            {/* Right Images */}
            <div className="w-full lg:w-[55%] flex flex-col gap-2">
              {/* Top Image */}
              <div className="relative w-full overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 sm:h-64 lg:h-[280px] object-cover"
                />
              </div>

              {/* Bottom Image */}
              <div className="relative w-full overflow-hidden rounded-b-2xl">
                <img
                  src={item.image2 || item.image}
                  alt={`${item.title} detail`}
                  className="w-full h-36 sm:h-40 lg:h-[180px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
