import React from "react";

export default function Mission() {
  return (
    <section className="relative text-white py-24 lg:py-32 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-400 opacity-40 -z-10" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold uppercase leading-tight mb-10 tracking-wide">
          Mission is to protect <br className="hidden md:block" />
          your businesses & <br className="hidden md:block" /> much more
        </h2>

        <button className="bg-[#3B82F6] text-white font-bold py-4 px-10 text-xs md:text-sm tracking-widest uppercase transition-colors rounded-sm">
          Discover More
        </button>
      </div>
    </section>
  );
}
