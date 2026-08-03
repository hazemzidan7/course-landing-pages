import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import './globals.css';

const manrope = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: 'EDUZAH Course Landing Pages',
  description: 'EDUZAH course landing pages for paid advertising campaigns.',
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
};

// lang/dir are hardcoded for English/LTR in Step 3. Bilingual (ar/RTL)
// support is architecture-ready: styles use logical properties and a
// swappable --font-sans variable, so this becomes locale-driven once
// bilingual scope is approved.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={manrope.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
