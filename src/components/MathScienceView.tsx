import React, { useState } from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { SpotlightCard } from './animations/SpotlightCard';
import { SplitText } from './animations/SplitText';
import { Calculator, CheckCircle2, Sparkles, BookOpen, Lightbulb, Trophy, Brain, ArrowRight } from 'lucide-react';

interface MathScienceViewProps {
  currentLang: Language;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
}

export const MathScienceView: React.FC<MathScienceViewProps> = ({
  currentLang,
  onNavigate,
  onOpenBooking,
}) => {
  const t = translations[currentLang];
  const [activeSample, setActiveSample] = useState<number>(0);

  const sampleTopics = [
    {
      titleEn: "Algebra & Linear Equations",
      titleFr: "Algèbre & Équations linéaires",
      problemEn: "Solve 3x + 7 = 22 without memorizing formulas.",
      problemFr: "Résoudre 3x + 7 = 22 sans apprendre par cœur.",
      solutionEn: "Think of an equation as a balanced scale. Whatever you do to one side, do to the other: subtract 7 from both sides → 3x = 15, then divide by 3 → x = 5.",
      solutionFr: "Pensez à l'équation comme une balance en équilibre. Faites la même opération des deux côtés : soustrayez 7 → 3x = 15, puis divisez par 3 → x = 5.",
      tipEn: "Focus on keeping the balance, not moving numbers back and forth arbitrarily.",
      tipFr: "Gardez l'équilibre de la balance plutôt que de déplacer des chiffres au hasard."
    },
    {
      titleEn: "Physics & Forces",
      titleFr: "Physique & Forces (F = ma)",
      problemEn: "Why does a heavy truck require stronger brakes than a small car?",
      problemFr: "Pourquoi un camion lourd a-t-il besoin de freins plus puissants qu'une petite voiture ?",
      solutionEn: "Newton's Second Law states Force = mass × acceleration. Greater mass requires proportionally greater braking force to achieve the same stopping acceleration.",
      solutionFr: "La 2e loi de Newton stipule Force = masse × accélération. Une masse plus grande exige une force de freinage proportionnellement plus élevée.",
      tipEn: "Relate physics formulas directly to everyday driving and motion experiences.",
      tipFr: "Reliez directement les formules de physique aux expériences quotidiennes."
    },
    {
      titleEn: "Chemistry & Molar Mass",
      titleFr: "Chimie & Masse molaire",
      problemEn: "How to conceptualize a 'Mole' in chemistry easily?",
      problemFr: "Comment se représenter facilement une 'mole' en chimie ?",
      solutionEn: "A mole is simply a baker's dozen for atoms! Just as a dozen = 12 eggs, a mole = 6.022 × 10²³ particles, making microscopic atoms countable in grams.",
      solutionFr: "Une mole est simplement une 'douzaine' pour les atomes ! Comme une douzaine = 12 œufs, une mole = 6.022 × 10²³ particules, permettant de peser les atomes en grammes.",
      tipEn: "Visual analogies turn abstract chemistry into intuitive counting.",
      tipFr: "Les analogies visuelles rendent la chimie abstraite intuitive."
    }
  ];

  return (
    <div className="bg-[#FDFDFD] py-12 space-y-16">
      
      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-[#011B4C] to-[#022e80] text-white py-16 px-4 sm:px-6 lg:px-8 rounded-3xl max-w-7xl mx-auto shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FBAD00]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBAD00] text-[#011B4C] text-xs font-black uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>$40 / hour · Pay-as-you-go or Monthly</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            <SplitText text={t.mathPage.title} className="text-white" />
          </h1>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            {t.mathPage.subtitle}
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-[#FBAD00] hover:bg-[#e09b00] text-[#011B4C] font-black px-6 py-3 rounded-xl shadow-lg transition-all cursor-pointer"
            >
              {t.hero.ctaPrimary}
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3 rounded-xl border border-white/20 transition-all cursor-pointer"
            >
              {t.nav.pricing}
            </button>
          </div>
        </div>
      </section>

      {/* Outcome Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#011B4C] text-[#FBAD00] p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-around gap-4 text-center md:text-left border-2 border-[#FBAD00]">
          {t.mathPage.outcomes.map((outcome, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Trophy className="w-6 h-6 shrink-0" />
              <span className="text-lg sm:text-xl font-black text-white tracking-wide">{outcome}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects Offered Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-[#011B4C]">
            {t.mathPage.subjectsTitle}
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            {currentLang === 'en'
              ? 'Comprehensive academic support across elementary, secondary, and college preparatory levels.'
              : 'Un accompagnement complet du primaire au secondaire et à la préparation collégiale.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.mathPage.subjects.map((sub, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E7E8ED] p-4 rounded-xl shadow-sm hover:shadow-md hover:border-[#FBAD00] transition-all flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#011B4C]/5 text-[#011B4C] font-bold flex items-center justify-center shrink-0">
                ✓
              </div>
              <span className="text-sm font-bold text-[#011B4C]">{sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7 Reasons Why Choose Castorax */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-[#E7E8ED] rounded-3xl p-8 sm:p-12 shadow-xl space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#FBAD00] uppercase tracking-wider bg-[#011B4C] px-3.5 py-1 rounded-full">
              {t.brand.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#011B4C] mt-3">
              {t.mathPage.whyChooseTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.mathPage.whyChoose.map((item, idx) => (
              <SpotlightCard key={idx} className="p-6 bg-slate-50/50">
                <div className="w-10 h-10 rounded-xl bg-[#011B4C] text-[#FBAD00] font-black text-sm flex items-center justify-center mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#011B4C] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Concept Breakdown Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#011B4C] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-[#FBAD00]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-[#FBAD00] text-xs font-bold uppercase tracking-wider mb-1">
                <Brain className="w-4 h-4" />
                <span>{currentLang === 'en' ? 'Interactive Demo' : 'Démonstration interactive'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black">
                {currentLang === 'en' ? 'How We Explain Complex STEM Concepts' : 'Comment nous expliquons les concepts STEM'}
              </h3>
            </div>
            <div className="flex gap-2">
              {sampleTopics.map((top, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSample(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    activeSample === idx
                      ? 'bg-[#FBAD00] text-[#011B4C]'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  Topic 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FBAD00]/20 text-[#FBAD00] text-xs font-bold">
                {currentLang === 'en' ? sampleTopics[activeSample].titleEn : sampleTopics[activeSample].titleFr}
              </span>
              <h4 className="text-xl font-bold text-white">
                {currentLang === 'en' ? sampleTopics[activeSample].problemEn : sampleTopics[activeSample].problemFr}
              </h4>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-xs text-gray-300 space-y-2">
                <p className="font-semibold text-[#FBAD00]">💡 Castorax Teaching Secret:</p>
                <p>{currentLang === 'en' ? sampleTopics[activeSample].tipEn : sampleTopics[activeSample].tipFr}</p>
              </div>
            </div>

            <div className="md:col-span-7 bg-white text-[#011B4C] p-6 rounded-2xl shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>{currentLang === 'en' ? 'Step-by-Step Breakdown' : 'Explication étape par étape'}</span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                "{currentLang === 'en' ? sampleTopics[activeSample].solutionEn : sampleTopics[activeSample].solutionFr}"
              </p>
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>1-on-1 Virtual Whiteboard Explanation</span>
                <button
                  onClick={onOpenBooking}
                  className="font-bold text-[#011B4C] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Tutoring for this Subject</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-amber-50 to-amber-100/60 border border-[#FBAD00] p-8 sm:p-12 rounded-3xl space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black text-[#011B4C]">
            {t.closingCta.title}
          </h3>
          <p className="text-sm text-gray-700 max-w-xl mx-auto">
            {t.closingCta.subtitle}
          </p>
          <button
            onClick={onOpenBooking}
            className="bg-[#011B4C] hover:bg-[#011B4C]/90 text-white font-black text-base px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all cursor-pointer"
          >
            {t.closingCta.button}
          </button>
        </div>
      </section>

    </div>
  );
};
