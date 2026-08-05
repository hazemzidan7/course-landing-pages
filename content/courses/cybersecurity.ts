import type { Course } from '@/lib/courses/types';

// Real EDUZAH course. Gallery images are still placeholders until real
// photos exist at public/courses/cybersecurity/ — CourseImage falls back
// to the branded placeholder for those.
//
// IMPORTANT — MISSING DATA: the task referenced "the EDUZAH Cyber Security
// source document" for the curriculum, but no source PDF/document or topic
// list was actually provided in this conversation. `curriculum` and
// `skills` are left undefined (rather than invented) until the real
// syllabus is supplied — the Curriculum/Skills sections will not render
// for this course until then.
export const cybersecurityCourse: Course = {
  id: 'cybersecurity',
  slug: 'cybersecurity',
  categoryId: 'technology',
  status: 'active',
  meta: {
    title: 'Cyber Security Diploma — EDUZAH',
    description: 'Develop practical cybersecurity skills and learn how modern systems, networks and applications are protected and assessed.',
    ogImage: '/courses/cybersecurity/hero.png',
  },
  hero: {
    badge: 'Technology Program',
    headline: 'Cyber Security Diploma',
    subheadline:
      'Develop practical cybersecurity skills and learn how modern systems, networks and applications are protected and assessed.',
    image: { src: '/courses/cybersecurity/hero.png', alt: 'EDUZAH Cyber Security Diploma' },
  },
  quickInfo: {
    duration: '20 Weeks · 150 Hours',
    format: 'Online / Offline',
    language: 'English',
  },
  gallery: [
    { alt: 'EDUZAH Cyber Security training session' },
    { alt: 'EDUZAH Cyber Security workshop' },
    { alt: 'EDUZAH Cyber Security lab session' },
  ],
};
