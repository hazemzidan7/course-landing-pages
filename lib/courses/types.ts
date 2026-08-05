export type CourseStatus = 'active' | 'draft' | 'archived';

export interface CourseMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

// src is a path under public/courses/{slug}/ (e.g. /courses/data-analysis/hero.webp).
// Not every course needs every image — omit the field until a real photo exists.
export interface CourseImageRef {
  src: string;
  alt: string;
}

export interface CourseHero {
  badge?: string;
  headline: string;
  subheadline?: string;
  image?: CourseImageRef;
}

export interface CourseQuickInfo {
  duration?: string;
  format?: string;
  level?: string;
  language?: string;
  sessionsPerWeek?: string;
  practicalProjects?: boolean;
  certificate?: boolean;
}

export interface CourseOutcome {
  title: string;
  description?: string;
}

export interface CourseGalleryImage {
  src?: string;
  alt: string;
  caption?: string;
}

export interface CourseTestimonial {
  name: string;
  quote: string;
  photo?: CourseImageRef;
  rating?: number;
}

export interface CourseStudentProject {
  title: string;
  description?: string;
  image?: CourseImageRef;
}

export interface CourseOffer {
  label: string;
  discountPercent?: number;
  expiresAt?: string;
}

export interface CoursePricing {
  currency: string;
  fullPrice: number;
  originalPrice?: number;
  installmentCount?: number;
  installmentAmount?: number;
  currentOffer?: CourseOffer;
}

export interface CourseInstructor {
  name: string;
  role?: string;
  bio?: string;
  photo?: CourseImageRef;
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
  gallery?: CourseGalleryImage[];
  whyEduzah?: CourseOutcome[];
  studentProjects?: CourseStudentProject[];
  testimonials?: CourseTestimonial[];
  pricing?: CoursePricing;
  instructors?: CourseInstructor[];
  faq?: CourseFaqItem[];
  finalCta?: CourseFinalCta;
}
