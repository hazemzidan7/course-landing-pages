import { Header } from '@/components/layout/Header';
import { getDictionary } from '@/lib/i18n/getDictionary';

// Route group (no URL segment) so English keeps its existing unprefixed
// URLs (/, /courses/[slug]) while still getting its own Header instance —
// the true root layout (app/layout.tsx) no longer renders one directly.
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  const dict = getDictionary('en');
  return (
    <>
      <Header dict={dict} locale="en" />
      {children}
    </>
  );
}
