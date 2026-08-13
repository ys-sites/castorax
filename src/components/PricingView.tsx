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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F172A] text-[#F59E0B] text-xs font-black uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>{currentLang === 'en' ? 'Transparent Rates' : 'Tarifs transparents'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight font-sans">
          {t.pricing.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 font-normal">
          {t.pricing.subtitle}
        </p>
      </section>

      {/* Program Selector Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-10">
          <div className="bg-[#0F172A] p-1.5 rounded-2xl inline-flex gap-2 shadow-xl border border-[#F59E0B]/30">
            <button
              onClick={() => setActiveTab('math')}
              className={`px-6 py-3 rounded-xl text-sm font-black transition-all cursor-pointer ${
                activeTab === 'math'
                  ? 'bg-[#F59E0B] text-[#0F172A] shadow-lg'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              {t.pricing.mathTitle}
            </button>
            <button
              onClick={() => setActiveTab('french')}
              className={`px-6 py-3 rounded-xl text-sm font-black transition-all cursor-pointer ${
                activeTab === 'french'
                  ? 'bg-[#F59E0B] text-[#0F172A] shadow-lg'
                  : 'text-slate-200 hover:text-white'
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
              className={`bg-white rounded-3xl p-6 border-2 shadow-lg flex flex-col justify-between hover:shadow-2xl transition-all duration-300 relative ${
                idx === 2 ? 'border-[#F59E0B] ring-4 ring-[#F59E0B]/20' : 'border-slate-200'
              }`}
            >
              {idx === 2 && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-[#0F172A] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow">
                  Most Popular / Plus Populaire
                </div>
              )}

              <div>
                <h3 className="text-lg font-black text-[#0F172A] mb-1 font-sans">{plan.hours}</h3>
                <div className="my-4">
                  <span className="text-3xl sm:text-4xl font-black text-[#0F172A]">{plan.price}</span>
                </div>
                <div className="text-xs font-bold text-[#F59E0B] bg-[#0F172A] px-3 py-1.5 rounded-lg inline-block mb-6">
                  {plan.perHour} ({plan.note})
                </div>

                <ul className="space-y-3 text-xs text-slate-700 font-semibold border-t border-slate-100 pt-4 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F59E0B] shrink-0 stroke-[3]" />
                    <span>{currentLang === 'en' ? '1-on-1 Online Tutoring' : 'Tutorat individuel en ligne'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F59E0B] shrink-0 stroke-[3]" />
                    <span>{currentLang === 'en' ? 'Support Between Sessions' : 'Soutien entre les séances'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F59E0B] shrink-0 stroke-[3]" />
                    <span>{currentLang === 'en' ? 'Flexible Scheduling' : 'Horaire flexible'}</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-black py-3 rounded-xl shadow transition-all text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.pricing.selectPlanCTA}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Fine Print Notice */}
        <div className="mt-8 text-center text-xs font-bold text-slate-600 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
          <span>{t.pricing.finePrint}</span>
        </div>
      </section>

      {/* Side-by-side Table Summary for Full Comparison */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl overflow-x-auto">
          <h2 className="text-xl font-black text-[#0F172A] mb-6 text-center font-sans">
            {currentLang === 'en' ? 'Complete Pricing Summary' : 'Aperçu complet des tarifs'}
          </h2>

          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-[#0F172A] bg-[#0F172A] text-white">
                <th className="p-3.5 rounded-tl-xl font-black">{currentLang === 'en' ? 'Program' : 'Programme'}</th>
                <th className="p-3.5 font-black">{currentLang === 'en' ? 'Pay-as-you-go' : 'À la carte'}</th>
                <th className="p-3.5 font-black">4 hrs / mo</th>
                <th className="p-3.5 font-black">8 hrs / mo</th>
                <th className="p-3.5 rounded-tr-xl font-black">12 hrs / mo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-semibold text-slate-800">
              <tr>
                <td className="p-3.5 font-extrabold text-[#0F172A]">Math & Science</td>
                <td className="p-3.5">$40 / hr</td>
                <td className="p-3.5">$160/mo ($40/hr)</td>
                <td className="p-3.5 text-[#0F172A] font-black">$300/mo ($37.50/hr)</td>
                <td className="p-3.5 text-[#0F172A] font-black">$420/mo ($35/hr)</td>
              </tr>
              <tr>
                <td className="p-3.5 font-extrabold text-[#0F172A]">French & TEF/TCF Prep</td>
                <td className="p-3.5">$45 / hr</td>
                <td className="p-3.5">$180/mo ($45/hr)</td>
                <td className="p-3.5 text-[#0F172A] font-black">$336/mo ($42/hr)</td>
                <td className="p-3.5 text-[#0F172A] font-black">$480/mo ($40/hr)</td>
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
