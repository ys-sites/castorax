import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Languages, Check } from 'lucide-react';
import { FoundationDivider } from './FoundationDivider';

interface FrenchViewProps {
  currentLang: Language;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
}

export const FrenchView: React.FC<FrenchViewProps> = ({
  currentLang,
  onNavigate,
  onOpenBooking,
}) => {
  const t = translations[currentLang];

  return (
    <div className="bg-[#FAFAFC] py-12 space-y-16">
      
      {/* Page Hero Header */}
      <section className="bg-[#011B4C] text-[#FFFFFF] py-16 px-6 sm:px-10 rounded-2xl max-w-7xl mx-auto shadow-xl border border-[#011B4C] relative overflow-hidden">
        <div className="max-w-3xl space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white/10 text-[#FBAD00] text-xs font-mono font-bold uppercase tracking-wider border border-[#FBAD00]/30">
            <Languages className="w-4 h-4 text-[#FBAD00]" />
            <span>$45 / hr · TEF & TCF Canada Specialist</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-[#FFFFFF] leading-tight">
            {t.frenchPage.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-white/85 leading-relaxed font-sans">
            {t.frenchPage.heroSubtitle}
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-[#FBAD00] hover:bg-[#d49300] text-[#011B4C] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow cursor-pointer transition-colors"
            >
              {t.hero.cta}
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="bg-white/10 hover:bg-white/20 text-[#FFFFFF] font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl border border-white/20 transition-colors cursor-pointer"
            >
              {t.nav.pricing}
            </button>
          </div>
        </div>
      </section>

      {/* Target Audience Section (Exact qualifying audience) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#011B4C]/70">
            TARGET AUDIENCE
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#011B4C]">
            {t.frenchPage.whoForTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.frenchPage.whoFor.map((audience, idx) => (
            <div key={idx} className="bg-[#FFFFFF] border border-slate-200 p-6 rounded-xl shadow-sm space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#011B4C] text-[#FBAD00] font-mono font-bold text-xs flex items-center justify-center">
                0{idx + 1}
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#011B4C] font-sans leading-snug">
                {audience}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum: What You'll Learn */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#011B4C]">
              {t.frenchPage.whatYouLearnTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.frenchPage.whatYouLearn.map((item, idx) => (
              <div key={idx} className="bg-[#FAFAFC] p-4 sm:p-5 rounded-xl border border-slate-200 flex items-start gap-3.5">
                <Check className="w-5 h-5 text-[#FBAD00] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-[#011B4C] font-sans leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEF / TCF Callout Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#011B4C] text-[#FFFFFF] p-8 sm:p-12 rounded-2xl shadow-xl border border-[#011B4C] space-y-6 relative overflow-hidden">
          <div className="flex items-center gap-3">
            <span className="bg-[#FBAD00] text-[#011B4C] text-xs font-mono font-bold px-3 py-1 rounded uppercase tracking-wider">
              {t.frenchPage.tefBadge}
            </span>
            <span className="text-xs font-mono font-bold text-white/80 uppercase tracking-widest">
              TEF CANADA & TCF CANADA SPECIALIST
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#FFFFFF]">
            {t.frenchPage.tefCalloutTitle}
          </h3>

          <p className="text-sm sm:text-base text-white/85 leading-relaxed font-sans max-w-3xl">
            {t.frenchPage.tefCallout}
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#FBAD00] hover:bg-[#d49300] text-[#011B4C] font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl shadow cursor-pointer transition-colors"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>

        <FoundationDivider className="mt-12" />
      </section>

    </div>
  );
};
