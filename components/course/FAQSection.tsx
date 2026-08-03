import type { CourseFaqItem } from '@/lib/courses/types';

export function FAQSection({ faq }: { faq?: CourseFaqItem[] }) {
  if (!faq || faq.length === 0) return null;

  return (
    <section className="section faq">
      <h2>Frequently Asked Questions</h2>
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
