import React, { useState } from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Globe, Menu, X, BookOpen, MessageSquare, Sparkles } from 'lucide-react';
import mascotImg from '../assets/images/castorax_mascot_logo_1786527601351.jpg';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  activePage,
  onNavigate,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const navItems: { id: ActivePage; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'math', label: t.nav.math },
    { id: 'french', label: t.nav.french },
    { id: 'pricing', label: t.nav.pricing },
    { id: 'dashboard', label: t.nav.dashboard },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#011B4C] text-white shadow-lg border-b border-[#FBAD00]/20">
      {/* Top Urgency Strip */}
      <div className="bg-[#FBAD00] text-[#011B4C] text-xs md:text-sm font-semibold py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 animate-pulse" />
        <span>{t.hero.banner}</span>
        <button
          onClick={onOpenBooking}
          className="underline hover:text-black transition-colors ml-2 font-bold cursor-pointer"
        >
          {t.hero.ctaPrimary} →
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Mascot */}
        <button
          onClick={() => {
            onNavigate('home');
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#FBAD00] bg-white shadow-md transition-transform duration-300 group-hover:scale-105">
            <img
              src={mascotImg}
              alt="Castorax Beaver Mascot"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="text-xl font-black tracking-tight text-white flex items-center gap-1.5 font-sans">
              <span>{t.brand.name}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#FBAD00] animate-ping" />
            </div>
            <p className="text-xs text-[#FBAD00] font-medium hidden sm:block">
              {t.brand.badge}
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white/10 text-[#FBAD00] font-bold shadow-inner border-b-2 border-[#FBAD00]'
                    : 'text-gray-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls: Language Toggle & Booking Button */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher Toggle */}
          <div className="flex items-center bg-white/10 p-1 rounded-lg border border-white/15 text-xs font-semibold">
            <Globe className="w-3.5 h-3.5 text-[#FBAD00] ml-1.5 mr-1" />
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-[#FBAD00] text-[#011B4C] font-bold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('fr')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                currentLang === 'fr'
                  ? 'bg-[#FBAD00] text-[#011B4C] font-bold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              FR
            </button>
          </div>

          {/* Book Session CTA */}
          <button
            onClick={onOpenBooking}
            className="bg-[#FBAD00] hover:bg-[#e09b00] text-[#011B4C] font-bold px-4 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>{t.nav.cta}</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Language Switcher */}
          <button
            onClick={() => onLanguageChange(currentLang === 'en' ? 'fr' : 'en')}
            className="px-2.5 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs font-bold text-[#FBAD00] flex items-center gap-1 cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{currentLang.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#011B4C] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between cursor-pointer ${
                activePage === item.id
                  ? 'bg-[#FBAD00] text-[#011B4C] font-bold'
                  : 'text-gray-200 hover:bg-white/10'
              }`}
            >
              <span>{item.label}</span>
              {activePage === item.id && <span className="text-[#011B4C]">✓</span>}
            </button>
          ))}

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#FBAD00] text-[#011B4C] font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{t.hero.ctaPrimary}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
