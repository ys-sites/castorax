import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Check, ArrowRight } from 'lucide-react';
import mascotImg from '../assets/images/castorax_mascot_logo_1786527601351.jpg';

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

  return (
    <section className="py-20 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mascot Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-orange-400/20 to-amber-400/20 rounded-3xl blur-xl pointer-events-none" />

              <div className="relative bg-white p-8 rounded-3xl border-2 border-orange-100 shadow-2xl text-center space-y-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#E8631A] shadow-lg bg-white p-1">
                  <img
                    src={mascotImg}
                    alt="Castorax Tutor Mascot"
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-[#1E1B18] font-sans">{t.aboutPage.title}</h3>
                  <p className="text-xs text-[#E8631A] font-extrabold tracking-wider uppercase">
                    {t.aboutPage.badge}
                  </p>
                </div>

                <blockquote className="italic text-slate-600 text-sm leading-relaxed border-l-2 border-[#E8631A] pl-4 text-left">
                  "{currentLang === 'en' 
                    ? 'Learning is not about memorization; it is about building deep understanding and real confidence step by step.' 
                    : 'L\'apprentissage ne consiste pas à mémoriser, mais à bâtir une compréhension profonde et une confiance réelle étape par étape.'}"
                </blockquote>

                {/* 3 Pillars Quick Badges */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
                  <div className="bg-[#FFF0E5] p-2.5 rounded-xl border border-orange-200/60 font-bold text-[#1E1B18]">
                    {t.aboutPage.pillars.p1}
                  </div>
                  <div className="bg-[#FFF0E5] p-2.5 rounded-xl border border-orange-200/60 font-bold text-[#1E1B18]">
                    {t.aboutPage.pillars.p2}
                  </div>
                  <div className="bg-[#FFF0E5] p-2.5 rounded-xl border border-orange-200/60 font-bold text-[#1E1B18]">
                    {t.aboutPage.pillars.p3}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Core Methodology Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-black tracking-widest text-[#E8631A] uppercase bg-[#FFF0E5] px-4 py-1.5 rounded-full border border-[#FDBA74]/40 font-sans">
                {t.aboutPage.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1E1B18] tracking-tight font-sans">
                {t.aboutUs.title}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {t.aboutUs.subtitle}
            </p>

            {/* Bullet Points */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#FFF0E5] text-[#E8631A] border border-orange-200 flex items-center justify-center shrink-0 mt-0.5 font-black shadow-sm">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base text-[#1E1B18] font-semibold">
                  {t.aboutUs.point1}
                </span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#FFF0E5] text-[#E8631A] border border-orange-200 flex items-center justify-center shrink-0 mt-0.5 font-black shadow-sm">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base text-[#1E1B18] font-semibold">
                  {t.aboutUs.point2}
                </span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#FFF0E5] text-[#E8631A] border border-orange-200 flex items-center justify-center shrink-0 mt-0.5 font-black shadow-sm">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base text-[#1E1B18] font-semibold">
                  {t.aboutUs.point3}
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#E8631A] hover:bg-[#D9480F] text-white font-black text-sm px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.hero.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

