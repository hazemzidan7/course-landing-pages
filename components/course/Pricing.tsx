import type { CoursePricing, CourseQuickInfo } from '@/lib/courses/types';
import type { Dictionary } from '@/lib/i18n/types';
import { getQuickInfoItems, QuickInfoList } from '@/components/course/QuickInfo';

interface PricingProps {
  pricing?: CoursePricing;
  quickInfo?: CourseQuickInfo;
  dict: Dictionary;
}

// Register Now is intentionally not repeated here — this card sits directly
// beside/above the registration form on the same screen, so a second CTA
// would be redundant. Quick info renders inside the same card (not a
// separate one) when pricing exists, so the left column reads as one unit.
export function Pricing({ pricing, quickInfo, dict }: PricingProps) {
  if (!pricing) return null;

  const quickInfoItems = quickInfo ? getQuickInfoItems(quickInfo, dict) : [];

  return (
    <div className="pricing">
      <h2 className="pricing__title">{dict.sections.pricing}</h2>
      <div className="pricing-card">
        {quickInfoItems.length > 0 && (
          <div className="pricing-card__quickinfo">
            <QuickInfoList items={quickInfoItems} />
          </div>
        )}

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
      </div>
    </div>
  );
}
