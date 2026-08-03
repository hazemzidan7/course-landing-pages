import type { CourseOutcome } from '@/lib/courses/types';

export function WhyEduzah({ whyEduzah }: { whyEduzah?: CourseOutcome[] }) {
  if (!whyEduzah || whyEduzah.length === 0) return null;

  return (
    <section className="section why-eduzah">
      <h2>Why EDUZAH?</h2>
      <ul>
        {whyEduzah.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong>
            {item.description && <p>{item.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
