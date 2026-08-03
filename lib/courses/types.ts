export type CourseStatus = 'active' | 'draft' | 'archived';

export interface CourseMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export interface CourseHero {
  headline: string;
  subheadline?: string;
  backgroundImage?: string;
}

export interface CourseQuickInfo {
  duration?: string;
  format?: string;
  level?: string;
  language?: string;
  certificate?: boolean;
}

export interface CourseOutcome {
  title: string;
  description?: string;
}

export interface CourseTestimonial {
  name: string;
  quote: string;
  photo?: string;
  rating?: number;
}

export interface CourseOffer {
  label: string;
  discountPercent?: number;
  expiresAt?: string;
}

export interface CoursePricing {
  currency: string;
  fullPrice: number;
  installmentCount?: number;
  installmentAmount?: number;
  currentOffer?: CourseOffer;
}

export interface CourseInstructor {
  name: string;
  bio?: string;
  photo?: string;
}

export interface CourseFaqItem {
  question: string;
  answer: string;
}

export interface CourseFinalCta {
  headline: string;
  buttonText: string;
}

export interface Course {
  id: string;
  slug: string;
  categoryId: string;
  status: CourseStatus;
  meta: CourseMeta;
  hero: CourseHero;
  quickInfo?: CourseQuickInfo;
  audience?: string[];
  curriculum?: CourseOutcome[];
  skills?: string[];
  careerOutcomes?: CourseOutcome[];
  whyEduzah?: CourseOutcome[];
  testimonials?: CourseTestimonial[];
  pricing?: CoursePricing;
  instructors?: CourseInstructor[];
  faq?: CourseFaqItem[];
  finalCta?: CourseFinalCta;
}
