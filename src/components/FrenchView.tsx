import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Languages, CheckCircle2, Award, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface FrenchViewProps {
  currentLang: Language;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
}

export const FrenchView: React.FC<FrenchViewProps> = ({
  currentLang,
  onNavigate,
  onOpenBooking,
}) => {
  const t = translations[currentLang];

  return (
    <div className="bg-[#FAF9F5] py-12 space-y-16">
      
      {/* Page Hero Header */}
      <section className="bg-[#FFF5ED] text-[#1E1B18] py-16 px-4 sm:px-6 lg:px-8 rounded-3xl max-w-7xl mx-auto shadow-md border-2 border-orange-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8631A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E5] text-[#E8631A] border border-[#FDBA74]/40 text-xs font-black uppercase tracking-wider">
            <Languages className="w-4 h-4" />
            <span>$45 / hr · TEF & TCF Canada Specialist</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight font-sans text-[#1E1B18]">
            {t.frenchPage.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.frenchPage.heroSubtitle}
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

      {/* Target Audience Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-4xl font-black text-[#1E1B18] font-sans">
            {t.frenchPage.whoForTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.frenchPage.whoFor.map((audience, idx) => (
            <div key={idx} className="bg-white border-2 border-orange-100 p-6 rounded-2xl shadow-sm hover:border-[#E8631A] transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFF0E5] text-[#E8631A] font-black text-sm flex items-center justify-center border border-orange-200/60">
                0{idx + 1}
              </div>
              <p className="text-sm font-bold text-[#1E1B18] leading-snug">
                {audience}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Feature Strip Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.frenchPage.features.map((feat, idx) => (
            <div key={idx} className="bg-white border border-orange-100 p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#E8631A] text-white font-black flex items-center justify-center shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#1E1B18] mb-1 font-sans">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {feat.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEF / TCF Callout Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#18181B] text-white p-8 sm:p-12 rounded-3xl shadow-2xl border-2 border-[#E8631A] space-y-6 relative overflow-hidden">
          <div className="flex items-center gap-3">
            <span className="bg-[#E8631A] text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
              {t.frenchPage.tefBadge}
            </span>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
              {t.frenchPage.tefCalloutTitle}
            </span>
          </div>

          <blockquote className="text-lg sm:text-xl font-bold leading-relaxed text-slate-100 font-sans border-l-4 border-[#E8631A] pl-4">
            "{t.frenchPage.tefCallout}"
          </blockquote>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#E8631A] hover:bg-[#D9480F] text-white font-black px-6 py-3 rounded-xl shadow-lg transition-all text-xs sm:text-sm cursor-pointer"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* What You'll Learn Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-orange-100 rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-black text-[#1E1B18] font-sans">
              {t.frenchPage.whatYouLearnTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.frenchPage.whatYouLearn.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FFF9F5] border border-orange-100 flex items-start gap-3.5 hover:border-[#E8631A] transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-[#FFF0E5] text-[#E8631A] font-black text-xs flex items-center justify-center shrink-0 mt-0.5 border border-orange-200/60">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#1E1B18]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Reasons Why Choose Castorax (French) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-orange-100 rounded-3xl p-8 sm:p-12 shadow-xl space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-[#1E1B18] font-sans">
              {t.frenchPage.whyChooseTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.frenchPage.whyChoose.map((point, idx) => (
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
