import { Suspense } from 'react';
import type { Course } from '@/lib/courses/types';
import { CourseImage } from '@/components/ui/CourseImage';
import { RegistrationForm } from '@/components/course/RegistrationForm';

// Registration is the primary conversion action for paid-ad traffic, so the
// form is part of this first section rather than a separate section further
// down the page. Grid areas (see globals.css) reorder content per
// breakpoint: mobile is name -> description -> image -> form; desktop is a
// two-column image | content+form layout.
export function Hero({ course }: { course: Course }) {
  const { hero } = course;

  return (
    <section className="hero-registration">
      {hero.badge && <span className="badge hero-registration__badge">{hero.badge}</span>}
      <h1 className="hero-registration__headline">{hero.headline}</h1>
      {hero.subheadline && <p className="hero-registration__desc">{hero.subheadline}</p>}
      <div className="hero-registration__media">
        <CourseImage image={hero.image} placeholderLabel="Hero image" priority sizes="(max-width: 767px) 100vw, 50vw" />
      </div>
      <div className="hero-registration__form-wrap">
        <Suspense fallback={null}>
          <RegistrationForm courseId={course.id} courseSlug={course.slug} />
        </Suspense>
      </div>
    </section>
  );
}
