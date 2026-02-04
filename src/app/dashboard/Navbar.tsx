"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navbar = ({ activeSection, onSectionChange }: NavbarProps) => {
  const menuItems = [
    { id: "beranda", label: "Beranda" },
    { id: "tentang-kami", label: "Tentang Kami" },
    { id: "solusi", label: "Solusi & Ekosistem" },
    { id: "mengapa-kami", label: "Mengapa Kami" },
    { id: "cara-kerja", label: "Cara Kerja" },
    { id: "jangkauan", label: "Jangkauan" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100 flex items-center justify-between px-10 py-5">
      {/* Logo Section */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => onSectionChange("beranda")}
      >
        <div className="w-32 h-auto">
          <Image
            src="/Asset 2.jpg"
            alt="PT MES Logo"
            width={128}
            height={48}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-10">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`font-medium transition-all duration-300 relative group py-2 ${
              activeSection === item.id
                ? "text-[#1e40af] font-bold"
                : "text-gray-500 hover:text-[#1e40af]"
            }`}
          >
            {item.label}
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1e40af] transition-all duration-300 origin-left ${
                activeSection === item.id
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-5">
        <Link
          href="/login"
          className="flex items-center gap-2 bg-[#1e3a8a] text-white px-8 py-2.5 rounded-full font-bold text-sm hover:bg-[#1e3a8a]/90 transition-all shadow-md active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
          Login
        </Link>
        <Link
          href="#contact"
          className="bg-[#059669] text-white px-8 py-2.5 rounded-2xl font-bold text-sm hover:bg-[#059669]/90 transition-all shadow-md active:scale-95"
        >
          Hubungi Kami
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
