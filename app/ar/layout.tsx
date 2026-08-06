import type { Metadata } from 'next';
import '../globals.css';
import { manrope } from '@/lib/fonts';
import { baseMetadata } from '@/lib/siteMetadata';
import { Header } from '@/components/layout/Header';
import { getDictionary } from '@/lib/i18n/getDictionary';

export const metadata: Metadata = baseMetadata;

// Own root layout — see app/(en)/layout.tsx for why. This is what gives
// /ar/* pages a real <html lang="ar" dir="rtl">, not just an inner div.
export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  const dict = getDictionary('ar');
  return (
    <html lang="ar" dir="rtl" className={manrope.variable}>
      <body>
        <Header dict={dict} locale="ar" />
        {children}
      </body>
    </html>
  );
}
