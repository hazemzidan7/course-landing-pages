import type { Course } from '@/lib/courses/types';
import { CourseImage } from '@/components/ui/CourseImage';

export function Hero({ course }: { course: Course }) {
  const { hero, quickInfo, curriculum } = course;

  const trustPoints = [
    quickInfo?.duration,
    quickInfo?.level,
    quickInfo?.certificate ? 'Certificate included' : undefined,
  ].filter((point): point is string => Boolean(point));

  return (
    <section className="hero">
      <div className="hero__content">
        {hero.badge && <span className="badge">{hero.badge}</span>}
        <h1 className="hero__headline">{hero.headline}</h1>
        {hero.subheadline && <p className="hero__subheadline">{hero.subheadline}</p>}

        {trustPoints.length > 0 && (
          <ul className="hero__trust">
            {trustPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}

        <div className="hero__actions">
          <a className="cta-button" href="#registration">
            Register Now
          </a>
          {curriculum && curriculum.length > 0 && (
            <a className="cta-button cta-button--ghost" href="#curriculum">
              View Curriculum
            </a>
          )}
        </div>
      </div>

      <div className="hero__visual">
        <CourseImage image={hero.image} placeholderLabel="Hero image" priority sizes="(max-width: 767px) 100vw, 50vw" />
      </div>
    </section>
  );
}
