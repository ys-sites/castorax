import React, { useState } from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Check, ArrowRight } from 'lucide-react';
import { FoundationDivider } from './FoundationDivider';
import { RiseUp, RiseUpStagger, RiseUpItem } from './animations/RiseUp';

interface PricingViewProps {
  currentLang: Language;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
}

export const PricingView: React.FC<PricingViewProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const t = translations[currentLang];
  const page = t.pricingPage;
  const [currency, setCurrency] = useState<'cad' | 'usd'>('cad');

  const rateMulti = currency === 'cad' ? 1 : 0.75;
  const currencySymbol = currency === 'cad' ? 'CAD $' : 'USD $';

  return (
    <div className="space-y-16 pb-20 bg-[#FAFAFC]">
      {/* Header Banner */}
      <section className="bg-[#011B4C] text-[#FFFFFF] py-16 px-4 sm:px-8 border-b-2 border-[#FBAD00]">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <RiseUp delay={0.1}>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FBAD00] bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
              {page.eyebrow}
            </span>
          </RiseUp>
          <RiseUp delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#FFFFFF]">
              {page.title}
            </h1>
          </RiseUp>
          <RiseUp delay={0.3}>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto font-sans">
              {page.subtitle}
            </p>
          </RiseUp>

          {/* Currency Switcher */}
          <RiseUp delay={0.4}>
            <div className="inline-flex items-center bg-white/10 p-1 rounded-xl border border-white/20 font-mono text-xs">
              <button
                onClick={() => setCurrency('cad')}
                className={`px-4 py-2 rounded-lg font-bold transition-colors cursor-pointer ${
                  currency === 'cad' ? 'bg-[#FBAD00] text-[#011B4C]' : 'text-white/80 hover:text-white'
                }`}
              >
                🇨🇦 CAD ($)
              </button>
              <button
                onClick={() => setCurrency('usd')}
                className={`px-4 py-2 rounded-lg font-bold transition-colors cursor-pointer ${
                  currency === 'usd' ? 'bg-[#FBAD00] text-[#011B4C]' : 'text-white/80 hover:text-white'
                }`}
              >
                🇺🇸 USD ($)
              </button>
            </div>
          </RiseUp>
        </div>
      </section>

      {/* 2 Main Pricing Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RiseUpStagger staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Math & Science Card */}
          <RiseUpItem className="h-full">
            <div className="bg-[#FFFFFF] border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-lg space-y-6 flex flex-col justify-between h-full hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#011B4C] bg-[#011B4C]/5 px-3 py-1 rounded">
                    MATH & SCIENCE
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">1-ON-1 ONLINE</span>
                </div>

                <div>
                  <h3 className="text-3xl font-display font-bold text-[#011B4C]">STEM Tutoring</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-mono font-bold text-[#011B4C]">
                      {currencySymbol}{Math.round(40 * rateMulti)}
                    </span>
                    <span className="text-sm font-sans text-slate-500 font-medium">/ hour</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#1E2A44] leading-relaxed font-sans">
                  Comprehensive 1-on-1 sessions for High School, AP, Calculus, Physics, Chemistry, and Middle School Math.
                </p>

                <ul className="space-y-3 pt-2">
                  {[
                    "1-on-1 personalized digital whiteboard lessons",
                    "Customized homework & exam preparation plans",
                    "Direct Q&A support between sessions",
                    "Flexible scheduling with 24-hour response",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs font-medium text-[#011B4C]">
                      <Check className="w-4 h-4 text-[#FBAD00] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#011B4C] hover:bg-[#1E2A44] text-[#FBAD00] font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow cursor-pointer transition-transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>Book STEM Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </RiseUpItem>

          {/* French Language & TEF/TCF Card (Featured) */}
          <RiseUpItem className="h-full">
            <div className="bg-[#011B4C] text-[#FFFFFF] border-2 border-[#FBAD00] rounded-2xl p-8 sm:p-10 shadow-xl space-y-6 flex flex-col justify-between h-full hover:shadow-2xl transition-all hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#FBAD00] text-[#011B4C] font-mono font-bold text-[10px] uppercase tracking-wider px-4 py-1 rounded-bl-xl">
                MOST POPULAR
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FBAD00] bg-white/10 px-3 py-1 rounded">
                    FRENCH & IMMIGRATION
                  </span>
                  <span className="text-xs font-mono font-bold text-white/70">1-ON-1 ONLINE</span>
                </div>

                <div>
                  <h3 className="text-3xl font-display font-bold text-white">French Language & TEF/TCF</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-mono font-bold text-[#FBAD00]">
                      {currencySymbol}{Math.round(45 * rateMulti)}
                    </span>
                    <span className="text-sm font-sans text-white/70 font-medium">/ hour</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans">
                  Structured French instruction from beginner fundamentals to advanced TEF/TCF Canada exam preparation.
                </p>

                <ul className="space-y-3 pt-2">
                  {[
                    "Conversational fluency & grammar mastery",
                    "TEF / TCF Canada exam target scoring strategies",
                    "Pronunciation & listening comprehension drills",
                    "Direct feedback & support between sessions",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs font-medium text-white">
                      <Check className="w-4 h-4 text-[#FBAD00] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/15">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#FBAD00] hover:bg-[#d49300] text-[#011B4C] font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow cursor-pointer transition-transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>Book French Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </RiseUpItem>

        </RiseUpStagger>
      </section>

      {/* Summary Table */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <RiseUp className="bg-[#FFFFFF] border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4 font-sans">
          <h3 className="text-lg font-display font-bold text-[#011B4C]">Rate Summary</h3>
          <div className="divide-y divide-slate-200 text-xs text-[#011B4C]">
            <div className="py-3 flex justify-between font-mono font-bold">
              <span>PROGRAM / SUBJECT</span>
              <span>RATE (PER HOUR)</span>
            </div>
            <div className="py-3 flex justify-between">
              <span>Math & Science Tutoring</span>
              <span className="font-mono font-bold">{currencySymbol}{Math.round(40 * rateMulti)} / hr</span>
            </div>
            <div className="py-3 flex justify-between">
              <span>French Language & TEF / TCF Prep</span>
              <span className="font-mono font-bold">{currencySymbol}{Math.round(45 * rateMulti)} / hr</span>
            </div>
            <div className="py-3 flex justify-between text-slate-500">
              <span>Support between sessions (Q&A via email/DM)</span>
              <span className="font-mono font-bold text-[#011B4C]">Included Free</span>
            </div>
          </div>
        </RiseUp>
      </section>

      <RiseUp delay={0.2}>
        <FoundationDivider align="center" />
      </RiseUp>
    </div>
  );
};
