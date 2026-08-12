import React, { useState } from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { SpotlightCard } from './animations/SpotlightCard';
import { SplitText } from './animations/SplitText';
import { Check, ShieldCheck, Calculator, Sparkles, Clock, ArrowRight } from 'lucide-react';

interface PricingViewProps {
  currentLang: Language;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
}

export const PricingView: React.FC<PricingViewProps> = ({
  currentLang,
  onNavigate,
  onOpenBooking,
}) => {
  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState<'math' | 'french'>('math');
  const [sliderHours, setSliderHours] = useState<number>(8);

  // Slider price calculation
  const isMath = activeTab === 'math';
  const baseRate = isMath ? 40 : 45;
  
  const calculateEstimate = (hrs: number) => {
    let effectiveRate = baseRate;
    if (hrs >= 12) effectiveRate = isMath ? 35 : 40;
    else if (hrs >= 8) effectiveRate = isMath ? 37.5 : 42;

    const totalCost = Math.round(hrs * effectiveRate);
    const fullPrice = hrs * baseRate;
    const savings = fullPrice - totalCost;

    return { totalCost, effectiveRate, savings };
  };

  const calc = calculateEstimate(sliderHours);

  return (
    <div className="bg-[#FDFDFD] py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#011B4C] text-[#FBAD00] text-xs font-black uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>{currentLang === 'en' ? 'Transparent Rates' : 'Tarification transparente'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#011B4C] tracking-tight">
          <SplitText text={t.pricing.title} className="text-[#011B4C]" />
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          {t.pricing.subtitle}
        </p>
      </section>

      {/* Program Selector Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-10">
          <div className="bg-[#011B4C] p-1.5 rounded-2xl inline-flex gap-2 shadow-xl border border-[#FBAD00]/30">
            <button
              onClick={() => setActiveTab('math')}
              className={`px-6 py-3 rounded-xl text-sm font-black transition-all cursor-pointer ${
                activeTab === 'math'
                  ? 'bg-[#FBAD00] text-[#011B4C] shadow-lg'
                  : 'text-gray-200 hover:text-white'
              }`}
            >
              {t.pricing.mathTab}
            </button>
            <button
              onClick={() => setActiveTab('french')}
              className={`px-6 py-3 rounded-xl text-sm font-black transition-all cursor-pointer ${
                activeTab === 'french'
                  ? 'bg-[#FBAD00] text-[#011B4C] shadow-lg'
                  : 'text-gray-200 hover:text-white'
              }`}
            >
              {t.pricing.frenchTab}
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(isMath ? t.pricing.mathPlans : t.pricing.frenchPlans).map((plan, idx) => {
            const isPopular = plan.badge === 'Popular' || plan.badge === 'Populaire' || plan.badge === 'Best Value' || plan.badge === 'Meilleure valeur';
            
            return (
              <SpotlightCard
                key={idx}
                className={`p-8 flex flex-col justify-between relative bg-white border-2 ${
                  isPopular
                    ? 'border-[#FBAD00] shadow-2xl ring-4 ring-[#FBAD00]/20'
                    : 'border-[#E7E8ED]'
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4 bg-[#011B4C] text-[#FBAD00] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-black text-[#011B4C] mb-2">{plan.hours}</h3>
                  <div className="flex items-baseline gap-1 my-4">
                    <span className="text-4xl font-black text-[#011B4C]">{plan.price}</span>
                    <span className="text-xs font-semibold text-gray-500">/ month</span>
                  </div>
                  <div className="text-xs font-bold text-[#FBAD00] bg-[#011B4C] px-3 py-1.5 rounded-lg inline-block mb-6">
                    Effective rate: {plan.perHour} ({plan.note})
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-gray-700 font-medium border-t border-gray-100 pt-6 mb-8">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{currentLang === 'en' ? '1-on-1 Personalized Online Tutoring' : 'Tutorat individuel en ligne'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{currentLang === 'en' ? 'Between-Session Homework Q&A' : 'Aide aux devoirs entre les cours'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{currentLang === 'en' ? 'Flexible Weekly Rescheduling' : 'Horaire hebdomadaire flexible'}</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={onOpenBooking}
                  className={`w-full font-black py-3.5 rounded-xl transition-all cursor-pointer ${
                    isPopular
                      ? 'bg-[#FBAD00] hover:bg-[#e09b00] text-[#011B4C] shadow-lg'
                      : 'bg-[#011B4C] hover:bg-[#011B4C]/90 text-white'
                  }`}
                >
                  {t.pricing.selectPlanCTA}
                </button>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Fine Print Guarantee */}
        <div className="mt-8 text-center text-xs font-semibold text-gray-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#FBAD00]" />
          <span>{t.pricing.finePrint}</span>
        </div>
      </section>

      {/* Interactive Hours Estimator Slider Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#011B4C] text-white p-8 sm:p-12 rounded-3xl shadow-2xl border-2 border-[#FBAD00] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-[#FBAD00] text-xs font-bold uppercase tracking-wider bg-white/10 px-3.5 py-1 rounded-full">
              <Calculator className="w-4 h-4" />
              <span>{t.pricing.calculatorTitle}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">
              {currentLang === 'en' ? 'Custom Hours Price Estimator' : 'Estimateur d’heures sur mesure'}
            </h3>
          </div>

          <div className="max-w-xl mx-auto space-y-6">
            <div>
              <div className="flex justify-between items-center text-sm font-bold text-[#FBAD00] mb-2">
                <span>{t.pricing.calcHoursLabel}</span>
                <span className="text-xl font-black text-white">{sliderHours} {currentLang === 'en' ? 'Hours / month' : 'Heures / mois'}</span>
              </div>
              <input
                type="range"
                min="2"
                max="20"
                step="1"
                value={sliderHours}
                onChange={(e) => setSliderHours(Number(e.target.value))}
                className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FBAD00]"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-mono">
                <span>2 hrs</span>
                <span>8 hrs</span>
                <span>12 hrs</span>
                <span>20 hrs</span>
              </div>
            </div>

            <div className="bg-white text-[#011B4C] p-6 rounded-2xl text-center space-y-3 shadow-xl">
              <p className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                {t.pricing.calcTotalEst}
              </p>
              <div className="text-4xl sm:text-5xl font-black text-[#011B4C]">
                ${calc.totalCost} <span className="text-xs text-gray-500 font-normal">/ month</span>
              </div>
              <div className="flex justify-center items-center gap-4 text-xs font-bold text-emerald-700 pt-2 border-t border-gray-100">
                <span>Effective Rate: ${calc.effectiveRate}/hr</span>
                {calc.savings > 0 && (
                  <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                    🎉 {t.pricing.calcSavings} ${calc.savings}/mo
                  </span>
                )}
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full mt-2 bg-[#FBAD00] hover:bg-[#e09b00] text-[#011B4C] font-black py-3 rounded-xl shadow-lg transition-all cursor-pointer"
              >
                {t.hero.ctaPrimary} (${calc.totalCost}/mo)
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
