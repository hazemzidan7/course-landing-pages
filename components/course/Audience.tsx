import type { Dictionary } from '@/lib/i18n/types';

export function Audience({ audience, dict }: { audience?: string[]; dict: Dictionary }) {
  if (!audience || audience.length === 0) return null;

  return (
    <section className="section audience">
      <h2>{dict.sections.audience}</h2>
      <ul className="checklist">
        {audience.map((point) => (
          <li key={point} className="checklist__item">
            <svg className="checklist__icon" viewBox="0 0 20 20" aria-hidden="true">
              <path
                d="M4 10.5l3.5 3.5L16 5.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
