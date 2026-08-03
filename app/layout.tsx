import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
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

// This is the single, true root layout (Next.js only allows one <html>/
// <body> declaration). It stays locale-neutral: the default English tree
// (route group app/(en)/) and the Arabic tree (app/ar/) each render their
// own <Header> with the right dict/locale, and app/ar/layout.tsx wraps its
// children in a dir="rtl" lang="ar" container. Known trade-off: this
// outer <html> keeps saying lang="en" even under /ar — fully correct
// per-request <html lang>/dir requires nesting the whole app under an
// app/[lang]/ root, which is a bigger restructuring reserved for once
// real Arabic content (not just UI chrome) is ready.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
