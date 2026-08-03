import type { CourseFaqItem } from '@/lib/courses/types';

export function FAQSection({ faq }: { faq?: CourseFaqItem[] }) {
  if (!faq || faq.length === 0) return null;

  return (
    <section className="section faq">
      <h2>Frequently Asked Questions</h2>
      {faq.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </section>
  );
}
