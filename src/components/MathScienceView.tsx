import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Calculator, Check } from 'lucide-react';
import { FoundationDivider } from './FoundationDivider';

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
    <div className="bg-[#FAF6EC] py-12 space-y-16">
      
      {/* Hero Header */}
      <section className="bg-[#011B4C] text-[#FAF6EC] py-16 px-6 sm:px-10 rounded-2xl max-w-7xl mx-auto shadow-xl border border-[#011B4C] relative overflow-hidden">
        <div className="max-w-3xl space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#FAF6EC]/10 text-[#FBAD00] text-xs font-mono font-bold uppercase tracking-wider border border-[#FBAD00]/30">
            <Calculator className="w-4 h-4 text-[#FBAD00]" />
            <span>$40 / hr · Math & Science Tutoring</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-[#FAF6EC] leading-tight">
            {t.mathPage.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-[#FAF6EC]/85 leading-relaxed font-sans">
            {t.mathPage.heroSubtitle}
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-[#FBAD00] hover:bg-[#d49300] text-[#011B4C] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow cursor-pointer transition-colors"
            >
              {t.hero.cta}
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="bg-[#FAF6EC]/10 hover:bg-[#FAF6EC]/20 text-[#FAF6EC] font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl border border-[#FAF6EC]/20 transition-colors cursor-pointer"
            >
              {t.nav.pricing}
            </button>
          </div>
        </div>
      </section>

      {/* Outcome Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F1E9D8] text-[#011B4C] p-6 rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-around gap-6 text-center border border-[#011B4C]/15">
          {t.mathPage.outcomes.map((outcome, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#FBAD00] shrink-0" />
              <span className="text-lg font-display font-bold text-[#011B4C]">{outcome}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects Offered Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#011B4C]">
            {t.mathPage.subjectsTitle}
          </h2>
          <p className="text-sm text-[#1E2A44] font-sans">
            {currentLang === 'en'
              ? 'Comprehensive academic support tailored to your curriculum requirements.'
              : 'Un soutien académique complet adapté aux exigences de votre programme.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.mathPage.subjects.map((sub, idx) => (
            <div
              key={idx}
              className="bg-[#FAF6EC] border border-[#011B4C]/15 p-5 rounded-xl shadow-sm hover:border-[#011B4C] transition-all flex items-center gap-3.5"
            >
              <div className="w-8 h-8 rounded-lg bg-[#011B4C] text-[#FBAD00] font-bold flex items-center justify-center shrink-0 text-sm">
                ✓
              </div>
              <span className="text-sm font-bold text-[#011B4C] font-sans">{sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7 Reasons Why Choose Castorax */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F1E9D8] border border-[#011B4C]/15 rounded-2xl p-8 sm:p-12 shadow-sm space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-[#011B4C] uppercase tracking-wider bg-[#FAF6EC] px-3.5 py-1 rounded border border-[#011B4C]/15">
              {t.brand.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#011B4C]">
              {t.mathPage.whyChooseTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.mathPage.whyChoose.map((reason, idx) => (
              <div key={idx} className="bg-[#FAF6EC] p-5 rounded-xl border border-[#011B4C]/15 flex items-start gap-3.5">
                <Check className="w-5 h-5 text-[#FBAD00] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#1E2A44] leading-relaxed font-sans font-medium">
                  {reason}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={onOpenBooking}
              className="bg-[#011B4C] hover:bg-[#1E2A44] text-[#FAF6EC] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow transition-all cursor-pointer"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>

        <FoundationDivider className="mt-12" />
      </section>

    </div>
  );
};
