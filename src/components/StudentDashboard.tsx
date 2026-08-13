import React, { useState } from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../translations';
import { SpotlightCard } from './animations/SpotlightCard';
import { Send, CheckCircle2, Clock, Calendar, FileText, Download, User, Mail, Phone, BookOpen, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface StudentDashboardProps {
  currentLang: Language;
  onNavigate: (page: ActivePage) => void;
}

interface SubmittedRequest {
  id: string;
  date: string;
  name: string;
  program: string;
  status: 'pending' | 'confirmed';
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  currentLang,
  onNavigate,
}) => {
  const t = translations[currentLang];
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    program: 'math_science',
    gradeLevel: '',
    hoursPerWeek: '2',
    preferredDays: 'Weekdays',
    targetExam: '',
    message: '',
  });

  // Mock list of active requests
  const [requests, setRequests] = useState<SubmittedRequest[]>([
    {
      id: 'REQ-1092',
      date: new Date().toLocaleDateString(),
      name: 'Sample Inquiry (TEF B2 Prep)',
      program: 'French & TEF/TCF Tutoring',
      status: 'confirmed',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const newReq: SubmittedRequest = {
      id: `REQ-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString(),
      name: formData.studentName || 'Student Inquiry',
      program: formData.program === 'math_science' ? 'Math & Science ($40/h)' : 'French & TEF/TCF ($45/h)',
      status: 'pending',
    };

    setRequests([newReq, ...requests]);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#0F172A', '#F59E0B', '#10b981'],
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="bg-[#F8FAFC] py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F172A] text-[#F59E0B] text-xs font-black uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>{currentLang === 'en' ? 'Student Hub & Contact' : 'Portail étudiant & Contact'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
          {t.dashboard.title}
        </h1>
        <p className="text-base text-slate-600">
          {t.dashboard.subtitle}
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Contact & Consultation Form Column */}
          <div className="lg:col-span-7 bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
            <div>
              <h2 className="text-2xl font-black text-[#0F172A]">
                {t.dashboard.formTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {t.dashboard.formSubtitle}
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border-2 border-emerald-500/30 p-8 rounded-2xl text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#0F172A]">
                  {currentLang === 'en' ? 'Consultation Request Received!' : 'Demande de consultation reçue !'}
                </h3>
                <p className="text-sm text-slate-700">
                  {t.dashboard.successMsg} <span className="font-bold text-[#0F172A]">{formData.email}</span>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#0F172A] text-white font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-[#0F172A]/90 transition-colors cursor-pointer"
                  >
                    {currentLang === 'en' ? 'Submit Another Inquiry' : 'Soumettre une autre demande'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      {t.dashboard.studentName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="e.g. Jean Tremblay"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      {t.dashboard.parentName}
                    </label>
                    <input
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="Optional"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      {t.dashboard.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      {t.dashboard.phone}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (514) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      {t.dashboard.programSelect}
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-sm bg-white"
                    >
                      <option value="math_science">{t.programs.math.title} ($40/h)</option>
                      <option value="french">{t.programs.french.title} ($45/h)</option>
                      <option value="both">Both Math & French Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      {t.dashboard.gradeLevel}
                    </label>
                    <input
                      type="text"
                      value={formData.gradeLevel}
                      onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                      placeholder="e.g. Grade 11 / Beginner French"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                    {t.dashboard.message}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about specific subjects, homework challenges, or upcoming exam dates..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-black py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-base"
                >
                  <Send className="w-5 h-5" />
                  <span>{t.dashboard.submitBtn}</span>
                </button>
              </form>
            )}
          </div>

          {/* Side Column: Active Requests Log & Free Study Downloads */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Active Requests Tracker */}
            <div className="bg-[#0F172A] text-white p-6 rounded-3xl shadow-xl space-y-4 border border-[#F59E0B]/30">
              <h3 className="text-lg font-black flex items-center gap-2 text-[#F59E0B]">
                <Clock className="w-5 h-5" />
                <span>{t.dashboard.mockPortalTitle}</span>
              </h3>

              <div className="space-y-3">
                {requests.map((req) => (
                  <div key={req.id} className="bg-white/10 p-4 rounded-2xl border border-white/10 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-[#F59E0B] font-bold">{req.id}</span>
                      <span className="text-slate-400">{req.date}</span>
                    </div>
                    <p className="text-sm font-bold text-white">{req.name}</p>
                    <p className="text-xs text-slate-300">{req.program}</p>
                    <div className="pt-2 flex items-center gap-2 text-[11px] font-bold">
                      {req.status === 'confirmed' ? (
                        <span className="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                          ✓ {t.dashboard.statusConfirmed}
                        </span>
                      ) : (
                        <span className="bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/30 flex items-center gap-1">
                          ⏳ {t.dashboard.statusSubmitted}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Free Downloads & Study Tools */}
            <div className="bg-white border-2 border-slate-200 p-6 rounded-3xl shadow-xl space-y-4">
              <h3 className="text-lg font-black text-[#0F172A] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#F59E0B]" />
                <span>{t.dashboard.quickResourcesTitle}</span>
              </h3>

              <div className="space-y-3">
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/60 flex items-center justify-between text-xs font-bold text-[#0F172A]">
                  <span>{t.dashboard.resource1}</span>
                  <button className="p-1.5 bg-[#0F172A] text-[#F59E0B] rounded-lg hover:bg-[#0F172A]/90 transition-colors cursor-pointer">
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/60 flex items-center justify-between text-xs font-bold text-[#0F172A]">
                  <span>{t.dashboard.resource2}</span>
                  <button className="p-1.5 bg-[#0F172A] text-[#F59E0B] rounded-lg hover:bg-[#0F172A]/90 transition-colors cursor-pointer">
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/60 flex items-center justify-between text-xs font-bold text-[#0F172A]">
                  <span>{t.dashboard.resource3}</span>
                  <button className="p-1.5 bg-[#0F172A] text-[#F59E0B] rounded-lg hover:bg-[#0F172A]/90 transition-colors cursor-pointer">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
