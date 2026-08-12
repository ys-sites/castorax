export type Language = 'en' | 'fr';

export type ActivePage = 'home' | 'math' | 'french' | 'pricing' | 'dashboard' | 'contact';

export interface BookingFormState {
  studentName: string;
  parentName?: string;
  email: string;
  phone: string;
  program: 'math_science' | 'french_tef' | 'both';
  gradeLevel: string;
  hoursPerWeek: number;
  preferredDays: string[];
  message: string;
  targetExam?: 'tef_canada' | 'tcf_canada' | 'school_exam' | 'general_improvement';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  program: 'Math & Science' | 'French TEF/TCF' | 'General French';
  commentEn: string;
  commentFr: string;
  rating: number;
  badgeEn: string;
  badgeFr: string;
  avatarSeed: string;
}

export interface FAQItem {
  id: string;
  questionEn: string;
  questionFr: string;
  answerEn: string;
  answerFr: string;
  category: 'general' | 'math' | 'french' | 'pricing';
}
