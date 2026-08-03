import type { CoursePricing } from '@/lib/courses/types';

export function Pricing({ pricing }: { pricing?: CoursePricing }) {
  if (!pricing) return null;

  return (
    <section className="section pricing">
      <h2>Pricing</h2>
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
            Or {pricing.installmentCount} installments of {pricing.installmentAmount} {pricing.currency}
          </p>
        )}

        <a className="cta-button" href="#registration">
          Register Now
        </a>
      </div>
    </section>
  );
}
