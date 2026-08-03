import type { CourseQuickInfo } from '@/lib/courses/types';

export function QuickInfo({ quickInfo }: { quickInfo?: CourseQuickInfo }) {
  if (!quickInfo) return null;

  const items: string[] = [
    quickInfo.duration && `Duration: ${quickInfo.duration}`,
    quickInfo.format && `Format: ${quickInfo.format}`,
    quickInfo.level && `Level: ${quickInfo.level}`,
    quickInfo.language && `Language: ${quickInfo.language}`,
    quickInfo.certificate && 'Certificate included',
  ].filter((item): item is string => Boolean(item));

  return (
    <section className="section quick-info">
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
