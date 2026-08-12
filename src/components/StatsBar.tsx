import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { CountUp } from './animations/CountUp';

interface StatsBarProps {
  currentLang: Language;
}

export const StatsBar: React.FC<StatsBarProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="py-12 bg-[#FAF6EE] border-t border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-amber-200/80 shadow-sm p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200/80 text-center">
            
            {/* Stat 1 */}
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#E8631A] font-sans tracking-tight mb-1">
                {t.eduStats.stat1Num}
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-600">
                {t.eduStats.stat1Label}
              </div>
            </div>

            {/* Stat 2 */}
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#E8631A] font-sans tracking-tight mb-1">
                {t.eduStats.stat2Num}
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-600">
                {t.eduStats.stat2Label}
              </div>
            </div>

            {/* Stat 3 */}
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#E8631A] font-sans tracking-tight mb-1">
                {t.eduStats.stat3Num}
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-600">
                {t.eduStats.stat3Label}
              </div>
            </div>

            {/* Stat 4 */}
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#E8631A] font-sans tracking-tight mb-1">
                {t.eduStats.stat4Num}
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-600">
                {t.eduStats.stat4Label}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
