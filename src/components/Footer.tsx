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
    <footer className="bg-[#0B1B36] text-white border-t-4 border-[#C58B1B] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={mascotImg}
                alt="Castorax Logo"
                className="w-12 h-12 rounded-full border-2 border-[#C58B1B] bg-white object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-xl font-serif-academic font-bold text-white">{t.brand.name}</h3>
                <p className="text-[11px] text-[#E8CA8A] font-extrabold uppercase tracking-widest">
                  LEARN. MASTER. SUCCEED.
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              {t.footer.tagline}
            </p>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded text-xs text-[#E8CA8A]">
              <Clock className="w-3.5 h-3.5 text-[#C58B1B]" />
              <span>{t.footer.reply}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-[#E8CA8A] font-bold text-xs uppercase tracking-widest font-sans">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#C58B1B] transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('math')}
                  className="hover:text-[#C58B1B] transition-colors cursor-pointer"
                >
                  {t.nav.math}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('french')}
                  className="hover:text-[#C58B1B] transition-colors cursor-pointer"
                >
                  {t.nav.french}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-[#C58B1B] transition-colors cursor-pointer"
                >
                  {t.nav.pricing}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#C58B1B] transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs Overview */}
          <div className="space-y-3">
            <h4 className="text-[#E8CA8A] font-bold text-xs uppercase tracking-widest font-sans">
              TUTORING PROGRAMS
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('math')}
                  className="hover:text-[#C58B1B] transition-colors cursor-pointer text-left"
                >
                  Math & Science Tutoring ($40/hr)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('french')}
                  className="hover:text-[#C58B1B] transition-colors cursor-pointer text-left"
                >
                  French Language & TEF/TCF ($45/hr)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('math')}
                  className="hover:text-[#C58B1B] transition-colors cursor-pointer text-left"
                >
                  High School Calculus & Physics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('french')}
                  className="hover:text-[#C58B1B] transition-colors cursor-pointer text-left"
                >
                  Canadian Immigration French Prep
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="space-y-3">
            <h4 className="text-[#E8CA8A] font-bold text-xs uppercase tracking-widest font-sans">
              CONTACT US
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C58B1B] shrink-0" />
                <span>100% Online · Canada & Global</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C58B1B] shrink-0" />
                <span>{t.brand.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#C58B1B] shrink-0" />
                <span>{t.brand.instagram}</span>
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#C58B1B] hover:bg-[#A77312] text-white font-extrabold py-2.5 px-3 rounded text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {t.hero.cta}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Language Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {t.brand.name}. {t.footer.rights}</p>
          
          <div className="flex items-center gap-4 text-[11px]">
            <button onClick={() => onLanguageChange('en')} className={`hover:text-white cursor-pointer ${currentLang === 'en' ? 'text-[#E8CA8A] font-bold' : ''}`}>English (EN)</button>
            <span>|</span>
            <button onClick={() => onLanguageChange('fr')} className={`hover:text-white cursor-pointer ${currentLang === 'fr' ? 'text-[#E8CA8A] font-bold' : ''}`}>Français (FR)</button>
            <span>|</span>
            <button onClick={scrollToTop} className="hover:text-[#C58B1B] flex items-center gap-1 cursor-pointer">
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
