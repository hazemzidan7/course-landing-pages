import Link from 'next/link';
import { getAllCourses } from '@/lib/courses/getAllCourses';
import { getDictionary } from '@/lib/i18n/getDictionary';

export default function Home() {
  const courses = getAllCourses();
  const dict = getDictionary('en');

  return (
    <main>
      <section className="section home-intro">
        <h1>{dict.home.title}</h1>
        <p>{dict.home.tagline}</p>
      </section>

      <section className="section">
        <div className="course-grid">
          {courses.map((course) => (
            <Link key={course.slug} href={`/courses/${course.slug}`} className="course-card">
              {course.hero.badge && <span className="badge">{course.hero.badge}</span>}
              <h2 className="course-card__title">{course.hero.headline}</h2>
              {course.hero.subheadline && <p className="course-card__desc">{course.hero.subheadline}</p>}
              {course.quickInfo?.duration && <span className="course-card__meta">{course.quickInfo.duration}</span>}
              <span className="course-card__cta">{dict.home.viewCourse}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
