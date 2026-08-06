import { Manrope } from 'next/font/google';

// Shared between the two locale root layouts (app/(en)/layout.tsx,
// app/ar/layout.tsx) — each declares its own <html>, but both use the
// same font.
export const manrope = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});
