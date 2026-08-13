import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { Sparkles, MessageSquare, CheckCircle, ShieldCheck, Clock, ArrowRight, GraduationCap, Award, BookOpen, Users, Compass } from 'lucide-react';
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

  return (
    <div className="relative bg-[#FAFAFB] text-[#071224] overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#FAF3E3]/60 via-[#FAFAFB] to-[#FAFAFB] pointer-events-none" />
      <div className="absolute top-12 right-10 w-96 h-96 border border-[#C58B1B]/15 rounded-full pointer-events-none" />

      {/* Main Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Academic Serif Title & Core Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Serif Eyebrow */}
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#C58B1B] font-sans">
              SHAPING MINDS. INSPIRING FUTURES.
            </div>

            {/* Academic Dual-Color Serif H1 */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-serif-academic font-bold text-[#0B1B36] leading-[1.12] tracking-tight">
              {currentLang === 'en' ? (
                <>
                  A Legacy of Excellence.<br />
                  <span className="text-[#C58B1B]">A Future of Impact.</span>
                </>
              ) : (
                <>
                  Un héritage d'excellence.<br />
                  <span className="text-[#C58B1B]">Un avenir d'impact.</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {currentLang === 'en'
                ? 'At Castorax Tutoring, we empower students to think critically, master complex concepts, and build lasting confidence in Math, Science, and French.'
                : 'Chez Tutorat Castorax, nous permettons aux étudiants de développer leur esprit critique, maîtriser les concepts complexes et bâtir une confiance durable.'}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-[#0B1B36] hover:bg-[#162B4D] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>{currentLang === 'en' ? 'EXPLORE PROGRAMS' : 'EXPLORER LES PROGRAMMES'}</span>
                <ArrowRight className="w-4 h-4 text-[#C58B1B]" />
              </button>

              <button
                onClick={() => onNavigate('pricing')}
                className="w-full sm:w-auto bg-white border-2 border-[#0B1B36] hover:bg-slate-100 text-[#0B1B36] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-7 py-4 rounded-lg transition-all cursor-pointer text-center shadow-sm"
              >
                <span>{currentLang === 'en' ? 'SEE PRICING' : 'VOIR LES TARIFS'}</span>
              </button>
            </div>

            {/* Avatar Stack Social Proof */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2">
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" alt="Student" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" alt="Student" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" alt="Student" />
              </div>
              <p className="text-xs font-bold text-slate-700">
                {currentLang === 'en' ? 'Join 100+ Students From Across Canada' : 'Rejoint par plus de 100 étudiants au Canada'}
              </p>
            </div>

          </div>

          {/* Right Column: Hero Visual Card + Floating University Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backplate Shadow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#0B1B36]/10 to-[#C58B1B]/20 rounded-3xl blur-xl pointer-events-none" />

              {/* Main Card */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-white p-6 text-[#071224] space-y-6">
                
                {/* Brand Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-slate-200">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#C58B1B] bg-white shadow-md shrink-0">
                    <img
                      src={mascotImg}
                      alt="Castorax Beaver Mascot"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif-academic font-bold text-[#0B1B36]">{t.brand.name}</h3>
                    <p className="text-xs text-[#C58B1B] font-extrabold uppercase tracking-wider">Academic Excellence</p>
                    <p className="text-xs text-slate-500 mt-0.5">{t.brand.email}</p>
                  </div>
                </div>

                {/* Floating Top Badge Box */}
                <div className="bg-[#0B1B36] text-white p-4 rounded-xl flex items-center gap-3.5 border border-[#C58B1B]/40 shadow-lg">
                  <div className="w-10 h-10 rounded-lg bg-[#C58B1B] text-white flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-[#E8CA8A] uppercase tracking-wider">Top Rated Tutoring</div>
                    <div className="text-xs font-semibold text-slate-200">Math, Science & TEF/TCF Exam Prep Specialist</div>
                  </div>
                </div>

                {/* Program Cards Preview */}
                <div className="space-y-3">
                  <div 
                    onClick={() => onNavigate('math')}
                    className="p-4 rounded-xl bg-[#FAFAFB] hover:bg-[#FAF3E3] border border-slate-200 hover:border-[#C58B1B] transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-[#0B1B36] group-hover:text-[#C58B1B] transition-colors">
                        {t.programs.math.title}
                      </h4>
                      <span className="text-xs bg-[#0B1B36] text-[#E8CA8A] px-2.5 py-0.5 rounded font-bold">
                        $40 / hr
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {t.programs.math.blurb}
                    </p>
                  </div>

                  <div 
                    onClick={() => onNavigate('french')}
                    className="p-4 rounded-xl bg-[#FAFAFB] hover:bg-[#FAF3E3] border border-slate-200 hover:border-[#C58B1B] transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-[#0B1B36] group-hover:text-[#C58B1B] transition-colors">
                        {t.programs.french.title}
                      </h4>
                      <span className="text-xs bg-[#C58B1B] text-white px-2.5 py-0.5 rounded font-bold">
                        TEF / TCF
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {t.programs.french.blurb}
                    </p>
                  </div>
                </div>

                {/* Direct Action */}
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#C58B1B] hover:bg-[#A77312] text-white font-extrabold py-3.5 rounded-lg shadow-md transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{t.hero.cta}</span>
                </button>

              </div>
            </div>
          </div>

        </div>

        {/* Floating White 4-Feature Bar (Matching Northfield Bar) */}
        <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF3E3] border border-[#E8CA8A] text-[#C58B1B] flex items-center justify-center shrink-0 shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0B1B36] font-sans">Academic Excellence</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Step-by-step 1-on-1 guidance tailored to individual curriculum goals.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF3E3] border border-[#E8CA8A] text-[#C58B1B] flex items-center justify-center shrink-0 shadow-sm">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0B1B36] font-sans">Bilingual Mastery</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Targeted TEF/TCF exam preparation for Canadian PR & work permits.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF3E3] border border-[#E8CA8A] text-[#C58B1B] flex items-center justify-center shrink-0 shadow-sm">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0B1B36] font-sans">Flexible Online</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Convenient online scheduling fits seamlessly into busy student life.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF3E3] border border-[#E8CA8A] text-[#C58B1B] flex items-center justify-center shrink-0 shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0B1B36] font-sans">Dedicated Support</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Continuous support between sessions via email and direct messaging.
              </p>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
};


