import type { CourseOutcome } from '@/lib/courses/types';
import type { Dictionary } from '@/lib/i18n/types';

export function Curriculum({ curriculum, dict }: { curriculum?: CourseOutcome[]; dict: Dictionary }) {
  if (!curriculum || curriculum.length === 0) return null;

  return (
    <section className="section curriculum" id="curriculum">
      <h2>{dict.sections.curriculum}</h2>
      <div className="accordion">
        {curriculum.map((item, index) => (
          <details key={item.title} className="accordion__item" open={index === 0}>
            <summary>
              <span className="accordion__index">{String(index + 1).padStart(2, '0')}</span>
              {item.title}
            </summary>
            {item.description && <p>{item.description}</p>}
          </details>
        ))}
      </div>
    </section>
  );
}
