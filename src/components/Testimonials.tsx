import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { FoundationDivider } from './FoundationDivider';
import { RiseUp, RiseUpStagger, RiseUpItem } from './animations/RiseUp';

interface TestimonialsProps {
  currentLang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const testData = t.testimonials;
  const [showEnParentQuote, setShowEnParentQuote] = useState(false);

  return (
    <section className="py-20 bg-[#FAFAFC] relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <RiseUp className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#011B4C]/70">
            {testData.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#011B4C]">
            {testData.title}
          </h2>
          <p className="text-sm sm:text-base text-[#1E2A44] font-sans">
            {testData.subtitle}
          </p>
        </RiseUp>

        {/* 2 Editorial Pull-Quote Cards Grid */}
        <RiseUpStagger staggerDelay={0.15} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Zeeshan (French Track) - Crisp White Card */}
          <RiseUpItem className="h-full">
            <div className="bg-[#FFFFFF] border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-6 h-full transition-transform duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#011B4C] bg-[#011B4C]/5 px-3 py-1 rounded border border-[#011B4C]/10">
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

              <div className="pt-6 border-t border-slate-200">
                <div className="font-display font-bold text-base text-[#011B4C]">
                  {testData.items[0].name}
                </div>
                <div className="text-xs font-sans text-[#1E2A44]/80">
                  {testData.items[0].role}
                </div>
              </div>
            </div>
          </RiseUpItem>

          {/* Card 2: Parent of Secondary 1 Student (Math Track) - Royal Navy Card */}
          <RiseUpItem className="h-full">
            <div className="bg-[#011B4C] text-[#FFFFFF] border border-[#011B4C] rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col justify-between space-y-6 h-full transition-transform duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FBAD00] bg-white/10 px-3 py-1 rounded">
                    {testData.items[1].track}
                  </span>
                  <span className="text-4xl font-display italic text-[#FBAD00]/40 leading-none">
                    "
                  </span>
                </div>

                {/* Display French verbatim primary or EN translation */}
                <blockquote className="text-sm sm:text-base font-display italic text-[#FFFFFF] leading-relaxed">
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

              <div className="pt-6 border-t border-white/15">
                <div className="font-display font-bold text-base text-[#FFFFFF]">
                  {testData.items[1].name}
                </div>
                <div className="text-xs font-sans text-white/80">
                  {testData.items[1].role}
                </div>
              </div>
            </div>
          </RiseUpItem>

        </RiseUpStagger>

        {/* Foundation Divider */}
        <RiseUp delay={0.2}>
          <FoundationDivider align="center" />
        </RiseUp>

      </div>
    </section>
  );
};
