import type { CourseTestimonial } from '@/lib/courses/types';

export function Testimonials({ testimonials }: { testimonials?: CourseTestimonial[] }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="section testimonials">
      <h2>Student Testimonials</h2>
      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial.name}>
            <p>&ldquo;{testimonial.quote}&rdquo;</p>
            <strong>{testimonial.name}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
