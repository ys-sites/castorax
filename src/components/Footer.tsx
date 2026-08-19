import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Mail, Instagram, Clock, ArrowUp, MapPin } from 'lucide-react';
import mascotImg from '../assets/images/castorax_mascot_logo_1786527601351.jpg';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onLanguageChange,
  onNavigate,
  onOpenBooking,
}) => {
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#011B4C] text-[#FFFFFF] border-t-2 border-[#FBAD00] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#FBAD00] bg-white shrink-0">
                <img
                  src={mascotImg}
                  alt="Castorax Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white">{t.brand.name}</h3>
                <p className="text-[10px] text-[#FBAD00] font-mono uppercase tracking-wider">
                  BUILD STRONG FOUNDATIONS
                </p>
              </div>
            </div>
            <p className="text-xs text-white/80 leading-relaxed font-sans">
              {t.footer.tagline}
            </p>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded text-xs text-white/90 font-sans">
              <Clock className="w-3.5 h-3.5 text-[#FBAD00]" />
              <span>{t.footer.reply}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-[#FBAD00] font-mono font-bold text-xs uppercase tracking-widest">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-sans">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#FBAD00] transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('math')}
                  className="hover:text-[#FBAD00] transition-colors cursor-pointer"
                >
                  {t.nav.math}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('french')}
                  className="hover:text-[#FBAD00] transition-colors cursor-pointer"
                >
                  {t.nav.french}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-[#FBAD00] transition-colors cursor-pointer"
                >
                  {t.nav.pricing}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#FBAD00] transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs Overview */}
          <div className="space-y-3">
            <h4 className="text-[#FBAD00] font-mono font-bold text-xs uppercase tracking-widest">
              TUTORING PROGRAMS
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-sans">
              <li>
                <button
                  onClick={() => onNavigate('math')}
                  className="hover:text-[#FBAD00] transition-colors cursor-pointer text-left font-mono"
                >
                  Math & Science Tutoring ($40/hr)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('french')}
                  className="hover:text-[#FBAD00] transition-colors cursor-pointer text-left font-mono"
                >
                  French Language & TEF/TCF ($45/hr)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('math')}
                  className="hover:text-[#FBAD00] transition-colors cursor-pointer text-left font-sans"
                >
                  High School Calculus & Physics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('french')}
                  className="hover:text-[#FBAD00] transition-colors cursor-pointer text-left font-sans"
                >
                  Canadian Immigration French Prep
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="space-y-3 font-sans">
            <h4 className="text-[#FBAD00] font-mono font-bold text-xs uppercase tracking-widest">
              CONTACT US
            </h4>
            <div className="space-y-2 text-xs text-white/80">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FBAD00] shrink-0" />
                <span>100% Online · Canada & Global</span>
              </p>
              <p className="flex items-center gap-2 font-mono">
                <Mail className="w-3.5 h-3.5 text-[#FBAD00] shrink-0" />
                <span>{t.brand.email}</span>
              </p>
              <p className="flex items-center gap-2 font-mono">
                <Instagram className="w-3.5 h-3.5 text-[#FBAD00] shrink-0" />
                <span>{t.brand.instagram}</span>
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#FBAD00] hover:bg-[#d49300] text-[#011B4C] font-bold py-2.5 px-3 rounded text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {t.hero.cta}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Language Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/60 gap-4 font-sans">
          <p>© {new Date().getFullYear()} {t.brand.name}. {t.footer.rights}</p>
          
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <button onClick={() => onLanguageChange('en')} className={`hover:text-white cursor-pointer ${currentLang === 'en' ? 'text-[#FBAD00] font-bold' : ''}`}>English (EN)</button>
            <span>|</span>
            <button onClick={() => onLanguageChange('fr')} className={`hover:text-white cursor-pointer ${currentLang === 'fr' ? 'text-[#FBAD00] font-bold' : ''}`}>Français (FR)</button>
            <span>|</span>
            <button onClick={scrollToTop} className="hover:text-[#FBAD00] flex items-center gap-1 cursor-pointer">
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
