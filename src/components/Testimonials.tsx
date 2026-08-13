import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ArrowRight, Quote, Star, Award } from 'lucide-react';

interface TestimonialsProps {
  currentLang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const stories = [
    {
      date: 'MAY 10',
      name: 'Amine K.',
      role: currentLang === 'en' ? 'TEF Canada Student' : 'Étudiant TEF Canada',
      badge: 'NCLC 7 Target Achieved',
      headline: currentLang === 'en' ? 'Passed TEF Canada on First Attempt for Permanent Residency' : 'TEF Canada réussi du premier coup pour la résidence',
      quoteEn: 'I needed NCLC 7 on TEF Canada for my permanent residency application. With timed practice drills and oral feedback, I passed on my first attempt!',
      quoteFr: 'J’avais besoin du niveau NCLC 7 au TEF Canada pour ma demande de résidence permanente. Grâce aux simulations, j’ai réussi du premier coup !',
    },
    {
      date: 'MAY 06',
      name: 'Sophie M.',
      role: currentLang === 'en' ? 'Grade 10 Math Parent' : 'Parente d\'élève (Maths Sec 4)',
      badge: 'Grade Up: 65% → 88%',
      headline: currentLang === 'en' ? 'Dramatic Grade Jump from 65% to 88% on Final Math Exam' : 'Remontée spectaculaire de 65% à 88% en mathématiques',
      quoteEn: 'My son went from feeling lost in algebra to scoring 88% on his final exam. Castorax explains concepts with so much patience and step-by-step clarity!',
      quoteFr: 'Mon fils est passé d’un sentiment d’abandon en algèbre à 88 % à son examen final. Castorax explique les concepts avec tellement de patience et de clarté !',
    },
    {
      date: 'APR 28',
      name: 'David L.',
      role: currentLang === 'en' ? 'High School Physics' : 'Élève en physique secondaire',
      badge: 'Score: 92%',
      headline: currentLang === 'en' ? 'Scored 92% in Physics with Between-Session Homework Help' : '92% en physique grâce au soutien entre les cours',
      quoteEn: 'Having quick support between sessions whenever I got stuck on tough homework problems saved me before midterms.',
      quoteFr: 'Avoir un soutien rapide entre les cours lorsque je bloquais sur un devoir m’a énormément aidé avant les examens.',
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Matching LATEST NEWS & EVENTS header) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 border-b border-slate-200 pb-4 gap-4">
          <div>
            <span className="text-xs font-black tracking-widest text-[#C58B1B] uppercase font-sans">
              {currentLang === 'en' ? 'STUDENT SUCCESS STORIES' : 'RÉSULTATS DES ÉLÈVES'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-academic font-bold text-[#0B1B36] mt-1">
              {currentLang === 'en' ? 'Real Stories of Progress & Success' : 'Des progrès et des succès concrets'}
            </h2>
          </div>
          <span className="text-xs font-extrabold text-[#0B1B36] uppercase tracking-wider flex items-center gap-1 cursor-pointer hover:text-[#C58B1B]">
            <span>{currentLang === 'en' ? 'VIEW ALL STORIES' : 'VOIR TOUS LES TÉMOIGNAGES'}</span>
            <ArrowRight className="w-4 h-4 text-[#C58B1B]" />
          </span>
        </div>

        {/* 3 Story Cards Grid (Matching Northfield News Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFB] border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Banner with Date Badge */}
                <div className="bg-[#0B1B36] text-white p-5 relative flex items-center justify-between">
                  <div className="bg-[#C58B1B] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded">
                    {story.date}
                  </div>
                  <div className="flex text-[#E8CA8A] text-xs">
                    {'★'.repeat(5)}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C58B1B] bg-[#FAF3E3] px-2.5 py-0.5 rounded border border-[#E8CA8A]">
                    {story.badge}
                  </span>
                  
                  <h3 className="text-base font-bold text-[#0B1B36] font-sans group-hover:text-[#C58B1B] transition-colors leading-snug">
                    {story.headline}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal italic">
                    "{currentLang === 'en' ? story.quoteEn : story.quoteFr}"
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-200/60 mt-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-[#0B1B36]">{story.name}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{story.role}</div>
                </div>
                <span className="text-xs font-bold text-[#C58B1B] uppercase tracking-wider group-hover:underline cursor-pointer flex items-center gap-1">
                  READ MORE →
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

