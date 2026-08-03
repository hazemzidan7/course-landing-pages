import Link from 'next/link';
import { getAllCourses } from '@/lib/courses/getAllCourses';

export default function Home() {
  const courses = getAllCourses();

  return (
    <main className="section">
      <h1>EDUZAH Course Landing Pages</h1>
      <p>Technical foundation — Step 2. Course pages:</p>
      <ul>
        {courses.map((course) => (
          <li key={course.slug}>
            <Link href={`/courses/${course.slug}`}>{course.meta.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
