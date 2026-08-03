import type { Course } from '@/lib/courses/types';

// Placeholder-only content used to verify routing, rendering, metadata,
// the data model, and 404 behavior. Not real course content.
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
    headline: 'Test Course — Placeholder Headline',
    subheadline: 'This page exists only to verify the dynamic course system.',
  },
  quickInfo: {
    duration: '8 weeks',
    format: 'Online / Offline',
    level: 'Beginner',
    language: 'English',
    certificate: true,
  },
  audience: ['Placeholder audience point one', 'Placeholder audience point two'],
  curriculum: [
    { title: 'Placeholder module 1', description: 'Placeholder description.' },
    { title: 'Placeholder module 2', description: 'Placeholder description.' },
  ],
  skills: ['Placeholder skill A', 'Placeholder skill B'],
  careerOutcomes: [{ title: 'Placeholder career outcome', description: 'Placeholder description.' }],
  whyEduzah: [{ title: 'Placeholder reason', description: 'Placeholder description.' }],
  testimonials: [{ name: 'Placeholder Student', quote: 'Placeholder testimonial quote.' }],
  pricing: {
    currency: 'EGP',
    fullPrice: 1000,
    installmentCount: 3,
    installmentAmount: 350,
    currentOffer: { label: 'Placeholder offer', discountPercent: 10 },
  },
  instructors: [{ name: 'Placeholder Instructor', bio: 'Placeholder bio.' }],
  faq: [{ question: 'Is this real content?', answer: 'No, this is placeholder content for Step 2 verification only.' }],
  finalCta: { headline: 'Placeholder final CTA headline', buttonText: 'Register Now' },
};
