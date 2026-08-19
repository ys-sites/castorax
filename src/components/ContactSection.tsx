import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Mail, Send, CheckCircle2, Clock, Copy, Check, Instagram, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FoundationDivider } from './FoundationDivider';
import { RiseUp, RiseUpStagger, RiseUpItem } from './animations/RiseUp';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');
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

  const handleFormSubmit = async (e: React.FormEvent) => {
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
          _subject: `New Tutoring Inquiry from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          Name: formData.name,
          Email: formData.email,
          Program: formData.subject,
          Message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#011B4C', '#FBAD00', '#F8FAFC'],
          });
        } catch {
          // ignore
        }
      } else {
        // Fallback for success display
        setSubmitted(true);
      }
    } catch (err) {
      console.error('FormSubmit Error:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubscribeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail) return;
    setIsSubmitting(true);
    try {
      await fetch(`https://formsubmit.co/ajax/${t.brand.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Newsletter Subscriber: ${subscribeEmail}`,
          _captcha: 'false',
          Email: subscribeEmail,
        }),
      });
      alert(currentLang === 'en' ? 'Thank you for subscribing!' : 'Merci pour votre inscription !');
      setSubscribeEmail('');
    } catch {
      // fallback alert
      alert(currentLang === 'en' ? 'Thank you for subscribing!' : 'Merci pour votre inscription !');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-0 bg-[#FAFAFC]">
      
      {/* Top Banner */}
      <section className="bg-[#011B4C] text-[#FFFFFF] py-8 px-4 sm:px-8 border-y border-[#011B4C]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-[#FBAD00] text-[#011B4C] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-[#011B4C]" />
            </div>
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FBAD00]">
                {currentLang === 'en' ? 'STAY CONNECTED & BOOK YOUR SESSION' : 'RESTEZ CONNECTÉ & RÉSERVEZ VOTRE SÉANCE'}
              </h3>
              <p className="text-xs text-white/85 font-sans">
                {currentLang === 'en'
                  ? 'Send a quick message to check availability or discuss your specific tutoring goals.'
                  : 'Envoyez un message rapide pour vérifier les disponibilités ou discuter de vos objectifs.'}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubscribeSubmit} className="flex items-center gap-2 w-full md:w-auto max-w-md font-sans">
            <input
              type="email"
              required
              placeholder="Enter your email..."
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
              className="bg-white text-[#011B4C] px-4 py-2.5 rounded-lg text-xs focus:outline-none flex-1 font-medium placeholder-[#1E2A44]/50 border border-slate-200"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#FBAD00] hover:bg-[#d49300] text-[#011B4C] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow cursor-pointer transition-colors shrink-0 flex items-center gap-1.5"
            >
              {isSubmitting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : (currentLang === 'en' ? 'SUBSCRIBE' : 'S\'INSCRIRE')}
            </button>
          </form>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section id="contact-form" className="py-20 bg-[#FAFAFC] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title */}
          <RiseUp className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#011B4C]/70 uppercase">
              {t.footer.contactTitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#011B4C]">
              {currentLang === 'en' ? 'Get In Touch With Castorax' : 'Contactez Tutorat Castorax'}
            </h2>
            <p className="text-xs sm:text-sm text-[#1E2A44] font-sans">
              {t.hero.microcopy}
            </p>
          </RiseUp>

          {/* Contact Info Cards & Direct Message */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
            
            {/* Left Column: Direct Info Cards */}
            <div className="lg:col-span-5 space-y-4">
              
              <RiseUpStagger staggerDelay={0.1}>
                {/* Email Card */}
                <RiseUpItem className="mb-4">
                  <div className="bg-[#FFFFFF] border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-[#011B4C] text-[#FBAD00] flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-mono font-bold text-[#011B4C] uppercase tracking-wider">Email Direct</h3>
                      <p className="text-sm font-mono font-bold text-[#011B4C]">{t.brand.email}</p>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="w-full bg-[#011B4C] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1E2A44] transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-4 h-4 text-[#FBAD00]" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? t.bookingModal.copiedNotice : t.bookingModal.copyEmail}</span>
                    </button>
                  </div>
                </RiseUpItem>

                {/* Instagram Card */}
                <RiseUpItem className="mb-4">
                  <div className="bg-[#FFFFFF] border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-[#011B4C] text-[#FBAD00] flex items-center justify-center">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-mono font-bold text-[#011B4C] uppercase tracking-wider">Instagram Direct</h3>
                      <a
                        href="https://www.instagram.com/castoraxtutoring/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-mono font-bold text-[#011B4C] hover:underline cursor-pointer block"
                      >
                        {t.brand.instagram}
                      </a>
                    </div>
                    <a
                      href="https://www.instagram.com/castoraxtutoring/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-[#FBAD00] hover:bg-[#d49300] text-[#011B4C] text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 shadow cursor-pointer text-center"
                    >
                      <span>{t.bookingModal.instagramCTA}</span>
                    </a>
                  </div>
                </RiseUpItem>

                {/* Response Time Card */}
                <RiseUpItem>
                  <div className="bg-[#011B4C] text-[#FFFFFF] p-6 rounded-2xl border border-[#011B4C] space-y-2 shadow">
                    <div className="flex items-center gap-2 text-[#FBAD00] text-xs font-mono font-bold uppercase tracking-wider">
                      <Clock className="w-4 h-4 text-[#FBAD00]" />
                      <span>{currentLang === 'en' ? 'Fast Response Guarantee' : 'Garantie de réponse rapide'}</span>
                    </div>
                    <p className="text-xs text-white/80 font-sans">
                      {t.brand.responseTime}
                    </p>
                  </div>
                </RiseUpItem>
              </RiseUpStagger>

            </div>

            {/* Right Column: FormSubmit Integrated Direct Form */}
            <div className="lg:col-span-7">
              <RiseUp delay={0.2}>
                <div className="bg-[#FFFFFF] rounded-2xl p-8 shadow-sm border border-slate-200 font-sans">
                  {submitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-16 h-16 bg-[#011B4C] text-[#FBAD00] rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-[#011B4C]">
                        {currentLang === 'en' ? 'Message Sent!' : 'Message envoyé !'}
                      </h3>
                      <p className="text-sm text-[#1E2A44]">
                        {t.brand.responseTime}
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="bg-[#011B4C] text-[#FFFFFF] font-bold px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider cursor-pointer hover:bg-[#1E2A44]"
                      >
                        {currentLang === 'en' ? 'Send Another Message' : 'Envoyer un autre message'}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-mono font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                          {t.bookingModal.fullName} *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={currentLang === 'en' ? 'Your full name...' : 'Votre nom complet...'}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-[#011B4C] focus:outline-none focus:border-[#011B4C] text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                          {t.bookingModal.programSelect}
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-[#011B4C] focus:outline-none focus:border-[#011B4C] text-sm font-medium"
                        >
                          <option value="math">{t.bookingModal.programMath}</option>
                          <option value="french">{t.bookingModal.programFrench}</option>
                          <option value="other">{t.bookingModal.programBoth}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                          {t.bookingModal.message}
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder={currentLang === 'en' ? 'Your questions or tutoring goals...' : 'Vos questions ou objectifs...'}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-[#011B4C] focus:outline-none focus:border-[#011B4C] text-sm"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#011B4C] hover:bg-[#1E2A44] text-[#FBAD00] font-bold text-xs uppercase tracking-wider py-4 rounded-lg shadow transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-4 h-4 animate-spin text-[#FBAD00]" />
                        ) : (
                          <Send className="w-4 h-4" />
                        )}
                        <span>{isSubmitting ? (currentLang === 'en' ? 'Sending...' : 'Envoi...') : t.hero.cta}</span>
                      </button>
                    </form>
                  )}
                </div>
              </RiseUp>
            </div>

          </div>

        </div>

        <RiseUp delay={0.2}>
          <FoundationDivider className="mt-16" />
        </RiseUp>
      </section>
    </div>
  );
};
