"use client";

import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const CONTACT_INFO = [
  {
    icon: FaPhoneAlt,
    label: "Ph. Phone",
    value: "+92 666 888 0000",
  },
  {
    icon: FaEnvelope,
    label: "Drop us an email",
    value: "needhelp@company.com",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "66 Broklyn Street New York, USA",
  },
];

const EXPLORE_LINKS = {
  col1: ["About", "Meet our Team", "Case studies", "Latest News", "Contact"],
  col2: ["Support", "Terms of use", "Privacy & Policy", "Help"],
};

const SOCIAL_LINKS = [
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedin, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaFacebook, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F0D1D] text-white pt-20 pb-8 border-t border-white/10">
      <div className="container mx-auto max-w-8xl px-4">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 mb-16">
          {/* Brand & Contact - Spans 4 columns */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-lg font-bold">CreativeLogo</h2>
            <p className="text-gray-400 text-sm leading-relaxed pr-8 border-b border-white/10 pb-5">
              Welcome to our consultancy agency. Lore ipsum simply text amet
              cing elit simply text amet cing elit.
            </p>

            <div className="space-y-4">
              {CONTACT_INFO.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex items-center justify-center rounded-sm shrink-0">
                    <item.icon size={16} color="#2D95FD" />
                  </div>
                  <div className="text-sm text-[#8F8DA0]">
                    <div className="text-[#8F8DA0]">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Explore Links - Spans 4 columns */}
          <div className="lg:col-span-4">
            <h3 className="font-bold uppercase tracking-wider mb-8">EXPLORE</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-4">
                {EXPLORE_LINKS.col1.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#3B82F6] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {EXPLORE_LINKS.col2.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#3B82F6] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter - Spans 4 columns */}
          <div className="lg:col-span-4">
            <h3 className="font-bold uppercase tracking-wider mb-8">
              NEWSLETTER
            </h3>
            <div className="bg-[#0b0a17] w-fit py-14 px-10 border border-white/5 rounded-sm">
              <h4 className="font-bold mb-8 text-xl text-gray-300 text-center md:text-left tracking-wide">
                Subscribe for latest articles and resources
              </h4>
              <form className="flex bg-white p-1.5 rounded-sm relative items-center h-16 max-w-md">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent flex-1 text-black px-4 text-sm outline-none placeholder:text-gray-400 font-medium h-full"
                />
                <button className="bg-[#3B82F6] text-white px-5 h-full text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors rounded-sm">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© Copyright 2021 by Company</p>
          <div className="flex gap-6">
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="flex items-center justify-center"
              >
                <social.icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
