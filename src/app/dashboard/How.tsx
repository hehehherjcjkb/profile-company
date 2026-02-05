"use client";

import React from "react";
import {
  Search,
  Lightbulb,
  FileText,
  Settings2,
  ClipboardCheck,
  CheckCircle2,
  Users2,
  BarChart4,
  Zap,
  Eye,
  MessageCircle,
} from "lucide-react";

const How = () => {
  const steps = [
    {
      id: "01",
      title: "Pemetaan Kebutuhan",
      icon: <Search size={20} />,
      desc: "Kami melakukan analisis mendalam terhadap kebutuhan spesifik sekolah Anda, termasuk kondisi saat ini, tantangan, dan target yang ingin dicapai.",
      items: [
        "Konsultasi awal dengan stakeholder",
        "Asesmen kondisi eksisting",
        "Identifikasi prioritas kebutuhan",
      ],
      color: "gray",
      iconColor: "bg-black",
      lightBg: "bg-gray-50/50",
    },
    {
      id: "02",
      title: "Rekomendasi Solusi",
      icon: <Lightbulb size={20} />,
      desc: "Berdasarkan hasil pemetaan, kami menyusun rekomendasi solusi yang tepat dan sesuai dengan visi, misi, dan skala anggaran sekolah Anda.",
      items: [
        "Penyusunan proposal solusi",
        "Presentasi dan diskusi penyesuaian",
        "Estimasi biaya dan timeline",
      ],
      color: "gray-dark",
      iconColor: "bg-gray-800",
      lightBg: "bg-gray-100/50",
    },
    {
      id: "03",
      title: "Dokumen Pendukung",
      icon: <FileText size={20} />,
      desc: "Kami menyiapkan seluruh dokumen administratif yang diperlukan, termasuk proposal, SPK, dan dokumen lain yang sesuai dengan regulasi penggunaan dana pendidikan.",
      items: [
        "Penyusunan kontrak kerja",
        "Administrasi legalitas lengkap",
        "Penyiapan dokumen pelaporan awal",
      ],
      color: "black",
      iconColor: "bg-gray-900",
      lightBg: "bg-gray-50/50",
    },
    {
      id: "04",
      title: "Pelaksanaan",
      icon: <Settings2 size={20} />,
      desc: "Tim profesional kami melaksanakan program sesuai kesepakatan dengan standar kualitas tinggi dan pendampingan berkelanjutan.",
      items: [
        "Implementasi program di lapangan",
        "Monitoring dan evaluasi berkala",
        "Support teknis dan konsultasi",
      ],
      color: "gray-light",
      iconColor: "bg-gray-600",
      lightBg: "bg-gray-100/50",
    },
    {
      id: "05",
      title: "Laporan & Dokumentasi",
      icon: <ClipboardCheck size={20} />,
      desc: "Setiap program ditutup dengan laporan pelaksanaan lengkap dan dokumentasi yang siap untuk keperluan pelaporan dan evaluasi sekolah.",
      items: [
        "Laporan kegiatan sistematis",
        "Dokumentasi visual dan naratif",
        "Evaluasi akhir dan saran perbaikan",
      ],
      color: "gray",
      iconColor: "bg-gray-700",
      lightBg: "bg-gray-50/50",
    },
  ];

  const principles = [
    {
      title: "Terukur",
      icon: <BarChart4 size={28} />,
      desc: "Setiap program memiliki target dan indikator yang jelas.",
    },
    {
      title: "Kolaboratif",
      icon: <Users2 size={28} />,
      desc: "Melibatkan stakeholder dalam setiap keputusan penting.",
    },
    {
      title: "Transparan",
      icon: <Eye size={28} />,
      desc: "Komunikasi terbuka dan dokumentasi lengkap.",
    },
    {
      title: "Responsif",
      icon: <Zap size={28} />,
      desc: "Cepat tanggap terhadap kebutuhan dan feedback.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white pt-32 pb-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Cara Kerja Kami
          </h1>
          <p className="text-gray-400 text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Proses kolaborasi yang terstruktur, transparan, dan profesional
            untuk memastikan hasil yang optimal bagi sekolah Anda.
          </p>
        </div>
      </section>

      {/* Intro Description */}
      <section className="py-20 bg-[#f8fafc]/50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <p className="text-gray-500 font-medium text-[15px] leading-relaxed italic">
            "Kami percaya bahwa keberhasilan kemitraan dimulai dari proses yang
            jelas dan terukur. Berikut adalah 5 tahapan kerja sama yang kami
            terapkan untuk memastikan setiap program berjalan dengan baik."
          </p>
        </div>
      </section>

      {/* Steps Flow Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative group/flow">
            {/* Connecting Line (Horizontal on Desktop) */}
            <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-gray-100 -z-10 bg-linear-to-r from-transparent via-gray-100 to-transparent"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
              {steps.map((step, i) => (
                <div key={step.id} className="relative pt-12">
                  {/* Step Icon Carrier */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2 z-10">
                    <div
                      className={`w-16 h-16 rounded-2xl ${step.iconColor} shadow-xl flex items-center justify-center text-white transform hover:scale-110 transition-transform duration-500`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Card */}
                  <div
                    className={`h-full bg-white p-8 pt-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group ${step.lightBg}`}
                  >
                    <div className="mb-6">
                      <span className="text-4xl font-black text-white/50 block mb-2">
                        {step.id}
                      </span>
                      <h3 className="text-[17px] font-extrabold text-[#171717] leading-tight mb-4">
                        {step.title}
                      </h3>
                      <p className="text-[13px] text-gray-500 font-medium leading-relaxed mb-6">
                        {step.desc}
                      </p>
                    </div>

                    <ul className="space-y-3 mt-auto border-t border-gray-100 pt-6">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2
                            size={12}
                            className="text-gray-400 mt-1 shrink-0"
                          />
                          <span className="text-[11px] font-bold text-gray-400 leading-tight">
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
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-extrabold text-[#171717] mb-4">
            Prinsip Kerja Kami
          </h2>
          <p className="text-gray-400 font-bold text-sm mb-16 tracking-wide">
            Nilai-nilai yang kami pegang dalam setiap tahapan kolaborasi
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {principles.map((prinsip, i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-black shadow-sm border border-gray-100 hover:rotate-6 transition-transform">
                  {prinsip.icon}
                </div>
                <h4 className="text-lg font-bold text-[#171717]">
                  {prinsip.title}
                </h4>
                <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-50 mx-auto">
                  {prinsip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Contact Suggestion */}
      <section className="py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-black rounded-full text-xs font-black uppercase tracking-widest mb-8">
          <MessageCircle size={14} />
          Mulai Kerja Sama
        </div>
        <h2 className="text-3xl font-extrabold text-[#171717] mb-8">
          Siap Memulai Langkah Pertama?
        </h2>
        <p className="text-gray-500 font-medium max-w-xl mx-auto mb-12">
          Konsultasikan kebutuhan sekolah Anda secara gratis. Kami siap
          mendengarkan dan memberikan solusi terbaik untuk institusi Anda.
        </p>
      </section>
    </div>
  );
};

export default How;
