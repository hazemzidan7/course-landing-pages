import type { CourseInstructor } from '@/lib/courses/types';
import { CourseImage } from '@/components/ui/CourseImage';

export function Instructor({ instructors }: { instructors?: CourseInstructor[] }) {
  if (!instructors || instructors.length === 0) return null;

  return (
    <section className="section instructor">
      <h2>Your Instructor</h2>
      <ul className="instructor__list">
        {instructors.map((instructor) => (
          <li key={instructor.name} className="instructor__item">
            <div className="instructor__photo">
              <CourseImage image={instructor.photo} placeholderLabel={`${instructor.name} photo`} />
            </div>
            <div>
              <strong>{instructor.name}</strong>
              {instructor.role && <span className="instructor__role">{instructor.role}</span>}
              {instructor.bio && <p>{instructor.bio}</p>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
