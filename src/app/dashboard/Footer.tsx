"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* Company Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="w-40 h-auto">
              <Image
                src="/Asset 2.jpg"
                alt="PT MES Logo"
                width={160}
                height={60}
                className="w-full h-auto"
                priority
              />
            </div>

            <p className="text-gray-400 font-medium leading-[1.8] max-w-md text-[15px]">
              Solusi pendidikan terintegrasi untuk sekolah di Indonesia. Kami
              menghadirkan ekosistem digital yang handal untuk memajukan
              literasi dan administrasi pendidikan nasional.
            </p>

            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#10b981]/10 transition-colors">
                <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
              </div>
              <p className="text-gray-400 font-bold text-sm">
                Bagian dari{" "}
                <span className="text-white group-hover:text-[#10b981] transition-colors">
                  Magau Group
                </span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:ml-auto">
            <h3 className="font-bold text-lg mb-8 relative inline-block">
              Navigasi
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#1e40af] rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                "Beranda",
                "Tentang Kami",
                "Solusi & Ekosistem",
                "Mengapa Kami",
                "Cara Kerja",
                "Jangkauan",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className="text-gray-400 hover:text-[#10b981] transition-all font-semibold text-[15px] flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-[#10b981] transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="lg:col-span-4 lg:ml-auto w-full max-w-sm">
            <h3 className="font-bold text-lg mb-8 relative inline-block">
              Kontak & Bantuan
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#1e40af] rounded-full"></span>
            </h3>
            <div className="space-y-6">
              <button className="w-full flex items-center justify-between px-6 py-4 bg-[#10b981] hover:bg-[#059669] text-white font-bold rounded-2xl transition-all shadow-xl shadow-teal-500/10 group">
                Hubungi Kami Sekarang
                <ExternalLink
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 text-gray-400 group cursor-pointer hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                    <Mail size={18} className="group-hover:text-blue-400" />
                  </div>
                  <span className="text-sm font-semibold">
                    admin@ptmes.com
                  </span>
                </div>
                <div className="flex items-center gap-4 text-gray-400 group cursor-pointer hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-green-500/10 transition-colors">
                    <Phone size={18} className="group-hover:text-green-400" />
                  </div>
                  <span className="text-sm font-semibold">+62 811-5005-80</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm font-bold tracking-tight">
            © 2026 <span className="text-gray-400">PT Media Eduka Sentosa</span>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-gray-500 hover:text-white text-xs font-bold transition-colors uppercase tracking-widest"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-white text-xs font-bold transition-colors uppercase tracking-widest"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
