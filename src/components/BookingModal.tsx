import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { X, Send, CheckCircle2, Clock, Instagram, Copy, Check, Loader2 } from 'lucide-react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    program: preselectedProgram,
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${t.brand.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Session Booking Request from ${form.name}`,
          _template: 'table',
          _captcha: 'false',
          Name: form.name,
          Email: form.email,
          Program: form.program,
          Message: form.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        try {
          confetti({
            particleCount: 70,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#011B4C', '#FBAD00', '#F8FAFC'],
          });
        } catch {
          // ignore
        }
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('FormSubmit Error:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#011B4C]/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FFFFFF] rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#011B4C] text-[#FFFFFF] p-6 relative border-b border-[#011B4C]">
          <button
            onClick={resetAndClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FBAD00] mb-1">
            Castorax Tutoring
          </div>
          <h3 className="text-xl font-display font-bold text-white">{t.bookingModal.title}</h3>
          <p className="text-xs text-white/80 mt-1 flex items-center gap-1.5 font-sans">
            <Clock className="w-3.5 h-3.5 text-[#FBAD00]" />
            <span>{t.bookingModal.responseTimeNote}</span>
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 font-sans">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-[#011B4C] text-[#FBAD00] rounded-full flex items-center justify-center mx-auto shadow">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-display font-bold text-[#011B4C]">
                {currentLang === 'en' ? 'Message Received!' : 'Message reçu !'}
              </h4>
              <p className="text-sm text-[#1E2A44] max-w-sm mx-auto">
                {currentLang === 'en'
                  ? 'Thank you! I usually reply within 24 hours on email or Instagram.'
                  : 'Merci ! Je réponds généralement dans les 24 heures par courriel ou Instagram.'}
              </p>
              
              {/* Direct links container */}
              <div className="bg-[#F8FAFC] border border-slate-200 p-4 rounded-xl text-xs space-y-2 text-[#011B4C]">
                <p className="font-bold">Direct Contact Options:</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.instagram.com/castoraxtutoring/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#FBAD00] hover:bg-[#d49300] text-[#011B4C] font-bold py-2 px-4 rounded-lg shadow cursor-pointer text-center"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>{t.bookingModal.instagramCTA}</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center justify-center gap-2 bg-[#011B4C] text-[#FFFFFF] font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-[#1E2A44]"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#FBAD00]" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? t.bookingModal.copiedNotice : t.bookingModal.copyEmail}</span>
                  </button>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full bg-[#011B4C] text-[#FFFFFF] font-bold py-3 rounded-lg hover:bg-[#1E2A44] transition-colors shadow cursor-pointer uppercase text-xs tracking-wider"
              >
                {currentLang === 'en' ? 'Close Window' : 'Fermer la fenêtre'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                  {t.bookingModal.fullName} *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={currentLang === 'en' ? 'e.g., Alex Johnson' : 'ex., Alex Johnson'}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-[#011B4C] focus:outline-none focus:border-[#011B4C] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                  {t.bookingModal.email} *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="alex@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-[#011B4C] focus:outline-none focus:border-[#011B4C] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                  {t.bookingModal.programSelect}
                </label>
                <select
                  value={form.program}
                  onChange={(e) => setForm({ ...form, program: e.target.value as any })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-[#011B4C] focus:outline-none focus:border-[#011B4C] text-sm font-medium"
                >
                  <option value="math">{t.bookingModal.programMath}</option>
                  <option value="french">{t.bookingModal.programFrench}</option>
                  <option value="both">{t.bookingModal.programBoth}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                  {t.bookingModal.message}
                </label>
                <textarea
                  rows={3}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={currentLang === 'en' ? 'Tell me about your grade level, exam goals, or timeline...' : 'Parlez-moi de votre niveau, vos objectifs d\'examen ou échéances...'}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-[#011B4C] focus:outline-none focus:border-[#011B4C] text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#011B4C] hover:bg-[#1E2A44] text-[#FBAD00] font-bold py-3.5 rounded-lg shadow transition-all flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-wider"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin text-[#FBAD00]" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>{isSubmitting ? (currentLang === 'en' ? 'Sending...' : 'Envoi...') : (t.bookingModal.sendEmailCTA || t.hero.cta)}</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#1E2A44]/80 pt-2 border-t border-slate-200 font-mono">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="hover:text-[#011B4C] underline font-bold cursor-pointer"
                >
                  {copied ? t.bookingModal.copiedNotice : t.bookingModal.copyEmail}
                </button>
                <a
                  href="https://www.instagram.com/castoraxtutoring/"
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
