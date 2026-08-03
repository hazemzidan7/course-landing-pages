import type { Course } from '@/lib/courses/types';
import { testCourse } from '@/content/courses/test-course';

// Adding a future course means adding one entry here (backed by a new file
// in content/courses) — no changes to routing or components required.
export const allCourses: Course[] = [testCourse];
