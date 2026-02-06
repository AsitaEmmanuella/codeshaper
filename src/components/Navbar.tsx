"use client";

import { useState } from "react";
import { FiChevronDown, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const NAV_LINKS = [
  { label: "HOME", href: "#" },
  { label: "SERVICES", href: "#", hasDropdown: true },
  { label: "PAGES", href: "#" },
  { label: "CASE SHOP", href: "#" },
  { label: "BLOG", href: "#" },
  { label: "CONTENT", href: "#" },
];

const SERVICE_LINKS = [
  { label: "SERVICE 1", href: "#" },
  { label: "SERVICE 2", href: "#" },
  { label: "SERVICE 3", href: "#" },
];

const SOCIAL_LINKS = [
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedin, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaFacebook, href: "#" },
];

export default function Navbar() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileServicesDropdown, setShowMobileServicesDropdown] =
    useState(false);

  // Reusable Social Icons Component
  const SocialIcons = ({ iconSize = 18 }: { iconSize?: number }) => (
    <>
      {SOCIAL_LINKS.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="hover:text-gray-300 transition"
        >
          <social.icon size={iconSize} />
        </a>
      ))}
    </>
  );

  return (
    <nav className="bg-[#333333] border-b border-white/20 text-white relative z-50">
      <div className="flex items-stretch h-full">
        {/* Logo Section */}
        <div className="w-45 xl:w-50 shrink-0 flex items-center justify-center border-0 xl:border-r xl:border-white/20 py-8">
          <div className="text-lg font-bold tracking-wide">CreativeLogo</div>
        </div>

        {/* Desktop: Middle Section (Nav + Socials) */}
        <div className="hidden xl:flex flex-1 items-center justify-between px-8 lg:px-12 py-8">
          {/* Navigation Links */}
          <div className="flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-semibold tracking-wider">
            {NAV_LINKS.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative h-full flex items-center"
                  >
                    <button
                      className="flex items-center gap-1 hover:text-gray-300 transition h-full"
                      onMouseEnter={() => setShowServicesDropdown(true)}
                      onMouseLeave={() => setShowServicesDropdown(false)}
                    >
                      {link.label}
                      <FiChevronDown size={14} className="text-blue-400" />
                    </button>

                    {showServicesDropdown && (
                      <div
                        className="absolute top-full left-0 mt-0 bg-[#333333] border border-white/20 shadow-xl min-w-[150px] z-20"
                        onMouseEnter={() => setShowServicesDropdown(true)}
                        onMouseLeave={() => setShowServicesDropdown(false)}
                      >
                        {SERVICE_LINKS.map((service) => (
                          <a
                            key={service.label}
                            href={service.href}
                            className="block px-4 py-3 text-xs font-bold hover:bg-white/10 transition"
                          >
                            {service.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-gray-300 transition"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <SocialIcons iconSize={18} />
          </div>
        </div>

        {/* Desktop: Search Section */}
        <div className="hidden xl:flex w-20 shrink-0 items-center justify-center border-l border-white/20 py-8">
          <button className="hover:text-gray-300 transition">
            <FiSearch size={22} />
          </button>
        </div>

        {/* Desktop: Contact/Help Section */}
        <div className="hidden xl:flex flex-col justify-center px-8 border-l border-white/20 min-w-[200px] py-8">
          <p className="text-[10px] lg:text-xs font-semibold text-gray-300 mb-0.5">
            Need help?
          </p>
          <p className="text-sm lg:text-base font-bold tracking-wide">
            +92 666 888 0000
          </p>
        </div>

        {/* Mobile: Menu Toggle (Replaces Middle + Right sections) */}
        <div className="xl:hidden flex-1 flex items-center justify-end px-6 border-l border-white/20 py-8">
          <button
            className="flex items-center gap-2"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Bottom Sheet */}
      {showMobileMenu && (
        <>
          <div
            className="fixed inset-x-0 bottom-0 top-[120px] backdrop-blur-sm z-40 bg-black/50"
            onClick={() => setShowMobileMenu(false)}
          />

          <div className="fixed bottom-0 left-0 right-0 bg-[#333333] border-t border-white/20 text-white rounded-t-3xl shadow-2xl z-50 max-h-[80vh] overflow-y-auto animate-in slide-in-from-bottom duration-300">
            <div className="px-6 py-8">
              <div className="flex justify-center mb-8">
                <div className="w-12 h-1 bg-white/20 rounded-full" />
              </div>

              <div className="space-y-2">
                {NAV_LINKS.map((link) => {
                  if (link.hasDropdown) {
                    return (
                      <div key={link.label}>
                        <button
                          className="w-full text-left py-3 text-sm font-bold hover:text-gray-300 transition flex items-center justify-between"
                          onClick={() =>
                            setShowMobileServicesDropdown(
                              !showMobileServicesDropdown,
                            )
                          }
                        >
                          {link.label}
                          <FiChevronDown
                            size={16}
                            className={`transition ${
                              showMobileServicesDropdown ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {showMobileServicesDropdown && (
                          <div className="pl-4 border-l border-white/10 ml-1 mt-1 mb-3">
                            {SERVICE_LINKS.map((service) => (
                              <a
                                key={service.label}
                                href={service.href}
                                className="block py-2 text-xs font-bold text-gray-400 hover:text-white transition"
                                onClick={() => setShowMobileMenu(false)}
                              >
                                {service.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block py-3 text-sm font-bold hover:text-gray-300 transition"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>

              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/20">
                <SocialIcons iconSize={20} />
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
