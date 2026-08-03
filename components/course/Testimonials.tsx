import type { CourseTestimonial } from '@/lib/courses/types';
import { CourseImage } from '@/components/ui/CourseImage';

export function Testimonials({ testimonials }: { testimonials?: CourseTestimonial[] }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="section testimonials">
      <h2>Student Testimonials</h2>
      <ul className="testimonials__list">
        {testimonials.map((testimonial) => (
          <li key={testimonial.name} className="testimonials__item">
            <div className="testimonials__photo">
              <CourseImage image={testimonial.photo} placeholderLabel={`${testimonial.name} photo`} />
            </div>
            <p>&ldquo;{testimonial.quote}&rdquo;</p>
            <strong>{testimonial.name}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
