import type { Course } from '@/lib/courses/types';
import { artificialIntelligenceCourse } from '@/content/courses/artificial-intelligence';
import { backEndCourse } from '@/content/courses/back-end';
import { computerBasicsCourse } from '@/content/courses/computer-basics';
import { cybersecurityCourse } from '@/content/courses/cybersecurity';
import { dataAnalysisCourse } from '@/content/courses/data-analysis';
import { flutterCourse } from '@/content/courses/flutter';
import { frontEndCourse } from '@/content/courses/front-end';
import { networkCourse } from '@/content/courses/network';
import { programmingFundamentalsCourse } from '@/content/courses/programming-fundamentals';
import { uiUxDesignCourse } from '@/content/courses/ui-ux-design';

// Adding a future course means adding one entry here (backed by a new file
// in content/courses) — no changes to routing or components required.
// content/courses/test-course.ts is kept in the repo for local dev/testing
// but intentionally not registered here, so it no longer renders/routes/
// lists in production.
export const allCourses: Course[] = [
  artificialIntelligenceCourse,
  backEndCourse,
  computerBasicsCourse,
  cybersecurityCourse,
  dataAnalysisCourse,
  flutterCourse,
  frontEndCourse,
  networkCourse,
  programmingFundamentalsCourse,
  uiUxDesignCourse,
];
