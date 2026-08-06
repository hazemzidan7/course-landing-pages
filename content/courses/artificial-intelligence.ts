import type { Course } from '@/lib/courses/types';

// Real EDUZAH course. Gallery images are still placeholders until real
// photos exist at public/courses/artificial-intelligence/ — CourseImage
// falls back to the branded placeholder for those.
export const artificialIntelligenceCourse: Course = {
  id: 'artificial-intelligence',
  slug: 'artificial-intelligence',
  categoryId: 'technology',
  status: 'active',
  meta: {
    title: 'Artificial Intelligence Diploma — EDUZAH',
    description:
      'Build practical foundations in Artificial Intelligence, Machine Learning, and modern AI technologies through hands-on training and real-world applications.',
    ogImage: '/courses/artificial-intelligence/hero.png',
  },
  hero: {
    badge: 'Technology Program',
    headline: 'Artificial Intelligence Diploma',
    subheadline:
      'Build practical foundations in Artificial Intelligence, Machine Learning, and modern AI technologies through hands-on training and real-world applications.',
    image: { src: '/courses/artificial-intelligence/hero.png', alt: 'EDUZAH Artificial Intelligence Diploma' },
  },
  quickInfo: {
    duration: '20 Weeks · 140 Hours',
    format: 'Online / Offline',
    language: 'English',
  },
  curriculum: [
    {
      title: 'AI & Python Foundations',
      description: 'AI / Python foundations, Data preparation and analysis foundations',
    },
    {
      title: 'Supervised Learning',
      description:
        'Machine Learning, Supervised Learning, Linear Regression, Logistic Regression, KNN, SVM, Naive Bayes, Decision Trees, Random Forest',
    },
    {
      title: 'Unsupervised Learning',
      description: 'Unsupervised Learning, K-Means, Mean-Shift Clustering, PCA',
    },
    {
      title: 'Model Evaluation & Feature Engineering',
      description:
        'Model evaluation, Accuracy, Precision, Recall, F1, Cross-validation, Grid Search, Feature Engineering, Feature Scaling & Selection, Handling imbalanced/categorical data',
    },
    {
      title: 'Deep Learning & Advanced Topics',
      description: 'Introduction to Deep Learning, Genetic Algorithms, Model Selection',
    },
    {
      title: 'Model Deployment',
      description: 'Model Deployment, Saving/loading models, Creating a simple API',
    },
  ],
  skills: ['Python', 'Machine Learning', 'Model Evaluation', 'Feature Engineering', 'AI Problem Solving', 'Practical Project Work'],
  gallery: [
    { alt: 'EDUZAH Artificial Intelligence training session' },
    { alt: 'EDUZAH Artificial Intelligence workshop' },
    { alt: 'EDUZAH Artificial Intelligence lab session' },
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
