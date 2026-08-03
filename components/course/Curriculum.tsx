import type { CourseOutcome } from '@/lib/courses/types';

export function Curriculum({ curriculum }: { curriculum?: CourseOutcome[] }) {
  if (!curriculum || curriculum.length === 0) return null;

  return (
    <section className="section curriculum">
      <h2>What Will You Learn?</h2>
      <ul>
        {curriculum.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong>
            {item.description && <p>{item.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
