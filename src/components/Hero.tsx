import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import heroPhoto from '../assets/images/hero_tutoring_banner_1786527612169.jpg';

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
    <section className="bg-[#FAF6EC] text-[#011B4C] relative overflow-hidden border-b border-[#011B4C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetric Typography & Clear Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow marker */}
            <div className="text-xs font-bold uppercase tracking-widest text-[#011B4C]/70 font-sans">
              {t.hero.eyebrow}
            </div>

            {/* Main Headline in Fraunces */}
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

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#1E2A44] leading-relaxed max-w-2xl font-normal font-sans">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#011B4C] hover:bg-[#1E2A44] text-[#FAF6EC] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-md transition-all cursor-pointer text-center"
              >
                {t.hero.cta}
              </button>

              <button
                onClick={() => onNavigate('pricing')}
                className="bg-[#F1E9D8] hover:bg-[#FAF6EC] border border-[#011B4C]/20 text-[#011B4C] font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-xl transition-all cursor-pointer text-center shadow-sm"
              >
                {t.hero.secondaryCta}
              </button>
            </div>

            {/* Microcopy & Fast Response Guarantee */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#1E2A44]/80 font-sans">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FBAD00]" />
              <span>{t.hero.microcopy}</span>
            </div>

          </div>

          {/* Right Column: Full-Bleed Portrait Photo with Duotone Treatment */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Photo Frame Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#011B4C]/15 bg-[#011B4C] aspect-[4/5]">
                {/* Image with duotone feel overlay */}
                <img
                  src={heroPhoto}
                  alt="Castorax Tutoring Online Session"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-90 transition-transform duration-700 hover:scale-105"
                />
                
                {/* Duotone Navy Overlay Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#011B4C] via-[#011B4C]/30 to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#011B4C] to-transparent text-[#FAF6EC]">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FBAD00] mb-1">
                    {currentLang === 'en' ? '1-ON-1 ONLINE SESSIONS' : 'SÉANCES INDIVIDUELLES EN LIGNE'}
                  </div>
                  <div className="text-sm font-display italic text-[#FAF6EC]/90">
                    {currentLang === 'en'
                      ? 'Interactive video calls, digital whiteboards, and direct support between lessons.'
                      : 'Appels vidéo interactifs, tableaux blancs virtuels et soutien entre les cours.'}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
