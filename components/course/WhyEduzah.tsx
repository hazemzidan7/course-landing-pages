import type { CourseOutcome } from '@/lib/courses/types';

export function WhyEduzah({ whyEduzah }: { whyEduzah?: CourseOutcome[] }) {
  if (!whyEduzah || whyEduzah.length === 0) return null;

  return (
    <section className="section why-eduzah why-eduzah--dark">
      <h2>Why EDUZAH?</h2>
      <ul className="reason-list">
        {whyEduzah.map((item) => (
          <li key={item.title} className="reason-list__item">
            <span className="reason-list__marker" aria-hidden="true" />
            <div>
              <strong>{item.title}</strong>
              {item.description && <p>{item.description}</p>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
