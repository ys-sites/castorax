import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  currentLang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const t = translations[currentLang];

  const stories = [
    {
      name: 'Amine K.',
      role: currentLang === 'en' ? 'TEF Canada Student' : 'Étudiant TEF Canada',
      badge: 'NCLC 7 Target Achieved',
      quoteEn: 'I needed NCLC 7 on TEF Canada for my permanent residency application. With the timed practice drills and personalized oral feedback, I passed on my first attempt!',
      quoteFr: 'J’avais besoin du niveau NCLC 7 au TEF Canada pour ma demande de résidence permanente. Grâce aux simulations et aux corrections orales, j’ai réussi du premier coup !',
    },
    {
      name: 'Sophie M.',
      role: currentLang === 'en' ? 'Grade 10 Math Parent' : 'Parente d\'élève (Maths Sec 4)',
      badge: 'Grade Up: 65% → 88%',
      quoteEn: 'My son went from feeling lost in algebra and physics to scoring 88% on his final exam. Castorax explains concepts with so much patience and step-by-step clarity!',
      quoteFr: 'Mon fils est passé d’un sentiment d’abandon en algèbre à 88 % à son examen final. Castorax explique les concepts avec tellement de patience et de clarté !',
    },
    {
      name: 'David L.',
      role: currentLang === 'en' ? 'High School Physics Student' : 'Élève en physique secondaire',
      badge: 'Score: 92%',
      quoteEn: 'Having quick support between sessions whenever I got stuck on tough homework problems saved me before midterms.',
      quoteFr: 'Avoir un soutien rapide entre les cours lorsque je bloquais sur un devoir m’a énormément aidé avant les examens.',
    },
  ];

  const currentStory = stories[activeIdx];

  return (
    <section className="py-20 bg-[#FAF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-black tracking-widest text-[#E8631A] uppercase bg-[#FFF0E5] px-4 py-1.5 rounded-full border border-[#FDBA74]/40 font-sans">
            {currentLang === 'en' ? 'Student Results' : 'Résultats des élèves'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E1B18] tracking-tight font-sans">
            {currentLang === 'en' ? 'Real Stories of Progress & Success' : 'Des progrès et des succès concrets'}
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="bg-[#18181B] text-white p-8 sm:p-12 rounded-3xl shadow-2xl border-2 border-[#E8631A] max-w-3xl mx-auto relative space-y-6">
          <Quote className="w-12 h-12 text-[#E8631A]/30 absolute top-6 right-6 pointer-events-none" />

          {/* Stars */}
          <div className="flex text-[#E8631A] text-lg">
            {'★'.repeat(5)}
          </div>

          {/* Quote text */}
          <blockquote className="text-base sm:text-xl text-slate-100 leading-relaxed font-sans font-medium">
            "{currentLang === 'en' ? currentStory.quoteEn : currentStory.quoteFr}"
          </blockquote>

          {/* Author Details */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-black text-white font-sans">{currentStory.name}</h3>
              <p className="text-xs text-[#E8631A] font-bold">{currentStory.role} · <span className="underline">{currentStory.badge}</span></p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveIdx((prev) => (prev === 0 ? stories.length - 1 : prev - 1))}
                className="w-10 h-10 rounded-full border border-white/20 hover:bg-[#E8631A] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveIdx((prev) => (prev === stories.length - 1 ? 0 : prev + 1))}
                className="w-10 h-10 rounded-full border border-white/20 hover:bg-[#E8631A] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
