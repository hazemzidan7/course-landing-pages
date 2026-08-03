import type { CourseQuickInfo } from '@/lib/courses/types';

export function QuickInfo({ quickInfo }: { quickInfo?: CourseQuickInfo }) {
  if (!quickInfo) return null;

  const items: string[] = [
    quickInfo.duration && `${quickInfo.duration}`,
    quickInfo.format && `${quickInfo.format}`,
    quickInfo.level && `${quickInfo.level}`,
    quickInfo.language && `${quickInfo.language}`,
    quickInfo.certificate && 'Certificate included',
  ].filter((item): item is string => Boolean(item));

  if (items.length === 0) return null;

  return (
    <section className="section quick-info" aria-label="Quick course information">
      <ul className="quick-info__list">
        {items.map((item) => (
          <li key={item} className="quick-info__item">
            <span className="quick-info__dot" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
