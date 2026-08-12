import React, { useState } from 'react';
import { Language, FAQItem } from '../types';
import { translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQAccordionProps {
  currentLang: Language;
}

const faqList: FAQItem[] = [
  {
    id: '1',
    category: 'general',
    questionEn: 'How are online tutoring sessions conducted?',
    questionFr: 'Comment se déroulent les séances de tutorat en ligne ?',
    answerEn: 'Sessions are hosted 1-on-1 on Zoom with an interactive virtual whiteboard, screen sharing, and live digital notes sent to you after every class.',
    answerFr: 'Les cours se déroulent en individuel sur Zoom avec un tableau blanc virtuel interactif et un partage d’écran. Toutes les notes vous sont envoyées après la séance.',
  },
  {
    id: '2',
    category: 'french',
    questionEn: 'Do you offer TEF / TCF Canada preparation?',
    questionFr: 'Proposez-vous la préparation au TEF / TCF Canada ?',
    answerEn: 'Yes! We specialize in TEF/TCF exam preparation, including timed expression oral and written practice drills, structure templates, and CLB/NCLC point strategies.',
    answerFr: 'Oui ! Nous sommes spécialisés dans la préparation aux examens TEF/TCF, avec des simulations d’expression orale/écrite chronométrées et des grilles de critères.',
  },
  {
    id: '3',
    category: 'pricing',
    questionEn: 'Is there any long-term commitment required?',
    questionFr: 'Y a-t-il un engagement à long terme ?',
    answerEn: 'No long-term contracts. You can choose pay-as-you-go per session or flexible monthly plans that you can pause or cancel anytime without penalties.',
    answerFr: 'Aucun contrat à long terme. Vous pouvez choisir à la séance ou opter pour un forfait mensuel sans engagement, résiliable en tout temps.',
  },
  {
    id: '4',
    category: 'math',
    questionEn: 'What if I need help between my scheduled sessions?',
    questionFr: 'Que faire si j’ai besoin d’aide entre deux cours ?',
    answerEn: 'All active enrolled students get between-session message Q&A support for homework questions so you don’t stay stuck before an assignment deadline.',
    answerFr: 'Tous les élèves inscrits bénéficient d’un soutien par message entre les cours pour poser leurs questions sur leurs devoirs et débloquer rapidement.',
  },
];

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [openId, setOpenId] = useState<string | null>('1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Deep Blue Header Banner Title */}
        <div className="bg-[#011B4C] text-white p-8 sm:p-10 rounded-2xl text-center mb-8 shadow-xl border border-[#FBAD00]/30">
          <p className="text-xs font-bold text-[#FBAD00] uppercase tracking-widest mb-2">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            A list of Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Blue Pill Items */}
        <div className="space-y-4">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#011B4C] rounded-xl overflow-hidden shadow-md text-white transition-all duration-200"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg cursor-pointer hover:text-[#FBAD00] transition-colors"
                >
                  <span>{currentLang === 'en' ? item.questionEn : item.questionFr}</span>
                  <div className="w-8 h-8 rounded-lg bg-blue-600/50 flex items-center justify-center shrink-0 text-white">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden bg-[#0A255C] border-t border-white/10"
                    >
                      <div className="p-5 text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                        {currentLang === 'en' ? item.answerEn : item.answerFr}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
