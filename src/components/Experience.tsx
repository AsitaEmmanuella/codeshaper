import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SiBitbucket } from "react-icons/si";

const SERVICES = [
  { title: "WEALTH MANAGEMENT", link: "READ MORE" },
  { title: "WEALTH MANAGEMENT", link: "READ MORE" },
  { title: "WEALTH MANAGEMENT", link: "READ MORE" },
];

export default function Experience() {
  return (
    <section className="bg-[#0F0D1D] text-white py-20 lg:py-28 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide uppercase">
            Real-World Experience
          </h2>
          <p className="text-[#726F84] text-sm md:text-base font-medium">
            The best business consulting firm you can count on!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {SERVICES.map((item, index) => (
            <div
              key={index}
              className="bg-black p-10 flex flex-col justify-between group h-[280px] relative overflow-hidden transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="space-y-6 z-10">
                <h3 className="text-xl font-bold leading-snug tracking-wider max-w-[150px]">
                  {item.title.split(" ").map((word, i) => (
                    <span key={i} className="block">
                      {word}
                    </span>
                  ))}
                </h3>
                <a
                  href="#"
                  className="inline-block text-[10px] font-bold text-gray-400 group-hover:text-white transition-colors tracking-widest uppercase"
                >
                  {item.link}
                </a>
              </div>

              {/* Blue Icon/Shape */}
              <div className="absolute bottom-10 right-10">
                <div className="">
                  <SiBitbucket size={70} className="text-[#3C72FC]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners Footer */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-white/10 flex-1" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-white">
              Meet the Partners
            </span>
            <div className="h-px bg-white/10 flex-1" />
          </div>

          <div className="flex justify-between items-center px-4">
            <div className="w-10 h-10 bg-[#4D7BF22B] border border-[#3C72FC4D] flex items-center justify-center">
              <FaArrowLeft
                size={14}
                className="text-blue-500 transition-colors"
              />
            </div>
            <div className="w-10 h-10 bg-[#4D7BF22B] border border-[#3C72FC4D] flex items-center justify-center">
              <FaArrowRight
                size={14}
                className="text-blue-500 hover:text-white transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
