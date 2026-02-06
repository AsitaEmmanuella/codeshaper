import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TESTIMONIALS = [
  {
    text: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet,consectetur notted adipisicing elit sed do eiusmod tempor",
    name: "TODD HIGGINS",
    role: "CUSTOMER",
  },
  {
    text: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet,consectetur notted adipisicing elit sed do eiusmod tempor",
    name: "TODD HIGGINS",
    role: "CUSTOMER",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F3F4F6] text-black py-20 xl:py-28 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-center">
          {/* Left: Heading & Nav */}
          <div className="w-full xl:w-1/3 space-y-8">
            <h2 className="text-4xl xl:text-5xl font-bold uppercase leading-tight tracking-wide">
              What They <br /> Are Talking <br /> About?
            </h2>

            <p className="text-gray-500 text-sm font-medium">
              Trusted by more than 4,200 customers
            </p>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#3B82F6] hover:text-white transition-colors">
                <FaArrowLeft size={18} />
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#3B82F6] hover:text-white transition-colors">
                <FaArrowRight size={18} />
              </div>
            </div>
          </div>

          {/* Right: Testimonial Cards */}
          <div className="w-full xl:w-2/3 flex flex-col md:flex-row gap-6">
            {TESTIMONIALS.map((item, index) => (
              <div key={index} className="bg-white p-10 shadow-sm flex-1">
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {item.text}
                </p>
                <div>
                  <h4 className="text-[#3B82F6] font-bold text-sm uppercase mb-1">
                    {item.name}
                  </h4>
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    {item.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
