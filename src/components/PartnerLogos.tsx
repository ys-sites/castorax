import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface PartnerLogosProps {
  currentLang: Language;
}

export const PartnerLogos: React.FC<PartnerLogosProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const partnerLogos = [
    { name: 'LOGOIPSUM', type: 'bold' },
    { name: 'LOGO', type: 'squares' },
    { name: 'logoipsum', type: 'dots' },
    { name: 'LOGO IPSUM', type: 'badge' },
    { name: 'LOOO', type: 'lines' },
    { name: 'LogoIpsum', type: 'script' },
  ];

  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Caption */}
        <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-wider mb-8">
          {t.partners.title}
        </p>

        {/* Logo Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all">
          
          {/* Logo 1 */}
          <div className="flex items-center gap-1.5 font-black text-lg text-gray-700 tracking-tighter">
            <div className="w-5 h-5 rounded bg-gray-800 flex items-center justify-center text-white text-[10px] font-black">L</div>
            <span>LOGOIPSUM</span>
          </div>

          {/* Logo 2 */}
          <div className="flex items-center gap-2 font-black text-xl text-gray-800 tracking-wider">
            <div className="flex gap-0.5">
              <div className="w-2.5 h-2.5 bg-gray-800 rounded-sm"></div>
              <div className="w-2.5 h-2.5 bg-gray-400 rounded-sm"></div>
            </div>
            <span>LOGO</span>
          </div>

          {/* Logo 3 */}
          <div className="flex items-center gap-1.5 font-bold text-base text-gray-700 lowercase">
            <div className="flex -space-x-1">
              <div className="w-3 h-3 rounded-full bg-gray-800"></div>
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            </div>
            <span>logoipsum</span>
          </div>

          {/* Logo 4 */}
          <div className="bg-gray-800 text-white font-extrabold px-3 py-1 rounded text-xs tracking-widest uppercase">
            LOGO IPSUM
          </div>

          {/* Logo 5 */}
          <div className="flex items-center gap-1 text-xl font-black text-gray-800 tracking-tighter">
            <span>LOOO</span>
            <div className="w-2 h-4 bg-gray-700 rounded-full"></div>
          </div>

          {/* Logo 6 */}
          <div className="font-serif italic font-extrabold text-xl text-gray-800">
            LogoIpsum
          </div>

        </div>
      </div>
    </section>
  );
};
