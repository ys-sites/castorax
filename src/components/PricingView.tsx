import React, { useState } from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Check, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';

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

  return (
    <div className="bg-[#F8FAFC] py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] text-[#011B4C] border border-[#FCD34D] text-xs font-black uppercase tracking-wider font-sans">
          <Sparkles className="w-4 h-4 text-[#FBAD00]" />
          <span>{currentLang === 'en' ? 'Transparent Rates' : 'Tarifs transparents'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#011B4C] tracking-tight font-sans">
          {t.pricing.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 font-normal">
          {t.pricing.subtitle}
        </p>
      </section>

      {/* Program Selector Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-10">
          <div className="bg-[#FEF3C7] p-1.5 rounded-2xl inline-flex gap-2 shadow-sm border border-[#FCD34D]">
            <button
              onClick={() => setActiveTab('math')}
              className={`px-6 py-3 rounded-xl text-sm font-black transition-all cursor-pointer ${
                activeTab === 'math'
                  ? 'bg-[#011B4C] text-[#FBAD00] shadow-md'
                  : 'text-[#011B4C] hover:text-[#FBAD00]'
              }`}
            >
              {t.pricing.mathTitle}
            </button>
            <button
              onClick={() => setActiveTab('french')}
              className={`px-6 py-3 rounded-xl text-sm font-black transition-all cursor-pointer ${
                activeTab === 'french'
                  ? 'bg-[#011B4C] text-[#FBAD00] shadow-md'
                  : 'text-[#011B4C] hover:text-[#FBAD00]'
              }`}
            >
              {t.pricing.frenchTitle}
            </button>
          </div>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(activeTab === 'math' ? t.pricing.mathPlans : t.pricing.frenchPlans).map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-6 border-2 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative ${
                idx === 2 ? 'border-[#FBAD00] ring-4 ring-[#FBAD00]/20' : 'border-slate-200'
              }`}
            >
              {idx === 2 && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#011B4C] text-[#FBAD00] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow border border-[#FBAD00]">
                  Most Popular / Plus Populaire
                </div>
              )}

              <div>
                <h3 className="text-lg font-black text-[#011B4C] mb-1 font-sans">{plan.hours}</h3>
                <div className="my-4">
                  <span className="text-3xl sm:text-4xl font-black text-[#011B4C]">{plan.price}</span>
                </div>
                <div className="text-xs font-bold text-[#011B4C] bg-[#FEF3C7] px-3 py-1.5 rounded-lg inline-block mb-6 border border-[#FCD34D]">
                  {plan.perHour} ({plan.note})
                </div>

                <ul className="space-y-3 text-xs text-slate-700 font-semibold border-t border-slate-200 pt-4 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FBAD00] shrink-0 stroke-[3]" />
                    <span>{currentLang === 'en' ? '1-on-1 Online Tutoring' : 'Tutorat individuel en ligne'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FBAD00] shrink-0 stroke-[3]" />
                    <span>{currentLang === 'en' ? 'Support Between Sessions' : 'Soutien entre les séances'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FBAD00] shrink-0 stroke-[3]" />
                    <span>{currentLang === 'en' ? 'Flexible Scheduling' : 'Horaire flexible'}</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full bg-[#FBAD00] hover:bg-[#E09B00] text-[#011B4C] font-black py-3 rounded-xl shadow transition-all text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-[#011B4C]" />
                <span>{t.pricing.selectPlanCTA}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Fine Print Notice */}
        <div className="mt-8 text-center text-xs font-bold text-slate-600 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#011B4C]" />
          <span>{t.pricing.finePrint}</span>
        </div>
      </section>

      {/* Side-by-side Table Summary for Full Comparison */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl overflow-x-auto">
          <h2 className="text-xl font-black text-[#011B4C] mb-6 text-center font-sans">
            {currentLang === 'en' ? 'Complete Pricing Summary' : 'Aperçu complet des tarifs'}
          </h2>

          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-300 bg-[#011B4C] text-[#FBAD00]">
                <th className="p-3.5 rounded-tl-xl font-black">{currentLang === 'en' ? 'Program' : 'Programme'}</th>
                <th className="p-3.5 font-black">{currentLang === 'en' ? 'Pay-as-you-go' : 'À la carte'}</th>
                <th className="p-3.5 font-black">4 hrs / mo</th>
                <th className="p-3.5 font-black">8 hrs / mo</th>
                <th className="p-3.5 rounded-tr-xl font-black">12 hrs / mo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-semibold text-slate-800">
              <tr>
                <td className="p-3.5 font-extrabold text-[#011B4C]">Math & Science</td>
                <td className="p-3.5">$40 / hr</td>
                <td className="p-3.5">$160/mo ($40/hr)</td>
                <td className="p-3.5 text-[#011B4C] font-black">$300/mo ($37.50/hr)</td>
                <td className="p-3.5 text-[#011B4C] font-black">$420/mo ($35/hr)</td>
              </tr>
              <tr>
                <td className="p-3.5 font-extrabold text-[#011B4C]">French & TEF/TCF Prep</td>
                <td className="p-3.5">$45 / hr</td>
                <td className="p-3.5">$180/mo ($45/hr)</td>
                <td className="p-3.5 text-[#011B4C] font-black">$336/mo ($42/hr)</td>
                <td className="p-3.5 text-[#011B4C] font-black">$480/mo ($40/hr)</td>
              </tr>
            </tbody>
          </table>

          <p className="text-center text-xs text-slate-500 mt-4 italic">
            * {t.pricing.finePrint}
          </p>
        </div>
      </section>

      {/* Site-wide Closing Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#011B4C] text-white border-2 border-[#FBAD00] p-8 sm:p-12 rounded-3xl space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black text-white font-sans">
            {t.closingCta.title}
          </h3>
          <button
            onClick={onOpenBooking}
            className="bg-[#FBAD00] hover:bg-[#E09B00] text-[#011B4C] font-black text-base px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer"
          >
            {t.closingCta.button}
          </button>
        </div>
      </section>

    </div>
  );
};
