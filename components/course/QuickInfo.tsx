import type { CourseQuickInfo } from '@/lib/courses/types';
import type { Dictionary } from '@/lib/i18n/types';

export function QuickInfo({ quickInfo, dict }: { quickInfo?: CourseQuickInfo; dict: Dictionary }) {
  if (!quickInfo) return null;

  const items: string[] = [
    quickInfo.duration && `${quickInfo.duration}`,
    quickInfo.sessionsPerWeek && `${quickInfo.sessionsPerWeek}`,
    quickInfo.format && `${quickInfo.format}`,
    quickInfo.level && `${quickInfo.level}`,
    quickInfo.language && `${quickInfo.language}`,
    quickInfo.practicalProjects && dict.quickInfo.practicalProjects,
    quickInfo.certificate && dict.quickInfo.certificateIncluded,
  ].filter((item): item is string => Boolean(item));

  if (items.length === 0) return null;

  return (
    <div className="quick-info-card" aria-label="Quick course information">
      <ul className="quick-info-card__list">
        {items.map((item) => (
          <li key={item} className="quick-info-card__item">
            <span className="quick-info-card__dot" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
