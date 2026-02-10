"use client";

import React, { useEffect, useState } from "react";
import Header from "./Header";
import { getSiteContent, updateSiteContent, initializeSiteContent, SiteContent } from "@/app/action/home";

const AdminPage = () => {
  const [contents, setContents] = useState<SiteContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    setLoading(true);
    const data = await getSiteContent();
    setContents(data);
    setLoading(false);
  };

  const handleUpdate = async (section: string, key: string, value: string) => {
    setSaving(`${section}-${key}`);
    const result = await updateSiteContent(section, key, value);
    if (result.success) {
      // Update local state
      setContents(prev => {
        const index = prev.findIndex(c => c.section === section && c.content_key === key);
        if (index > -1) {
          const newContents = [...prev];
          newContents[index] = { ...newContents[index], content_value: value };
          return newContents;
        }
        return [...prev, { section, content_key: key, content_value: value }];
      });
    }
    setSaving(null);
  };

  const handleInitialize = async () => {
    if (confirm("Initialize database with default content? This will only fill empty entries.")) {
      setLoading(true);
      await initializeSiteContent();
      await fetchContent();
      setLoading(false);
    }
  };

  const getContentValue = (section: string, key: string) => {
    return contents.find(c => c.section === section && c.content_key === key)?.content_value || "";
  };

  if (loading) {
    return (
      <Header>
        <div className="flex items-center justify-center min-h-100">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
        </div>
      </Header>
    );
  }

  return (
    <Header>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-[#171717] mb-2">Manage Content</h1>
            <p className="text-gray-500 font-medium">Customize the main dashboard sections.</p>
          </div>
          <button
            onClick={handleInitialize}
            className="px-4 py-2 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition-all text-sm"
          >
            Initialize Default Data
          </button>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center">
              <span className="font-bold text-lg">H</span>
            </div>
            <h2 className="text-xl font-bold text-[#171717]">Hero Section</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Badge Text</label>
              <textarea
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-black/5 focus:bg-white transition-all font-medium"
                rows={2}
                defaultValue={getContentValue("hero", "badge")}
                onBlur={(e) => handleUpdate("hero", "badge", e.target.value)}
              />
              {saving === "hero-badge" && <p className="text-xs text-blue-500 mt-1 animate-pulse">Saving...</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Main Title</label>
              <textarea
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-black/5 focus:bg-white transition-all font-bold text-lg"
                rows={2}
                defaultValue={getContentValue("hero", "title")}
                onBlur={(e) => handleUpdate("hero", "title", e.target.value)}
              />
              {saving === "hero-title" && <p className="text-xs text-blue-500 mt-1 animate-pulse">Saving...</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Description</label>
              <textarea
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-black/5 focus:bg-white transition-all font-medium"
                rows={4}
                defaultValue={getContentValue("hero", "description")}
                onBlur={(e) => handleUpdate("hero", "description", e.target.value)}
              />
              {saving === "hero-description" && <p className="text-xs text-blue-500 mt-1 animate-pulse">Saving...</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Primary CTA Label</label>
                <input
                  type="text"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-black/5 focus:bg-white transition-all font-medium"
                  defaultValue={getContentValue("hero", "cta_primary")}
                  onBlur={(e) => handleUpdate("hero", "cta_primary", e.target.value)}
                />
                {saving === "hero-cta_primary" && <p className="text-xs text-blue-500 mt-1 animate-pulse">Saving...</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Secondary CTA Label</label>
                <input
                  type="text"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-black/5 focus:bg-white transition-all font-medium"
                  defaultValue={getContentValue("hero", "cta_secondary")}
                  onBlur={(e) => handleUpdate("hero", "cta_secondary", e.target.value)}
                />
                {saving === "hero-cta_secondary" && <p className="text-xs text-blue-500 mt-1 animate-pulse">Saving...</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gray-100 text-black rounded-xl flex items-center justify-center">
              <span className="font-bold text-lg">S</span>
            </div>
            <h2 className="text-xl font-bold text-[#171717]">Stats Card</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Count (e.g. 500+)</label>
              <input
                type="text"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-black/5 focus:bg-white transition-all font-bold text-xl"
                defaultValue={getContentValue("stats", "count")}
                onBlur={(e) => handleUpdate("stats", "count", e.target.value)}
              />
              {saving === "stats-count" && <p className="text-xs text-blue-500 mt-1 animate-pulse">Saving...</p>}
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Label</label>
              <input
                type="text"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-black/5 focus:bg-white transition-all font-medium"
                defaultValue={getContentValue("stats", "label")}
                onBlur={(e) => handleUpdate("stats", "label", e.target.value)}
              />
              {saving === "stats-label" && <p className="text-xs text-blue-500 mt-1 animate-pulse">Saving...</p>}
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm font-medium pb-10">
          Changes are automatically saved when you click outside the input field.
        </p>
      </div>
    </Header>
  );
};

export default AdminPage;
