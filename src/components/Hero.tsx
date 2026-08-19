import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import heroBgPhoto from '../assets/images/hero_tutoring_session.png';

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
    <section className="relative text-white overflow-hidden border-b border-slate-200 min-h-[560px] lg:min-h-[620px] flex items-center bg-[#011B4C]">
      {/* Background Hero Image */}
      <img
        src={heroBgPhoto}
        alt="Tutoring Session Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Dark Navy Scrim Overlay for 100% High-Contrast Text Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#011B4C] via-[#011B4C]/90 to-[#011B4C]/40 sm:from-[#011B4C] sm:via-[#011B4C]/85 sm:to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#011B4C]/90 via-transparent to-[#011B4C]/40" />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Ultra-Legible Headline & Copy */}
          <div className="lg:col-span-8 space-y-6 text-left max-w-3xl">
            
            {/* Eyebrow marker */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#FBAD00] bg-[#FBAD00]/10 border border-[#FBAD00]/30 px-3.5 py-1.5 rounded-md backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FBAD00]" />
              <span>{t.hero.eyebrow}</span>
            </div>

            {/* Main Headline in Fraunces - Ultra High Contrast White & Gold */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.12] tracking-tight drop-shadow-md">
              {currentLang === 'en' ? (
                <>
                  Tutoring that builds confidence — in <span className="italic text-[#FBAD00]">Math</span>, <span className="italic text-[#FBAD00]">Science</span>, and <span className="italic text-[#FBAD00]">French</span>.
                </>
              ) : (
                <>
                  Un tutorat qui bâtit la confiance — en <span className="italic text-[#FBAD00]">maths</span>, <span className="italic text-[#FBAD00]">sciences</span> et <span className="italic text-[#FBAD00]">français</span>.
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl font-normal font-sans drop-shadow-sm">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#FBAD00] hover:bg-[#d49300] text-[#011B4C] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all cursor-pointer text-center font-sans"
              >
                {t.hero.cta}
              </button>

              <button
                onClick={() => onNavigate('pricing')}
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-xl transition-all cursor-pointer text-center shadow-md backdrop-blur-sm font-sans"
              >
                {t.hero.secondaryCta}
              </button>
            </div>

            {/* Microcopy & Fast Response Guarantee */}
            <div className="pt-2 flex items-center gap-2 text-xs text-white/80 font-sans font-medium">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FBAD00] shrink-0" />
              <span>{t.hero.microcopy}</span>
            </div>

          </div>

          {/* Right Column: Floating Feature Badge */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-[#011B4C]/80 border border-white/20 p-6 rounded-2xl backdrop-blur-md space-y-3 text-white shadow-2xl max-w-sm ml-auto">
              <div className="text-xs font-mono font-bold text-[#FBAD00] uppercase tracking-wider">
                {currentLang === 'en' ? '1-ON-1 ONLINE SESSIONS' : 'SÉANCES INDIVIDUELLES EN LIGNE'}
              </div>
              <p className="text-xs text-white/90 leading-relaxed font-sans">
                {currentLang === 'en'
                  ? 'Interactive video calls, digital whiteboards & direct support between lessons.'
                  : 'Appels vidéo interactifs, tableaux blancs virtuels & soutien entre les cours.'}
              </p>
              <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-[#FBAD00]">
                <span>⚡ {t.hero.banner}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
