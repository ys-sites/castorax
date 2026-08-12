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
    <footer className="bg-[#011B4C] text-white border-t-4 border-[#FBAD00] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Mascot */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={mascotImg}
                alt="Castorax Logo"
                className="w-12 h-12 rounded-full border-2 border-[#FBAD00] bg-white object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-xl font-black text-white">{t.brand.name}</h3>
                <p className="text-xs text-[#FBAD00] font-semibold">{t.brand.badge}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs text-[#FBAD00]">
              <Clock className="w-3.5 h-3.5" />
              <span>{t.brand.responseTime}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-[#FBAD00] font-bold text-sm uppercase tracking-wider">
              {currentLang === 'en' ? 'Quick Links' : 'Navigation rapide'}
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
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
                  onClick={() => onNavigate('dashboard')}
                  className="hover:text-[#FBAD00] transition-colors cursor-pointer"
                >
                  {t.nav.dashboard}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-[#FBAD00] font-bold text-sm uppercase tracking-wider">
              {currentLang === 'en' ? 'Contact Methods' : 'Moyens de contact'}
            </h4>
            <div className="space-y-2.5 text-sm">
              <a
                href={`mailto:${t.brand.email}`}
                className="flex items-center gap-2.5 text-gray-200 hover:text-[#FBAD00] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#FBAD00]">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">{t.brand.email}</span>
              </a>

              <a
                href="https://instagram.com/castoraxtutoring"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-gray-200 hover:text-[#FBAD00] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#FBAD00]">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>Instagram: {t.brand.instagram}</span>
              </a>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#FBAD00] hover:bg-[#e09b00] text-[#011B4C] font-bold py-2 px-3 rounded-lg text-xs transition-colors shadow cursor-pointer"
                >
                  {t.hero.ctaPrimary}
                </button>
              </div>
            </div>
          </div>

          {/* Col 4: Trust & Guarantees */}
          <div className="space-y-3">
            <h4 className="text-[#FBAD00] font-bold text-sm uppercase tracking-wider">
              {currentLang === 'en' ? 'Our Guarantee' : 'Notre engagement'}
            </h4>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2 font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-[#FBAD00]" />
                <span>{currentLang === 'en' ? '100% Online & Flexible' : '100% En ligne & Flexible'}</span>
              </div>
              <p>
                {currentLang === 'en'
                  ? 'No long-term commitments. Monthly billing with easy cancellation.'
                  : 'Aucun engagement à long terme. Facturation mensuelle sans pénalité.'}
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#FBAD00]" />
                <span className="text-gray-400">
                  {currentLang === 'en' ? 'Switch Language:' : 'Changer la langue :'}
                </span>
                <button
                  onClick={() => onLanguageChange(currentLang === 'en' ? 'fr' : 'en')}
                  className="font-bold text-[#FBAD00] underline cursor-pointer"
                >
                  {currentLang === 'en' ? 'Français (FR)' : 'English (EN)'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex items-center gap-2">
            <span>{currentLang === 'en' ? 'Designed with' : 'Conçu avec'}</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            <span>{currentLang === 'en' ? 'for student success' : 'pour la réussite des élèves'}</span>
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 bg-white/10 hover:bg-[#FBAD00] hover:text-[#011B4C] rounded-full transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
