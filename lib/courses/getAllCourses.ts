import { allCourses } from '@/lib/courses/registry';
import type { Course } from '@/lib/courses/types';

export function getAllCourses(): Course[] {
  return allCourses.filter((course) => course.status === 'active');
}
