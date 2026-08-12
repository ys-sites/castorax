import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { X, Send, CheckCircle2, Clock, Mail, Instagram, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  preselectedProgram?: 'math' | 'french' | 'both';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  preselectedProgram = 'math',
}) => {
  const t = translations[currentLang];
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    program: preselectedProgram,
    level: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Fire confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#011B4C', '#FBAD00', '#22c55e'],
      });
    } catch {
      // ignore
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-[#FBAD00]">
        {/* Header */}
        <div className="bg-[#011B4C] text-white p-6 relative">
          <button
            onClick={resetAndClose}
            className="absolute top-4 right-4 text-gray-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-[#FBAD00] text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>{currentLang === 'en' ? 'Quick Consultation Request' : 'Demande de consultation rapide'}</span>
          </div>
          <h3 className="text-xl font-black">{t.hero.ctaPrimary}</h3>
          <p className="text-xs text-gray-300 mt-1 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#FBAD00]" />
            <span>{t.brand.responseTime}</span>
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#011B4C]">
                {currentLang === 'en' ? 'Inquiry Sent Successfully!' : 'Demande envoyée avec succès !'}
              </h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                {t.dashboard.successMsg} <span className="font-bold text-[#011B4C]">{form.email}</span>.
              </p>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-900 space-y-2">
                <p className="font-semibold">
                  {currentLang === 'en'
                    ? 'Want an even faster response?'
                    : 'Vous souhaitez une réponse encore plus rapide ?'}
                </p>
                <div className="flex items-center justify-center gap-3 font-bold text-[#011B4C]">
                  <a
                    href="https://instagram.com/castoraxtutoring"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:underline text-pink-700"
                  >
                    <Instagram className="w-4 h-4" /> @castoraxtutoring
                  </a>
                  <span>·</span>
                  <a
                    href={`mailto:${t.brand.email}`}
                    className="flex items-center gap-1 hover:underline text-[#011B4C]"
                  >
                    <Mail className="w-4 h-4" /> Email
                  </a>
                </div>
              </div>
              <button
                onClick={resetAndClose}
                className="w-full bg-[#011B4C] text-white font-bold py-3 rounded-xl hover:bg-[#011B4C]/90 transition-colors shadow cursor-pointer"
              >
                {currentLang === 'en' ? 'Back to Website' : 'Retour au site'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                  {t.dashboard.studentName} *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={currentLang === 'en' ? 'e.g., Alex Johnson' : 'ex., Alex Johnson'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FBAD00] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                    {t.dashboard.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FBAD00] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                    {t.dashboard.phone}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+1 (514) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FBAD00] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                    {t.dashboard.programSelect}
                  </label>
                  <select
                    value={form.program}
                    onChange={(e) => setForm({ ...form, program: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FBAD00] text-sm bg-white"
                  >
                    <option value="math">{t.programs.math.title} ($40/h)</option>
                    <option value="french">{t.programs.french.title} ($45/h)</option>
                    <option value="both">Both Programs / Comprehensive</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                    {t.dashboard.gradeLevel}
                  </label>
                  <input
                    type="text"
                    value={form.level}
                    onChange={(e) => setForm({ ...form, level: e.target.value })}
                    placeholder={currentLang === 'en' ? 'e.g., Grade 10 / TEF B2' : 'ex., Secondaire 4 / TEF B2'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FBAD00] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                  {t.dashboard.message}
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={
                    currentLang === 'en'
                      ? 'Briefly describe what you need help with...'
                      : 'Décrivez brièvement vos besoins...'
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FBAD00] text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FBAD00] hover:bg-[#e09b00] text-[#011B4C] font-black py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t.dashboard.submitBtn}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
