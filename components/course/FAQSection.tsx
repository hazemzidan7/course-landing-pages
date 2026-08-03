import type { CourseFaqItem } from '@/lib/courses/types';
import type { Dictionary } from '@/lib/i18n/types';

export function FAQSection({ faq, dict }: { faq?: CourseFaqItem[]; dict: Dictionary }) {
  if (!faq || faq.length === 0) return null;

  return (
    <section className="section faq">
      <h2>{dict.sections.faq}</h2>
      <div className="accordion">
        {faq.map((item) => (
          <details key={item.question} className="accordion__item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
