import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { ArrowRight, Sparkles, Award, Users, BookOpen } from 'lucide-react';
import mascotImg from '../assets/images/castorax_mascot_logo_1786527601351.jpg';

interface HeroProps {
  currentLang: Language;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onNavigate,
  onOpenBooking,
}) => {
  const t = translations[currentLang];

  const partnerLogos = [
    { name: 'Google', icon: 'google' },
    { name: 'slack', icon: 'slack' },
    { name: 'Atlassian', icon: 'atlassian' },
    { name: 'Dropbox', icon: 'dropbox' },
    { name: 'shopify', icon: 'shopify' },
  ];

  return (
    <div className="relative bg-[#011B4C] text-white overflow-hidden">
      {/* Background Dim Library Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      {/* Radial Dark Gradient Overlay for Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#011B4C] via-[#011B4C]/90 to-[#011B4C]/70 pointer-events-none" />

      {/* Main Hero Container */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28 lg:pt-20 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & Key Stats */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Small Eyebrow Label */}
            <p className="text-sm font-semibold tracking-wide text-gray-300 font-sans">
              {currentLang === 'en' ? 'Welcome to Castorax Tutoring' : 'Bienvenue chez Castorax Tutorat'}
            </p>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.12] tracking-tight">
              {currentLang === 'en' ? (
                <>
                  Your Learning Journey <br className="hidden sm:inline" />
                  <span className="text-white">Begins Here</span>
                </>
              ) : (
                <>
                  Votre Parcours d'Apprentissage <br className="hidden sm:inline" />
                  <span className="text-white">Commence Ici</span>
                </>
              )}
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              {t.hero.subtitle}
            </p>

            {/* Gold CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onNavigate('math')}
                className="w-full sm:w-auto bg-[#FBAD00] hover:bg-[#e09b00] text-[#011B4C] font-black text-base px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{currentLang === 'en' ? 'Explore Our Programs' : 'Explorer nos programmes'}</span>
              </button>
            </div>

            {/* Key Hero Stats Row directly below CTA */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-sans">
                  {t.eduStats.stat2Num}
                </div>
                <div className="text-xs font-medium text-gray-400 mt-1">
                  {t.eduStats.stat2Label}
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-sans">
                  {t.eduStats.stat1Num}
                </div>
                <div className="text-xs font-medium text-gray-400 mt-1">
                  {t.eduStats.stat1Label}
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-sans">
                  {t.eduStats.stat4Num}
                </div>
                <div className="text-xs font-medium text-gray-400 mt-1">
                  {t.eduStats.stat4Label}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Student sitting at desk with laptop */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backplate Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#FBAD00]/20 to-blue-500/20 rounded-3xl blur-2xl pointer-events-none" />

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=80"
                  alt="Student using laptop at desk"
                  className="w-full h-[380px] sm:h-[440px] object-cover object-top"
                  referrerPolicy="no-referrer"
                />

                {/* Top Floating Mascot Badge */}
                <div className="absolute top-4 left-4 bg-[#011B4C]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 shadow-xl flex items-center gap-2.5">
                  <img
                    src={mascotImg}
                    alt="Castorax Mascot"
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-[#FBAD00]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-[10px] font-black uppercase text-[#FBAD00] tracking-wider">Castorax Tutoring</div>
                    <div className="text-xs font-semibold text-white">Math, Science & French</div>
                  </div>
                </div>

                {/* Bottom Floating Feature Pill */}
                <div className="absolute bottom-4 right-4 bg-[#FBAD00] text-[#011B4C] px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 text-xs font-extrabold">
                  <Sparkles className="w-4 h-4 fill-[#011B4C]" />
                  <span>TEF/TCF Exam Prep</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Floating White Partner Banner Overlapping Hero & Section Below */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 -mb-16">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 sm:p-8 text-center text-gray-800">
          <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider mb-6">
            {t.partners.title}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center opacity-80 font-bold">
            {/* Google */}
            <div className="flex items-center gap-1 text-gray-700 font-extrabold text-lg">
              <span className="text-blue-600">G</span>
              <span className="text-red-500">o</span>
              <span className="text-amber-500">o</span>
              <span className="text-blue-600">g</span>
              <span className="text-green-600">l</span>
              <span className="text-red-500">e</span>
            </div>

            {/* Slack */}
            <div className="flex items-center gap-1.5 font-black text-gray-800 tracking-tight text-lg">
              <div className="w-4 h-4 rounded bg-[#E01E5A] flex items-center justify-center text-white text-[10px] font-bold">#</div>
              <span>slack</span>
            </div>

            {/* Atlassian */}
            <div className="flex items-center gap-1 font-extrabold text-gray-700 text-base">
              <span className="text-blue-600 font-serif">▲</span>
              <span>Atlassian</span>
            </div>

            {/* Dropbox */}
            <div className="flex items-center gap-1.5 font-extrabold text-gray-800 text-base">
              <div className="w-3.5 h-3.5 bg-blue-600 transform rotate-45"></div>
              <span>Dropbox</span>
            </div>

            {/* Shopify */}
            <div className="flex items-center gap-1 font-bold text-gray-800 text-base">
              <span className="text-green-600 font-black">s</span>
              <span>shopify</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
