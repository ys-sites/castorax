import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { FoundationDivider } from './FoundationDivider';
import founderPhoto from '../assets/images/founder_tutor_portrait.png';

interface AboutSectionProps {
  currentLang: Language;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  onNavigate,
  onOpenBooking,
}) => {
  const t = translations[currentLang];
  const founder = t.aboutFounder;
  const how = t.howItWorks;

  return (
    <section className="py-20 bg-[#FFFFFF] relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Founder Bio Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Founder Portrait Frame (Natural Full Color Photography) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white aspect-[4/5]">
                <img
                  src={founderPhoto}
                  alt="Burhan - Founder & Lead Tutor"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#011B4C]/90 via-[#011B4C]/50 to-transparent text-white">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FBAD00] mb-0.5">
                    FOUNDER & LEAD TUTOR
                  </div>
                  <div className="text-xl font-display font-bold">
                    Burhan
                  </div>
                  <div className="text-xs text-white/85 font-sans">
                    Math, Science & French Tutoring Specialist
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Founder Story & Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#011B4C]/70 bg-[#011B4C]/5 px-3 py-1 rounded-md border border-[#011B4C]/10 w-fit block">
                {founder.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#011B4C]">
                {founder.title}
              </h2>
            </div>

            <p className="text-base text-[#1E2A44] leading-relaxed font-sans">
              {founder.desc}
            </p>

            <blockquote className="p-4 bg-[#F8FAFC] border-l-4 border-[#011B4C] text-sm text-[#011B4C] font-display italic rounded-r-lg leading-relaxed shadow-sm">
              "{founder.supporting}"
            </blockquote>

            {/* Core Pillars List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {founder.pillars.map((pillar, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs font-bold text-[#011B4C] font-sans">
                  <span className="w-2 h-2 rounded-full bg-[#FBAD00] shrink-0" />
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-[#011B4C] hover:bg-[#1E2A44] text-[#FFFFFF] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow cursor-pointer transition-colors"
              >
                {t.hero.cta}
              </button>
            </div>
          </div>

        </div>

        {/* Foundation Divider */}
        <FoundationDivider align="center" />

        {/* Numbered "How Sessions Work" Sequence Section */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#011B4C]/70">
              {how.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#011B4C]">
              {how.title}
            </h2>
          </div>

          {/* 4-Step Numbered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {how.steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAFC] border border-slate-200/90 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md hover:border-[#011B4C]/30 transition-all"
              >
                <div className="space-y-3">
                  <span className="text-3xl font-mono font-extrabold text-[#011B4C] block">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-display font-bold text-[#011B4C]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1E2A44] leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
