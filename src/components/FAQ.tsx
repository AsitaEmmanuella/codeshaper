"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus, FaCheck } from "react-icons/fa";

const FAQS = [
  {
    question: "THINK AHEAD AND BOOST YOUR BUSINESS?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    question: "HOW CONSULTANCY EXPERTS WORK?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    question: "WHAT IS THE BEST ADVICE FOR GROWTH?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    question: "HOW TO IMPROVE YOUR BUSINESS?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
];

const CHECKLIST = [
  "Nsectetur cing elit.",
  "Suspe ndisse suscipit sagittis leo.",
  "Entum estibulum dignissim posuere.",
  "If you are going to use a passage",
  "If you are going to use a passage test data.",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white text-black py-20 lg:py-28 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide uppercase">
            Question Answers
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            We help our clients renew their business
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Accordion */}
          <div className="w-full lg:w-1/2 space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className={`border border-transparent transition-colors ${
                  openIndex === index ? "bg-white shadow-lg" : "bg-[#F3F4F6]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[#3B82F6] font-bold text-sm">
                      {index + 1}.
                    </span>
                    <span className="font-bold text-sm md:text-base uppercase tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-[#3B82F6] text-xs">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Checklist & Stats */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            {/* Checklist */}
            <div className="space-y-4">
              {CHECKLIST.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-[#3B82F6]">
                    <FaCheck size={14} />
                  </span>
                  <span className="text-gray-500 text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Blue Stats Box */}
            <div className="shrink-0">
              <div className="bg-[#3B82F6] text-white p-10 w-42.5 h-42.5 flex flex-col items-center justify-center text-center shadow-2xl">
                <div className="text-5xl font-bold mb-2">30</div>
                <div className="text-sm font-medium leading-tight">
                  Years of <br /> Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
