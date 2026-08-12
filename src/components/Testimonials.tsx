import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Play, ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface TestimonialsProps {
  currentLang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const stories = [
    {
      name: 'Amine K.',
      role: 'PEQ / Permanent Residency Candidate',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
      badge: 'TEF Canada NCLC 7 Passed',
      quoteEn: 'I needed NCLC 7 on TEF Canada for my permanent residency points. With the timed practice drills and oral feedback, I passed on my first attempt! The structured coaching made all the difference.',
      quoteFr: 'J’avais besoin du niveau NCLC 7 au TEF Canada pour mes points de résidence permanente. Grâce aux simulations chronométrées et aux conseils personnalisés, j’ai réussi du premier coup !',
    },
    {
      name: 'Sophie M.',
      role: 'Parent of Grade 10 Math Student',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      badge: 'Grade Up: 65% → 88%',
      quoteEn: 'My son went from feeling completely lost in algebra and physics to scoring 88% on his final exam. Castorax explains concepts with so much clarity and patience!',
      quoteFr: 'Mon fils est passé d’un sentiment d’abandon en algèbre et physique à 88 % à son examen final. Castorax explique les concepts avec tellement de clarté et de patience !',
    },
    {
      name: 'David L.',
      role: 'High School Physics & Chemistry',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      badge: 'Physics Score 92%',
      quoteEn: 'Having quick support between sessions whenever I was stuck on tough homework problems saved me so many times before quizzes and midterms.',
      quoteFr: 'Avoir un soutien rapide entre les cours lorsque je bloquais sur un devoir difficile m’a sauvé la mise plus d’une fois avant les examens.',
    },
  ];

  const currentStory = stories[activeIdx];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <p className="text-xs font-black tracking-widest text-gray-500 uppercase">
            STUDENT SUCCESS STORIES
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#011B4C] tracking-tight">
            Transforming Lives, One Lesson at a Time
          </h2>
          <p className="text-sm text-gray-600">
            Hear from Our Graduates and Lifelong Learners
          </p>
        </div>

        {/* Split Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 max-w-5xl mx-auto">
          
          {/* Left Column: Student Image */}
          <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-auto bg-gray-200">
            <img
              src={currentStory.image}
              alt={currentStory.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-[#FBAD00] text-[#011B4C] text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg">
              {currentStory.badge}
            </div>
          </div>

          {/* Right Column: Dark Deep Navy Card */}
          <div className="lg:col-span-7 bg-[#011B4C] p-8 sm:p-12 text-white flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Stars Rating */}
              <div className="flex text-[#FBAD00] text-sm">
                {'★'.repeat(5)}
              </div>

              {/* Author Name & Role */}
              <div>
                <h3 className="text-2xl font-black text-white font-sans">
                  {currentStory.name}
                </h3>
                <p className="text-xs text-[#FBAD00] font-semibold mt-1">
                  {currentStory.role}
                </p>
              </div>

              {/* Testimonial Quote */}
              <blockquote className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                "{currentLang === 'en' ? currentStory.quoteEn : currentStory.quoteFr}"
              </blockquote>

            </div>

            {/* Bottom Button & Controls */}
            <div className="pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <button className="bg-[#6366F1] hover:bg-[#4F46E5] text-white text-xs font-black px-5 py-3 rounded-xl flex items-center gap-2 shadow-lg transition-all cursor-pointer">
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Watch {currentStory.name}'s Story</span>
              </button>

              {/* Arrow controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveIdx((prev) => (prev === 0 ? stories.length - 1 : prev - 1))}
                  className="w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={() => setActiveIdx((prev) => (prev === stories.length - 1 ? 0 : prev + 1))}
                  className="w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Carousel indicator dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                i === activeIdx ? 'w-8 bg-[#011B4C]' : 'w-2.5 bg-gray-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
