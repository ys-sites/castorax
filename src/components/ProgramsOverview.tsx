import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { BookOpen, ArrowRight, Calculator, Check } from 'lucide-react';

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

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black tracking-widest text-[#011B4C] uppercase bg-[#FEF3C7] px-4 py-1.5 rounded-full border border-[#FCD34D] font-sans">
            {currentLang === 'en' ? 'OUR TUTORING PROGRAMS' : 'NOS PROGRAMMES DE TUTORAT'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#011B4C] tracking-tight font-sans">
            {t.programs.title}
          </h2>
          <p className="text-base text-slate-600 font-normal">
            {t.programs.subtitle}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Program Card 1: Math & Science */}
          <div className="bg-[#F8FAFC] border-2 border-slate-200 hover:border-[#011B4C] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#011B4C] text-[#FBAD00] flex items-center justify-center shadow-md">
                  <Calculator className="w-6 h-6" />
                </div>
                <span className="text-xs font-black bg-[#011B4C]/10 text-[#011B4C] px-3.5 py-1 rounded-full border border-[#011B4C]/20">
                  $40 / hr · Math & Science
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#011B4C] font-sans group-hover:text-[#011B4C] transition-colors">
                  {t.programs.math.title}
                </h3>
                <p className="text-xs text-[#011B4C]/80 font-bold mt-1 uppercase tracking-wider">
                  {t.programs.math.badge}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {t.programs.math.blurb}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <div className="w-4 h-4 rounded-full bg-[#011B4C] text-[#FBAD00] flex items-center justify-center text-[10px] font-bold">✓</div>
                  <span>{currentLang === 'en' ? 'Homework support & study skills' : 'Aide aux devoirs & méthodes d’étude'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <div className="w-4 h-4 rounded-full bg-[#011B4C] text-[#FBAD00] flex items-center justify-center text-[10px] font-bold">✓</div>
                  <span>{currentLang === 'en' ? 'Progressive step-by-step guidance' : 'Approche progressive étape par étape'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <div className="w-4 h-4 rounded-full bg-[#011B4C] text-[#FBAD00] flex items-center justify-center text-[10px] font-bold">✓</div>
                  <span>{currentLang === 'en' ? 'Support between sessions' : 'Soutien disponible entre les séances'}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => onNavigate('math')}
                className="flex-1 bg-white border-2 border-[#011B4C] text-[#011B4C] hover:bg-[#011B4C] hover:text-[#FBAD00] font-extrabold text-sm py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>{t.programs.math.link}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenBooking('math')}
                className="bg-[#FBAD00] hover:bg-[#E09B00] text-[#011B4C] font-black text-sm px-5 py-3 rounded-xl shadow transition-colors cursor-pointer"
              >
                {t.hero.cta}
              </button>
            </div>
          </div>

          {/* Program Card 2: French & TEF/TCF */}
          <div className="bg-[#F8FAFC] border-2 border-slate-200 hover:border-[#011B4C] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#011B4C] text-[#FBAD00] flex items-center justify-center shadow-md">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-xs font-black bg-[#FBAD00] text-[#011B4C] px-3.5 py-1 rounded-full shadow-sm">
                  $45 / hr · TEF / TCF
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#011B4C] font-sans group-hover:text-[#011B4C] transition-colors">
                  {t.programs.french.title}
                </h3>
                <p className="text-xs text-[#011B4C]/80 font-bold mt-1 uppercase tracking-wider">
                  {t.programs.french.badge}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {t.programs.french.blurb}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <div className="w-4 h-4 rounded-full bg-[#011B4C] text-[#FBAD00] flex items-center justify-center text-[10px] font-bold">✓</div>
                  <span>{currentLang === 'en' ? 'Practical French for Canadian daily life' : 'Français pratique pour la vie au Canada'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <div className="w-4 h-4 rounded-full bg-[#011B4C] text-[#FBAD00] flex items-center justify-center text-[10px] font-bold">✓</div>
                  <span>{currentLang === 'en' ? 'TEF / TCF Exam preparation included' : 'Préparation TEF / TCF incluse'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <div className="w-4 h-4 rounded-full bg-[#011B4C] text-[#FBAD00] flex items-center justify-center text-[10px] font-bold">✓</div>
                  <span>{currentLang === 'en' ? 'Tailored to PR, PEQ & work permits' : 'Adapté pour résidence permanente & PEQ'}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => onNavigate('french')}
                className="flex-1 bg-white border-2 border-[#011B4C] text-[#011B4C] hover:bg-[#011B4C] hover:text-[#FBAD00] font-extrabold text-sm py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>{t.programs.french.link}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenBooking('french')}
                className="bg-[#FBAD00] hover:bg-[#E09B00] text-[#011B4C] font-black text-sm px-5 py-3 rounded-xl shadow transition-colors cursor-pointer"
              >
                {t.hero.cta}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

