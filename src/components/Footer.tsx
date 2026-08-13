import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Mail, Instagram, Clock, ShieldCheck, Heart, Globe, ArrowUp } from 'lucide-react';
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
    <footer className="bg-[#0F172A] text-white border-t-4 border-[#F59E0B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Mascot */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={mascotImg}
                alt="Castorax Logo"
                className="w-12 h-12 rounded-full border-2 border-[#F59E0B] bg-white object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-xl font-black text-white font-sans">{t.brand.name}</h3>
                <p className="text-xs text-[#F59E0B] font-semibold">{t.brand.badge}</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {t.footer.tagline}
            </p>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs text-[#F59E0B]">
              <Clock className="w-3.5 h-3.5" />
              <span>{t.footer.reply}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-[#F59E0B] font-bold text-sm uppercase tracking-wider font-sans">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('math')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer"
                >
                  {t.nav.math}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('french')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer"
                >
                  {t.nav.french}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer"
                >
                  {t.nav.pricing}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-[#F59E0B] font-bold text-sm uppercase tracking-wider font-sans">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2.5 text-sm">
              <a
                href={`mailto:${t.footer.email}`}
                className="flex items-center gap-2.5 text-slate-200 hover:text-[#F59E0B] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#F59E0B]">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">{t.footer.email}</span>
              </a>

              <a
                href="https://instagram.com/castoraxtutoring"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-200 hover:text-[#F59E0B] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#F59E0B]">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>Instagram: {t.footer.instagram}</span>
              </a>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-bold py-2.5 px-3 rounded-lg text-xs transition-colors shadow cursor-pointer"
                >
                  {t.hero.cta}
                </button>
              </div>
            </div>
          </div>

          {/* Col 4: Trust & Language */}
          <div className="space-y-3">
            <h4 className="text-[#F59E0B] font-bold text-sm uppercase tracking-wider font-sans">
              {currentLang === 'en' ? 'Language & Guarantee' : 'Langue & Engagement'}
            </h4>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2 font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                <span>{currentLang === 'en' ? '100% Online & Flexible' : '100% En ligne & Flexible'}</span>
              </div>
              <p>
                {t.pricing.finePrint}
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span className="text-slate-400">
                  {currentLang === 'en' ? 'Switch Language:' : 'Changer la langue :'}
                </span>
                <button
                  onClick={() => onLanguageChange(currentLang === 'en' ? 'fr' : 'en')}
                  className="font-bold text-[#F59E0B] underline cursor-pointer"
                >
                  {currentLang === 'en' ? 'Français (FR)' : 'English (EN)'}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {t.brand.name}. {t.footer.rights}</p>
          <div className="flex items-center gap-2">
            <span>{currentLang === 'en' ? 'Designed for' : 'Conçu pour'}</span>
            <Heart className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
            <span>{currentLang === 'en' ? 'student confidence & success' : 'la confiance et la réussite'}</span>
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 bg-white/10 hover:bg-[#F59E0B] hover:text-[#0F172A] rounded-full transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
