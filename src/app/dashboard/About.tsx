"use client";

import React, { useEffect, useState } from "react";
import { Users, Globe, ShieldCheck, Lightbulb, CheckCircle2, Target, FileText, Settings } from "lucide-react";
import { getSiteContent, SiteContent } from "@/app/action/home";

const About = () => {
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

  const getStats = () => {
    const json = getContentValue("about", "stats_json", "[]");
    try {
      return JSON.parse(json);
    } catch (e) {
      return [];
    }
  };

  const getFeatures = () => {
    const json = getContentValue("about", "features_json", "[]");
    try {
      return JSON.parse(json);
    } catch (e) {
      return [];
    }
  };

  const getAreaFokus = () => {
    const json = getContentValue("about", "area_fokus_json", "[]");
    try {
      return JSON.parse(json);
    } catch (e) {
      return [];
    }
  };

  const getMisiList = () => {
    const json = getContentValue("about", "misi_json", "[]");
    try {
      return JSON.parse(json);
    } catch (e) {
      return [];
    }
  };

  const stats = getStats();
  const features = getFeatures();
  const areaFokus = getAreaFokus();
  const misiList = getMisiList();

  const getIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case "Users": return <Users size={size} className="text-black" />;
      case "Globe": return <Globe size={size} className="text-black" />;
      case "ShieldCheck": return <ShieldCheck size={size} className="text-black" />;
      case "Lightbulb": return <Lightbulb size={size} className="text-black" />;
      case "Target": return <Target size={size} className="text-black" />;
      case "FileText": return <FileText size={size} className="text-black" />;
      case "Settings": return <Settings size={size} className="text-black" />;
      default: return <CheckCircle2 size={size} className="text-black" />;
    }
  };

  return (
    <div className="w-full bg-white font-sans text-black">
      {/* Page Header */}
      <section className="bg-black py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase text-white">
            {getContentValue("about", "title", "Tentang PT MES")}
          </h1>
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-[0.3em] max-w-2xl mx-auto leading-relaxed">
            {getContentValue("about", "subtitle", "Partner terpercaya untuk solusi pendidikan terintegrasi di Indonesia")}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat: any, i: number) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-black mb-1 tracking-tight">{stat.value}</div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Left Content */}
            <div className="flex-[1.2] space-y-8">
              <h2 className="text-3xl lg:text-4xl font-black text-black tracking-tight">
                PT Media Eduka Sentosa
              </h2>
              <div className="space-y-6 text-gray-500 font-normal leading-relaxed text-base max-w-2xl italic">
                <p>{getContentValue("about", "description_para1", "")}</p>
                <p>{getContentValue("about", "description_para2", "")}</p>
                <p>{getContentValue("about", "description_para3", "")}</p>
              </div>
            </div>

            {/* Right Feature Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature: any, i: number) => (
                  <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-black/5 transition-all">
                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                      {getIcon(feature.icon, 20)}
                    </div>
                    <h4 className="text-sm font-bold text-black mb-1">{feature.title}</h4>
                    <p className="text-gray-400 font-normal text-xs leading-relaxed line-clamp-2">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Area Fokus Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-2 tracking-tight">Area Fokus Kami</h2>
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-[0.3em] mb-16">Produk dan Kompetensi untuk Memenuhi Kebutuhan Sekolah Modern</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {areaFokus.map((item: any, i: number) => (
              <div key={i} className="p-10 bg-white border border-gray-50 rounded-[40px] text-left shadow-sm flex gap-8 items-start hover:border-black/5 transition-all">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center shrink-0">
                  {React.cloneElement(getIcon(item.icon, 28) as React.ReactElement<any>, { className: "text-white" })}
                </div>
                <div>
                  <h4 className="text-xl font-black text-black mb-3">{item.title}</h4>
                  <p className="text-gray-400 font-normal text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Vision */}
            <div className="space-y-10">
              <h3 className="text-2xl font-black uppercase tracking-widest text-white">Visi Kami</h3>
              <div className="p-12 bg-white/5 border border-white/10 rounded-[40px]">
                <p className="text-2xl font-bold leading-relaxed tracking-tight italic">
                  {getContentValue("about", "vision", "")}
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="space-y-10">
              <h3 className="text-2xl font-black uppercase tracking-widest text-white">Misi Kami</h3>
              <ul className="space-y-6">
                {misiList.map((item: any, i: number) => (
                  <li key={i} className="flex gap-4 items-center group">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <p className="text-white font-medium text-base leading-relaxed">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Magau Group Section */}
      <section className="py-32 text-center bg-white">
        <div className="container mx-auto px-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.4em] mb-4">
            {getContentValue("about", "magau_label", "BAGIAN DARI")}
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-8 tracking-tighter">
            {getContentValue("about", "magau_title", "Magau Group")}
          </h2>
          <p className="text-gray-500 font-normal text-base max-w-2xl mx-auto italic leading-relaxed">
            "{getContentValue("about", "magau_quote", "")}"
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

