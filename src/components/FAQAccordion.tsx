import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQAccordionProps {
  currentLang: Language;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="bg-[#0F172A] text-white p-8 sm:p-10 rounded-3xl text-center mb-8 shadow-xl border-2 border-[#F59E0B]/30 space-y-2">
          <div className="inline-flex items-center gap-2 text-[#F59E0B] text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-sans">
            {t.faq.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#0F172A] rounded-2xl overflow-hidden shadow-md text-white transition-all duration-200 border border-white/10"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg cursor-pointer hover:text-[#F59E0B] transition-colors"
                >
                  <span className="font-sans">{item.q}</span>
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#F59E0B]">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 text-xs sm:text-sm text-slate-200 leading-relaxed font-normal bg-[#1E293B] border-t border-white/10">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
