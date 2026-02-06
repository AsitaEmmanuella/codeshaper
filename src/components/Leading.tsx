import React from "react";
import { FaPlay, FaPhoneAlt } from "react-icons/fa";

export default function Leading() {
  return (
    <section className="bg-white text-black py-20 lg:py-28 relative">
      {/* Watermark removed */}

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left: Video Placeholder */}
          <div className="w-full lg:w-1/2 relative lg:min-h-100 flex mt-5 px-4">
            {/* Abstract blobs background or image would go here */}
            <div className="absolute top-10 left-10 w-24 h-24 bg-blue-100 rounded-full blur-xl -z-10"></div>

            {/* Play Button Box */}
            <div className="w-20 h-20 bg-[#3B82F6] text-white flex items-center justify-center shadow-2xl transition-colors">
              <FaPlay size={20} className="ml-1" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 flex gap-4 lg:gap-8 show-watermark-container">
            {/* Text Content */}
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold uppercase leading-tight">
                We’re Leading in <br /> The Market
              </h2>

              <p className="text-gray-500 leading-relaxed font-medium">
                Lorem ipsum is simply free text dolor sit amet, consectetur
                notted adipisicing elit sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua lonm andhn.
              </p>

              <p className="text-[#3B82F6] text-lg font-medium">
                We have 35+ years of experience. We offer marketing and
                consulting services
              </p>

              {/* Progress Bars */}
              <div className="space-y-6 pt-2">
                {/* Consulting */}
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase mb-2">
                    <span>Consulting</span>
                    <span className="text-gray-400">88%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-[#3B82F6] w-[88%] relative">
                      {/* Dot at end */}
                      {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-[#3B82F6] rounded-full"></div> */}
                    </div>
                  </div>
                </div>

                {/* Advices */}
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase mb-2">
                    <span>Advices</span>
                    <span className="text-gray-400">68%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-[#3B82F6] w-[68%]"></div>
                  </div>
                </div>
              </div>

              {/* Phone CTA */}
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 bg-blue-50 text-[#3B82F6] flex items-center justify-center rounded-sm">
                  <FaPhoneAlt size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium mb-0.5">
                    Have any question? Give us a call
                  </div>
                  <div className="text-sm font-bold tracking-wide">
                    +92 666 888 0000
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Watermark */}
            <div className="text-[120px] leading-none font-light text-gray-50 [writing-mode:vertical-rl] select-none pointer-events-none hidden lg:block tracking-widest">
              AIVONS
            </div>
          </div>
        </div>

        {/* Floating Cards (Bottom overlapping) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 lg:mt-32 -mb-24 lg:-mb-44 relative z-20">
          {/* Card 1 */}
          <div className="bg-white p-8 lg:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex items-start gap-6 border-l-4 border-transparent hover:border-[#3B82F6] transition-colors group">
            <div className="w-12 h-12 bg-blue-50 text-[#3B82F6] shrink-0 flex items-center justify-center font-bold text-xl rounded-sm group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
              01
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-lg uppercase tracking-wide">
                Get Professional Advice
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                There are many variations of available but the majority have
                suffered alteration.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 lg:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex items-start gap-6 border-l-4 border-transparent hover:border-[#3B82F6] transition-colors group">
            <div className="w-12 h-12 bg-blue-50 text-[#3B82F6] shrink-0 flex items-center justify-center font-bold text-xl rounded-sm group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
              02
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-lg uppercase tracking-wide">
                Trusted & Professional
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                There are many variations of available but the majority have
                suffered alteration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
