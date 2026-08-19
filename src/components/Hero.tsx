import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { RiseUp } from './animations/RiseUp';
import FoldText from './animations/FoldText';
import heroPhoto from '../assets/images/hero_tutoring_session.png';

interface HeroProps {
  currentLang: Language;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onNavigate,
  onOpenBooking,
}) => {
  const t = translations[currentLang];

  return (
    <section className="bg-gradient-to-b from-[#FAFAFC] via-[#F8FAFC] to-[#FFFFFF] text-[#011B4C] relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Asymmetric Typography & Clear Pitch */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Eyebrow marker */}
            <RiseUp delay={0.1}>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#011B4C] bg-[#011B4C]/5 border border-[#011B4C]/10 px-3.5 py-1 rounded-md">
                <span className="w-2 h-2 rounded-full bg-[#FBAD00]" />
                <span>{t.hero.eyebrow}</span>
              </div>
            </RiseUp>

            {/* Crisp High-Contrast Headline in Fraunces */}
            <RiseUp delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#011B4C] leading-[1.12] tracking-tight">
                {currentLang === 'en' ? (
                  <>
                    Tutoring that builds confidence — in <span className="italic text-[#011B4C]">Math</span>, <span className="italic text-[#011B4C]">Science</span>, and <span className="italic text-[#011B4C]">French</span>.
                  </>
                ) : (
                  <>
                    Un tutorat qui bâtit la confiance — en <span className="italic text-[#011B4C]">maths</span>, <span className="italic text-[#011B4C]">sciences</span> et <span className="italic text-[#011B4C]">français</span>.
                  </>
                )}
              </h1>
            </RiseUp>

            {/* Subtitle with FoldText animation */}
            <RiseUp delay={0.3}>
              <div className="text-base sm:text-lg text-[#1E2A44] leading-relaxed max-w-2xl font-normal font-sans">
                <FoldText
                  text={t.hero.subtitle}
                  splitBy="word"
                  trigger="mount"
                  duration={0.65}
                  stagger={0.03}
                  fontSize="1.125rem"
                  fontWeight={400}
                  color="#1E2A44"
                />
              </div>
            </RiseUp>

            {/* Action Buttons */}
            <RiseUp delay={0.4}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#011B4C] hover:bg-[#1E2A44] text-[#FFFFFF] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-md transition-all cursor-pointer text-center font-sans hover:scale-[1.02] active:scale-[0.98]"
                >
                  {t.hero.cta}
                </button>

                <button
                  onClick={() => onNavigate('pricing')}
                  className="bg-white hover:bg-slate-50 border border-slate-300 text-[#011B4C] font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-xl transition-all cursor-pointer text-center shadow-sm font-sans hover:scale-[1.02] active:scale-[0.98]"
                >
                  {t.hero.secondaryCta}
                </button>
              </div>
            </RiseUp>

            {/* Microcopy & Fast Response Guarantee */}
            <RiseUp delay={0.5}>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#1E2A44]/80 font-sans font-medium">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FBAD00] shrink-0" />
                <span>{t.hero.microcopy}</span>
              </div>
            </RiseUp>

          </div>

          {/* Right Column: Full Natural Ratio Image */}
          <div className="lg:col-span-6 relative">
            <RiseUp delay={0.3} yOffset={32}>
              <div className="relative mx-auto w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                  <img
                    src={heroPhoto}
                    alt="1-on-1 Online Tutoring Session"
                    className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </RiseUp>
          </div>

        </div>
      </div>
    </section>
  );
};
