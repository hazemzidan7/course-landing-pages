import type { Course } from '@/lib/courses/types';

// Real EDUZAH course. Gallery images are still placeholders until real
// photos exist at public/courses/computer-basics/ — CourseImage falls back
// to the branded placeholder for those.
// Note: the source document's Microsoft Office module content was
// referenced but not supplied in detail, so it is omitted rather than
// invented — only the given practical-application topics are included.
export const computerBasicsCourse: Course = {
  id: 'computer-basics',
  slug: 'computer-basics',
  categoryId: 'technology',
  status: 'active',
  meta: {
    title: 'Computer Basics Course — EDUZAH',
    description: 'Build the essential computer and digital skills needed for study, work and everyday professional use.',
    ogImage: '/courses/computer-basics/hero.png',
  },
  hero: {
    badge: 'Technology Program',
    headline: 'Computer Basics Course',
    subheadline: 'Build the essential computer and digital skills needed for study, work and everyday professional use.',
    image: { src: '/courses/computer-basics/hero.png', alt: 'EDUZAH Computer Basics Course' },
  },
  quickInfo: {
    duration: '12 Weeks · 50 Hours',
    format: 'Online / Offline',
    language: 'English',
  },
  curriculum: [
    {
      title: 'Computer & Operating System Fundamentals',
      description:
        'What is a computer?, Hardware and Software, Tablet vs Laptop vs Desktop, Windows, macOS and Linux, Windows fundamentals, Safe computer usage',
    },
    {
      title: 'File Management & Essential Skills',
      description:
        'Windows interface, Start Menu, Taskbar, Icons, File Explorer, Copy / Paste, Rename / Delete, Folder organization, Settings, ZIP / 7ZIP, Keyboard shortcuts, File extensions',
    },
    {
      title: 'Internet & Email',
      description:
        'Chrome / Firefox / Edge, URLs, HTTPS, Strong passwords, Gmail / Outlook, Sending and receiving email, Attachments, Google Drive, Professional email etiquette, Advanced Google searching',
    },
    {
      title: 'Practical Digital Skills',
      description:
        'Using online government/education platforms, Applying for jobs online, Converting Word/PDF/image files, Installing essential software/applications',
    },
  ],
  skills: ['Professional Computer Usage', 'Windows', 'File Management', 'Internet Safety', 'Microsoft Office', 'Digital Productivity'],
  gallery: [
    { alt: 'EDUZAH Computer Basics training session' },
    { alt: 'EDUZAH Computer Basics workshop' },
    { alt: 'EDUZAH Computer Basics lab session' },
  ],
  pricing: {
    currency: 'EGP',
    fullPrice: 1500,
    installmentCount: 3,
    installmentAmount: 500,
    fullPaymentDiscount: 300,
  },
};
