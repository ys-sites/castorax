import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { BookOpen, Star, ArrowRight, Sparkles } from 'lucide-react';

interface ProgramsOverviewProps {
  currentLang: Language;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
}

export const ProgramsOverview: React.FC<ProgramsOverviewProps> = ({
  currentLang,
  onNavigate,
  onOpenBooking,
}) => {
  const t = translations[currentLang];

  const courses = [
    {
      id: 'math',
      category: currentLang === 'en' ? 'MATHEMATICS & SCIENCE' : 'MATHÉMATIQUES & SCIENCES',
      title: currentLang === 'en' ? 'Math & Science One-on-One Tutoring' : 'Tutorat Individuel en Maths & Sciences',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      lessons: currentLang === 'en' ? '15 Lessons / Mo' : '15 Leçons / mois',
      rating: '5.0',
      price: '$40',
      period: currentLang === 'en' ? '/ hr' : '/ h',
      page: 'math' as ActivePage,
    },
    {
      id: 'french',
      category: currentLang === 'en' ? 'FRENCH & TEF/TCF PREP' : 'FRANÇAIS & PRÉPARATIF TEF/TCF',
      title: currentLang === 'en' ? 'French Language & TEF/TCF Exam Prep' : 'Langue Française & Préparation TEF/TCF',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      lessons: currentLang === 'en' ? '20 Lessons / Mo' : '20 Leçons / mois',
      rating: '5.0',
      price: '$45',
      period: currentLang === 'en' ? '/ hr' : '/ h',
      page: 'french' as ActivePage,
    },
    {
      id: 'bundle',
      category: currentLang === 'en' ? 'ALL-IN-ONE BUNDLE' : 'FORFAIT MENSUL COMBINÉ',
      title: currentLang === 'en' ? 'Math, Science & French Monthly Bundle' : 'Forfait Mensuel Maths, Sciences & Français',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      lessons: currentLang === 'en' ? '8 Hours / Mo' : '8 Heures / mois',
      rating: '5.0',
      price: '$300',
      period: currentLang === 'en' ? '/ mo' : '/ mois',
      page: 'pricing' as ActivePage,
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#011B4C] tracking-tight">
            {currentLang === 'en' ? 'Courses and Pricing' : 'Programmes et Tarifs'}
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            {currentLang === 'en'
              ? 'Dive Deep Into Our Courses And Choose The Right Plan For Your Learning Journey'
              : 'Découvrez nos cours et choisissez le plan adapté à votre parcours'}
          </p>
        </div>

        {/* 3 Column Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image & Badge Container */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#011B4C] text-[#FBAD00] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {course.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black text-[#011B4C] mb-3 group-hover:text-[#FBAD00] transition-colors leading-snug">
                    {course.title}
                  </h3>

                  {/* Lessons & Ratings Row */}
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-6">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <BookOpen className="w-3.5 h-3.5 text-[#011B4C]" />
                      <span>{course.lessons}</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <div className="flex text-amber-400">
                        {'★'.repeat(5)}
                      </div>
                      <span className="text-gray-700 ml-1">({course.rating})</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Enroll Now Button + Price */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(course.page)}
                    className="bg-[#FBAD00] hover:bg-[#e09b00] text-[#011B4C] font-black text-xs px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    {currentLang === 'en' ? 'Enroll Now' : 'S\'inscrire'}
                  </button>

                  <div className="text-right">
                    <span className="text-xl font-black text-[#011B4C]">{course.price}</span>
                    <span className="text-xs font-semibold text-gray-500 ml-0.5">{course.period}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel indicator dots underneath */}
        <div className="flex justify-center items-center gap-2 mt-10">
          <div className="w-3 h-3 rounded-full bg-[#011B4C]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
        </div>

      </div>
    </section>
  );
};
