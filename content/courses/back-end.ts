import type { Course } from '@/lib/courses/types';

// Real EDUZAH course. Gallery images are still placeholders until real
// photos exist at public/courses/back-end/ — CourseImage falls back to the
// branded placeholder for those.
export const backEndCourse: Course = {
  id: 'back-end',
  slug: 'back-end',
  categoryId: 'technology',
  status: 'active',
  meta: {
    title: 'Back-End Web Development Diploma — EDUZAH',
    description:
      'Learn how to build secure, scalable server-side applications, databases and APIs through practical back-end development training.',
    ogImage: '/courses/back-end/hero.png',
  },
  hero: {
    badge: 'Technology Program',
    headline: 'Back-End Web Development Diploma',
    subheadline:
      'Learn how to build secure, scalable server-side applications, databases and APIs through practical back-end development training.',
    image: { src: '/courses/back-end/hero.png', alt: 'EDUZAH Back-End Web Development Diploma' },
  },
  quickInfo: {
    duration: '20 Weeks · 150 Hours',
    format: 'Online / Offline',
    language: 'English',
    sessionsPerWeek: '2 Sessions/Week',
    practicalProjects: true,
    certificate: true,
  },
  // Curriculum covers two distinct tracks (PHP/Laravel and .NET/C#) as
  // given in the source — kept as separate modules rather than merged,
  // since they are different technologies.
  curriculum: [
    {
      title: 'PHP & MySQL (PHP/Laravel Track)',
      description:
        'Programming/back-end foundations, PHP fundamentals, Advanced PHP, Error Handling, Exceptions, MySQL, PDO, SELECT / INSERT / UPDATE / DELETE, Prepared Statements, SQL Injection prevention',
    },
    {
      title: 'Authentication & Sessions',
      description: 'Authentication, Login / Logout, Password Hashing, Sessions',
    },
    {
      title: 'Laravel Framework',
      description: 'Laravel Framework content',
    },
    {
      title: '.NET & C# (Alternative Track)',
      description: '.NET fundamentals, C#, Data Types, Loops, Conditions, Arrays',
    },
    {
      title: 'Object-Oriented Programming in C#',
      description: 'OOP in C#, Classes & Objects, Inheritance, Polymorphism, Methods, Properties',
    },
    {
      title: 'Collaboration & Projects',
      description: 'Git, GitHub, Team Collaboration, Mini Projects / Assessments',
    },
  ],
  skills: ['PHP', 'Laravel', 'MySQL', '.NET / C#', 'Object-Oriented Programming', 'Git & GitHub'],
  gallery: [
    { alt: 'EDUZAH Back-End Development training session' },
    { alt: 'EDUZAH Back-End Development workshop' },
    { alt: 'EDUZAH Back-End Development lab session' },
  ],
  pricing: {
    currency: 'EGP',
    fullPrice: 5000,
    originalPrice: 8000,
    installmentCount: 3,
    installmentAmount: 1667,
    currentOffer: { label: 'Special Offer', discountPercent: 38 },
    fullPaymentDiscount: 300,
  },
};
