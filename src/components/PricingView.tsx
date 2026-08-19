import React, { useState } from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Check, ShieldCheck } from 'lucide-react';
import { FoundationDivider } from './FoundationDivider';

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
    <div className="bg-[#FAF6EC] py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="inline-block px-3 py-1 rounded-md bg-[#F1E9D8] text-[#011B4C] text-xs font-mono font-bold uppercase tracking-wider border border-[#011B4C]/15">
          {currentLang === 'en' ? 'TRANSPARENT RATES' : 'TARIFS TRANSPARENTS'}
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-[#011B4C] tracking-tight">
          {t.pricing.title}
        </h1>
        <p className="text-base sm:text-lg text-[#1E2A44] font-sans">
          {t.pricing.subtitle}
        </p>
      </section>

      {/* Program Selector Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-10">
          <div className="bg-[#F1E9D8] p-1.5 rounded-xl inline-flex gap-2 border border-[#011B4C]/15">
            <button
              onClick={() => setActiveTab('math')}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all cursor-pointer font-sans ${
                activeTab === 'math'
                  ? 'bg-[#011B4C] text-[#FBAD00] shadow'
                  : 'text-[#011B4C] hover:text-[#011B4C]/80'
              }`}
            >
              {t.pricing.mathTitle}
            </button>
            <button
              onClick={() => setActiveTab('french')}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all cursor-pointer font-sans ${
                activeTab === 'french'
                  ? 'bg-[#011B4C] text-[#FBAD00] shadow'
                  : 'text-[#011B4C] hover:text-[#011B4C]/80'
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
              className={`bg-[#FAF6EC] rounded-2xl p-6 border shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative ${
                idx === 2 ? 'border-[#FBAD00] ring-2 ring-[#FBAD00]/40' : 'border-[#011B4C]/15'
              }`}
            >
              {idx === 2 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#011B4C] text-[#FBAD00] text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-0.5 rounded shadow border border-[#FBAD00]">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-base font-display font-bold text-[#011B4C] mb-1">{plan.hours}</h3>
                <div className="my-4">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-[#011B4C]">{plan.price}</span>
                </div>
                <div className="text-xs font-mono font-bold text-[#011B4C] bg-[#F1E9D8] px-3 py-1.5 rounded inline-block mb-6 border border-[#011B4C]/15">
                  {plan.perHour} ({plan.note})
                </div>

                <ul className="space-y-3 text-xs text-[#1E2A44] font-sans border-t border-[#011B4C]/15 pt-4 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FBAD00] shrink-0" />
                    <span>{currentLang === 'en' ? '1-on-1 Online Tutoring' : 'Tutorat individuel en ligne'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FBAD00] shrink-0" />
                    <span>{currentLang === 'en' ? 'Support Between Sessions' : 'Soutien entre les séances'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FBAD00] shrink-0" />
                    <span>{currentLang === 'en' ? 'Flexible Scheduling' : 'Horaire flexible'}</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full bg-[#011B4C] hover:bg-[#1E2A44] text-[#FBAD00] font-bold py-3 rounded-xl shadow transition-all text-xs uppercase tracking-wider cursor-pointer"
              >
                {t.pricing.selectPlanCTA}
              </button>
            </div>
          ))}
        </div>

        {/* Fine Print Notice */}
        <div className="mt-8 text-center text-xs font-sans text-[#1E2A44]/80 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#011B4C]" />
          <span>{t.pricing.finePrint}</span>
        </div>
      </section>

      {/* Side-by-side Table Summary */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F1E9D8] border border-[#011B4C]/15 rounded-2xl p-6 sm:p-8 shadow-sm overflow-x-auto">
          <h2 className="text-xl font-display font-bold text-[#011B4C] mb-6 text-center">
            {currentLang === 'en' ? 'Complete Pricing Summary' : 'Aperçu complet des tarifs'}
          </h2>

          <table className="w-full text-left text-xs sm:text-sm border-collapse font-sans">
            <thead>
              <tr className="border-b border-[#011B4C]/20 bg-[#011B4C] text-[#FBAD00]">
                <th className="p-3.5 font-bold">{currentLang === 'en' ? 'Program' : 'Programme'}</th>
                <th className="p-3.5 font-mono font-bold">{currentLang === 'en' ? 'Pay-as-you-go' : 'À la carte'}</th>
                <th className="p-3.5 font-mono font-bold">4 hrs / mo</th>
                <th className="p-3.5 font-mono font-bold">8 hrs / mo</th>
                <th className="p-3.5 font-mono font-bold">12 hrs / mo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#011B4C]/10 text-[#011B4C]">
              <tr>
                <td className="p-3.5 font-bold">Math & Science</td>
                <td className="p-3.5 font-mono">$40 / hr</td>
                <td className="p-3.5 font-mono">$160/mo ($40/hr)</td>
                <td className="p-3.5 font-mono font-bold">$300/mo ($37.50/hr)</td>
                <td className="p-3.5 font-mono font-bold">$420/mo ($35/hr)</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold">French & TEF/TCF Prep</td>
                <td className="p-3.5 font-mono">$45 / hr</td>
                <td className="p-3.5 font-mono">$180/mo ($45/hr)</td>
                <td className="p-3.5 font-mono font-bold">$336/mo ($42/hr)</td>
                <td className="p-3.5 font-mono font-bold">$480/mo ($40/hr)</td>
              </tr>
            </tbody>
          </table>

          <p className="text-center text-xs text-[#1E2A44]/75 mt-4 italic font-sans">
            * {t.pricing.finePrint}
          </p>
        </div>

        <FoundationDivider className="mt-12" />
      </section>

      {/* Site-wide Closing Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#011B4C] text-[#FAF6EC] border border-[#011B4C] p-8 sm:p-12 rounded-2xl shadow-xl space-y-6">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#FAF6EC]">
            {t.closingCta.title}
          </h3>
          <button
            onClick={onOpenBooking}
            className="bg-[#FBAD00] hover:bg-[#d49300] text-[#011B4C] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow transition-all cursor-pointer"
          >
            {t.closingCta.button}
          </button>
        </div>
      </section>

    </div>
  );
};
