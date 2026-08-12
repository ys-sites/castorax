import React, { useState, useEffect } from 'react';
import { ActivePage, Language } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { StatsBar } from './components/StatsBar';
import { ProgramsOverview } from './components/ProgramsOverview';
import { MathScienceView } from './components/MathScienceView';
import { FrenchView } from './components/FrenchView';
import { PricingView } from './components/PricingView';
import { StudentDashboard } from './components/StudentDashboard';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { FAQAccordion } from './components/FAQAccordion';
import { BookingModal } from './components/BookingModal';
import { translations } from './translations';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingProgram, setBookingProgram] = useState<'math' | 'french' | 'both'>('math');

  const t = translations[currentLang];

  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (program: 'math' | 'french' | 'both' = 'math') => {
    setBookingProgram(program);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-[#100vh] flex flex-col font-sans bg-[#FDFDFD] text-slate-800 antialiased selection:bg-[#FBAD00] selection:text-[#011B4C]">
      {/* Navigation Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking('math')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            <Hero
              currentLang={currentLang}
              onNavigate={handleNavigate}
              onOpenBooking={() => handleOpenBooking('math')}
            />
            <div className="pt-16">
              <AboutSection
                currentLang={currentLang}
                onNavigate={handleNavigate}
                onOpenBooking={() => handleOpenBooking('math')}
              />
            </div>
            <StatsBar currentLang={currentLang} />
            <ProgramsOverview
              currentLang={currentLang}
              onNavigate={handleNavigate}
              onOpenBooking={() => handleOpenBooking('math')}
            />
            <Testimonials currentLang={currentLang} />
            <ContactSection currentLang={currentLang} />
            <FAQAccordion currentLang={currentLang} />
          </>
        )}

        {activePage === 'math' && (
          <>
            <MathScienceView
              currentLang={currentLang}
              onNavigate={handleNavigate}
              onOpenBooking={() => handleOpenBooking('math')}
            />
            <ContactSection currentLang={currentLang} />
            <FAQAccordion currentLang={currentLang} />
          </>
        )}

        {activePage === 'french' && (
          <>
            <FrenchView
              currentLang={currentLang}
              onNavigate={handleNavigate}
              onOpenBooking={() => handleOpenBooking('french')}
            />
            <ContactSection currentLang={currentLang} />
            <FAQAccordion currentLang={currentLang} />
          </>
        )}

        {activePage === 'pricing' && (
          <>
            <PricingView
              currentLang={currentLang}
              onNavigate={handleNavigate}
              onOpenBooking={() => handleOpenBooking('both')}
            />
            <Testimonials currentLang={currentLang} />
            <ContactSection currentLang={currentLang} />
            <FAQAccordion currentLang={currentLang} />
          </>
        )}

        {activePage === 'dashboard' && (
          <StudentDashboard
            currentLang={currentLang}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Persistent Floating Quick Message Badge (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={() => handleOpenBooking('both')}
          className="bg-[#FBAD00] hover:bg-[#e09b00] text-[#011B4C] font-black py-3 px-5 rounded-full shadow-2xl border-2 border-[#011B4C] flex items-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#011B4C] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#011B4C]"></span>
          </span>
          <MessageSquare className="w-4 h-4" />
          <span className="text-xs uppercase tracking-wider">{t.hero.ctaPrimary}</span>
        </button>
      </div>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking('both')}
      />

      {/* Booking / Quick Contact Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        currentLang={currentLang}
        preselectedProgram={bookingProgram}
      />
    </div>
  );
}
