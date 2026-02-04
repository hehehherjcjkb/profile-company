"use client";

import React from "react";
import {
  Book,
  UserCheck,
  GraduationCap,
  Code2,
  Target,
  BarChart3,
  DoorOpen,
  LineChart,
  Settings2,
  ChevronRight,
} from "lucide-react";

const Solutions = () => {
  const brands = [
    {
      title: "Nawasena Publishing",
      icon: <Book size={24} />,
      desc: "Penerbit buku pendidikan dan konten pembelajaran berkualitas untuk semua jenjang.",
      target: "Target:  PAUD–SMA/SMK",
      color: "blue",
    },
    {
      title: "Q Personality",
      icon: <UserCheck size={24} />,
      desc: "Layanan asesmen psikologi dan deteksi potensi untuk pemetaan bakat minat peserta didik.",
      target: "Target: SD–SMA/SMK",
      color: "purple",
    },
    {
      title: "Mentorbox (Kolaborasi)",
      icon: <GraduationCap size={24} />,
      desc: "Platform pengembangan kapasitas, pelatihan, dan mentoring bagi tenaga pendidik profesional.",
      target: "Target: PAUD–SMK",
      color: "green",
    },
    {
      title: "MJD Software House (Kolaborasi)",
      icon: <Code2 size={24} />,
      desc: "Solusi pengembangan sistem informasi dan aplikasi digital custom untuk manajemen sekolah.",
      target: "PAUD–SMA/SMK",
      color: "teal",
    },
    {
      title: "EDUVANTE",
      icon: <Target size={24} />,
      desc: "Program unggulan dan inovasi kurikulum untuk meningkatkan daya saing global sekolah.",
      target: "Target: PAUD–SMA/SMK",
      color: "orange",
    },
    {
      title: "MKD Digital Agency (Kolaborasi)",
      icon: <BarChart3 size={24} />,
      desc: "Layanan publikasi digital, branding sosial media, dan promosi strategis institusi pendidikan.",
      target: "Target: PAUD–SMA/SMK",
      color: "pink",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-[#1e40af] text-white pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
              Ekosistem Solusi PT Media Eduka Sentosa
            </h1>
            <p className="text-blue-100 text-lg font-medium opacity-90 max-w-2xl">
              Berbagai brand dan layanan strategis untuk memenuhi kebutuhan
              pendidikan sekolah secara komprehensif dan berkelanjutan.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Description */}
      <section className="py-20 bg-[#f8fafc]/50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <p className="text-gray-500 font-medium text-sm leading-relaxed italic">
            "PT MES menghadirkan ekosistem lengkap yang memberikan berbagai
            solusi kebutuhan sekolah. Setiap brand dikembangkan untuk saling
            melengkapi dan dapat disesuaikan dengan kebutuhan spesifik institusi
            Anda."
          </p>
        </div>
      </section>

      {/* Grid Brands */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group relative overflow-hidden"
              >
                {/* Visual Accent */}
                <div
                  className={`absolute top-0 left-0 w-2 h-full 
                  ${
                    brand.color === "blue"
                      ? "bg-blue-500"
                      : brand.color === "purple"
                        ? "bg-purple-500"
                        : brand.color === "green"
                          ? "bg-green-500"
                          : brand.color === "teal"
                            ? "bg-teal-500"
                            : brand.color === "orange"
                              ? "bg-orange-500"
                              : "bg-pink-500"
                  }`}
                ></div>

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 
                  ${
                    brand.color === "blue"
                      ? "bg-blue-50 text-blue-500"
                      : brand.color === "purple"
                        ? "bg-purple-50 text-purple-500"
                        : brand.color === "green"
                          ? "bg-green-50 text-green-500"
                          : brand.color === "teal"
                            ? "bg-teal-50 text-teal-500"
                            : brand.color === "orange"
                              ? "bg-orange-50 text-orange-500"
                              : "bg-pink-50 text-pink-500"
                  }`}
                >
                  {brand.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#171717] mb-4 group-hover:text-[#1e40af] transition-colors">
                  {brand.title}
                </h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6 grow">
                  {brand.desc}
                </p>

                <div className="bg-gray-50/80 px-4 py-2 rounded-xl mb-8">
                  <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                    {brand.target}
                  </p>
                </div>

                <button className="w-full py-4 bg-[#171717] text-white font-bold rounded-2xl flex items-center justify-center gap-2 group-hover:bg-[#1e40af] transition-all transform group-hover:-translate-y-1">
                  Lihat Detail
                  <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Value Proposition Section */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#171717] mb-4">
              Keuntungan Ekosistem Terintegrasi
            </h2>
            <p className="text-gray-400 font-bold text-sm mb-16 tracking-wide">
              Solusi yang saling terhubung untuk efisiensi dan efektivitas
              maksimal
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
              {[
                {
                  title: "Satu Pintu",
                  icon: <DoorOpen size={32} />,
                  desc: "Semua kebutuhan sekolah dapat diakses melalui satu mitra strategis terpercaya.",
                },
                {
                  title: "Terukur",
                  icon: <LineChart size={32} />,
                  desc: "Program terintegrasi dengan indikator keberhasilan yang jelas dan dapat dipantau.",
                },
                {
                  title: "Fleksibel",
                  icon: <Settings2 size={32} />,
                  desc: "Dapat disesuaikan dengan kebutuhan, prioritas, dan anggaran institusi.",
                },
              ].map((val, i) => (
                <div key={i} className="space-y-6 flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#f8fafc] text-[#1e40af] rounded-4xl flex items-center justify-center shadow-sm border border-gray-100 hover:scale-110 transition-transform">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#171717] mb-2">
                      {val.title}
                    </h4>
                    <p className="text-gray-500 font-medium text-sm leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
