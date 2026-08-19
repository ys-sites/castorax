import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { FoundationDivider } from './FoundationDivider';
import heroPhoto from '../assets/images/hero_tutoring_banner_1786527612169.jpg';

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
    <section className="py-20 bg-[#FAF6EC] relative border-t border-[#011B4C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Founder Bio Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Founder Portrait Placeholder Frame (Duotone Navy) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#011B4C]/15 bg-[#011B4C] aspect-[4/5]">
                <img
                  src={heroPhoto}
                  alt="Burhan - Founder & Lead Tutor"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011B4C] via-[#011B4C]/40 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-0 inset-x-0 p-6 text-[#FAF6EC]">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FBAD00] mb-1">
                    FOUNDER & LEAD TUTOR
                  </div>
                  <div className="text-xl font-display font-bold">
                    Burhan
                  </div>
                  <div className="text-xs text-[#FAF6EC]/80 font-sans mt-0.5">
                    Math, Science & French Tutoring Specialist
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Founder Story & Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#011B4C]/70 font-sans">
                {founder.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#011B4C]">
                {founder.title}
              </h2>
            </div>

            <p className="text-base text-[#1E2A44] leading-relaxed font-sans">
              {founder.desc}
            </p>

            <blockquote className="p-4 bg-[#F1E9D8] border-l-4 border-[#011B4C] text-sm text-[#011B4C] font-display italic rounded-r-lg leading-relaxed">
              "{founder.supporting}"
            </blockquote>

            {/* Core Pillars List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {founder.pillars.map((pillar, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs font-bold text-[#011B4C] font-sans">
                  <span className="w-2 h-2 rounded-full bg-[#FBAD00] shrink-0" />
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-[#011B4C] hover:bg-[#1E2A44] text-[#FAF6EC] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow cursor-pointer transition-colors"
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#011B4C]/70 font-sans">
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
                className="bg-[#F1E9D8] border border-[#011B4C]/15 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#011B4C]/40 transition-all"
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
