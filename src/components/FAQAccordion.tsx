import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Plus, Minus } from 'lucide-react';

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
    <section className="py-20 bg-[#FAFAFC] border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#011B4C]/70">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#011B4C]">
            {t.faq.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#1E2A44] font-sans">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4 font-sans">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] rounded-xl overflow-hidden shadow-sm text-[#011B4C] transition-all duration-200 border border-slate-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-[#011B4C] text-base sm:text-lg cursor-pointer transition-colors"
                >
                  <span className="font-display font-bold text-base sm:text-lg">{item.q}</span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#011B4C] text-[#FBAD00]' : 'bg-[#F8FAFC] text-[#011B4C]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 text-xs sm:text-sm text-[#1E2A44] leading-relaxed font-sans bg-[#F8FAFC] border-t border-slate-200">
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
