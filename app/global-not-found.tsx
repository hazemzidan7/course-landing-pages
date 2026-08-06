import type { Metadata } from 'next';
import './globals.css';
import { manrope } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Page Not Found — EDUZAH',
  description: 'The page you are looking for does not exist.',
};

// Required once the app has multiple root layouts (app/(en)/layout.tsx,
// app/ar/layout.tsx) — Next.js can no longer compose a single default 404
// from those, so this covers URLs that don't match either locale tree at
// all. Bypasses both layouts entirely, so it imports its own globals/font.
export default function GlobalNotFound() {
  return (
    <html lang="en" dir="ltr" className={manrope.variable}>
      <body>
        <main className="section">
          <h1>Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </main>
      </body>
    </html>
  );
}
