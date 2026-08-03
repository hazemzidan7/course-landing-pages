import { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllCourses } from '@/lib/courses/getAllCourses';
import { getCourseBySlug } from '@/lib/courses/getCourseBySlug';
import { Hero } from '@/components/course/Hero';
import { QuickInfo } from '@/components/course/QuickInfo';
import { Audience } from '@/components/course/Audience';
import { Curriculum } from '@/components/course/Curriculum';
import { Skills } from '@/components/course/Skills';
import { CareerOutcomes } from '@/components/course/CareerOutcomes';
import { Gallery } from '@/components/course/Gallery';
import { WhyEduzah } from '@/components/course/WhyEduzah';
import { StudentProjects } from '@/components/course/StudentProjects';
import { Testimonials } from '@/components/course/Testimonials';
import { Instructor } from '@/components/course/Instructor';
import { Pricing } from '@/components/course/Pricing';
import { RegistrationForm } from '@/components/course/RegistrationForm';
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
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: course.meta.ogTitle ?? course.meta.title,
      description: course.meta.ogDescription ?? course.meta.description,
      images: course.meta.ogImage ? [course.meta.ogImage] : undefined,
      url: canonical,
    },
  };
}

export default async function CoursePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <main>
      <Hero course={course} />
      <QuickInfo quickInfo={course.quickInfo} />
      <Audience audience={course.audience} />
      <Curriculum curriculum={course.curriculum} />
      <Skills skills={course.skills} />
      <CareerOutcomes careerOutcomes={course.careerOutcomes} />
      <Gallery gallery={course.gallery} />
      <WhyEduzah whyEduzah={course.whyEduzah} />
      <StudentProjects studentProjects={course.studentProjects} />
      <Testimonials testimonials={course.testimonials} />
      <Instructor instructors={course.instructors} />
      <Pricing pricing={course.pricing} />
      <Suspense fallback={null}>
        <RegistrationForm courseId={course.id} courseSlug={course.slug} />
      </Suspense>
      <FAQSection faq={course.faq} />
      <FinalCTA finalCta={course.finalCta} />
      <StickyMobileCTA />
    </main>
  );
}
