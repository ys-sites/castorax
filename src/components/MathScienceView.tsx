import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { FoundationDivider } from './FoundationDivider';
import { RiseUp, RiseUpStagger, RiseUpItem } from './animations/RiseUp';

interface MathScienceViewProps {
  currentLang: Language;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
}

export const MathScienceView: React.FC<MathScienceViewProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const t = translations[currentLang];
  const page = t.mathPage;

  return (
    <div className="space-y-16 pb-20 bg-[#FAFAFC]">
      {/* Hero Header */}
      <section className="bg-[#011B4C] text-[#FFFFFF] py-16 px-4 sm:px-8 border-b-2 border-[#FBAD00]">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <RiseUp delay={0.1}>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FBAD00] bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
              {page.eyebrow}
            </span>
          </RiseUp>
          <RiseUp delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#FFFFFF]">
              {page.heroTitle}
            </h1>
          </RiseUp>
          <RiseUp delay={0.3}>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto font-sans">
              {page.heroSubtitle}
            </p>
          </RiseUp>
          <RiseUp delay={0.4}>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#FBAD00] hover:bg-[#d49300] text-[#011B4C] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow cursor-pointer transition-transform hover:scale-105"
              >
                {t.hero.cta}
              </button>
            </div>
          </RiseUp>
        </div>
      </section>

      {/* Outcome Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RiseUp className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#011B4C]">
            Targeted Outcomes
          </h2>
        </RiseUp>
        <RiseUpStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {page.outcomes.map((outcome, idx) => (
            <RiseUpItem key={idx} className="h-full">
              <div className="bg-[#FFFFFF] border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3 h-full hover:shadow-md transition-transform hover:-translate-y-1">
                <div className="w-8 h-8 rounded-lg bg-[#011B4C] text-[#FBAD00] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-display font-bold text-[#011B4C]">{outcome.title}</h3>
                <p className="text-xs text-[#1E2A44] leading-relaxed font-sans">{outcome.desc}</p>
              </div>
            </RiseUpItem>
          ))}
        </RiseUpStagger>
      </section>

      {/* Course Offerings Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RiseUp className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#011B4C]/70">CURRICULUM</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#011B4C]">{page.subjectsTitle}</h2>
        </RiseUp>
        <RiseUpStagger staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {page.subjects.map((subj, idx) => (
            <RiseUpItem key={idx} className="h-full">
              <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between h-full hover:shadow-md transition-transform hover:-translate-y-1">
                <div className="space-y-3">
                  <div className="text-xs font-mono font-bold text-[#011B4C] uppercase tracking-wider">{subj.level}</div>
                  <h3 className="text-2xl font-display font-bold text-[#011B4C]">{subj.name}</h3>
                  <p className="text-xs sm:text-sm text-[#1E2A44] font-sans leading-relaxed">{subj.desc}</p>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#011B4C] hover:bg-[#1E2A44] text-[#FFFFFF] font-bold text-xs uppercase tracking-wider py-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Book Session</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FBAD00]" />
                </button>
              </div>
            </RiseUpItem>
          ))}
        </RiseUpStagger>
      </section>

      {/* 7 Reasons Why Students Succeed with Burhan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RiseUp className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#011B4C]/70">{page.reasonsTitle}</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#011B4C]">{page.reasonsSubtitle}</h2>
        </RiseUp>
        <RiseUpStagger staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {page.reasons.map((r, idx) => (
            <RiseUpItem key={idx} className="h-full">
              <div className="bg-[#FFFFFF] rounded-xl p-6 border border-slate-200 shadow-sm space-y-2 h-full hover:shadow-md transition-transform hover:-translate-y-1">
                <div className="text-lg font-mono font-bold text-[#011B4C]">0{idx + 1}</div>
                <h3 className="text-base font-display font-bold text-[#011B4C]">{r.title}</h3>
                <p className="text-xs text-[#1E2A44] font-sans leading-relaxed">{r.desc}</p>
              </div>
            </RiseUpItem>
          ))}
        </RiseUpStagger>
      </section>

      <RiseUp delay={0.2}>
        <FoundationDivider align="center" />
      </RiseUp>
    </div>
  );
};
