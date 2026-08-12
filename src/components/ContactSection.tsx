import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <p className="text-xs font-black tracking-widest text-[#011B4C] uppercase">
            GET IN TOUCH WITH CASTORAX
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#011B4C] tracking-tight">
            Have Questions or Need Assistance?
          </h2>
        </div>

        {/* Form & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Student Image */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-xl border-4 border-gray-100 bg-gray-100 h-96 lg:h-[460px]">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
              alt="Student asking questions"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Column: White Form Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 shadow-2xl border border-gray-100">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#011B4C]">
                  {currentLang === 'en' ? 'Message Sent Successfully!' : 'Message envoyé avec succès !'}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentLang === 'en'
                    ? 'Thank you for reaching out. Castorax usually replies within 24 hours.'
                    : 'Merci pour votre message. Castorax répond généralement dans les 24 heures.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#011B4C] text-white font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider"
                >
                  {currentLang === 'en' ? 'Send Another Message' : 'Envoyer un autre message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                    {currentLang === 'en' ? 'Your Name' : 'Votre Nom'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={currentLang === 'en' ? 'e.g. Alex Tremblay' : 'ex. Alex Tremblay'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FBAD00] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                    {currentLang === 'en' ? 'Email Address' : 'Adresse Courriel'}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FBAD00] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                    {currentLang === 'en' ? 'Subject / Program' : 'Sujet / Programme'}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FBAD00] text-sm bg-white"
                  >
                    <option value="">{currentLang === 'en' ? 'Select Program Interest...' : 'Sélectionnez le programme...'}</option>
                    <option value="math">{currentLang === 'en' ? 'Math & Science Tutoring' : 'Tutorat Maths & Sciences'}</option>
                    <option value="french">{currentLang === 'en' ? 'French & TEF/TCF Prep' : 'Français & Préparatif TEF/TCF'}</option>
                    <option value="other">{currentLang === 'en' ? 'General Inquiry' : 'Demande générale'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#011B4C] uppercase tracking-wider mb-1">
                    {currentLang === 'en' ? 'How Can We Help?' : 'Comment pouvons-nous vous aider ?'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={currentLang === 'en' ? 'Tell us about your goals or questions...' : 'Parlez-nous de vos objectifs ou questions...'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FBAD00] text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FBAD00] hover:bg-[#e09b00] text-[#011B4C] font-black text-sm py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{currentLang === 'en' ? 'Submit Inquiry' : 'Envoyer la demande'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
