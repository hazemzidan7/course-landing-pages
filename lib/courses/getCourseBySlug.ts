import { allCourses } from '@/lib/courses/registry';
import type { Course } from '@/lib/courses/types';

export function getCourseBySlug(slug: string): Course | undefined {
  return allCourses.find((course) => course.slug === slug && course.status !== 'archived');
}
