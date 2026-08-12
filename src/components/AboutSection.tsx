import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Trophy, Check, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  onNavigate,
  onOpenBooking,
}) => {
  const t = translations[currentLang];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-center">
              
              {/* Main Vertical Photo */}
              <div className="col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                    alt="Student studying on laptop"
                    className="w-full h-80 sm:h-96 object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Right Side Stack: Award Card + Bottom Group Photo */}
              <div className="col-span-6 space-y-4">
                
                {/* Top Card: Best Online Course Trophy Badge */}
                <div className="bg-[#011B4C] text-white rounded-2xl p-5 shadow-xl text-center border-2 border-[#FBAD00]/40">
                  <div className="w-12 h-12 rounded-xl bg-[#FBAD00] text-[#011B4C] flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Trophy className="w-6 h-6 text-[#011B4C]" />
                  </div>
                  <h4 className="text-base font-black text-white mb-1">
                    {t.aboutUs.trophyTitle}
                  </h4>
                  <p className="text-xs text-gray-300 leading-snug">
                    {t.aboutUs.trophyDesc}
                  </p>
                </div>

                {/* Bottom Photo */}
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                    alt="Students collaborating together"
                    className="w-full h-44 sm:h-52 object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow Label */}
            <div>
              <span className="text-xs font-black tracking-widest text-[#011B4C] uppercase bg-[#011B4C]/10 px-3 py-1 rounded-full">
                {t.aboutUs.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#011B4C] leading-tight tracking-tight">
              {t.aboutUs.title}
            </h2>

            {/* Paragraph Text */}
            <p className="text-base text-gray-600 leading-relaxed font-normal">
              {t.aboutUs.desc}
            </p>

            {/* Checkmark List */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#011B4C] text-[#FBAD00] flex items-center justify-center shrink-0 mt-0.5 font-black">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base text-gray-700 font-semibold">
                  {t.aboutUs.check1}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#011B4C] text-[#FBAD00] flex items-center justify-center shrink-0 mt-0.5 font-black">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base text-gray-700 font-semibold">
                  {t.aboutUs.check2}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#011B4C] text-[#FBAD00] flex items-center justify-center shrink-0 mt-0.5 font-black">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base text-gray-700 font-semibold">
                  {t.aboutUs.check3}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#FBAD00] hover:bg-[#e09b00] text-[#011B4C] font-black text-sm px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.aboutUs.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
