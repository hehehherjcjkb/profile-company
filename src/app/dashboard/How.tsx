"use client";

import React, { useEffect, useState } from "react";
import {
  Search,
  Lightbulb,
  FileText,
  Play,
  CheckCircle,
  BarChart,
  Users,
  Eye,
  Zap,
  ArrowRight
} from "lucide-react";
import { getSiteContent, SiteContent } from "@/app/action/home";



const How = () => {
  const [contents, setContents] = useState<SiteContent[]>([]);


  useEffect(() => {
    const fetchContent = async () => {
      const data = await getSiteContent();
      setContents(data);
    };
    fetchContent();
  }, []);

  const getContentValue = (section: string, key: string, defaultValue: string) => {
    return contents.find(c => c.section === section && c.content_key === key)?.content_value || defaultValue;
  };

  const getWaLink = () => {
    const raw = getContentValue("footer", "wa_number", "62811500580");
    const clean = raw.replace(/\D/g, "");
    const final = clean.startsWith("0") ? "62" + clean.slice(1) : clean;
    return `https://wa.me/${final}`;
  };

  const getSteps = () => {
    const json = getContentValue("how", "steps_json", "[]");
    try {
      return JSON.parse(json);
    } catch (e) {
      return [];
    }
  };

  const getPrinciples = () => {
    const json = getContentValue("how", "principles_json", "[]");
    try {
      return JSON.parse(json);
    } catch (e) {
      return [];
    }
  };

  const steps = getSteps();
  const principles = getPrinciples();

  const getStepIcon = (id: string) => {
    switch (id) {
      case "01": return <Search size={24} className="text-black" />;
      case "02": return <Lightbulb size={24} className="text-black" />;
      case "03": return <FileText size={24} className="text-black" />;
      case "04": return <Play size={24} className="text-black" />;
      case "05": return <CheckCircle size={24} className="text-black" />;
      default: return <Search size={24} className="text-black" />;
    }
  };

  const getPrincipleIcon = (iconName: string) => {
    switch (iconName) {
      case "BarChart": return <BarChart size={24} className="text-black" />;
      case "Users": return <Users size={24} className="text-black" />;
      case "Eye": return <Eye size={24} className="text-black" />;
      case "Zap": return <Zap size={24} className="text-black" />;
      default: return <BarChart size={24} className="text-black" />;
    }
  };

  return (
    <div className="w-full bg-white font-sans text-black">
      {/* Header Section (Image 5 top) */}
      <section className="bg-black py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight uppercase">
            {getContentValue("how", "title", "Cara Kerja Kami")}
          </h2>
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-[0.3em] max-w-2xl mx-auto leading-relaxed">
            {getContentValue("how", "subtitle", "Proses kolaborasi yang terstruktur, transparan, dan profesional untuk memastikan hasil yang optimal bagi sekolah Anda.")}
          </p>
        </div>
      </section>

      {/* Intro Sentence (Image 5) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 font-normal text-base max-w-4xl mx-auto italic leading-relaxed">
            "Kami percaya bahwa keberhasilan kemitraan dimulai dari proses yang jelas dan terukur. Berikut adalah 5 tahapan kerja sama yang kami terapkan untuk memastikan setiap program berjalan dengan baik."
          </p>
        </div>
      </section>

      {/* Steps Grid - Row Selection (Image 5) */}
      <section className="pb-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step: any, i: number) => (
              <div key={i} className="flex flex-col p-10 bg-white border border-gray-100 rounded-4xl hover:border-black/10 transition-all group shadow-sm">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-10 group-hover:rotate-6 transition-transform border border-gray-100 relative shadow-sm">
                  {getStepIcon(step.id)}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-black rounded-lg border-2 border-white flex items-center justify-center text-[10px] font-black text-white">
                    {step.id}
                  </div>
                </div>

                <h3 className="text-xl font-black text-black mb-4 tracking-tight leading-tight">{step.title}</h3>
                <p className="text-gray-400 font-normal text-xs leading-relaxed mb-8">{step.desc}</p>

                <div className="mt-auto pt-6 border-t border-gray-50">
                  <ul className="space-y-3">
                    {(step.points || []).map((point: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-200 mt-1.5 group-hover/item:bg-black transition-colors"></div>
                        <span className="text-xs font-normal text-gray-400 group-hover/item:text-black transition-colors">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section (Image 5 bottom) */}
      <section className="py-32 bg-gray-50/50">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-4 tracking-tight uppercase">
            Prinsip Kerja Kami
          </h2>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.4em] mb-20">
            Nilai-nilai yang kami pegang dalam setiap tahapan kolaborasi
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle: any, i: number) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md transition-all group-hover:rotate-6">
                  {getPrincipleIcon(principle.icon)}
                </div>
                <h4 className="text-lg font-black text-black mb-3">{principle.title}</h4>
                <p className="text-gray-400 font-normal text-sm max-w-[200px] leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Image 5 bottom) */}
      <section className="py-32 bg-white flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-10"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black">Mulai Kerja Sama</span>
        </div>

        <h2 className="text-4xl lg:text-6xl font-black text-black mb-8 tracking-tighter text-center max-w-4xl">
          Siap Memulai Langkah Pertama?
        </h2>
        <p className="text-gray-400 font-normal text-base text-center max-w-2xl mb-12">
          Konsultasikan kebutuhan sekolah Anda secara gratis. Kami siap mendengarkan dan memberikan solusi terbaik untuk institusi Anda.
        </p>

        <a
          href={getWaLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-10 py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-xs group hover:scale-[1.05] transition-all shadow-xl shadow-black/10"
        >
          Hubungi Kami Sekarang
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </section>

    </div>
  );
};

export default How;
