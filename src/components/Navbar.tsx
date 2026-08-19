import React, { useState } from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Menu, X, MapPin } from 'lucide-react';
import brandLogo from '../assets/images/logo.jpeg';

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
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF] text-[#011B4C] border-b border-slate-200 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#011B4C] text-[#FFFFFF] text-xs py-2 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-sans">
          
          {/* Left Location / Status */}
          <div className="flex items-center gap-4 text-white/80 font-medium">
            <span className="flex items-center gap-1.5 text-white">
              <MapPin className="w-3.5 h-3.5 text-[#FBAD00]" />
              <span>100% Online Tutoring — Canada & Worldwide</span>
            </span>
            <span className="text-white/30">|</span>
            <span>{t.hero.banner}</span>
          </div>

          {/* Right Links & Language Toggle */}
          <div className="flex items-center gap-4 text-white/90">
            <button 
              onClick={() => onNavigate('math')}
              className="hover:text-[#FBAD00] transition-colors cursor-pointer"
            >
              Math & Science
            </button>
            <span className="text-white/30">•</span>
            <button 
              onClick={() => onNavigate('french')}
              className="hover:text-[#FBAD00] transition-colors cursor-pointer"
            >
              French & TEF/TCF
            </button>
            <span className="text-white/30">•</span>
            <button 
              onClick={() => onNavigate('pricing')}
              className="hover:text-[#FBAD00] transition-colors cursor-pointer"
            >
              Pricing
            </button>
            <span className="text-white/30">|</span>

            {/* Language Switcher */}
            <div className="flex items-center bg-[#1E2A44] rounded px-1 py-0.5 border border-white/15 font-mono text-[11px]">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                  currentLang === 'en'
                    ? 'bg-[#FBAD00] text-[#011B4C] font-bold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                  currentLang === 'fr'
                    ? 'bg-[#FBAD00] text-[#011B4C] font-bold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                FR
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Crest Logo */}
        <button
          onClick={() => {
            onNavigate('home');
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-300 bg-white shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0">
            <img
              src={brandLogo}
              alt="Castorax Tutoring Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-display font-bold text-[#011B4C] leading-none">
              {t.brand.name}
            </div>
            <p className="text-[10px] text-[#011B4C]/70 font-mono uppercase tracking-wider mt-1 hidden sm:block">
              BUILD STRONG FOUNDATIONS
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4 font-sans">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'text-[#011B4C] border-b-2 border-[#FBAD00]'
                    : 'text-[#1E2A44] hover:text-[#011B4C]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-3 font-sans">
          <button
            onClick={onOpenBooking}
            className="bg-[#011B4C] hover:bg-[#1E2A44] text-[#FFFFFF] font-bold px-5 py-2.5 rounded-lg shadow-sm transition-all text-xs uppercase tracking-wider cursor-pointer"
          >
            {t.nav.cta}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2 font-mono">
          <button
            onClick={() => onLanguageChange(currentLang === 'en' ? 'fr' : 'en')}
            className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-bold text-[#011B4C]"
          >
            {currentLang.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#011B4C] hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg font-sans">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-between cursor-pointer ${
                activePage === item.id
                  ? 'bg-[#011B4C] text-[#FBAD00]'
                  : 'text-[#011B4C] hover:bg-slate-100'
              }`}
            >
              <span>{item.label}</span>
              {activePage === item.id && <span className="text-[#FBAD00] font-bold">✓</span>}
            </button>
          ))}

          <div className="pt-4 border-t border-slate-200">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#011B4C] text-[#FFFFFF] font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow cursor-pointer uppercase text-xs tracking-wider"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
