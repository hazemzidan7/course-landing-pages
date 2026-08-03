'use client';

import { useEffect, useState } from 'react';
import type { Dictionary } from '@/lib/i18n/types';

export function StickyMobileCTA({ dict }: { dict: Dictionary }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    let rafId: number;

    function attach() {
      const target = document.getElementById('registration');
      if (!target) {
        rafId = requestAnimationFrame(attach);
        return;
      }
      observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), {
        rootMargin: '0px 0px -20% 0px',
      });
      observer.observe(target);
    }

    attach();
    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className={`sticky-mobile-cta ${hidden ? 'is-hidden' : ''}`} aria-hidden={hidden}>
      <a className="cta-button" href="#registration">
        {dict.stickyMobileCta.registerNow}
      </a>
    </div>
  );
}
