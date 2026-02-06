import React from "react";

export default function Hero() {
  return (
    <div className="flex bg-[#333333] items-stretch md:min-h-[calc(100vh-80px)]">

      {/* Main Content Column (Matches Nav) */}
      <div className="flex-1 px-8 lg:px-40 flex flex-col justify-center py-20 lg:py-32">
        <div className="text-xs w-fit md:text-sm font-bold tracking-[0.2em] text-gray-300 mb-6 p-4 bg-[#434B4DBD] opacity-73 uppercase">
          Welcome to Codeshaper
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight uppercase mb-10 max-w-4xl">
          Consulting <br />
          For Every <br />
          Business
        </h1>
        <div>
          <button className="bg-[#3B82F6] hover:bg-blue-600 text-white text-xs md:text-sm font-bold py-4 px-10 uppercase tracking-widest transition-colors duration-300">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}
