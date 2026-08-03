import type { Course } from '@/lib/courses/types';

// Placeholder-only content used to verify routing, rendering, metadata,
// the data model, and 404 behavior. Not real course content or photography.
export const testCourse: Course = {
  id: 'test-course',
  slug: 'test-course',
  categoryId: 'test',
  status: 'active',
  meta: {
    title: 'Test Course (Placeholder) — EDUZAH',
    description: 'Placeholder description for the EDUZAH test course used to verify the dynamic course page system.',
    ogTitle: 'Test Course (Placeholder) — EDUZAH',
    ogDescription: 'Placeholder OG description for the EDUZAH test course.',
    ogImage: '/placeholder-og.png',
  },
  hero: {
    badge: 'Technology Program (Placeholder)',
    headline: 'Test Course — Placeholder Headline',
    subheadline: 'This page exists only to verify the dynamic course design system, not to represent a real EDUZAH program.',
  },
  quickInfo: {
    duration: '8 weeks',
    format: 'Online / Offline',
    level: 'Beginner',
    language: 'English',
    certificate: true,
  },
  audience: [
    'Placeholder audience point one',
    'Placeholder audience point two',
    'Placeholder audience point three',
  ],
  curriculum: [
    { title: 'Placeholder module 1', description: 'Placeholder module description.' },
    { title: 'Placeholder module 2', description: 'Placeholder module description.' },
    { title: 'Placeholder module 3', description: 'Placeholder module description.' },
  ],
  skills: ['Placeholder skill A', 'Placeholder skill B', 'Placeholder skill C', 'Placeholder skill D'],
  careerOutcomes: [
    { title: 'Placeholder career direction one', description: 'Placeholder description.' },
    { title: 'Placeholder career direction two', description: 'Placeholder description.' },
  ],
  gallery: [
    { alt: 'Placeholder — classroom session photo', caption: 'Placeholder caption: classroom session' },
    { alt: 'Placeholder — workshop photo', caption: 'Placeholder caption: hands-on workshop' },
    { alt: 'Placeholder — students on computers photo', caption: 'Placeholder caption: lab session' },
  ],
  whyEduzah: [
    { title: 'Placeholder reason one', description: 'Placeholder description.' },
    { title: 'Placeholder reason two', description: 'Placeholder description.' },
    { title: 'Placeholder reason three', description: 'Placeholder description.' },
  ],
  studentProjects: [
    { title: 'Placeholder student project', description: 'Placeholder project description.' },
  ],
  testimonials: [{ name: 'Placeholder Student', quote: 'Placeholder testimonial quote.' }],
  instructors: [
    { name: 'Placeholder Instructor', role: 'Placeholder Role', bio: 'Placeholder instructor bio.' },
  ],
  pricing: {
    currency: 'EGP',
    fullPrice: 1000,
    originalPrice: 1200,
    installmentCount: 3,
    installmentAmount: 350,
    currentOffer: { label: 'Placeholder offer', discountPercent: 17 },
  },
  faq: [
    { question: 'Is this real content?', answer: 'No, this is placeholder content for Step 3 design verification only.' },
    { question: 'Will real photos replace these placeholders?', answer: 'Yes — real EDUZAH photography will be added per course in a later step.' },
  ],
  finalCta: { headline: 'Placeholder final CTA headline', buttonText: 'Register Now' },
};
