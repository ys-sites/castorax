import React, { useState } from 'react';
import { ActivePage, Language } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProgramsOverview } from './components/ProgramsOverview';
import { MathScienceView } from './components/MathScienceView';
import { FrenchView } from './components/FrenchView';
import { PricingView } from './components/PricingView';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { FAQAccordion } from './components/FAQAccordion';
import { BookingModal } from './components/BookingModal';
import { translations } from './translations';
import { MessageSquare } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col font-sans bg-[#F8FAFC] text-[#0A192F] antialiased selection:bg-[#FBAD00] selection:text-[#011B4C]">
      {/* Top Urgency Sticky Banner */}
      <div className="bg-[#011B4C] text-[#FBAD00] text-xs sm:text-sm font-bold py-2 px-4 text-center flex items-center justify-center gap-2 shadow-sm border-b border-white/10">
        <span>⚡ {t.hero.banner}</span>
        <button
          onClick={() => handleOpenBooking('both')}
          className="underline hover:text-white transition-colors font-extrabold cursor-pointer ml-1 text-white"
        >
          {t.hero.cta} →
        </button>
      </div>

      {/* Navigation Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking('both')}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            <Hero
              currentLang={currentLang}
              onNavigate={handleNavigate}
              onOpenBooking={() => handleOpenBooking('both')}
            />
            <ProgramsOverview
              currentLang={currentLang}
              onNavigate={handleNavigate}
              onOpenBooking={() => handleOpenBooking('both')}
            />
            <AboutSection
              currentLang={currentLang}
              onNavigate={handleNavigate}
              onOpenBooking={() => handleOpenBooking('both')}
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
            <FAQAccordion currentLang={currentLang} />
          </>
        )}

        {activePage === 'contact' && (
          <>
            <ContactSection currentLang={currentLang} />
            <FAQAccordion currentLang={currentLang} />
          </>
        )}
      </main>

      {/* Floating Quick Message Trigger */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleOpenBooking('both')}
          className="bg-[#FBAD00] hover:bg-[#E09B00] text-[#011B4C] font-black py-3.5 px-6 rounded-full shadow-2xl border-2 border-white flex items-center gap-2.5 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#011B4C] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#011B4C]"></span>
          </span>
          <MessageSquare className="w-4 h-4 fill-[#011B4C]" />
          <span className="text-xs uppercase tracking-wider font-black">{t.hero.cta}</span>
        </button>
      </div>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking('both')}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        currentLang={currentLang}
        preselectedProgram={bookingProgram}
      />
    </div>
  );
}
