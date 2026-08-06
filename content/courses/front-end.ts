import type { Course } from '@/lib/courses/types';

// Real EDUZAH course. Gallery images are still placeholders until real
// photos exist at public/courses/front-end/ — CourseImage falls back to
// the branded placeholder for those.
//
// PARTIAL DATA: the task said to "continue with the remaining framework/
// project content exactly as represented by the source PDF" but that PDF
// was not provided — only the Front-End Fundamentals topic list below was
// actually supplied, so framework/project modules are omitted rather than
// invented.
export const frontEndCourse: Course = {
  id: 'front-end',
  slug: 'front-end',
  categoryId: 'technology',
  status: 'active',
  meta: {
    title: 'Front-End Web Development Diploma — EDUZAH',
    description:
      'Build modern, responsive and interactive web interfaces using the technologies and workflows used by professional front-end developers.',
    ogImage: '/courses/front-end/hero.png',
  },
  hero: {
    badge: 'Technology Program',
    headline: 'Front-End Web Development Diploma',
    subheadline:
      'Build modern, responsive and interactive web interfaces using the technologies and workflows used by professional front-end developers.',
    image: { src: '/courses/front-end/hero.png', alt: 'EDUZAH Front-End Web Development Diploma' },
  },
  quickInfo: {
    duration: '20 Weeks · 150 Hours',
    format: 'Online / Offline',
    language: 'English',
  },
  curriculum: [
    {
      title: 'Front-End Fundamentals',
      description:
        'HTML, HTML5, CSS, CSS3, Flexbox, CSS Grid, JavaScript, ES Next, Asynchronous Programming, JavaScript Modules, DOM & BOM, TypeScript, Regular Expressions, Functional Programming, AJAX, JSON, Bootstrap 5, jQuery, jQuery Plugins, NPM, SASS, SEO Optimization, Performance Optimization, Hosting and Domains, Figma',
    },
  ],
  skills: ['HTML5', 'CSS3 & SASS', 'JavaScript', 'TypeScript', 'Bootstrap 5', 'Figma'],
  gallery: [
    { alt: 'EDUZAH Front-End Development training session' },
    { alt: 'EDUZAH Front-End Development workshop' },
    { alt: 'EDUZAH Front-End Development lab session' },
  ],
  pricing: {
    currency: 'EGP',
    fullPrice: 4500,
    originalPrice: 6000,
    installmentCount: 3,
    installmentAmount: 1500,
    currentOffer: { label: 'Special Offer', discountPercent: 25 },
    fullPaymentDiscount: 300,
  },
};
