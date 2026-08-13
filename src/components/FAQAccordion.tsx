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
    <section className="py-20 bg-[#FAF9F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#FFF0E5] text-[#E8631A] px-4 py-1.5 rounded-full border border-[#FDBA74]/40 text-xs font-black uppercase tracking-widest font-sans">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E1B18] font-sans">
            {t.faq.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
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
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md text-[#1E1B18] transition-all duration-200 border-2 border-orange-100"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-[#1E1B18] text-base sm:text-lg cursor-pointer hover:text-[#E8631A] transition-colors"
                >
                  <span className="font-sans">{item.q}</span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#E8631A] text-white' : 'bg-[#FFF0E5] text-[#E8631A]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal bg-[#FFF9F5] border-t border-orange-100">
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
