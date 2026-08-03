import type { CourseHero } from '@/lib/courses/types';

export function Hero({ hero }: { hero: CourseHero }) {
  return (
    <section className="section hero">
      <h1>{hero.headline}</h1>
      {hero.subheadline && <p>{hero.subheadline}</p>}
      <a className="cta-button" href="#registration">
        Register Now
      </a>
    </section>
  );
}
