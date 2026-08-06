import { Suspense } from 'react';
import type { Course } from '@/lib/courses/types';
import type { Dictionary } from '@/lib/i18n/types';
import { CourseImage } from '@/components/ui/CourseImage';
import { RegistrationForm } from '@/components/course/RegistrationForm';
import { Pricing } from '@/components/course/Pricing';
import { QuickInfo } from '@/components/course/QuickInfo';
import { PaymentMethodProvider } from '@/lib/context/PaymentMethodContext';

// Registration is the primary conversion action for paid-ad traffic, so the
// form is part of this first section rather than a separate section further
// down the page. QuickInfo and Pricing live here too, under the image, so
// the left column (shorter than the form) isn't wasted whitespace; they
// still come from the same Course data as everywhere else, just placed
// here instead of as separate page sections. When a course has pricing,
// quick info renders merged inside the Pricing card (one card, not two);
// only courses without pricing fall back to QuickInfo's own standalone
// card. Grid areas (see globals.css) reorder content per breakpoint:
// mobile is name -> image -> pricing -> quick info -> form (price sits
// right under the image, ahead of the form); desktop is a two-column
// (image+quickinfo+pricing) | (content+form) layout, using display:contents
// wrappers so the two column groups don't interfere with mobile ordering.
export function Hero({ course, dict }: { course: Course; dict: Dictionary }) {
  const { hero } = course;

  return (
    <PaymentMethodProvider>
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
          {course.pricing ? (
            <div className="hero-registration__pricing">
              <Pricing pricing={course.pricing} quickInfo={course.quickInfo} dict={dict} />
            </div>
          ) : (
            <div className="hero-registration__quickinfo">
              <QuickInfo quickInfo={course.quickInfo} dict={dict} />
            </div>
          )}
        </div>
        <div className="hero-registration__right">
          {hero.badge && <span className="badge hero-registration__badge">{hero.badge}</span>}
          <h1 className="hero-registration__headline">{hero.headline}</h1>
          <div className="hero-registration__form-wrap">
            <Suspense fallback={null}>
              <RegistrationForm courseId={course.id} courseSlug={course.slug} dict={dict} />
            </Suspense>
          </div>
        </div>
      </section>
    </PaymentMethodProvider>
  );
}
