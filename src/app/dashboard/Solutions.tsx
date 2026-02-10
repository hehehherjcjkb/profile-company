"use client";

import React from "react";
import Image from "next/image";
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
import EduvanteLogo from "../aset/Eduvante.png";
import NawasenaLogo from "../aset/nawasena.png";
import PersonalityLogo from "../aset/personality.jpeg";
import MentorLogo from "../aset/mentor.png";
import MJDLogo from "../aset/mjd_gambar.png";
import MKDLogo from "../aset/MKD@300x.png";

const Solutions = () => {
  // Helper to map color names to Tailwind classes
  const getBrandStyles = (color: string) => {
    switch (color) {
      case "blue":
        return { accent: "bg-gray-800", icon: "bg-gray-100 text-black" };
      case "purple":
        return { accent: "bg-black", icon: "bg-black text-white" };
      case "green":
        return { accent: "bg-gray-600", icon: "bg-gray-200 text-black" };
      case "teal":
        return { accent: "bg-gray-400", icon: "bg-gray-50 text-black" };
      case "orange":
        return { accent: "bg-gray-900", icon: "bg-gray-300 text-black" };
      case "pink":
        return { accent: "bg-gray-500", icon: "bg-gray-100 text-black" };
      default:
        return { accent: "bg-gray-500", icon: "bg-gray-100 text-black" };
    }
  };

  const brands = [
    {
      title: "Nawasena Publishing",
      icon: (
        <Image
          src={NawasenaLogo}
          alt="Nawasena Logo"
          width={32}
          height={32}
          className="object-contain"
        />
      ),
      desc: "Penerbit buku pendidikan dan konten pembelajaran berkualitas untuk semua jenjang.",
      target: "Target: PAUD–SMA/SMK",
      color: "blue",
      qrCode: "qr-mentorbox.png",
    },
    {
      title: "Q Personality",
      icon: (
        <Image
          src={PersonalityLogo}
          alt="Q Personality Logo"
          width={32}
          height={32}
          className="object-contain"
        />
      ),
      desc: "Layanan asesmen psikologi dan deteksi potensi untuk pemetaan bakat minat peserta didik.",
      target: "Target: SD–SMA/SMK",
      color: "purple",
      qrCode: "qr-qpersonality.png",
    },
    {
      title: "Mentorbox (Kolaborasi)",
      icon: (
        <Image
          src={MentorLogo}
          alt="Mentorbox Logo"
          width={32}
          height={32}
          className="object-contain"
        />
      ),
      desc: "Platform pengembangan kapasitas, pelatihan, dan mentoring bagi tenaga pendidik profesional.",
      target: "Target: PAUD–SMK",
      color: "green",
      qrCode: "qr-mentorbox.png",
    },
    {
      title: "MJD Software House (Kolaborasi)",
      icon: (
        <Image
          src={MJDLogo}
          alt="MJD Logo"
          width={32}
          height={32}
          className="object-contain"
        />
      ),
      desc: "Solusi pengembangan sistem informasi dan aplikasi digital custom untuk manajemen sekolah.",
      target: "Target: PAUD–SMA/SMK",
      color: "teal",
      qrCode: "qr-mjd.png",
    },
    {
      title: "EDUVANTE",
      icon: (
        <Image
          src={EduvanteLogo}
          alt="Eduvante Logo"
          width={32}
          height={32}
          className="object-contain"
        />
      ),
      desc: "Program unggulan dan inovasi kurikulum untuk meningkatkan daya saing global sekolah.",
      target: "Target: PAUD–SMA/SMK",
      color: "orange",
      qrCode: "qr-mentorbox.png",
    },
    {
      title: "MKD Digital Agency (Kolaborasi)",
      icon: (
        <Image
          src={MKDLogo}
          alt="MKD Logo"
          width={32}
          height={32}
          className="object-contain"
        />
      ),
      desc: "Layanan publikasi digital, branding sosial media, dan promosi strategis institusi pendidikan.",
      target: "Target: PAUD–SMA/SMK",
      color: "pink",
      qrCode: "qr-nawasena.png",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
              Ekosistem Solusi PT Media Eduka Sentosa
            </h1>
            <p className="text-gray-400 text-lg font-medium opacity-90 max-w-2xl">
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
            {brands.map((brand, i) => {
              const styles = getBrandStyles(brand.color);
              return (
                <div
                  key={i}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group relative overflow-hidden"
                >
                  {/* Visual Accent Strip */}
                  <div
                    className={`absolute top-0 left-0 w-2 h-full ${styles.accent}`}
                  ></div>

                  {/* QR Code Area */}
                  <div className="absolute top-8 right-8">
                    <div className="w-20 h-20 bg-white rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center group-hover:border-black/20 transition-all overflow-hidden shadow-sm relative">
                      {brand.qrCode ? (
                        <>
                          <Image
                            src={brand.qrCode.startsWith('http') || brand.qrCode.startsWith('/') ? brand.qrCode : `/${brand.qrCode}`}
                            alt={`QR Code ${brand.title}`}
                            width={80}
                            height={80}
                            className="w-full h-full object-contain p-1 relative z-10"
                            onError={(e) => {
                              // If image fails, hide it
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              // Show fallback text
                              const fallback = target.parentElement?.querySelector('.fallback-text');
                              if (fallback) fallback.classList.remove('hidden');
                            }}
                          />
                          <div className="fallback-text hidden absolute inset-0 flex items-center justify-center bg-gray-50/80">
                            <p className="text-[10px] font-bold text-gray-500 uppercase leading-tight text-center">
                              IMAGE<br />NOT FOUND
                            </p>
                          </div>
                        </>
                      ) : (
                        <div className="text-center px-2">
                          <p className="text-[10px] font-bold text-gray-400 uppercase leading-tight tracking-tighter">
                            QR CODE<br />HERE
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${styles.icon}`}
                  >
                    {brand.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#171717] mb-4 group-hover:text-black transition-colors max-w-[calc(100%-100px)]">
                    {brand.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6 grow">
                    {brand.desc}
                  </p>

                  {/* Target Label */}
                  <div className="bg-gray-50/80 px-4 py-2 rounded-xl mb-8 border border-gray-100/50">
                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                      {brand.target}
                    </p>
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-4 bg-[#171717] text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-black transition-all transform group-hover:-translate-y-1">
                    Lihat Detail
                    <ChevronRight size={18} />
                  </button>
                </div>
              );
            })}
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
                  desc: "Program terintegrasi dengan indikator keberhasilan yang jelas and dapat dipantau.",
                },
                {
                  title: "Fleksibel",
                  icon: <Settings2 size={32} />,
                  desc: "Dapat disesuaikan dengan kebutuhan, prioritas, and anggaran institusi.",
                },
              ].map((val, i) => (
                <div key={i} className="space-y-6 flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#f8fafc] text-black rounded-4xl flex items-center justify-center shadow-sm border border-gray-100 hover:scale-110 transition-transform">
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
