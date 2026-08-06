import type { CoursePricing } from '@/lib/courses/types';
import type { Dictionary } from '@/lib/i18n/types';

export function Pricing({ pricing, dict }: { pricing?: CoursePricing; dict: Dictionary }) {
  if (!pricing) return null;

  return (
    <div className="pricing">
      <h2 className="pricing__title">{dict.sections.pricing}</h2>
      <div className="pricing-card">
        {pricing.currentOffer && <span className="badge badge--accent">{pricing.currentOffer.label}</span>}

        <div className="pricing-card__price">
          {pricing.originalPrice && pricing.originalPrice > pricing.fullPrice && (
            <span className="pricing-card__original">
              {pricing.originalPrice} {pricing.currency}
            </span>
          )}
          <span className="pricing-card__current">
            {pricing.fullPrice} {pricing.currency}
          </span>
          {pricing.currentOffer?.discountPercent && (
            <span className="badge badge--accent">-{pricing.currentOffer.discountPercent}%</span>
          )}
        </div>

        {pricing.installmentCount && pricing.installmentAmount && (
          <p className="pricing-card__installments">
            {dict.pricing.or} {pricing.installmentCount} {dict.pricing.installmentsOf} {pricing.installmentAmount} {pricing.currency}
          </p>
        )}

        {pricing.fullPaymentDiscount && (
          <p className="pricing-card__full-payment-note">
            {dict.pricing.fullPaymentSave} {pricing.fullPaymentDiscount} {pricing.currency}
          </p>
        )}

        <a className="cta-button" href="#registration">
          {dict.pricing.registerNow}
        </a>
      </div>
    </div>
  );
}
