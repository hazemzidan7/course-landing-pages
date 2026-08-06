import type { CourseQuickInfo } from '@/lib/courses/types';
import type { Dictionary } from '@/lib/i18n/types';

// Shared by the standalone QuickInfo card and Pricing (which merges quick
// info into the same card when pricing exists). Duration is stored as one
// "20 Weeks · 150 Hours" string but rendered as separate bullets.
export function getQuickInfoItems(quickInfo: CourseQuickInfo, dict: Dictionary): string[] {
  const durationParts = quickInfo.duration ? quickInfo.duration.split('·').map((part) => part.trim()) : [];

  return [
    ...durationParts,
    quickInfo.sessionsPerWeek,
    quickInfo.format,
    quickInfo.level,
    quickInfo.language,
    quickInfo.practicalProjects ? dict.quickInfo.practicalProjects : undefined,
    quickInfo.certificate ? dict.quickInfo.certificateIncluded : undefined,
  ].filter((item): item is string => Boolean(item));
}

export function QuickInfoList({ items }: { items: string[] }) {
  return (
    <ul className="quick-info-card__list">
      {items.map((item) => (
        <li key={item} className="quick-info-card__item">
          <span className="quick-info-card__dot" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// Standalone card — used only when a course has no pricing to merge into.
export function QuickInfo({ quickInfo, dict }: { quickInfo?: CourseQuickInfo; dict: Dictionary }) {
  if (!quickInfo) return null;

  const items = getQuickInfoItems(quickInfo, dict);
  if (items.length === 0) return null;

  return (
    <div className="quick-info-card" aria-label="Quick course information">
      <QuickInfoList items={items} />
    </div>
  );
}
