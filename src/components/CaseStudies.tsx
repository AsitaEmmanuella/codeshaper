import React from "react";
import { FaCar } from "react-icons/fa";

const CASE_STUDIES = [
  {
    category: "Thought Leadership",
    title: "Businesses Growth",
    icon: FaCar,
  },
  {
    category: "Thought Leadership",
    title: "Businesses Growth",
    icon: FaCar,
  },
  {
    category: "Thought Leadership",
    title: "Businesses Growth",
    icon: FaCar,
    isActive: true,
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-[#F2F4F8] text-black pt-32 pb-20 lg:pt-48 lg:pb-28 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide uppercase">
            New Case Studies
          </h2>
          <p className="text-[#8F8DA0] text-sm md:text-base font-medium">
            We help our clients renew their business
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[400px] lg:h-[500px]">
          {CASE_STUDIES.map((study, index) => (
            <div
              key={index}
              className="relative group overflow-hidden h-full bg-[#FAFAFA]"
            >
              {/* Image Placeholder */}
              <div
                className={`absolute inset-0 bg-[#0F0D1D] opacity-40 transition-transform duration-500 ${
                  !study.isActive ? "group-hover:scale-105 " : ""
                }`}
              />

              {/* Overlay Content */}
              {study.isActive ? (
                <div className="absolute bottom-0 left-0 w-[85%] h-[65%] bg-[#3B82F6] p-10 transition-all duration-300 flex flex-col justify-end z-10">
                  <div className="w-12 h-12 mb-6 text-white">
                    <study.icon size={36} />
                  </div>
                  <div className="text-[10px] font-bold text-white/80 uppercase tracking-widest mb-2">
                    {study.category}
                  </div>
                  <h3 className="text-[26px] font-bold text-white uppercase leading-none">
                    {study.title.split(" ").map((word, i) => (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
                  </h3>
                </div>
              ) : (
                <div className="absolute bottom-0 left-0 p-10 w-full z-10">
                  <div className="w-12 h-12 mb-6 text-white">
                    <study.icon size={36} />
                  </div>
                  <div className="text-[10px] font-bold text-white/80 uppercase tracking-widest mb-2">
                    {study.category}
                  </div>
                  <h3 className="text-[26px] font-bold text-white uppercase leading-none">
                    {study.title.split(" ").map((word, i) => (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
