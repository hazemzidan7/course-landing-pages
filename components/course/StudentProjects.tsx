import type { CourseStudentProject } from '@/lib/courses/types';
import { CourseImage } from '@/components/ui/CourseImage';

export function StudentProjects({ studentProjects }: { studentProjects?: CourseStudentProject[] }) {
  if (!studentProjects || studentProjects.length === 0) return null;

  return (
    <section className="section student-projects">
      <h2>Student Projects</h2>
      <ul className="student-projects__list">
        {studentProjects.map((project) => (
          <li key={project.title} className="student-projects__item">
            <div className="student-projects__photo">
              <CourseImage image={project.image} placeholderLabel={`${project.title} photo`} />
            </div>
            <strong>{project.title}</strong>
            {project.description && <p>{project.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
