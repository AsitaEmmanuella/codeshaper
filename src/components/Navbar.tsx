"use client";

import { useState } from "react";
import { FiChevronDown, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Navbar() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileServicesDropdown, setShowMobileServicesDropdown] =
    useState(false);

  return (
    <nav className="bg-[#70707080] border border-[#707070] text-white px-4 md:px-6 py-8 relative z-50">
      <div className="flex items-center justify-between relative z-50">
        <div className="flex gap-6 border-r">
          {/* Logo */}
          <div className="text-xl md:text-xl font-bold text-white">
            CreativeLogo
          </div>

          {/* Hamburger Menu Button - Mobile */}
          <button
            className="md:hidden flex items-center gap-2"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Main Navigation Menu - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-gray-300 transition">
              HOME
            </a>

            {/* Services with Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 hover:text-gray-300 transition"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                SERVICES
                <FiChevronDown size={16} />
              </button>

              {showServicesDropdown && (
                <div
                  className="absolute left-0 mt-2 bg-gray-800 rounded-md shadow-lg z-10"
                  onMouseEnter={() => setShowServicesDropdown(true)}
                  onMouseLeave={() => setShowServicesDropdown(false)}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 whitespace-nowrap"
                  >
                    Service 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 whitespace-nowrap"
                  >
                    Service 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 whitespace-nowrap"
                  >
                    Service 3
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-gray-300 transition">
              PAGES
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              CASE SHOP
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              BLOG
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              CONTENT
            </a>
          </div>
        </div>

        {/* Right Section - Social Icons & Help - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-300 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaFacebook size={20} />
            </a>
          </div>

          {/* Search Icon */}
          <button className="hover:text-gray-300 transition">
            <FiSearch size={20} />
          </button>

          {/* Need Help Section */}
          <div className="border-l border-gray-600 pl-6 text-right">
            <p className="text-sm font-semibold">Need help?</p>
            <p className="text-lg font-bold">+92 666 888 0000</p>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Sheet */}
      {showMobileMenu && (
        <>
          {/* Overlay with Blur */}
          <div
            className="fixed inset-x-0 bottom-0 top-16 backdrop-blur-sm z-40"
            onClick={() => setShowMobileMenu(false)}
          />

          {/* Bottom Sheet */}
          <div className="fixed bottom-0 left-0 right-0 bg-gray-700 text-white rounded-t-3xl shadow-lg z-50 max-h-[80vh] overflow-y-auto animate-in slide-in-from-bottom duration-300">
            <div className="px-4 py-6">
              {/* Close indicator bar */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-1 bg-gray-600 rounded-full" />
              </div>

              <a
                href="#"
                className="block py-3 px-2 text-lg hover:bg-gray-600 transition rounded"
                onClick={() => setShowMobileMenu(false)}
              >
                HOME
              </a>

              <button
                className="w-full text-left py-3 px-2 text-lg hover:bg-gray-600 transition rounded flex items-center justify-between"
                onClick={() =>
                  setShowMobileServicesDropdown(!showMobileServicesDropdown)
                }
              >
                SERVICES
                <FiChevronDown
                  size={16}
                  className={`transition ${showMobileServicesDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showMobileServicesDropdown && (
                <div className="pl-4 bg-gray-800 rounded mt-2">
                  <a
                    href="#"
                    className="block px-3 py-2 hover:bg-gray-700 rounded"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Service 1
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 hover:bg-gray-700 rounded"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Service 2
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 hover:bg-gray-700 rounded"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Service 3
                  </a>
                </div>
              )}

              <a
                href="#"
                className="block py-3 px-2 text-lg hover:bg-gray-600 transition rounded"
                onClick={() => setShowMobileMenu(false)}
              >
                PAGES
              </a>

              <a
                href="#"
                className="block py-3 px-2 text-lg hover:bg-gray-600 transition rounded"
                onClick={() => setShowMobileMenu(false)}
              >
                CASE SHOP
              </a>

              <a
                href="#"
                className="block py-3 px-2 text-lg hover:bg-gray-600 transition rounded"
                onClick={() => setShowMobileMenu(false)}
              >
                BLOG
              </a>

              <a
                href="#"
                className="block py-3 px-2 text-lg hover:bg-gray-600 transition rounded"
                onClick={() => setShowMobileMenu(false)}
              >
                CONTENT
              </a>

              {/* Mobile Social Icons */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-600">
                <a href="#" className="hover:text-gray-300 transition">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="hover:text-gray-300 transition">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="hover:text-gray-300 transition">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="hover:text-gray-300 transition">
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
