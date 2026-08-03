export type AttendancePreference = 'online' | 'offline';
export type PaymentPreference = 'full' | 'installments';

export interface LeadFormFields {
  name: string;
  phone: string;
  email?: string;
  attendance: AttendancePreference;
  governorate: string;
  paymentMethod: PaymentPreference;
}

export interface LeadTrackingFields {
  courseId: string;
  courseSlug: string;
  source?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  landingPageUrl?: string;
}

export type LeadPayload = LeadFormFields & LeadTrackingFields;

export interface SubmitLeadResult {
  success: boolean;
  message?: string;
}
