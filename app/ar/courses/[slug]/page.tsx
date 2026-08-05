import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllCourses } from '@/lib/courses/getAllCourses';
import { getCourseBySlug } from '@/lib/courses/getCourseBySlug';
import { getDictionary } from '@/lib/i18n/getDictionary';
import { Hero } from '@/components/course/Hero';
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

// Course content (title/description/curriculum/etc.) is not translated yet
// — same English Course data as the /courses/[slug] route, per the agreed
// staged rollout. Only the surrounding chrome (header, form, headings) is
// Arabic. Update this once real Arabic course copy exists.
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const canonical = siteUrl ? `${siteUrl}/ar/courses/${course.slug}` : undefined;

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

export default async function ArabicCoursePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const dict = getDictionary('ar');

  return (
    <main>
      <Hero course={course} dict={dict} />
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
