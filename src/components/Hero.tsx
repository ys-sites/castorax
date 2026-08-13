import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Sparkles, MessageSquare, CheckCircle, ShieldCheck, Clock } from 'lucide-react';
import mascotImg from '../assets/images/castorax_mascot_logo_1786527601351.jpg';

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
    <div className="relative bg-gradient-to-b from-[#F1F5F9] via-[#F8FAFC] to-white text-[#0A192F] overflow-hidden">
      {/* Geometric Decorative Rings */}
      <div className="absolute top-12 right-12 w-64 h-64 border-2 border-[#011B4C]/10 rounded-3xl transform rotate-12 pointer-events-none" />
      <div className="absolute -bottom-16 left-12 w-80 h-80 border-2 border-[#FBAD00]/20 rounded-full pointer-events-none" />

      {/* Main Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FEF3C7] border border-[#FCD34D] px-4 py-1.5 rounded-full text-[#011B4C] text-xs sm:text-sm font-extrabold tracking-wide">
              <Sparkles className="w-4 h-4 text-[#FBAD00]" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Display H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-[#011B4C] leading-[1.15] tracking-tight font-sans">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons & Microcopy */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-[#FBAD00] hover:bg-[#E09B00] text-[#011B4C] font-black text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5 fill-[#011B4C]" />
                <span>{t.hero.cta}</span>
              </button>

              <button
                onClick={() => onNavigate('pricing')}
                className="w-full sm:w-auto bg-white border-2 border-[#011B4C] hover:bg-[#011B4C] text-[#011B4C] hover:text-[#FBAD00] font-extrabold text-base px-6 py-4 rounded-xl transition-all cursor-pointer text-center shadow-sm"
              >
                <span>{t.nav.pricing}</span>
              </button>
            </div>

            {/* Response Microcopy */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-slate-500 pt-1 font-medium">
              <Clock className="w-4 h-4 text-[#011B4C]" />
              <span>{t.hero.microcopy}</span>
            </div>

            {/* Highlights Grid */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-[#011B4C] font-sans">{t.hero.stats.satisfaction}</div>
                <div className="text-xs text-slate-600 font-bold">{t.hero.stats.satisfactionLabel}</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-[#011B4C] font-sans">{t.hero.stats.tefPass}</div>
                <div className="text-xs text-slate-600 font-bold">{t.hero.stats.tefPassLabel}</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-[#011B4C] font-sans">{t.hero.stats.format}</div>
                <div className="text-xs text-slate-600 font-bold">{t.hero.stats.formatLabel}</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-[#011B4C] font-sans">{t.hero.stats.response}</div>
                <div className="text-xs text-slate-600 font-bold">{t.hero.stats.responseLabel}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Visual Mascot & Program Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backplate Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#011B4C]/10 to-[#FBAD00]/20 rounded-3xl blur-xl pointer-events-none" />

              {/* Main Card Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-white p-6 text-[#0A192F] space-y-6">
                
                {/* Brand Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-slate-200">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#FBAD00] bg-white shadow-md shrink-0">
                    <img
                      src={mascotImg}
                      alt="Castorax Beaver Mascot"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#011B4C]">{t.brand.name}</h3>
                    <p className="text-xs text-[#011B4C]/80 font-bold">{t.brand.badge}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{t.brand.email}</p>
                  </div>
                </div>

                {/* Program Cards Preview */}
                <div className="space-y-3">
                  <div 
                    onClick={() => onNavigate('math')}
                    className="p-4 rounded-2xl bg-[#F8FAFC] hover:bg-[#FEF3C7]/40 border border-slate-200 hover:border-[#FBAD00] transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-[#011B4C] group-hover:text-[#011B4C] transition-colors">
                        {t.programs.math.title}
                      </h4>
                      <span className="text-xs bg-[#FBAD00]/20 text-[#011B4C] px-2.5 py-0.5 rounded-full font-extrabold">
                        $40 / hr
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {t.programs.math.blurb}
                    </p>
                  </div>

                  <div 
                    onClick={() => onNavigate('french')}
                    className="p-4 rounded-2xl bg-[#F8FAFC] hover:bg-[#FEF3C7]/40 border border-slate-200 hover:border-[#FBAD00] transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-[#011B4C] group-hover:text-[#011B4C] transition-colors">
                        {t.programs.french.title}
                      </h4>
                      <span className="text-xs bg-[#011B4C] text-[#FBAD00] px-2.5 py-0.5 rounded-full font-extrabold">
                        TEF / TCF
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {t.programs.french.blurb}
                    </p>
                  </div>
                </div>

                {/* Guarantees Box */}
                <div className="bg-[#FEF3C7]/50 p-4 rounded-2xl border border-[#FCD34D]/60 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#011B4C] font-semibold">
                    <CheckCircle className="w-4 h-4 text-[#FBAD00] shrink-0 fill-[#011B4C]" />
                    <span>{currentLang === 'en' ? 'Step-by-step guidance & personalized plans' : 'Approche étape par étape et plans sur mesure'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#011B4C] font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#FBAD00] shrink-0" />
                    <span>{currentLang === 'en' ? 'Support between sessions (Email / IG DM)' : 'Soutien entre les séances (Courriel / IG DM)'}</span>
                  </div>
                </div>

                {/* Direct Action */}
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#FBAD00] hover:bg-[#E09B00] text-[#011B4C] font-black py-3.5 rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-[#011B4C]" />
                  <span>{t.hero.cta}</span>
                </button>

              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

