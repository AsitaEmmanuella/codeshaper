"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

const STATS = [
  { count: "420", label: "CONSULTING SOLUTIONS" },
  { count: "420", label: "CONSULTING SOLUTIONS" },
  { count: "420", label: "CONSULTING SOLUTIONS" },
  { count: "420", label: "CONSULTING SOLUTIONS" },
];

const TAB_CONTENT = [
  {
    title: "Business Growth",
    features: [
      {
        title: "Highest Success Rates",
        text: "Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.",
      },
      {
        title: "We Build Experience",
        text: "Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.",
      },
    ],
    description:
      "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look believable.",
    list: [
      "If you are going to use a passage",
      "Lorem Ipsum you need to be sure",
      "There isn't anything embarrassing",
      "Hidden in the middle of text",
    ],
  },
  {
    title: "Business Growth",
    features: [
      {
        title: "Highest Success Rates",
        text: "Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.",
      },
      {
        title: "We Build Experience",
        text: "Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.",
      },
    ],
    description:
      "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look believable.",
    list: [
      "If you are going to use a passage",
      "Lorem Ipsum you need to be sure",
      "There isn't anything embarrassing",
      "Hidden in the middle of text",
    ],
  },
  {
    title: "Business Growth",
    features: [
      {
        title: "Highest Success Rates",
        text: "Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.",
      },
      {
        title: "We Build Experience",
        text: "Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.",
      },
    ],
    description:
      "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look believable.",
    list: [
      "If you are going to use a passage",
      "Lorem Ipsum you need to be sure",
      "There isn't anything embarrassing",
      "Hidden in the middle of text",
    ],
  },
];

export default function Stats() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white">
      {/* Top Dark Section */}
      <div className="bg-[#0F0D1D] text-white pt-20 pb-52 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {STATS.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-6 p-4 bg-black">
                  <div className="relative w-16 h-16">
                    <Image
                      src="/brainstorming.svg"
                      alt="Stat Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.count}</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs & Content */}
      <div className="container mx-auto max-w-6xl px-4 -mt-16 relative z-10 pb-20">
        {/* Tabs */}
        <div className="flex md:grid md:grid-cols-3 shadow-lg mb-12 overflow-x-auto snap-x no-scrollbar">
          {TAB_CONTENT.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={`min-w-[85vw] md:min-w-0 snap-center shrink-0 p-10 md:p-14 text-center cursor-pointer transition-colors ${
                activeTab === index
                  ? "bg-white"
                  : "bg-[#F3F4F6] border-transparent hover:bg-white"
              }`}
            >
              <h3
                className={`font-bold uppercase tracking-wide ${
                  activeTab === index ? "text-[#3B82F6]" : "text-black"
                }`}
              >
                {tab.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col xl:flex-row ">
          {/* Left Column */}
          <div className="w-full xl:w-2/6 space-y-8 xl:pr-12">
            {TAB_CONTENT[activeTab].features.map((feature, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-16 h-16 bg-blue-50 text-[#3B82F6] flex items-center justify-center rounded-sm shrink-0">
                  <FiCheckCircle size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg uppercase mb-2 text-black">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="w-full xl:w-2/5 xl:border-l xl:border-gray-200 xl:pl-12 pt-8 xl:pt-0">
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {TAB_CONTENT[activeTab].description}
            </p>

            <ul className="space-y-3">
              {TAB_CONTENT[activeTab].list.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-gray-500 font-medium"
                >
                  <span className="w-2 h-0.5 bg-[#3B82F6]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
