import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { X, Send, CheckCircle2, Clock, Mail, Instagram, Sparkles, Copy, Check } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    program: preselectedProgram,
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0F172A', '#F59E0B', '#10B981'],
      });
    } catch {
      // ignore
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.brand.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#FBAD00]">
        
        {/* Header */}
        <div className="bg-[#011B4C] text-white p-6 relative border-b border-[#FBAD00]/30">
          <button
            onClick={resetAndClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-[#FBAD00] text-xs font-bold uppercase tracking-wider mb-1 font-sans">
            <Sparkles className="w-4 h-4" />
            <span>Castorax Tutoring</span>
          </div>
          <h3 className="text-xl font-black text-white font-sans">{t.bookingModal.title}</h3>
          <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5 font-normal">
            <Clock className="w-3.5 h-3.5 text-[#FBAD00]" />
            <span>{t.bookingModal.responseTimeNote}</span>
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-[#011B4C] font-sans">
                {currentLang === 'en' ? 'Message Received!' : 'Message reçu !'}
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                {currentLang === 'en'
                  ? 'Thank you! I usually reply within 24 hours on email or Instagram.'
                  : 'Merci ! Je réponds généralement dans les 24 heures par courriel ou Instagram.'}
              </p>
              
              {/* Direct links container */}
              <div className="bg-[#F8FAFC] border border-slate-200 p-4 rounded-2xl text-xs space-y-2 text-slate-800">
                <p className="font-bold text-[#011B4C]">Direct Contact Options:</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://instagram.com/castoraxtutoring"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#FBAD00] hover:bg-[#E09B00] text-[#011B4C] font-black py-2 px-4 rounded-xl shadow cursor-pointer text-center"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>{t.bookingModal.instagramCTA}</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center justify-center gap-2 bg-[#011B4C] text-white font-bold py-2 px-4 rounded-xl cursor-pointer hover:bg-[#011B4C]/90"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#FBAD00]" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? t.bookingModal.copiedNotice : t.bookingModal.copyEmail}</span>
                  </button>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full bg-[#FBAD00] text-[#011B4C] font-black py-3 rounded-xl hover:bg-[#E09B00] transition-colors shadow cursor-pointer"
              >
                {currentLang === 'en' ? 'Close Window' : 'Fermer la fenêtre'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                  {t.bookingModal.fullName} *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={currentLang === 'en' ? 'e.g., Alex Johnson' : 'ex., Alex Johnson'}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FBAD00] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                  {t.bookingModal.email} *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="alex@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FBAD00] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                  {t.bookingModal.programSelect}
                </label>
                <select
                  value={form.program}
                  onChange={(e) => setForm({ ...form, program: e.target.value as any })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FBAD00] text-sm bg-white font-medium"
                >
                  <option value="math">{t.bookingModal.programMath}</option>
                  <option value="french">{t.bookingModal.programFrench}</option>
                  <option value="both">{t.bookingModal.programBoth}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                  {t.bookingModal.message}
                </label>
                <textarea
                  rows={3}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={currentLang === 'en' ? 'Tell me about your grade level, exam goals, or timeline...' : 'Parlez-moi de votre niveau, vos objectifs d\'examen ou échéances...'}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FBAD00] text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#FBAD00] hover:bg-[#E09B00] text-[#011B4C] font-black py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <Send className="w-4 h-4 fill-[#011B4C]" />
                  <span>{t.bookingModal.submitCTA}</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="hover:text-[#011B4C] underline font-bold cursor-pointer"
                >
                  {copied ? t.bookingModal.copiedNotice : t.bookingModal.copyEmail}
                </button>
                <a
                  href="https://instagram.com/castoraxtutoring"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#011B4C] underline font-bold cursor-pointer"
                >
                  {t.bookingModal.instagramCTA}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
