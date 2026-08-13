import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Calculator, CheckCircle2, Sparkles, Trophy, ArrowRight, ShieldCheck } from 'lucide-react';

interface MathScienceViewProps {
  currentLang: Language;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
}

export const MathScienceView: React.FC<MathScienceViewProps> = ({
  currentLang,
  onNavigate,
  onOpenBooking,
}) => {
  const t = translations[currentLang];

  return (
    <div className="bg-[#F8FAFC] py-12 space-y-16">
      
      {/* Hero Header */}
      <section className="bg-[#0F172A] text-white py-16 px-4 sm:px-6 lg:px-8 rounded-3xl max-w-7xl mx-auto shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F59E0B] text-[#0F172A] text-xs font-black uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>$40 / hr · Math & Science Tutoring</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight font-sans text-white">
            {t.mathPage.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            {t.mathPage.heroSubtitle}
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-black px-6 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer"
            >
              {t.hero.cta}
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3.5 rounded-xl border border-white/20 transition-all cursor-pointer"
            >
              {t.nav.pricing}
            </button>
          </div>
        </div>
      </section>

      {/* Outcome Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F172A] text-[#F59E0B] p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-around gap-6 text-center border-2 border-[#F59E0B]">
          {t.mathPage.outcomes.map((outcome, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Trophy className="w-6 h-6 shrink-0" />
              <span className="text-lg sm:text-xl font-black text-white tracking-wide font-sans">{outcome}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects Offered Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] font-sans">
            {t.mathPage.subjectsTitle}
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            {currentLang === 'en'
              ? 'Comprehensive academic support tailored to your curriculum requirements.'
              : 'Un soutien académique complet adapté aux exigences de votre programme.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.mathPage.subjects.map((sub, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-[#F59E0B] transition-all flex items-center gap-3.5"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0F172A] text-[#F59E0B] font-black flex items-center justify-center shrink-0">
                ✓
              </div>
              <span className="text-sm font-extrabold text-[#0F172A]">{sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7 Reasons Why Choose Castorax */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-black text-[#F59E0B] uppercase tracking-wider bg-[#0F172A] px-3.5 py-1.5 rounded-full">
              {t.brand.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] font-sans">
              {t.mathPage.whyChooseTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.mathPage.whyChoose.map((point, idx) => (
              <div key={idx} className="p-6 bg-[#F8FAFC] border border-slate-200 rounded-2xl hover:border-[#F59E0B] transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-[#F59E0B] font-black text-sm flex items-center justify-center">
                  0{idx + 1}
                </div>
                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#0F172A] text-white border-2 border-[#F59E0B] p-8 sm:p-12 rounded-3xl space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black text-white font-sans">
            {t.closingCta.title}
          </h3>
          <button
            onClick={onOpenBooking}
            className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-black text-base px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer"
          >
            {t.closingCta.button}
          </button>
        </div>
      </section>

    </div>
  );
};
