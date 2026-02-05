"use client";

import React from "react";
import Image from "next/image";
import {
  BookOpen,
  FileText,
  TrendingUp,
  Layers,
  Users,
  Cog,
  Mail,
  Phone,
} from "lucide-react";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-gray-100 to-white pt-20 pb-20 lg:pt-32 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Hero Content */}
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/10 text-black rounded-full text-sm font-bold mb-8">
                <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                Solusi Pendidikan Sekolah, Satu Ekosistem
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#171717] leading-[1.1] mb-8">
                Solusi Pendidikan Terintegrasi untuk Sekolah di Indonesia
              </h1>
              <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                Kami membantu sekolah memenuhi kebutuhan pembelajaran, literasi,
                asesmen pendidikan, pengembangan kapasitas, sarana penunjang,
                sistem operasional, dan publikasi digital—selaras dengan Dana
                BOSP Reguler maupun sumber dana pendidikan sah lainnya.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button className="w-full sm:w-auto px-8 py-4 bg-black text-white font-bold rounded-2xl shadow-lg shadow-black/20 hover:bg-gray-800 transition-all transform hover:-translate-y-1">
                  Konsultasi Kebutuhan Sekolah
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-2xl border-2 border-black/10 hover:border-black hover:bg-gray-50 transition-all transform hover:-translate-y-1">
                  Minta Katalog & Proposal
                </button>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl transform rotate-1 lg:rotate-2 border-12 border-white bg-white">
                <Image
                  src="/siswa-sekolah-dasar-ilustrasi-_120411093327-641.jpg"
                  alt="Students learning"
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              {/* Stats Card Overlay */}
              <div className="absolute -bottom-10 -left-10 lg:-left-20 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 animate-bounce-slow border border-gray-100">
                <div className="w-14 h-14 bg-gray-100 text-black rounded-2xl flex items-center justify-center">
                  <Users size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-3xl font-black text-[#171717]">500+</p>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                    Sekolah Terlayani
                  </p>
                </div>
              </div>

              {/* Decorative Blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gray-400/20 blur-[100px] -z-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f8fafc] p-8 rounded-4xl border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-gray-100 text-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#171717] mb-4">
                Lengkap
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                Dari konten pembelajaran sampai sistem digital sekolah yang
                terintegrasi.
              </p>
            </div>

            <div className="bg-[#f8fafc] p-8 rounded-4xl border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-gray-200 text-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#171717] mb-4">
                Rapi Administrasi
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                Output dan dokumen pendukung yang terstruktur dan jelas.
              </p>
            </div>

            <div className="bg-[#f8fafc] p-8 rounded-4xl border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-gray-300 text-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#171717] mb-4">
                Skalabel
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                Solusi untuk semua jenjang dari PAUD hingga SMA/SMK.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="bg-[#f8fafc] py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] mb-4">
            Pelajari Lebih Lanjut
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-16">
            Temukan bagaimana PT MES dapat membantu sekolah Anda berkembang
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Ekosistem Solusi",
                icon: <Layers size={24} />,
                desc: "Lihat berbagai brand dan layanan kami",
              },
              {
                title: "Mengapa Kami",
                icon: <Users size={24} />,
                desc: "Keunggulan bekerja sama dengan PT MES",
              },
              {
                title: "Cara Kerja",
                icon: <Cog size={24} />,
                desc: "Proses kolaborasi yang terstruktur",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-gray-400 group-hover:text-black transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#171717]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-gray-400 text-sm font-semibold">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-800 opacity-20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-700 opacity-20 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8">
            Siap Berkembang Bersama PT MES?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 opacity-80 leading-relaxed">
            Konsultasikan kebutuhan sekolah Anda dengan tim kami. Kami siap
            membantu mewujudkan ekosistem pendidikan yang lebih baik.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a
              href="mailto:info@ptmes.id"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-100 transition-all shadow-xl shadow-black/10"
            >
              <Mail size={20} />
              Email: info@ptmes.id
            </a>
            <a
              href="tel:+62123456789"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gray-700 text-white font-bold rounded-2xl hover:bg-gray-600 transition-all shadow-xl shadow-black/10"
            >
              <Phone size={20} />
              Telepon: +62 811-5005-80
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
