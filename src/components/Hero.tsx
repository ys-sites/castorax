import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Sparkles, MessageSquare, CheckCircle, ShieldCheck, Clock, Award } from 'lucide-react';
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
    <div className="relative bg-[#0F172A] text-white overflow-hidden">
      {/* Soft Background Grid Accent */}
      <div className="absolute inset-0 opacity-10 bg-[radial-[#F59E0B]_1px,transparent_1px] [background-size:24px_24px] pointer-events-none" />
      
      {/* Glow Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F59E0B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F59E0B]/15 border border-[#F59E0B]/40 px-4 py-1.5 rounded-full text-[#F59E0B] text-xs sm:text-sm font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-[#F59E0B]" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Display H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.15] tracking-tight font-sans">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons & Microcopy */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-black text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5 fill-[#0F172A]" />
                <span>{t.hero.cta}</span>
              </button>

              <button
                onClick={() => onNavigate('pricing')}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold text-base px-6 py-4 rounded-xl border border-white/20 transition-all cursor-pointer text-center"
              >
                <span>{t.nav.pricing}</span>
              </button>
            </div>

            {/* Response Microcopy */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-slate-300 pt-1">
              <Clock className="w-4 h-4 text-[#F59E0B]" />
              <span>{t.hero.microcopy}</span>
            </div>

            {/* Highlights Grid */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="text-xl font-black text-[#F59E0B] font-sans">{t.hero.stats.satisfaction}</div>
                <div className="text-xs text-slate-300 font-medium">{t.hero.stats.satisfactionLabel}</div>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="text-xl font-black text-[#F59E0B] font-sans">{t.hero.stats.tefPass}</div>
                <div className="text-xs text-slate-300 font-medium">{t.hero.stats.tefPassLabel}</div>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="text-xl font-black text-[#F59E0B] font-sans">{t.hero.stats.format}</div>
                <div className="text-xs text-slate-300 font-medium">{t.hero.stats.formatLabel}</div>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="text-xl font-black text-[#F59E0B] font-sans">{t.hero.stats.response}</div>
                <div className="text-xs text-slate-300 font-medium">{t.hero.stats.responseLabel}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Visual Mascot & Program Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backplate Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#F59E0B]/30 to-blue-600/30 rounded-3xl blur-xl pointer-events-none" />

              {/* Main Card Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-[#1E293B] p-6 text-white space-y-6">
                
                {/* Brand Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#F59E0B] bg-white shadow-lg shrink-0">
                    <img
                      src={mascotImg}
                      alt="Castorax Beaver Mascot"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{t.brand.name}</h3>
                    <p className="text-xs text-[#F59E0B] font-bold">{t.brand.badge}</p>
                    <p className="text-xs text-slate-300 mt-0.5">{t.brand.email}</p>
                  </div>
                </div>

                {/* Program Cards Preview */}
                <div className="space-y-3">
                  <div 
                    onClick={() => onNavigate('math')}
                    className="p-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                        {t.programs.math.title}
                      </h4>
                      <span className="text-xs bg-[#F59E0B]/20 text-[#F59E0B] px-2 py-0.5 rounded-full font-bold">
                        $40 / hr
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 line-clamp-2">
                      {t.programs.math.blurb}
                    </p>
                  </div>

                  <div 
                    onClick={() => onNavigate('french')}
                    className="p-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                        {t.programs.french.title}
                      </h4>
                      <span className="text-xs bg-[#F59E0B] text-[#0F172A] px-2 py-0.5 rounded-full font-black">
                        TEF / TCF
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 line-clamp-2">
                      {t.programs.french.blurb}
                    </p>
                  </div>
                </div>

                {/* Guarantees Box */}
                <div className="bg-[#0F172A] p-4 rounded-xl border border-[#F59E0B]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    <span>{currentLang === 'en' ? 'Step-by-step guidance & personalized plans' : 'Approche étape par étape et plans sur mesure'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    <span>{currentLang === 'en' ? 'Support between sessions (Email / IG DM)' : 'Soutien entre les séances (Courriel / IG DM)'}</span>
                  </div>
                </div>

                {/* Direct Action */}
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-black py-3 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
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
