'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Dictionary, Locale } from '@/lib/i18n/types';

interface HeaderProps {
  dict: Dictionary;
  locale: Locale;
}

// Toggles between the unprefixed English tree and the /ar tree for the
// current path. Client component only for usePathname(); the dictionary
// itself is passed in as plain data (no functions), so it stays safe to
// cross the server/client boundary.
export function Header({ dict, locale }: HeaderProps) {
  const pathname = usePathname();
  const alternateHref =
    locale === 'en' ? `/ar${pathname === '/' ? '' : pathname}` : pathname.replace(/^\/ar/, '') || '/';
  const homeHref = locale === 'en' ? '/' : '/ar';

  return (
    <header className="site-header">
      <Link href={homeHref} className="site-header__logo" aria-label="EDUZAH home">
        <Image src="/logo.png" alt="EDUZAH" width={116} height={32} priority />
      </Link>
      <div className="site-header__actions">
        <Link href={alternateHref} className="site-header__lang" hrefLang={locale === 'en' ? 'ar' : 'en'}>
          {dict.header.switchTo}
        </Link>
        <a className="cta-button cta-button--compact" href="#registration">
          {dict.header.registerNow}
        </a>
      </div>
    </header>
  );
}
