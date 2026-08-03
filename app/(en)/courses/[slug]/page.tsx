import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllCourses } from '@/lib/courses/getAllCourses';
import { getCourseBySlug } from '@/lib/courses/getCourseBySlug';
import { getDictionary } from '@/lib/i18n/getDictionary';
import { Hero } from '@/components/course/Hero';
import { QuickInfo } from '@/components/course/QuickInfo';
import { Audience } from '@/components/course/Audience';
import { Curriculum } from '@/components/course/Curriculum';
import { Skills } from '@/components/course/Skills';
import { Gallery } from '@/components/course/Gallery';
import { FAQSection } from '@/components/course/FAQSection';
import { FinalCTA } from '@/components/course/FinalCTA';
import { StickyMobileCTA } from '@/components/course/StickyMobileCTA';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllCourses().map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const canonical = siteUrl ? `${siteUrl}/courses/${course.slug}` : undefined;

  return {
    title: course.meta.title,
    description: course.meta.description,
    alternates: {
      canonical,
      languages: siteUrl
        ? { en: `${siteUrl}/courses/${course.slug}`, ar: `${siteUrl}/ar/courses/${course.slug}` }
        : undefined,
    },
    openGraph: {
      title: course.meta.ogTitle ?? course.meta.title,
      description: course.meta.ogDescription ?? course.meta.description,
      images: course.meta.ogImage ? [course.meta.ogImage] : undefined,
      url: canonical,
    },
  };
}

// Section order is the approved Step 3.3 conversion-focused structure.
// Pricing now renders once, inside Hero's left column beside the image —
// it is intentionally not repeated here. Instructor/Testimonials/
// StudentProjects/CareerOutcomes/WhyEduzah remain supported by the Course
// data model and their components still exist, but are intentionally not
// part of the default template — a future course can opt back in by
// rendering them here when real data warrants it.
export default async function CoursePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const dict = getDictionary('en');

  return (
    <main>
      <Hero course={course} dict={dict} />
      <QuickInfo quickInfo={course.quickInfo} />
      <Audience audience={course.audience} dict={dict} />
      <Curriculum curriculum={course.curriculum} dict={dict} />
      <Skills skills={course.skills} dict={dict} />
      <Gallery gallery={course.gallery} dict={dict} />
      <FAQSection faq={course.faq} dict={dict} />
      <FinalCTA finalCta={course.finalCta} />
      <StickyMobileCTA dict={dict} />
    </main>
  );
}
