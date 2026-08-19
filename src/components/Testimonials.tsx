import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { FoundationDivider } from './FoundationDivider';

interface TestimonialsProps {
  currentLang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const testData = t.testimonials;
  const [showEnParentQuote, setShowEnParentQuote] = useState(false);

  return (
    <section className="py-20 bg-[#FAF6EC] relative border-t border-[#011B4C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#011B4C]/70 font-sans">
            {testData.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#011B4C]">
            {testData.title}
          </h2>
          <p className="text-sm sm:text-base text-[#1E2A44] font-sans">
            {testData.subtitle}
          </p>
        </div>

        {/* 2 Editorial Pull-Quote Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Zeeshan (French Track) */}
          <div className="bg-[#F1E9D8] border border-[#011B4C]/15 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#011B4C] bg-[#011B4C]/10 px-3 py-1 rounded">
                  {testData.items[0].track}
                </span>
                <span className="text-4xl font-display italic text-[#011B4C]/30 leading-none">
                  "
                </span>
              </div>

              <blockquote className="text-base sm:text-lg font-display italic text-[#011B4C] leading-relaxed">
                "{testData.items[0].quote}"
              </blockquote>
            </div>

            <div className="pt-6 border-t border-[#011B4C]/15">
              <div className="font-display font-bold text-base text-[#011B4C]">
                {testData.items[0].name}
              </div>
              <div className="text-xs font-sans text-[#1E2A44]/80">
                {testData.items[0].role}
              </div>
            </div>
          </div>

          {/* Card 2: Parent of Secondary 1 Student (Math Track) */}
          <div className="bg-[#011B4C] text-[#FAF6EC] border border-[#011B4C] rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FBAD00] bg-[#FAF6EC]/10 px-3 py-1 rounded">
                  {testData.items[1].track}
                </span>
                <span className="text-4xl font-display italic text-[#FBAD00]/40 leading-none">
                  "
                </span>
              </div>

              {/* Display French verbatim primary or EN translation */}
              <blockquote className="text-sm sm:text-base font-display italic text-[#FAF6EC] leading-relaxed">
                {showEnParentQuote
                  ? `"${testData.items[1].quote}"`
                  : (testData.items[1].quoteFrOriginal || testData.items[1].quote)}
              </blockquote>

              {/* Toggle option for translation */}
              <div className="pt-2">
                <button
                  onClick={() => setShowEnParentQuote(!showEnParentQuote)}
                  className="text-xs font-mono font-bold text-[#FBAD00] hover:underline cursor-pointer"
                >
                  {showEnParentQuote ? "← View Original French (Verbatim Client SMS)" : "Read English Translation →"}
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#FAF6EC]/15">
              <div className="font-display font-bold text-base text-[#FAF6EC]">
                {testData.items[1].name}
              </div>
              <div className="text-xs font-sans text-[#FAF6EC]/75">
                {testData.items[1].role}
              </div>
            </div>
          </div>

        </div>

        {/* Foundation Divider */}
        <FoundationDivider align="center" />

      </div>
    </section>
  );
};
