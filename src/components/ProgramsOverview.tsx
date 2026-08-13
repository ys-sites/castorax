import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { ArrowRight, Calculator, BookOpen, Trophy, GraduationCap, Globe, Users, Clock } from 'lucide-react';

interface ProgramsOverviewProps {
  currentLang: Language;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: (program?: 'math' | 'french' | 'both') => void;
}

export const ProgramsOverview: React.FC<ProgramsOverviewProps> = ({
  currentLang,
  onNavigate,
  onOpenBooking,
}) => {
  const t = translations[currentLang];

  return (
    <div className="space-y-0">
      {/* Programs Section ("Find Your Path to Success") */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Header Column */}
            <div className="lg:col-span-4 space-y-5">
              <span className="text-xs font-black tracking-widest text-[#C58B1B] uppercase font-sans">
                OUR PROGRAMS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-academic font-bold text-[#0B1B36] leading-tight">
                {currentLang === 'en' ? 'Find Your Path to Success' : 'Trouvez votre voie vers le succès'}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {currentLang === 'en'
                  ? 'Choose from personalized 1-on-1 tutoring programs engineered for STEM mastery, TEF/TCF exam success, and academic confidence.'
                  : 'Choisissez parmi des programmes de tutorat individuels conçus pour la maîtrise des sciences, la réussite au TEF/TCF et la confiance académique.'}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('pricing')}
                  className="bg-[#0B1B36] hover:bg-[#162B4D] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{currentLang === 'en' ? 'VIEW ALL RATES' : 'VOIR TOUS LES TARIFS'}</span>
                  <ArrowRight className="w-4 h-4 text-[#C58B1B]" />
                </button>
              </div>
            </div>

            {/* Right Program Cards Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Program Card 1: Math & Science */}
              <div className="bg-[#FAFAFB] border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="relative h-44 bg-gradient-to-r from-[#0B1B36] to-[#162B4D] overflow-hidden p-6 flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C58B1B]/20 rounded-full blur-xl pointer-events-none" />
                  <span className="text-xs bg-[#C58B1B] text-white px-3 py-1 rounded font-extrabold uppercase tracking-wider w-fit">
                    $40 / hr · Math & Science
                  </span>
                  <h3 className="text-xl font-serif-academic font-bold text-white relative z-10">
                    {t.programs.math.title}
                  </h3>
                  
                  {/* Round Overlapping Icon Badge */}
                  <div className="absolute -bottom-5 right-6 w-12 h-12 rounded-full bg-[#C58B1B] text-white flex items-center justify-center shadow-lg border-2 border-white">
                    <Calculator className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-6 pt-8 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {t.programs.math.blurb}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-200 text-xs text-slate-700 font-semibold">
                    <li className="flex items-center gap-2">
                      <span className="text-[#C58B1B] font-bold">✓</span>
                      <span>{currentLang === 'en' ? 'Homework support & study skills' : 'Aide aux devoirs & méthodes d’étude'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#C58B1B] font-bold">✓</span>
                      <span>{currentLang === 'en' ? 'Grades 1–12 & STEM preparation' : 'Primaire, secondaire & préparation STEM'}</span>
                    </li>
                  </ul>

                  <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                    <button
                      onClick={() => onNavigate('math')}
                      className="text-xs font-black text-[#0B1B36] group-hover:text-[#C58B1B] flex items-center gap-1 uppercase tracking-wider cursor-pointer"
                    >
                      <span>EXPLORE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenBooking('math')}
                      className="bg-[#C58B1B] hover:bg-[#A77312] text-white text-xs font-extrabold px-4 py-2 rounded shadow cursor-pointer uppercase"
                    >
                      {t.hero.cta}
                    </button>
                  </div>
                </div>
              </div>

              {/* Program Card 2: French & TEF/TCF */}
              <div className="bg-[#FAFAFB] border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="relative h-44 bg-gradient-to-r from-[#162B4D] to-[#0B1B36] overflow-hidden p-6 flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C58B1B]/20 rounded-full blur-xl pointer-events-none" />
                  <span className="text-xs bg-[#0B1B36] text-[#E8CA8A] border border-[#C58B1B]/40 px-3 py-1 rounded font-extrabold uppercase tracking-wider w-fit">
                    $45 / hr · TEF & TCF
                  </span>
                  <h3 className="text-xl font-serif-academic font-bold text-white relative z-10">
                    {t.programs.french.title}
                  </h3>
                  
                  {/* Round Overlapping Icon Badge */}
                  <div className="absolute -bottom-5 right-6 w-12 h-12 rounded-full bg-[#0B1B36] text-[#C58B1B] flex items-center justify-center shadow-lg border-2 border-white">
                    <BookOpen className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-6 pt-8 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {t.programs.french.blurb}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-200 text-xs text-slate-700 font-semibold">
                    <li className="flex items-center gap-2">
                      <span className="text-[#C58B1B] font-bold">✓</span>
                      <span>{currentLang === 'en' ? 'Practical French for daily life' : 'Français pratique pour la vie au Canada'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#C58B1B] font-bold">✓</span>
                      <span>{currentLang === 'en' ? 'TEF / TCF Exam preparation for PR' : 'Préparation TEF / TCF pour résidence permanente'}</span>
                    </li>
                  </ul>

                  <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                    <button
                      onClick={() => onNavigate('french')}
                      className="text-xs font-black text-[#0B1B36] group-hover:text-[#C58B1B] flex items-center gap-1 uppercase tracking-wider cursor-pointer"
                    >
                      <span>EXPLORE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenBooking('french')}
                      className="bg-[#C58B1B] hover:bg-[#A77312] text-white text-xs font-extrabold px-4 py-2 rounded shadow cursor-pointer uppercase"
                    >
                      {t.hero.cta}
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Dark Navy Stats Counter Banner (Matching Northfield Dark Banner) */}
      <section className="bg-[#0B1B36] text-white py-12 border-y border-[#C58B1B]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x-0 md:divide-x divide-white/10">
            
            <div className="p-2 space-y-1">
              <div className="text-3xl sm:text-4xl font-serif-academic font-bold text-[#E8CA8A]">100%</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-bold">Online Tutoring</div>
            </div>

            <div className="p-2 space-y-1">
              <div className="text-3xl sm:text-4xl font-serif-academic font-bold text-[#E8CA8A]">98%</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-bold">Student Satisfaction</div>
            </div>

            <div className="p-2 space-y-1">
              <div className="text-3xl sm:text-4xl font-serif-academic font-bold text-[#E8CA8A]">NCLC 7+</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-bold">TEF / TCF Target Rate</div>
            </div>

            <div className="p-2 space-y-1">
              <div className="text-3xl sm:text-4xl font-serif-academic font-bold text-[#E8CA8A]">$40 / hr</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-bold">Starting Hourly Rate</div>
            </div>

            <div className="p-2 space-y-1 col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl font-serif-academic font-bold text-[#E8CA8A]">&lt; 24h</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-bold">Response Guarantee</div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};


