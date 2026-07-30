'use client';

import { useEffect, useRef } from 'react';

/**
 * Sets a `--parallax-y` CSS var on the element, proportional to its
 * distance from the viewport center. Consuming CSS composes it into
 * `transform` (e.g. `translateY(var(--parallax-y, 0px))`).
 */
export function useParallax<T extends HTMLElement>(speed: number) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2;
      const offset = (window.innerHeight / 2 - center) * speed;
      el.style.setProperty('--parallax-y', `${offset}px`);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return ref;
}
