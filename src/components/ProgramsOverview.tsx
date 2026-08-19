import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { FoundationDivider } from './FoundationDivider';
import { RiseUp, RiseUpStagger, RiseUpItem } from './animations/RiseUp';

interface ProgramsOverviewProps {
  currentLang: Language;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: (program?: 'math' | 'french' | 'both') => void;
}

export const ProgramsOverview: React.FC<ProgramsOverviewProps> = ({
  currentLang,
  onNavigate,
  onOpenBooking,
}) => {
  const t = translations[currentLang];
  const split = t.trackSplit;

  return (
    <section className="py-16 sm:py-20 bg-[#FAFAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <RiseUp className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#011B4C]/70">
            {split.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#011B4C]">
            {split.title}
          </h2>
          <p className="text-sm sm:text-base text-[#1E2A44] leading-relaxed font-sans">
            {split.subtitle}
          </p>
        </RiseUp>

        {/* Two-Panel Decision Split */}
        <RiseUpStagger staggerDelay={0.15} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Panel A: Math & Science (--ink forward) */}
          <RiseUpItem className="h-full">
            <div className="bg-[#011B4C] text-[#FFFFFF] rounded-2xl p-8 sm:p-10 shadow-xl border border-[#011B4C] flex flex-col justify-between space-y-6 h-full transition-transform duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FBAD00]">
                    {split.math.badge}
                  </span>
                  <span className="text-sm font-mono font-bold text-[#FBAD00] bg-white/10 px-3 py-1 rounded-md">
                    {split.math.price}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#FFFFFF] leading-tight">
                  {split.math.title}
                </h3>

                <p className="text-sm text-white/85 leading-relaxed font-sans">
                  {split.math.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  onClick={() => onNavigate('math')}
                  className="text-xs font-bold text-[#FBAD00] hover:underline uppercase tracking-wider font-sans cursor-pointer text-left"
                >
                  {split.math.cta} →
                </button>

                <button
                  onClick={() => onOpenBooking('math')}
                  className="bg-[#FBAD00] hover:bg-[#d49300] text-[#011B4C] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow transition-colors cursor-pointer text-center hover:scale-105"
                >
                  {t.hero.cta}
                </button>
              </div>
            </div>
          </RiseUpItem>

          {/* Panel B: French & TEF/TCF (Crisp White Card with Navy Border) */}
          <RiseUpItem className="h-full">
            <div className="bg-[#FFFFFF] text-[#011B4C] rounded-2xl p-8 sm:p-10 shadow-lg border border-slate-200 flex flex-col justify-between space-y-6 h-full transition-transform duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#011B4C]">
                    {split.french.badge}
                  </span>
                  <span className="text-sm font-mono font-bold text-[#011B4C] bg-[#011B4C]/5 border border-[#011B4C]/10 px-3 py-1 rounded-md">
                    {split.french.price}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#011B4C] leading-tight">
                  {split.french.title}
                </h3>

                <p className="text-sm text-[#1E2A44] leading-relaxed font-sans">
                  {split.french.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  onClick={() => onNavigate('french')}
                  className="text-xs font-bold text-[#011B4C] hover:underline uppercase tracking-wider font-sans cursor-pointer text-left"
                >
                  {split.french.cta} →
                </button>

                <button
                  onClick={() => onOpenBooking('french')}
                  className="bg-[#011B4C] hover:bg-[#1E2A44] text-[#FFFFFF] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow transition-colors cursor-pointer text-center hover:scale-105"
                >
                  {t.hero.cta}
                </button>
              </div>
            </div>
          </RiseUpItem>

        </RiseUpStagger>

        {/* Foundation Divider Motif */}
        <RiseUp delay={0.2}>
          <FoundationDivider className="mt-16" />
        </RiseUp>

      </div>
    </section>
  );
};
