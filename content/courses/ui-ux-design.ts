import type { Course } from '@/lib/courses/types';

// Real EDUZAH course. hero.image/gallery[].src intentionally omitted until
// real photos exist at public/courses/ui-ux-design/ — CourseImage falls
// back to the branded placeholder. Add once available, e.g.:
// hero.image = { src: '/courses/ui-ux-design/hero.webp', alt: 'EDUZAH UI/UX Design training' }
//
// PARTIAL DATA: the task said to "continue the source UX research/UI
// design modules exactly from the existing EDUZAH source", but that source
// was not provided — only the Introduction, Tools, and Deliverables lists
// below were actually supplied, so the core UX-research/UI-design-process
// modules are omitted rather than invented.
export const uiUxDesignCourse: Course = {
  id: 'ui-ux-design',
  slug: 'ui-ux-design',
  categoryId: 'technology',
  status: 'active',
  meta: {
    title: 'UI/UX Design Diploma — EDUZAH',
    description: 'Learn how to research, design and prototype user-centered digital experiences using professional UI/UX workflows and tools.',
  },
  hero: {
    badge: 'Technology Program',
    headline: 'UI/UX Design Diploma',
    subheadline:
      'Learn how to research, design and prototype user-centered digital experiences using professional UI/UX workflows and tools.',
  },
  quickInfo: {
    duration: '16 Weeks · 120 Hours',
    format: 'Online / Offline',
    language: 'English',
  },
  curriculum: [
    {
      title: 'Introduction to UI/UX Design',
      description:
        'What is UI/UX Design?, UI vs UX, The 7 UX Factors, Designer Roles, UX/UI Career Paths, History of UI/UX, Human-Centered Design, Responsive Design',
    },
    {
      title: 'Design Tools',
      description: 'Figma, Figma Advanced Features & Plugins, FigJam, Notion, Miro, Milanote, Adobe XD overview',
    },
    {
      title: 'Deliverables',
      description: 'Sketches, Wireframes, High-Fidelity Mockups, Interactive Prototypes, Design Systems, Animation Basics, Developer Handoff',
    },
  ],
  skills: ['Figma', 'Wireframing & Prototyping', 'Design Systems', 'User-Centered Design', 'FigJam & Miro', 'Developer Handoff'],
  gallery: [
    { alt: 'EDUZAH UI/UX Design training session' },
    { alt: 'EDUZAH UI/UX Design workshop' },
    { alt: 'EDUZAH UI/UX Design lab session' },
  ],
};
