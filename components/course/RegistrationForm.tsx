'use client';

import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { submitLead } from '@/lib/leads/submitLead';
import { getTrackingParams } from '@/lib/tracking/utm';
import type { AttendancePreference, PaymentPreference } from '@/lib/leads/types';

interface RegistrationFormProps {
  courseId: string;
  courseSlug: string;
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

export function RegistrationForm({ courseId, courseSlug }: RegistrationFormProps) {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  function validate(values: FormState) {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) nextErrors.name = 'Name is required.';
    if (!values.phone.trim()) nextErrors.phone = 'Phone / WhatsApp number is required.';
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
      <section id="registration" className="section registration-form">
        <p>Thank you! Your registration has been received.</p>
      </section>
    );
  }

  return (
    <section id="registration" className="section registration-form">
      <h2>Register Your Interest</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          Name
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <span role="alert">{errors.name}</span>}
        </label>

        <label>
          Phone / WhatsApp
          <input
            type="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {errors.phone && <span role="alert">{errors.phone}</span>}
        </label>

        <label>
          Email (optional)
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>

        <fieldset>
          <legend>Attendance Preference</legend>
          <label>
            <input
              type="radio"
              name="attendance"
              checked={form.attendance === 'online'}
              onChange={() => setForm({ ...form, attendance: 'online' })}
            />
            Online
          </label>
          <label>
            <input
              type="radio"
              name="attendance"
              checked={form.attendance === 'offline'}
              onChange={() => setForm({ ...form, attendance: 'offline' })}
            />
            Offline
          </label>
        </fieldset>

        <label>
          Governorate
          <input
            type="text"
            value={form.governorate}
            onChange={(e) => setForm({ ...form, governorate: e.target.value })}
          />
        </label>

        <fieldset>
          <legend>Preferred Payment Method</legend>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              checked={form.paymentMethod === 'full'}
              onChange={() => setForm({ ...form, paymentMethod: 'full' })}
            />
            Full Payment
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              checked={form.paymentMethod === 'installments'}
              onChange={() => setForm({ ...form, paymentMethod: 'installments' })}
            />
            Installments
          </label>
        </fieldset>

        <button type="submit" className="cta-button" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </section>
  );
}
