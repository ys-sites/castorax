import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Check, ArrowRight, HeartHandshake, Sparkles, BookOpen } from 'lucide-react';
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
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Mascot & Patient Mentor Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing decorative block */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#0F172A] to-blue-900 rounded-3xl opacity-10 transform -rotate-1 pointer-events-none" />

              <div className="relative bg-[#0F172A] text-white rounded-3xl p-8 shadow-2xl border-2 border-[#F59E0B]/30 space-y-6">
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#F59E0B] bg-white shadow-md shrink-0">
                    <img
                      src={mascotImg}
                      alt="Castorax Beaver Mascot"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-extrabold tracking-wider text-[#F59E0B]">
                      {t.brand.badge}
                    </span>
                    <h3 className="text-2xl font-black text-white font-sans">{t.brand.name}</h3>
                  </div>
                </div>

                <blockquote className="italic text-slate-200 text-sm leading-relaxed border-l-2 border-[#F59E0B] pl-4">
                  "{currentLang === 'en' 
                    ? 'Learning is not about memorization; it is about building deep understanding and real confidence step by step.' 
                    : 'L\'apprentissage ne consiste pas à mémoriser, mais à bâtir une compréhension profonde et une confiance réelle étape par étape.'}"
                </blockquote>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-white/10 p-3.5 rounded-xl border border-white/10 text-center">
                    <HeartHandshake className="w-6 h-6 text-[#F59E0B] mx-auto mb-1" />
                    <div className="text-xs font-bold text-slate-200">
                      {currentLang === 'en' ? 'Patient & Encouraging' : 'Patient & Encourageant'}
                    </div>
                  </div>
                  <div className="bg-white/10 p-3.5 rounded-xl border border-white/10 text-center">
                    <BookOpen className="w-6 h-6 text-[#F59E0B] mx-auto mb-1" />
                    <div className="text-xs font-bold text-slate-200">
                      {currentLang === 'en' ? 'Tailored Learning Plans' : 'Plans sur mesure'}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Differentiators */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <span className="text-xs font-extrabold tracking-widest text-[#0F172A] uppercase bg-[#0F172A]/10 px-3.5 py-1.5 rounded-full">
                {t.aboutUs.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-[#0F172A] leading-tight tracking-tight font-sans">
              {t.aboutUs.title}
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              {t.aboutUs.desc}
            </p>

            {/* Checkmark List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#0F172A] text-[#F59E0B] flex items-center justify-center shrink-0 mt-0.5 font-black shadow-sm">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base text-slate-800 font-semibold">
                  {t.aboutUs.point1}
                </span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#0F172A] text-[#F59E0B] flex items-center justify-center shrink-0 mt-0.5 font-black shadow-sm">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base text-slate-800 font-semibold">
                  {t.aboutUs.point2}
                </span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#0F172A] text-[#F59E0B] flex items-center justify-center shrink-0 mt-0.5 font-black shadow-sm">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base text-slate-800 font-semibold">
                  {t.aboutUs.point3}
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-black text-sm px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
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
