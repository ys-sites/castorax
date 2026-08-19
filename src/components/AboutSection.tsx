import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { FoundationDivider } from './FoundationDivider';
import { Instagram } from 'lucide-react';
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
        
        {/* Founder Bio & Video Reel Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Reel Video Player */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-[#011B4C] aspect-[9/16] max-h-[560px] mx-auto">
                <video
                  src="/castorax_intro.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster={founderPhoto}
                />
                
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#011B4C] via-[#011B4C]/60 to-transparent text-white pointer-events-none">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FBAD00] mb-0.5">
                    CASTORAX REEL
                  </div>
                  <div className="text-sm font-display font-bold">
                    Why Castorax Tutoring Exists
                  </div>
                </div>
              </div>

              {/* Instagram Reel Link */}
              <div className="mt-3 text-center">
                <a
                  href="https://www.instagram.com/reel/DcJjvDORvh4/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#011B4C] hover:text-[#FBAD00] transition-colors cursor-pointer"
                >
                  <Instagram className="w-4 h-4 text-[#FBAD00]" />
                  <span>Watch on Instagram Reel →</span>
                </a>
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

            <div className="pt-2 flex items-center gap-4 flex-wrap">
              <button
                onClick={onOpenBooking}
                className="bg-[#011B4C] hover:bg-[#1E2A44] text-[#FFFFFF] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow cursor-pointer transition-colors"
              >
                {t.hero.cta}
              </button>

              <a
                href="https://www.instagram.com/castoraxtutoring/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#F8FAFC] hover:bg-slate-100 border border-slate-300 text-[#011B4C] font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl shadow-sm cursor-pointer transition-colors font-mono"
              >
                <Instagram className="w-4 h-4 text-[#FBAD00]" />
                <span>@castoraxtutoring</span>
              </a>
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
