"use client";

import { useState } from "react";
import FileUploadTab from "./tabs/FileUploadTab";
import TextShareTab from "./tabs/TextShareTab";

interface MainCardProps {
  onSuccess: (code: string, link: string) => void;
}

export default function MainCard({ onSuccess }: MainCardProps) {
  const [activeTab, setActiveTab] = useState<"file" | "text">("file");

  return (
    <section id="main-card" className="relative py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-base">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
          {/* Tabs */}
          <div className="border-b border-gray-200 flex">
            <button
              onClick={() => setActiveTab("file")}
              className={`flex-1 py-4 md:py-6 px-4 md:px-8 font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === "file"
                  ? "text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 8l-6-2m6 2l6-2" />
              </svg>
              <span className="hidden sm:inline">Upload File</span>
              <span className="sm:hidden">File</span>
            </button>
            <button
              onClick={() => setActiveTab("text")}
              className={`flex-1 py-4 md:py-6 px-4 md:px-8 font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === "text"
                  ? "text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">Share Text</span>
              <span className="sm:hidden">Text</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-12">
            {activeTab === "file" && <FileUploadTab onSuccess={onSuccess} />}
            {activeTab === "text" && <TextShareTab onSuccess={onSuccess} />}
          </div>
        </div>
      </div>
    </section>
  );
}
