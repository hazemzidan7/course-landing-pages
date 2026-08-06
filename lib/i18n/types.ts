export type Locale = 'en' | 'ar';

export interface Dictionary {
  header: {
    registerNow: string;
    switchTo: string;
  };
  hero: {
    registerNow: string;
    viewCurriculum: string;
  };
  registrationForm: {
    title: string;
    name: string;
    phone: string;
    email: string;
    attendance: string;
    online: string;
    offline: string;
    governorate: string;
    paymentMethod: string;
    full: string;
    installments: string;
    submit: string;
    submitting: string;
    nameRequired: string;
    phoneRequired: string;
    successTitle: string;
    successBody: string;
  };
  sections: {
    audience: string;
    curriculum: string;
    skills: string;
    gallery: string;
    pricing: string;
    faq: string;
  };
  pricing: {
    or: string;
    installmentsOf: string;
    registerNow: string;
    fullPaymentSave: string;
    specialOffer: string;
  };
  stickyMobileCta: {
    registerNow: string;
  };
  home: {
    title: string;
    tagline: string;
    viewCourse: string;
  };
  courseImage: {
    placeholder: string;
  };
  quickInfo: {
    certificateIncluded: string;
    practicalProjects: string;
  };
}
