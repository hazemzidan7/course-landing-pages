'use client';

import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { submitLead } from '@/lib/leads/submitLead';
import { getTrackingParams } from '@/lib/tracking/utm';
import type { AttendancePreference, PaymentPreference } from '@/lib/leads/types';
import type { Dictionary } from '@/lib/i18n/types';

interface RegistrationFormProps {
  courseId: string;
  courseSlug: string;
  dict: Dictionary;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  attendance: AttendancePreference;
  governorate: string;
  paymentMethod: PaymentPreference;
}

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  attendance: 'online',
  governorate: '',
  paymentMethod: 'full',
};

export function RegistrationForm({ courseId, courseSlug, dict }: RegistrationFormProps) {
  const t = dict.registrationForm;
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  function validate(values: FormState) {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) nextErrors.name = t.nameRequired;
    if (!values.phone.trim()) nextErrors.phone = t.phoneRequired;
    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    const tracking = getTrackingParams(searchParams);
    await submitLead({
      ...form,
      email: form.email || undefined,
      courseId,
      courseSlug,
      ...tracking,
    });
    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div id="registration" className="registration-form">
        <div className="registration-form__success">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M5 13l4 4L19 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2>{t.successTitle}</h2>
          <p>{t.successBody}</p>
        </div>
      </div>
    );
  }

  return (
    <div id="registration" className="registration-form">
      <h2 className="registration-form__title">{t.title}</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          {t.name}
          <input
            type="text"
            value={form.name}
            aria-invalid={Boolean(errors.name)}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <span role="alert">{errors.name}</span>}
        </label>

        <label>
          {t.phone}
          <input
            type="tel"
            inputMode="tel"
            value={form.phone}
            aria-invalid={Boolean(errors.phone)}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {errors.phone && <span role="alert">{errors.phone}</span>}
        </label>

        <label>
          {t.email}
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>

        <fieldset className="segmented">
          <legend>{t.attendance}</legend>
          <div className="segmented__options">
            <label className={`segmented__option ${form.attendance === 'online' ? 'is-selected' : ''}`}>
              <input
                type="radio"
                name="attendance"
                checked={form.attendance === 'online'}
                onChange={() => setForm({ ...form, attendance: 'online' })}
              />
              {t.online}
            </label>
            <label className={`segmented__option ${form.attendance === 'offline' ? 'is-selected' : ''}`}>
              <input
                type="radio"
                name="attendance"
                checked={form.attendance === 'offline'}
                onChange={() => setForm({ ...form, attendance: 'offline' })}
              />
              {t.offline}
            </label>
          </div>
        </fieldset>

        <label>
          {t.governorate}
          <input
            type="text"
            value={form.governorate}
            onChange={(e) => setForm({ ...form, governorate: e.target.value })}
          />
        </label>

        <fieldset className="segmented">
          <legend>{t.paymentMethod}</legend>
          <div className="segmented__options">
            <label className={`segmented__option ${form.paymentMethod === 'full' ? 'is-selected' : ''}`}>
              <input
                type="radio"
                name="paymentMethod"
                checked={form.paymentMethod === 'full'}
                onChange={() => setForm({ ...form, paymentMethod: 'full' })}
              />
              {t.full}
            </label>
            <label className={`segmented__option ${form.paymentMethod === 'installments' ? 'is-selected' : ''}`}>
              <input
                type="radio"
                name="paymentMethod"
                checked={form.paymentMethod === 'installments'}
                onChange={() => setForm({ ...form, paymentMethod: 'installments' })}
              />
              {t.installments}
            </label>
          </div>
        </fieldset>

        <button type="submit" className="cta-button" disabled={status === 'submitting'}>
          {status === 'submitting' ? t.submitting : t.submit}
        </button>
      </form>
    </div>
  );
}
