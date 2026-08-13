import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { BookOpen, ArrowRight, CheckCircle2, Award, Sparkles } from 'lucide-react';

interface ProgramsOverviewProps {
  currentLang: Language;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
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
          <span className="text-xs font-black tracking-widest text-[#E8631A] uppercase bg-[#FFF0E5] px-4 py-1.5 rounded-full border border-[#FDBA74]/40 font-sans">
            {t.programs.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1B18] tracking-tight font-sans">
            {t.programs.title}
          </h2>
          <p className="text-base text-slate-600 font-normal">
            {t.programs.subtitle}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Program Card 1: Math & Science */}
          <div className="bg-[#FFF9F5] border-2 border-orange-100 hover:border-[#E8631A] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0E5] text-[#E8631A] flex items-center justify-center border border-orange-200/60 shadow-sm">
                  <Calculator className="w-6 h-6" />
                </div>
                <span className="text-sm font-black bg-[#E8631A]/10 text-[#E8631A] px-3 py-1 rounded-full border border-[#E8631A]/20">
                  {t.programs.math.price}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#1E1B18] font-sans group-hover:text-[#E8631A] transition-colors">
                  {t.programs.math.title}
                </h3>
                <p className="text-sm text-[#E8631A] font-bold mt-0.5">
                  {t.programs.math.subtitle}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {t.programs.math.blurb}
              </p>

              <div className="space-y-2 pt-2 border-t border-orange-100">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <Check className="w-4 h-4 text-[#E8631A] shrink-0" />
                  <span>{t.programs.math.feature1}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <Check className="w-4 h-4 text-[#E8631A] shrink-0" />
                  <span>{t.programs.math.feature2}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <Check className="w-4 h-4 text-[#E8631A] shrink-0" />
                  <span>{t.programs.math.feature3}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => onNavigate('math')}
                className="flex-1 bg-white border-2 border-[#E8631A] text-[#E8631A] hover:bg-[#E8631A] hover:text-white font-extrabold text-sm py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>{t.programs.math.ctaView}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenBooking('math')}
                className="bg-[#E8631A] hover:bg-[#D9480F] text-white font-black text-sm px-5 py-3 rounded-xl shadow transition-colors cursor-pointer"
              >
                {t.hero.cta}
              </button>
            </div>
          </div>

          {/* Program Card 2: French & TEF/TCF */}
          <div className="bg-[#FFF9F5] border-2 border-orange-100 hover:border-[#E8631A] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0E5] text-[#E8631A] flex items-center justify-center border border-orange-200/60 shadow-sm">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-sm font-black bg-[#E8631A] text-white px-3 py-1 rounded-full shadow-sm">
                  {t.programs.french.price}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#1E1B18] font-sans group-hover:text-[#E8631A] transition-colors">
                  {t.programs.french.title}
                </h3>
                <p className="text-sm text-[#E8631A] font-bold mt-0.5">
                  {t.programs.french.subtitle}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {t.programs.french.blurb}
              </p>

              <div className="space-y-2 pt-2 border-t border-orange-100">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <Check className="w-4 h-4 text-[#E8631A] shrink-0" />
                  <span>{t.programs.french.feature1}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <Check className="w-4 h-4 text-[#E8631A] shrink-0" />
                  <span>{t.programs.french.feature2}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <Check className="w-4 h-4 text-[#E8631A] shrink-0" />
                  <span>{t.programs.french.feature3}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => onNavigate('french')}
                className="flex-1 bg-white border-2 border-[#E8631A] text-[#E8631A] hover:bg-[#E8631A] hover:text-white font-extrabold text-sm py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>{t.programs.french.ctaView}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenBooking('french')}
                className="bg-[#E8631A] hover:bg-[#D9480F] text-white font-black text-sm px-5 py-3 rounded-xl shadow transition-colors cursor-pointer"
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
