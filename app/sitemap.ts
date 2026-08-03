import type { MetadataRoute } from 'next';
import { getAllCourses } from '@/lib/courses/getAllCourses';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

  const courseEntries: MetadataRoute.Sitemap = getAllCourses().map((course) => ({
    url: `${siteUrl}/courses/${course.slug}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...courseEntries,
  ];
}
