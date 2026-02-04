"use client";

import React from "react";
import {
  Baby,
  School,
  GraduationCap,
  BookOpen,
  MapPin,
  CheckCircle2,
  Globe2,
} from "lucide-react";

const Jangkauan = () => {
  const levels = [
    {
      title: "PAUD / TK",
      subtitle: "Pendidikan Anak Usia Dini & Taman Kanak-kanak",
      icon: <Baby size={24} />,
      desc: "Program pembelajaran yang menyenangkan dan pembentukan karakter dasar.",
      items: [
        "Buku cerita dan aktivitas anak",
        "Proyek pengembangan karakter",
        "Alat peraga edukatif (APE)",
        "Media publikasi untuk sekolah",
      ],
      color: "bg-rose-500",
      lightBg: "bg-rose-50/50",
    },
    {
      title: "SD / MI",
      subtitle: "Sekolah Dasar / Madrasah Ibtidaiyah",
      icon: <School size={24} />,
      desc: "Konten pendidikan lengkap untuk pembelajaran kurikulum terbaru.",
      items: [
        "Buku teks dan pendamping",
        "Asesmen bakat dan minat",
        "Bimbingan teknis kurikulum",
        "Sistem informasi akademik",
      ],
      color: "bg-blue-600",
      lightBg: "bg-blue-50/50",
    },
    {
      title: "SMP / MTs",
      subtitle: "Sekolah Menengah Pertama / Madrasah Tsanawiyah",
      icon: <BookOpen size={24} />,
      desc: "Pengembangan kompetensi dan persiapan jenjang lanjutan.",
      items: [
        "Modul pendukung mata pelajaran",
        "Asesmen peminatan siswa",
        "Pelatihan guru & tenaga kependidikan",
        "Platform digital learning",
      ],
      color: "bg-emerald-600",
      lightBg: "bg-emerald-50/50",
    },
    {
      title: "SMA / MA",
      subtitle: "Sekolah Menengah Atas / Madrasah Aliyah",
      icon: <GraduationCap size={24} />,
      desc: "Persiapan akademik dan pengembangan potensi untuk pendidikan tinggi.",
      items: [
        "Modul persiapan kelulusan/UTBK",
        "Asesmen karir dan monitoring",
        "Program unggulan dan inovasi",
        "Publikasi digital sekolah",
      ],
      color: "bg-purple-600",
      lightBg: "bg-purple-50/50",
    },
    {
      title: "SMK",
      subtitle: "Sekolah Menengah Kejuruan",
      icon: <Settings2 size={24} />,
      desc: "Kompetensi praktis dan persiapan dunia kerja.",
      items: [
        "Modul keterampilan vokasi",
        "Asesmen kesiapan industri",
        "Sistem manajemen prakerin",
        "Branding dan publikasi sekolah",
      ],
      color: "bg-orange-600",
      lightBg: "bg-orange-50/50",
    },
  ];

  const locations = [
    "DKI Jakarta",
    "Jawa Barat",
    "Jawa Tengah",
    "Jawa Timur",
    "Banten",
    "Sumatera",
    "Kalimantan",
    "Sulawesi",
    "Dan Seluruh Indonesia",
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-[#1e40af] text-white pt-32 pb-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Jangkauan Layanan Kami
          </h1>
          <p className="text-blue-100 text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Melayani semua jenjang pendidikan dari PAUD hingga SMA/SMK di
            seluruh wilayah Indonesia.
          </p>
        </div>
      </section>

      {/* Intro Intro */}
      <section className="py-20 bg-[#f8fafc]/50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <p className="text-gray-500 font-medium text-[15px] leading-relaxed italic">
            "PT Media Eduka Sentosa memiliki solusi yang komprehensif untuk
            setiap jenjang pendidikan. Dari modul pembelajaran hingga sistem
            digital, kami siap mendukung kebutuhan sekolah Anda."
          </p>
        </div>
      </section>

      {/* Educational Levels Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#171717] mb-16 text-center">
            Jenjang Sekolah yang Kami Layani
          </h2>

          <div className="space-y-6 max-w-5xl mx-auto">
            {levels.map((level, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group`}
              >
                {/* Left Side: Brand/Level */}
                <div
                  className={`w-full md:w-1/4 ${level.color} p-8 flex flex-col justify-center items-center md:items-start text-white`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {level.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{level.title}</h3>
                  <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest text-center md:text-left">
                    {level.subtitle}
                  </p>
                </div>

                {/* Center: Description */}
                <div className="w-full md:w-2/5 p-8 bg-white flex flex-col justify-center border-r border-gray-50">
                  <p className="text-gray-500 font-medium text-sm leading-relaxed">
                    {level.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#1e40af]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e40af]"></span>
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Layanan Berkelanjutan
                    </span>
                  </div>
                </div>

                {/* Right Side: Features List */}
                <div
                  className={`w-full md:w-7/20 p-8 ${level.lightBg} flex flex-col justify-center`}
                >
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">
                    Layanan Tersedia:
                  </h4>
                  <ul className="space-y-3">
                    {level.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          size={12}
                          className="text-gray-400 mt-1 shrink-0"
                        />
                        <span className="text-[11px] font-bold text-gray-500 leading-tight">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-[#171717] mb-4">
            Jangkauan Geografis
          </h2>
          <p className="text-gray-400 font-bold text-sm mb-16 tracking-wide">
            Melayani seluruh lembaga pendidikan di Indonesia
          </p>

          <div className="max-w-4xl mx-auto bg-white p-12 rounded-[48px] shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#1e40af]"></div>

            <div className="flex items-center justify-center gap-2 text-[#1e40af] mb-12">
              <MapPin size={24} />
              <span className="text-xl font-extrabold tracking-tight">
                Area Layanan
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {locations.map((loc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100 hover:border-[#10b981]/20 group transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-[#10b981] group-hover:scale-150 transition-transform"></div>
                  <span className="text-sm font-bold text-gray-600">{loc}</span>
                </div>
              ))}
            </div>

            <p className="mt-12 text-gray-400 italic text-[13px] font-medium">
              * Untuk wilayah di luar Pulau Jawa, silakan hubungi kami untuk
              informasi lebih lanjut.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Visual */}
      <section className="py-24 text-center">
        <div className="w-20 h-20 bg-blue-50 text-[#1e40af] rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-slow">
          <Globe2 size={40} />
        </div>
        <h2 className="text-3xl font-extrabold text-[#171717] mb-6 tracking-tight">
          Menjangkau Hingga Ke Seluruh Pelosok
        </h2>
        <p className="text-gray-500 font-medium max-w-xl mx-auto mb-12">
          Dengan jaringan yang kuat dan distribusi yang teratur, kami
          berkomitmen menghadirkan solusi pendidikan bermutu di mana pun sekolah
          Anda berada.
        </p>
      </section>
    </div>
  );
};

// Internal Import replacement for Settings2 since it fits better than Cogs
import { Settings2 } from "lucide-react";

export default Jangkauan;
