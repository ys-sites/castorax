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
    <section className="py-20 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#0F172A]/5 text-[#0F172A] px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>{currentLang === 'en' ? 'Core Offerings' : 'Nos Offres Principales'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight font-sans">
            {t.programs.title}
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-normal">
            {t.programs.subtitle}
          </p>
        </div>

        {/* 2 Main Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Program Card 1: Math & Science */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B]/10 rounded-bl-full pointer-events-none" />
            
            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="bg-[#0F172A] text-[#F59E0B] text-xs font-black px-3.5 py-1.5 rounded-full">
                  {t.programs.math.badge}
                </span>
                <span className="text-2xl font-black text-[#0F172A]">$40 <span className="text-xs font-normal text-slate-500">/ hr</span></span>
              </div>

              <h3 className="text-2xl font-black text-[#0F172A] mb-3 group-hover:text-blue-600 transition-colors font-sans">
                {t.programs.math.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {t.programs.math.blurb}
              </p>

              {/* Highlights */}
              <ul className="space-y-2.5 mb-8">
                {t.mathPage.subjects.slice(0, 4).map((sub, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
              <button
                onClick={() => onNavigate('math')}
                className="inline-flex items-center gap-2 font-black text-sm text-[#0F172A] group-hover:text-blue-600 transition-colors cursor-pointer"
              >
                <span>{t.programs.math.link}</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-extrabold text-xs px-4 py-2.5 rounded-xl shadow transition-all cursor-pointer"
              >
                {t.nav.cta}
              </button>
            </div>

          </div>

          {/* Program Card 2: French Tutoring */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0F172A]/10 rounded-bl-full pointer-events-none" />
            
            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="bg-[#F59E0B] text-[#0F172A] text-xs font-black px-3.5 py-1.5 rounded-full">
                  {t.programs.french.badge}
                </span>
                <span className="text-2xl font-black text-[#0F172A]">$45 <span className="text-xs font-normal text-slate-500">/ hr</span></span>
              </div>

              <h3 className="text-2xl font-black text-[#0F172A] mb-3 group-hover:text-blue-600 transition-colors font-sans">
                {t.programs.french.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {t.programs.french.blurb}
              </p>

              {/* Highlights */}
              <ul className="space-y-2.5 mb-8">
                {t.frenchPage.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    <span>{feat.title}: {feat.body}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
              <button
                onClick={() => onNavigate('french')}
                className="inline-flex items-center gap-2 font-black text-sm text-[#0F172A] group-hover:text-blue-600 transition-colors cursor-pointer"
              >
                <span>{t.programs.french.link}</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-extrabold text-xs px-4 py-2.5 rounded-xl shadow transition-all cursor-pointer"
              >
                {t.nav.cta}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
