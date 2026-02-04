import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100 flex items-center justify-between px-10 py-5">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 bg-[#1e40af] rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">M</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[#171717] font-bold text-lg leading-tight">
            PT MES
          </span>
          <span className="text-gray-500 text-[10px] font-semibold uppercase tracking-tight">
            Media Eduka Sentosa
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-10">
        <Link
          href="/"
          className="text-gray-500 hover:text-[#1e40af] font-medium transition-colors"
        >
          Beranda
        </Link>
        <Link
          href="#tentang-kami"
          className="text-gray-500 hover:text-[#1e40af] font-medium transition-colors"
        >
          Tentang Kami
        </Link>
        <Link
          href="#solusi"
          className="text-gray-500 hover:text-[#1e40af] font-medium transition-colors"
        >
          Solusi & Ekosistem
        </Link>
        <Link
          href="#mengapa-kami"
          className="text-gray-500 hover:text-[#1e40af] font-medium transition-colors"
        >
          Mengapa Kami
        </Link>
        <Link
          href="#cara-kerja"
          className="text-gray-500 hover:text-[#1e40af] font-medium transition-colors"
        >
          Cara Kerja
        </Link>
        <Link href="#jangkauan" className="text-[#1e40af] font-bold">
          Jangkauan
        </Link>
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
