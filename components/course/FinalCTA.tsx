import type { CourseFinalCta } from '@/lib/courses/types';

export function FinalCTA({ finalCta }: { finalCta?: CourseFinalCta }) {
  if (!finalCta) return null;

  return (
    <section className="section final-cta">
      <h2>{finalCta.headline}</h2>
      <a className="cta-button" href="#registration">
        {finalCta.buttonText}
      </a>
    </section>
  );
}
