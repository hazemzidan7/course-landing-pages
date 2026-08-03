import { Header } from '@/components/layout/Header';
import { getDictionary } from '@/lib/i18n/getDictionary';

// Nested layout can't redeclare <html>/<body> (only app/layout.tsx can), so
// RTL/lang is applied on this wrapping element instead — it still fully
// controls text direction and font fallback for everything under /ar.
export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  const dict = getDictionary('ar');
  return (
    <div lang="ar" dir="rtl" className="locale-ar">
      <Header dict={dict} locale="ar" />
      {children}
    </div>
  );
}
