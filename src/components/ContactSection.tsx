import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Mail, Instagram, Clock, Send, CheckCircle2, Copy, Check } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'math',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.brand.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-black tracking-widest text-[#E8631A] uppercase bg-[#FFF0E5] px-4 py-1.5 rounded-full border border-[#FDBA74]/40 font-sans">
            {t.footer.contactTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E1B18] tracking-tight font-sans">
            {currentLang === 'en' ? 'Get In Touch' : 'Contactez-moi'}
          </h2>
          <p className="text-sm text-slate-600">
            {t.hero.microcopy}
          </p>
        </div>

        {/* Contact Info Cards & Direct Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-[#FFF9F5] border-2 border-orange-100 p-6 rounded-3xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFF0E5] text-[#E8631A] flex items-center justify-center border border-orange-200/60">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-black text-[#1E1B18] uppercase tracking-wider">Email</h3>
                <p className="text-sm font-bold text-slate-800">{t.brand.email}</p>
              </div>
              <button
                onClick={handleCopyEmail}
                className="w-full bg-[#18181B] text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#18181B]/90 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-[#E8631A]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? t.bookingModal.copiedNotice : t.bookingModal.copyEmail}</span>
              </button>
            </div>

            {/* Instagram Card */}
            <div className="bg-[#FFF9F5] border-2 border-orange-100 p-6 rounded-3xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-black text-[#1E1B18] uppercase tracking-wider">Instagram</h3>
                <p className="text-sm font-bold text-slate-800">{t.brand.instagram}</p>
              </div>
              <a
                href="https://instagram.com/castoraxtutoring"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow cursor-pointer text-center"
              >
                <span>{t.bookingModal.instagramCTA}</span>
              </a>
            </div>

            {/* Response Time Card */}
            <div className="bg-[#18181B] text-white p-6 rounded-3xl border-2 border-[#E8631A] space-y-2">
              <div className="flex items-center gap-2 text-[#E8631A] text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>{currentLang === 'en' ? 'Fast Response Guarantee' : 'Garantie de réponse rapide'}</span>
              </div>
              <p className="text-xs text-slate-200">
                {t.brand.responseTime}
              </p>
            </div>

          </div>

          {/* Right Column: Direct Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-100">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#1E1B18]">
                  {currentLang === 'en' ? 'Message Sent!' : 'Message envoyé !'}
                </h3>
                <p className="text-sm text-slate-600">
                  {t.brand.responseTime}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#18181B] text-white font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider cursor-pointer"
                >
                  {currentLang === 'en' ? 'Send Another Message' : 'Envoyer un autre message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#1E1B18] uppercase tracking-wider mb-1">
                    {t.bookingModal.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={currentLang === 'en' ? 'Your name...' : 'Votre nom...'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-[#E8631A] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E1B18] uppercase tracking-wider mb-1">
                    {t.bookingModal.email} *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-[#E8631A] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E1B18] uppercase tracking-wider mb-1">
                    {t.bookingModal.programSelect}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-[#E8631A] text-sm bg-white font-medium"
                  >
                    <option value="math">{t.bookingModal.programMath}</option>
                    <option value="french">{t.bookingModal.programFrench}</option>
                    <option value="other">{t.bookingModal.programBoth}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E1B18] uppercase tracking-wider mb-1">
                    {t.bookingModal.message}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={currentLang === 'en' ? 'Your questions or tutoring goals...' : 'Vos questions ou objectifs...'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-[#E8631A] text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E8631A] hover:bg-[#D9480F] text-white font-black text-sm py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.hero.cta}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
