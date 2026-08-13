import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Check, ArrowRight, Play, Sparkles, BookOpen, Compass, Award, ShieldCheck } from 'lucide-react';
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
    <section className="py-20 bg-[#FAFAFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Feature Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative bg-[#0B1B36] text-white p-8 rounded-2xl border-2 border-[#C58B1B]/40 shadow-2xl space-y-6 overflow-hidden">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-[#C58B1B] bg-white p-0.5 shadow-md">
                  <img
                    src={mascotImg}
                    alt="Castorax Tutor Mascot"
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-2xl font-serif-academic font-bold text-white">{t.brand.name}</h3>
                  <p className="text-xs text-[#E8CA8A] font-extrabold uppercase tracking-widest">
                    {t.brand.badge}
                  </p>
                </div>

                <blockquote className="italic text-slate-300 text-xs sm:text-sm leading-relaxed border-l-2 border-[#C58B1B] pl-4">
                  "{currentLang === 'en' 
                    ? 'Learning is not about memorization; it is about building deep understanding and real confidence step by step.' 
                    : 'L\'apprentissage ne consiste pas à mémoriser, mais à bâtir une compréhension profonde et une confiance réelle étape par étape.'}"
                </blockquote>

                <div className="pt-2 text-center">
                  <button
                    onClick={onOpenBooking}
                    className="w-full bg-[#C58B1B] hover:bg-[#A77312] text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-lg shadow cursor-pointer transition-colors"
                  >
                    {currentLang === 'en' ? 'EXPLORE METHODOLOGY →' : 'EXPLORER LA MÉTHODE →'}
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Core Methodology Text & 4-Grid Cards */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-black tracking-widest text-[#C58B1B] uppercase font-sans">
                {t.aboutUs.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-academic font-bold text-[#0B1B36] leading-tight">
                {currentLang === 'en' ? 'More Than Tutoring, It\'s an Experience' : 'Plus que du tutorat, une vraie expérience'}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {t.aboutUs.desc}
            </p>

            {/* 4 Feature Grid Cards (2x2 matching Northfield design) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#FAF3E3] border border-[#E8CA8A] text-[#C58B1B] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#0B1B36] font-sans">Personalized Pace</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {t.aboutUs.point1}
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#FAF3E3] border border-[#E8CA8A] text-[#C58B1B] flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#0B1B36] font-sans">Exam & Immigration Ready</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {t.aboutUs.point2}
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#FAF3E3] border border-[#E8CA8A] text-[#C58B1B] flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#0B1B36] font-sans">Between-Session Support</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {t.aboutUs.point3}
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#FAF3E3] border border-[#E8CA8A] text-[#C58B1B] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#0B1B36] font-sans">Proven System</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Clear step-by-step progress tracking for parents & students.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
