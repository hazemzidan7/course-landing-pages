import type { Dictionary } from '@/lib/i18n/types';

// UI chrome strings only. Course-specific content (headline, curriculum,
// skills, etc.) is not translated yet — the Arabic route currently renders
// the same English Course data, per the agreed staged rollout (routing
// infrastructure now, content translation later).
export const ar: Dictionary = {
  header: {
    registerNow: 'سجل الآن',
    switchTo: 'English',
  },
  hero: {
    registerNow: 'سجل الآن',
    viewCurriculum: 'اطّلع على المنهج',
  },
  registrationForm: {
    title: 'سجّل اهتمامك',
    name: 'الاسم',
    phone: 'الهاتف / واتساب',
    email: 'البريد الإلكتروني (اختياري)',
    attendance: 'طريقة الحضور',
    online: 'أونلاين',
    offline: 'حضوري',
    governorate: 'المحافظة',
    paymentMethod: 'طريقة الدفع المفضلة',
    full: 'دفع كامل',
    installments: 'تقسيط',
    submit: 'إرسال التسجيل',
    submitting: 'جارٍ الإرسال...',
    nameRequired: 'الاسم مطلوب.',
    phoneRequired: 'رقم الهاتف / واتساب مطلوب.',
    successTitle: 'تم التسجيل بنجاح!',
    successBody: 'شكرًا لك — تم استلام تسجيلك. سيتواصل معك فريقنا قريبًا.',
  },
  sections: {
    audience: 'هذا الكورس مناسب لمن؟',
    curriculum: 'ماذا ستتعلم؟',
    skills: 'ماذا ستكون قادرًا على فعله',
    gallery: 'تجربة تدريبية حقيقية',
    pricing: 'السعر',
    faq: 'الأسئلة الشائعة',
  },
  pricing: {
    or: 'أو',
    installmentsOf: 'أقساط بقيمة',
    registerNow: 'سجل الآن',
  },
  stickyMobileCta: {
    registerNow: 'سجل الآن',
  },
  home: {
    title: 'برامج EDUZAH',
    tagline: 'دبلومات تقنية عملية مصممة حول مهارات سوق العمل الحقيقية. اختر برنامجًا لمعرفة التفاصيل الكاملة والتسجيل.',
    viewCourse: '← عرض الكورس',
  },
  courseImage: {
    placeholder: 'صورة توضيحية مؤقتة',
  },
};
