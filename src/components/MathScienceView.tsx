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
    <div className="bg-[#FAF9F5] py-12 space-y-16">
      
      {/* Hero Header */}
      <section className="bg-[#FFF5ED] text-[#1E1B18] py-16 px-4 sm:px-6 lg:px-8 rounded-3xl max-w-7xl mx-auto shadow-md border-2 border-orange-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8631A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E5] text-[#E8631A] border border-[#FDBA74]/40 text-xs font-black uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>$40 / hr · Math & Science Tutoring</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight font-sans text-[#1E1B18]">
            {t.mathPage.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.mathPage.heroSubtitle}
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-[#E8631A] hover:bg-[#D9480F] text-white font-black px-6 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer"
            >
              {t.hero.cta}
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="bg-white hover:bg-orange-50 text-[#E8631A] font-extrabold px-5 py-3.5 rounded-xl border border-orange-200 transition-all cursor-pointer shadow-sm"
            >
              {t.nav.pricing}
            </button>
          </div>
        </div>
      </section>

      {/* Outcome Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFF0E5] text-[#E8631A] p-6 rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-around gap-6 text-center border-2 border-orange-200/80">
          {t.mathPage.outcomes.map((outcome, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Trophy className="w-6 h-6 shrink-0 text-[#E8631A]" />
              <span className="text-lg sm:text-xl font-black text-[#1E1B18] tracking-wide font-sans">{outcome}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects Offered Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-4xl font-black text-[#1E1B18] font-sans">
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
              className="bg-white border border-orange-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-[#E8631A] transition-all flex items-center gap-3.5"
            >
              <div className="w-9 h-9 rounded-xl bg-[#FFF0E5] text-[#E8631A] font-black flex items-center justify-center shrink-0 border border-orange-200/60">
                ✓
              </div>
              <span className="text-sm font-extrabold text-[#1E1B18]">{sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7 Reasons Why Choose Castorax */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-orange-100 rounded-3xl p-8 sm:p-12 shadow-xl space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-black text-[#E8631A] uppercase tracking-wider bg-[#FFF0E5] px-3.5 py-1.5 rounded-full border border-orange-200/60 font-sans">
              {t.brand.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#1E1B18] font-sans">
              {t.mathPage.whyChooseTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.mathPage.whyChoose.map((point, idx) => (
              <div key={idx} className="p-6 bg-[#FFF9F5] border border-orange-100 rounded-2xl hover:border-[#E8631A] transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFF0E5] text-[#E8631A] font-black text-sm flex items-center justify-center border border-orange-200/60">
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
        <div className="bg-[#18181B] text-white border-2 border-[#E8631A] p-8 sm:p-12 rounded-3xl space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black text-white font-sans">
            {t.closingCta.title}
          </h3>
          <button
            onClick={onOpenBooking}
            className="bg-[#E8631A] hover:bg-[#D9480F] text-white font-black text-base px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer"
          >
            {t.closingCta.button}
          </button>
        </div>
      </section>

    </div>
  );
};
