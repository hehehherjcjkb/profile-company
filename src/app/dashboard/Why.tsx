"use client";

import React from "react";
import {
  Package,
  FileText,
  Wallet,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Headphones,
  Award,
  ChevronRight,
} from "lucide-react";

const Why = () => {
  const points = [
    {
      id: "01",
      title: "Solusi Satu Pintu",
      icon: <Package size={24} />,
      desc: "Akses lengkap ke berbagai layanan pendidikan melalui satu ekosistem terintegrasi. Tidak perlu mencari vendor berbeda untuk kebutuhan yang berbeda.",
      items: [
        "Konten pembelajaran hingga sistem digital",
        "Koordinasi lebih mudah dan efisien",
        "Satu tim pendampingan profesional",
      ],
      color: "blue",
      bgColor: "bg-blue-50/50",
      iconColor: "bg-blue-600",
      accentColor: "text-blue-600",
    },
    {
      id: "02",
      title: "Administrasi Rapi & Output Jelas",
      icon: <FileText size={24} />,
      desc: "Setiap program dilengkapi dengan dokumen lengkap, terstruktur, dan sesuai standar pelaporan pendidikan.",
      items: [
        "Dokumen pendukung lengkap",
        "Format standar dan sistematis",
        "Siap untuk audit dan pelaporan",
      ],
      color: "green",
      bgColor: "bg-emerald-50/50",
      iconColor: "bg-emerald-600",
      accentColor: "text-emerald-600",
    },
    {
      id: "03",
      title: "Fleksibel Sumber Anggaran",
      icon: <Wallet size={24} />,
      desc: "Solusi kami dirancang selaras dengan Dana BOSP reguler maupun sumber dana pendidikan sah lainnya.",
      items: [
        "Sesuai aturan penggunaan dana pendidikan",
        "Paket dapat disesuaikan dengan budget",
        "Transparansi biaya yang jelas",
      ],
      color: "purple",
      bgColor: "bg-purple-50/50",
      iconColor: "bg-purple-600",
      accentColor: "text-purple-600",
    },
    {
      id: "04",
      title: "Program Jangka Pendek & Panjang",
      icon: <Calendar size={24} />,
      desc: "Kami menawarkan program yang dapat disesuaikan dengan kebutuhan berkala sekolah maupun rencana pengembangan jangka panjang sekolah.",
      items: [
        "Workshop dan pelatihan singkat",
        "Program tahunan berkelanjutan",
        "Konsultasi strategis jangka panjang",
      ],
      color: "orange",
      bgColor: "bg-orange-50/50",
      iconColor: "bg-orange-600",
      accentColor: "text-orange-600",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-[#1e40af] text-white pt-32 pb-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Mengapa Memilih PT MES?
          </h1>
          <p className="text-blue-100 text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Kami berfokus pada hasil yang terukur dan administrasi yang tertib
            untuk mendukung kemajuan sekolah di Indonesia.
          </p>
        </div>
      </section>

      {/* Alternating Points Mapping */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-32">
            {points.map((point, i) => (
              <div
                key={point.id}
                className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-black text-gray-100">
                      {point.id}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl ${point.iconColor} text-white flex items-center justify-center`}
                    >
                      {point.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-extrabold text-[#171717] tracking-tight">
                    {point.title}
                  </h2>
                  <p className="text-gray-500 font-medium leading-relaxed max-w-lg">
                    {point.desc}
                  </p>
                  <ul className="space-y-4">
                    {point.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className={point.accentColor} />
                        <span className="text-sm font-semibold text-gray-600">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`flex-1 w-full aspect-video rounded-4xl ${point.bgColor} border border-gray-100 flex items-center justify-center p-12 group hover:shadow-2xl transition-all duration-700`}
                >
                  <div
                    className={`w-24 h-24 rounded-3xl ${point.iconColor} shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500`}
                  >
                    {React.cloneElement(point.icon as React.ReactElement<any>, {
                      size: 48,
                      className: "text-white",
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan Tambahan Section */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-extrabold text-[#171717] mb-4">
            Keunggulan Tambahan
          </h2>
          <p className="text-gray-400 font-bold text-sm mb-16 tracking-wide">
            Nilai lebih yang Anda dapatkan ketika bermitra dengan PT MES
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Terpercaya & Berpengalaman",
                icon: <ShieldCheck size={24} />,
                desc: "Didukung oleh Magau Group dengan rekam jejak melayani ratusan sekolah.",
              },
              {
                title: "Dukungan Berkelanjutan",
                icon: <Headphones size={24} />,
                desc: "Tim customer service dan pendamping yang responsif dan profesional.",
              },
              {
                title: "Kualitas Terjamin",
                icon: <Award size={24} />,
                desc: "Produk dan layanan berkualitas yang teruji dan sesuai standar pendidikan.",
              },
            ].map((adv, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-2xl border border-gray-100 text-[#1e40af] flex items-center justify-center mb-6 group-hover:bg-[#10b981] group-hover:text-white transition-all">
                  {adv.icon}
                </div>
                <h4 className="text-lg font-bold text-[#171717] mb-3">
                  {adv.title}
                </h4>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Block */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-[#1e40af] rounded-[48px] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 blur-3xl rounded-full"></div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl text-white">
                <Package size={24} />
              </div>
              <p className="text-white text-xl md:text-2xl font-bold leading-relaxed italic opacity-90">
                "Kami memahami bahwa setiap sekolah memiliki kebutuhan unik.
                Oleh karena itu, kami hadir dengan solusi fleksibel yang dapat
                disesuaikan, didukung administrasi yang rapi, dan tim
                profesional yang siap mendampingi perjalanan pendidikan Anda."
              </p>
              <div className="pt-4 flex flex-col items-center">
                <div className="w-12 h-1 bg-[#10b981] rounded-full mb-4"></div>
                <p className="text-white font-bold tracking-widest uppercase text-xs">
                  PT Media Eduka Sentosa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why;
