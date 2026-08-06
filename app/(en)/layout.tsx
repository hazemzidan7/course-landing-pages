import type { Metadata } from 'next';
import '../globals.css';
import { manrope } from '@/lib/fonts';
import { baseMetadata } from '@/lib/siteMetadata';
import { Header } from '@/components/layout/Header';
import { getDictionary } from '@/lib/i18n/getDictionary';

export const metadata: Metadata = baseMetadata;

// Own root layout (route group, so URLs stay unprefixed: /, /courses/[slug]).
// English and Arabic (app/ar/layout.tsx) each declare their own <html>,
// per Next.js's "multiple root layouts" pattern — this is what lets each
// locale carry the correct lang/dir on the real <html> element instead of
// a wrapper div. app/global-not-found.tsx covers URLs that don't match
// either tree at all.
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  const dict = getDictionary('en');
  return (
    <html lang="en" dir="ltr" className={manrope.variable}>
      <body>
        <Header dict={dict} locale="en" />
        {children}
      </body>
    </html>
  );
}
