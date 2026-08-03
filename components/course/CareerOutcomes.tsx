import type { CourseOutcome } from '@/lib/courses/types';

export function CareerOutcomes({ careerOutcomes }: { careerOutcomes?: CourseOutcome[] }) {
  if (!careerOutcomes || careerOutcomes.length === 0) return null;

  return (
    <section className="section career-outcomes">
      <h2>Career Opportunities</h2>
      <ul className="outcome-list">
        {careerOutcomes.map((item) => (
          <li key={item.title} className="outcome-list__item">
            <strong>{item.title}</strong>
            {item.description && <p>{item.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
