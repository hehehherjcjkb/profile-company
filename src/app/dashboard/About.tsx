"use client";

import React from "react";
import Footer from "./Footer";
import {
  Users,
  MapPin,
  ShieldCheck,
  Lightbulb,
  Target,
  ClipboardCheck,
  Zap,
  Handshake,
  CheckCircle2,
} from "lucide-react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Blue Hero Section */}
      <section className="bg-black text-white pt-32 pb-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Tentang PT MES
          </h1>
          <p className="text-gray-400 text-lg font-medium">
            Partner terpercaya untuk solusi pendidikan terintegrasi di Indonesia
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { val: "500+", label: "Sekolah Terlayani" },
              { val: "10+", label: "Tahun Pengalaman" },
              { val: "6", label: "Brand Ekosistem" },
              { val: "5", label: "Jenjang Pendidikan" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <p className="text-3xl font-black text-black">{stat.val}</p>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Description & Small Cards */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-extrabold text-[#171717] tracking-tight">
                PT Media Eduka Sentosa
              </h2>
              <div className="space-y-4 text-gray-500 font-medium leading-relaxed overflow-y-auto max-h-100 pr-4 scrollbar-thin scrollbar-thumb-gray-200">
                <p>
                  PT Media Eduka Sentosa (PT MES) adalah perusahaan yang
                  bergerak di bidang solusi pendidikan terintegrasi untuk
                  sekolah-sekolah di Indonesia. Kami memahami kompleksitas
                  kebutuhan institusi pendidikan modern dan hadir sebagai mitra
                  strategis yang dapat diandalkan.
                </p>
                <p>
                  Sebagai bagian dari{" "}
                  <span className="text-black font-bold">Magau Group</span>,
                  kami memiliki ekosistem lengkap yang mencakup berbagai aspek
                  kebutuhan sekolah—mulai dari konten pembelajaran, asesmen,
                  pengembangan kapasitas, hingga sistem digital dan publikasi.
                </p>
                <p>
                  Kami berkomitmen untuk membantu sekolah mengoptimalkan
                  penggunaan dana pendidikan, termasuk Dana BOSP Reguler, dengan
                  solusi yang terukur, profesional, dan sesuai regulasi.
                </p>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Fokus Klien",
                  icon: <Users size={20} />,
                  label:
                    "Kepala sekolah, yayasan, dan pengambilan keputusan pendidikan",
                  color: "gray",
                },
                {
                  title: "Jangkauan",
                  icon: <MapPin size={20} />,
                  label: "PAUD, SD/MI, SMP/MTs, SMA/MA, SMK",
                  color: "black",
                },
                {
                  title: "Terpercaya",
                  icon: <ShieldCheck size={20} />,
                  label: "Dokumentasi lengkap dan tertib administrasi",
                  color: "gray-dark",
                },
                {
                  title: "Inovatif",
                  icon: <Lightbulb size={20} />,
                  label: "Solusi modern yang terus berkembang",
                  color: "gray-light",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 
                    ${item.color === "gray"
                        ? "bg-gray-100 text-gray-600"
                        : item.color === "black"
                          ? "bg-black text-white"
                          : item.color === "gray-dark"
                            ? "bg-gray-200 text-gray-800"
                            : "bg-gray-50 text-gray-400"
                      }`}
                  >
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-[#171717] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[12px] text-gray-400 font-semibold leading-relaxed">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Focus Area Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-extrabold text-[#171717] mb-4">
            Area Fokus Kami
          </h2>
          <p className="text-gray-400 font-bold text-sm mb-16">
            Pendekatan komprehensif untuk memenuhi kebutuhan sekolah modern
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              {
                title: "Program Pendidikan Terukur",
                icon: <Target size={24} />,
                desc: "Solusi yang dirancang dengan indikator keberhasilan yang jelas dan dapat diukur",
                color: "black",
              },
              {
                title: "Administrasi Tertib",
                icon: <ClipboardCheck size={24} />,
                desc: "Dokumentasi lengkap dan sistematik untuk kebutuhan pelaporan dan audit",
                color: "gray-dark",
              },
              {
                title: "Solusi Fleksibel",
                icon: <Zap size={24} />,
                desc: "Dapat disesuaikan dengan kebutuhan dan karakteristik masing-masing sekolah",
                color: "black",
              },
              {
                title: "Dukungan Pendampingan",
                icon: <Handshake size={24} />,
                desc: "Tim profesional yang siap memberikan konsultasi dan pendampingan berkelanjutan",
                color: "gray-dark",
              },
            ].map((focus, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex gap-6 items-start group hover:border-black/20 transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 
                  ${focus.color === "black" ? "bg-black text-white" : "bg-gray-600 text-white"}`}
                >
                  {focus.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#171717] mb-2">
                    {focus.title}
                  </h4>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed">
                    {focus.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Visi */}
            <div className="space-y-8">
              <h2 className="text-3xl font-extrabold tracking-tight">
                Visi Kami
              </h2>
              <div className="bg-white/5 border border-white/10 p-10 rounded-4xl backdrop-blur-sm">
                <p className="text-xl md:text-2xl font-bold leading-relaxed">
                  Menjadi mitra strategis terdepan dalam ekosistem pendidikan
                  Indonesia yang memberikan solusi terintegrasi, profesional,
                  dan berkelanjutan untuk kemajuan pendidikan nasional.
                </p>
              </div>
            </div>

            {/* Misi */}
            <div className="space-y-8">
              <h2 className="text-3xl font-extrabold tracking-tight">
                Misi Kami
              </h2>
              <ul className="space-y-6">
                {[
                  "Menyediakan solusi pendidikan yang komprehensif dan terintegrasi",
                  "Membantu sekolah mengoptimalkan penggunaan dana pendidikan",
                  "Mendukung peningkatan kualitas pembelajaran di seluruh jenjang",
                  "Memberikan layanan profesional dengan administrasi yang tertib",
                  "Berinovasi untuk menciptakan ekosistem pendidikan yang berkelanjutan",
                ].map((misi, i) => (
                  <li key={i} className="flex gap-4 items-start group">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 size={14} className="text-black" />
                    </div>
                    <p className="text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                      {misi}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Magau Group Footer Support */}
      <section className="py-20 text-center">
        <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-4">
          Bagian dari
        </p>
        <h3 className="text-3xl font-black text-black mb-6">Magau Group</h3>
        <p className="text-gray-500 font-medium max-w-2xl mx-auto px-6 italic">
          "Didukung oleh jaringan perusahaan yang kuat untuk memberikan solusi
          pendidikan yang komprehensif"
        </p>
      </section>
    </div>
  );
};

export default About;
