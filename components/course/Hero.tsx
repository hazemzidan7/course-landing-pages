import { Suspense } from 'react';
import type { Course } from '@/lib/courses/types';
import type { Dictionary } from '@/lib/i18n/types';
import { CourseImage } from '@/components/ui/CourseImage';
import { RegistrationForm } from '@/components/course/RegistrationForm';
import { Pricing } from '@/components/course/Pricing';

// Registration is the primary conversion action for paid-ad traffic, so the
// form is part of this first section rather than a separate section further
// down the page. Pricing lives here too, under the image, so the left
// column (shorter than the form) isn't wasted whitespace; it still comes
// from the same Course.pricing data as everywhere else, just placed here
// instead of as a separate page section. Grid areas (see globals.css)
// reorder content per breakpoint: mobile is name -> description -> image ->
// form -> pricing; desktop is a two-column (image+pricing) | (content+form)
// layout, using display:contents wrappers so the two column groups don't
// interfere with the mobile ordering.
export function Hero({ course, dict }: { course: Course; dict: Dictionary }) {
  const { hero } = course;

  return (
    <section className="hero-registration">
      <div className="hero-registration__left">
        <div className="hero-registration__media">
          <CourseImage
            image={hero.image}
            placeholderLabel="Hero image"
            placeholderPrefix={dict.courseImage.placeholder}
            priority
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
        {course.pricing && (
          <div className="hero-registration__pricing">
            <Pricing pricing={course.pricing} dict={dict} />
          </div>
        )}
      </div>
      <div className="hero-registration__right">
        {hero.badge && <span className="badge hero-registration__badge">{hero.badge}</span>}
        <h1 className="hero-registration__headline">{hero.headline}</h1>
        {hero.subheadline && <p className="hero-registration__desc">{hero.subheadline}</p>}
        <div className="hero-registration__form-wrap">
          <Suspense fallback={null}>
            <RegistrationForm courseId={course.id} courseSlug={course.slug} dict={dict} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
