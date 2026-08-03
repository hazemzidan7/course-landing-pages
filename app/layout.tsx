import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: 'EDUZAH Course Landing Pages',
  description: 'EDUZAH course landing pages for paid advertising campaigns.',
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
};

// lang/dir are hardcoded for English/LTR in Step 2. Bilingual (ar/RTL)
// support is architecture-ready: styles use logical properties, and this
// value becomes locale-driven once bilingual scope is approved.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
