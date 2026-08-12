import React, { useState } from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { SpotlightCard } from './animations/SpotlightCard';
import { SplitText } from './animations/SplitText';
import { Languages, CheckCircle2, Sparkles, Award, FileText, Compass, Users, Check, ArrowRight } from 'lucide-react';

interface FrenchViewProps {
  currentLang: Language;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
}

export const FrenchView: React.FC<FrenchViewProps> = ({
  currentLang,
  onNavigate,
  onOpenBooking,
}) => {
  const t = translations[currentLang];

  // Self-assessment state
  const [goal, setGoal] = useState<'tef' | 'daily' | 'work'>('tef');
  const [level, setLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');
  const [timeline, setTimeline] = useState<'1month' | '3months' | '6months'>('3months');

  const getRecommendedHours = () => {
    if (goal === 'tef' && timeline === '1month') return { hours: 12, plan: '12 hrs/mo ($480/mo)', perHour: '$40/hr' };
    if (goal === 'tef' || level === 'beginner') return { hours: 8, plan: '8 hrs/mo ($336/mo)', perHour: '$42/hr' };
    return { hours: 4, plan: '4 hrs/mo ($180/mo)', perHour: '$45/hr' };
  };

  const rec = getRecommendedHours();

  return (
    <div className="bg-[#FDFDFD] py-12 space-y-16">
      
      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-[#011B4C] via-[#011B4C] to-[#0a2f75] text-white py-16 px-4 sm:px-6 lg:px-8 rounded-3xl max-w-7xl mx-auto shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FBAD00]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBAD00] text-[#011B4C] text-xs font-black uppercase tracking-wider">
            <Languages className="w-4 h-4" />
            <span>$45 / hour · TEF & TCF Canada Specialist</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            <SplitText text={t.frenchPage.title} className="text-white" />
          </h1>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            {t.frenchPage.subtitle}
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

      {/* TEF / TCF Specialization Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-500 to-[#FBAD00] text-[#011B4C] p-8 rounded-3xl shadow-xl space-y-4 border-2 border-white">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-[#011B4C] text-[#FBAD00] px-3 py-1 rounded-full w-max">
            <Award className="w-4 h-4" />
            <span>{t.frenchPage.tefCalloutTitle}</span>
          </div>
          <p className="text-base sm:text-lg font-bold leading-relaxed">
            "{t.frenchPage.tefCallout}"
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-black uppercase">
            <span className="bg-white/80 px-3 py-1.5 rounded-lg shadow-sm">✓ TEF Canada / TCF Quebec</span>
            <span className="bg-white/80 px-3 py-1.5 rounded-lg shadow-sm">✓ Express Entry CLB Points</span>
            <span className="bg-white/80 px-3 py-1.5 rounded-lg shadow-sm">✓ PEQ Residency Support</span>
          </div>
        </div>
      </section>

      {/* Target Audience Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-[#011B4C]">
            {t.frenchPage.whoForTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.frenchPage.whoFor.map((item, idx) => (
            <SpotlightCard key={idx} className="p-6 text-center space-y-3 bg-white">
              <div className="w-12 h-12 rounded-2xl bg-[#011B4C] text-[#FBAD00] flex items-center justify-center mx-auto text-xl font-black shadow-md">
                0{idx + 1}
              </div>
              <p className="text-sm font-bold text-[#011B4C] leading-snug">
                {item}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* 4 Feature Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.frenchPage.features.map((feat, idx) => (
            <SpotlightCard key={idx} className="p-8 bg-white border border-[#E7E8ED]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FBAD00] text-[#011B4C] font-black flex items-center justify-center shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#011B4C] mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {feat.body}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Interactive TEF & French Level Estimator Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#011B4C] text-white p-8 sm:p-12 rounded-3xl shadow-2xl border-2 border-[#FBAD00]">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 text-[#FBAD00] text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Smart Plan Advisor' : 'Conseiller de plan intelligent'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">
              {currentLang === 'en' ? 'Find Your Recommended French Study Schedule' : 'Trouvez votre programme de français recommandé'}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Form selectors */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-bold text-[#FBAD00] uppercase tracking-wider mb-2">
                  1. {currentLang === 'en' ? 'Primary Goal' : 'Objectif principal'}
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-bold">
                  <button
                    onClick={() => setGoal('tef')}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      goal === 'tef'
                        ? 'bg-[#FBAD00] text-[#011B4C] border-[#FBAD00]'
                        : 'bg-white/10 text-gray-200 border-white/20'
                    }`}
                  >
                    TEF / TCF Exam
                  </button>
                  <button
                    onClick={() => setGoal('work')}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      goal === 'work'
                        ? 'bg-[#FBAD00] text-[#011B4C] border-[#FBAD00]'
                        : 'bg-white/10 text-gray-200 border-white/20'
                    }`}
                  >
                    Work & Career
                  </button>
                  <button
                    onClick={() => setGoal('daily')}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      goal === 'daily'
                        ? 'bg-[#FBAD00] text-[#011B4C] border-[#FBAD00]'
                        : 'bg-white/10 text-gray-200 border-white/20'
                    }`}
                  >
                    Daily Life / PR
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#FBAD00] uppercase tracking-wider mb-2">
                  2. {currentLang === 'en' ? 'Current French Level' : 'Niveau de français actuel'}
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-bold">
                  <button
                    onClick={() => setLevel('beginner')}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      level === 'beginner'
                        ? 'bg-[#FBAD00] text-[#011B4C] border-[#FBAD00]'
                        : 'bg-white/10 text-gray-200 border-white/20'
                    }`}
                  >
                    Beginner (A1-A2)
                  </button>
                  <button
                    onClick={() => setLevel('intermediate')}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      level === 'intermediate'
                        ? 'bg-[#FBAD00] text-[#011B4C] border-[#FBAD00]'
                        : 'bg-white/10 text-gray-200 border-white/20'
                    }`}
                  >
                    Intermediate (B1-B2)
                  </button>
                  <button
                    onClick={() => setLevel('advanced')}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      level === 'advanced'
                        ? 'bg-[#FBAD00] text-[#011B4C] border-[#FBAD00]'
                        : 'bg-white/10 text-gray-200 border-white/20'
                    }`}
                  >
                    Advanced (C1-C2)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#FBAD00] uppercase tracking-wider mb-2">
                  3. {currentLang === 'en' ? 'Target Timeline' : 'Échéance visée'}
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-bold">
                  <button
                    onClick={() => setTimeline('1month')}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      timeline === '1month'
                        ? 'bg-[#FBAD00] text-[#011B4C] border-[#FBAD00]'
                        : 'bg-white/10 text-gray-200 border-white/20'
                    }`}
                  >
                    1 Month (Urgent)
                  </button>
                  <button
                    onClick={() => setTimeline('3months')}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      timeline === '3months'
                        ? 'bg-[#FBAD00] text-[#011B4C] border-[#FBAD00]'
                        : 'bg-white/10 text-gray-200 border-white/20'
                    }`}
                  >
                    3 Months (Standard)
                  </button>
                  <button
                    onClick={() => setTimeline('6months')}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      timeline === '6months'
                        ? 'bg-[#FBAD00] text-[#011B4C] border-[#FBAD00]'
                        : 'bg-white/10 text-gray-200 border-white/20'
                    }`}
                  >
                    6 Months (Flexible)
                  </button>
                </div>
              </div>
            </div>

            {/* Result Recommendation Box */}
            <div className="lg:col-span-5 bg-white text-[#011B4C] p-8 rounded-3xl shadow-2xl space-y-6 text-center">
              <span className="text-xs font-black uppercase tracking-wider bg-[#FBAD00] px-3 py-1 rounded-full text-[#011B4C]">
                Recommended Plan
              </span>
              <div className="space-y-1">
                <div className="text-3xl font-black text-[#011B4C]">{rec.plan}</div>
                <p className="text-xs font-semibold text-gray-500">Rate breakdown: {rec.perHour}</p>
              </div>

              <div className="text-xs text-gray-600 bg-slate-50 p-4 rounded-xl text-left space-y-1.5">
                <p className="font-bold text-[#011B4C]">Includes:</p>
                <p>✓ Personalized 1-on-1 Zoom sessions</p>
                <p>✓ TEF/TCF exam strategy & timed templates</p>
                <p>✓ Between-session homework correction</p>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full bg-[#FBAD00] hover:bg-[#e09b00] text-[#011B4C] font-black py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-[#E7E8ED] rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-[#011B4C]">
              {t.frenchPage.whatYouLearnTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.frenchPage.whatYouLearn.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#011B4C] text-[#FBAD00] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#011B4C]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
