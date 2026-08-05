import type { Course } from '@/lib/courses/types';

// Real EDUZAH course. Gallery images are still placeholders until real
// photos exist at public/courses/flutter/ — CourseImage falls back to the
// branded placeholder for those.
//
// IMPORTANT — MISSING DATA: the task referenced "the exact Flutter/Dart
// curriculum contained in the EDUZAH source document", but no source
// PDF/document or topic list was actually provided in this conversation.
// `curriculum` and `skills` are left undefined (rather than invented)
// until the real syllabus is supplied — the Curriculum/Skills sections
// will not render for this course until then.
export const flutterCourse: Course = {
  id: 'flutter',
  slug: 'flutter',
  categoryId: 'technology',
  status: 'active',
  meta: {
    title: 'Flutter Mobile Development Diploma — EDUZAH',
    description: 'Learn to build modern cross-platform mobile applications with Flutter through hands-on development and practical projects.',
    ogImage: '/courses/flutter/hero.png',
  },
  hero: {
    badge: 'Technology Program',
    headline: 'Flutter Mobile Development Diploma',
    subheadline:
      'Learn to build modern cross-platform mobile applications with Flutter through hands-on development and practical projects.',
    image: { src: '/courses/flutter/hero.png', alt: 'EDUZAH Flutter Mobile Development Diploma' },
  },
  quickInfo: {
    duration: '20 Weeks · 140 Hours',
    format: 'Online / Offline',
    language: 'English',
  },
  gallery: [
    { alt: 'EDUZAH Flutter Development training session' },
    { alt: 'EDUZAH Flutter Development workshop' },
    { alt: 'EDUZAH Flutter Development lab session' },
  ],
};
