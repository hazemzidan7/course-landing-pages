import type { CoursePricing } from '@/lib/courses/types';

export function Pricing({ pricing }: { pricing?: CoursePricing }) {
  if (!pricing) return null;

  return (
    <section className="section pricing">
      <h2>Pricing</h2>
      <p>
        {pricing.fullPrice} {pricing.currency}
      </p>
      {pricing.installmentCount && pricing.installmentAmount && (
        <p>
          Or {pricing.installmentCount} installments of {pricing.installmentAmount} {pricing.currency}
        </p>
      )}
      {pricing.currentOffer && (
        <p>
          {pricing.currentOffer.label}
          {pricing.currentOffer.discountPercent && ` — ${pricing.currentOffer.discountPercent}% off`}
        </p>
      )}
    </section>
  );
}
