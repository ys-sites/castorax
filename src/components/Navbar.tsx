import React, { useState } from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Globe, Menu, X, BookOpen, MapPin, Sparkles, PhoneCall } from 'lucide-react';
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
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white text-[#071224] shadow-md">
      {/* Top Utility Bar (Dark Navy #0B1B36) */}
      <div className="bg-[#0B1B36] text-white text-xs py-2 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Location / Status */}
          <div className="flex items-center gap-4 text-slate-300 font-medium">
            <span className="flex items-center gap-1.5 text-white">
              <MapPin className="w-3.5 h-3.5 text-[#C58B1B]" />
              <span>100% Online Tutoring — Canada & Worldwide</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="flex items-center gap-1.5 text-[#E8CA8A]">
              <Sparkles className="w-3.5 h-3.5 text-[#C58B1B]" />
              <span>{t.hero.banner}</span>
            </span>
          </div>

          {/* Right Links & Language Toggle */}
          <div className="flex items-center gap-4 text-slate-300">
            <button 
              onClick={() => onNavigate('math')}
              className="hover:text-[#C58B1B] transition-colors cursor-pointer"
            >
              Math & Science
            </button>
            <span className="text-slate-600">•</span>
            <button 
              onClick={() => onNavigate('french')}
              className="hover:text-[#C58B1B] transition-colors cursor-pointer"
            >
              French & TEF/TCF
            </button>
            <span className="text-slate-600">•</span>
            <button 
              onClick={() => onNavigate('pricing')}
              className="hover:text-[#C58B1B] transition-colors cursor-pointer"
            >
              Pricing
            </button>
            <span className="text-slate-500">|</span>

            {/* Language Switcher */}
            <div className="flex items-center bg-[#162B4D] rounded-md px-1 py-0.5 border border-white/10 font-bold">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded transition-colors text-[11px] cursor-pointer ${
                  currentLang === 'en'
                    ? 'bg-[#C58B1B] text-[#071224] font-black'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-2 py-0.5 rounded transition-colors text-[11px] cursor-pointer ${
                  currentLang === 'fr'
                    ? 'bg-[#C58B1B] text-[#071224] font-black'
                    : 'text-slate-300 hover:text-white'
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
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#C58B1B] bg-white shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0">
            <img
              src={mascotImg}
              alt="Castorax Beaver Crest"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black tracking-tight text-[#0B1B36] font-sans flex items-center gap-1.5">
              <span>{t.brand.name}</span>
            </div>
            <p className="text-[11px] text-[#C58B1B] font-extrabold uppercase tracking-widest hidden sm:block">
              LEARN. MASTER. SUCCEED.
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-3">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'text-[#C58B1B] border-b-2 border-[#C58B1B]'
                    : 'text-[#0B1B36] hover:text-[#C58B1B]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Gold Apply / Booking Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="bg-[#C58B1B] hover:bg-[#A77312] text-white font-extrabold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>{t.nav.cta}</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onLanguageChange(currentLang === 'en' ? 'fr' : 'en')}
            className="px-2.5 py-1 rounded bg-[#FAF3E3] border border-[#E8CA8A] text-xs font-bold text-[#0B1B36]"
          >
            {currentLang.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#0B1B36] hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-between cursor-pointer ${
                activePage === item.id
                  ? 'bg-[#0B1B36] text-[#C58B1B]'
                  : 'text-[#0B1B36] hover:bg-slate-100'
              }`}
            >
              <span>{item.label}</span>
              {activePage === item.id && <span className="text-[#C58B1B] font-bold">✓</span>}
            </button>
          ))}

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#C58B1B] text-white font-black py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer uppercase text-xs tracking-wider"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.nav.cta}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
