import type { Course } from '@/lib/courses/types';

// Real EDUZAH course. hero.image/gallery[].src intentionally omitted until
// real photos exist at public/courses/data-analysis/ — CourseImage falls
// back to the branded placeholder. Add once available, e.g.:
// hero.image = { src: '/courses/data-analysis/hero.webp', alt: 'EDUZAH Data Analysis training' }
export const dataAnalysisCourse: Course = {
  id: 'data-analysis',
  slug: 'data-analysis',
  categoryId: 'technology',
  status: 'active',
  meta: {
    title: 'Data Analysis Diploma — EDUZAH',
    description: 'Learn how to transform raw data into meaningful insights using industry-standard analysis, visualization and reporting tools.',
  },
  hero: {
    badge: 'Technology Program',
    headline: 'Data Analysis Diploma',
    subheadline:
      'Learn how to transform raw data into meaningful insights using industry-standard analysis, visualization and reporting tools.',
  },
  quickInfo: {
    duration: '20 Weeks · 150 Hours',
    format: 'Online / Offline',
    language: 'English',
  },
  curriculum: [
    {
      title: 'Data Analysis Foundations & Excel',
      description:
        'Data Analysis foundations, Excel, Applied Statistics, Descriptive vs Inferential Statistics, Probability, Hypothesis Testing, T-Test, ANOVA, Statistical Bias',
    },
    {
      title: 'Power Query & Power Pivot',
      description:
        'Power Query, Importing data from multiple sources, Data Cleaning & Transformation, Power Pivot, Table Relationships, DAX, M Language',
    },
    {
      title: 'Python for Data Analysis',
      description: 'Python for Data Analysis, Data cleaning / EDA, Power BI',
    },
    {
      title: 'SQL & Databases',
      description:
        'Databases, SQL, SELECT / INSERT / UPDATE / DELETE, JOINs, GROUP BY, Aggregate Functions, Subqueries, Views, Stored Procedures, Python + SQL, SQL for Data Analysis',
    },
    {
      title: 'Real-World Projects',
      description:
        'News Aggregator Web Scraping Project, Sales Data Dashboard using Excel & Power BI, Marketing Campaign Performance Analysis, Survey Data Cleaning and EDA with Python, Automated Weekly Report Generation using Python',
    },
  ],
  skills: ['Excel', 'Power BI', 'SQL', 'Python', 'Statistical Analysis', 'DAX'],
  gallery: [
    { alt: 'EDUZAH Data Analysis training session' },
    { alt: 'EDUZAH Data Analysis workshop' },
    { alt: 'EDUZAH Data Analysis lab session' },
  ],
};
