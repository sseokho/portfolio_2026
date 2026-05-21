'use client';

import { useEffect, useRef } from 'react';

/**
 * 섹션 내 .reveal 요소들을 IntersectionObserver로 감지해 .in 클래스 부여
 */
export function useReveal(dep?: unknown) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>('.reveal');
    // 리셋
    els.forEach(el => el.classList.remove('in'));

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    requestAnimationFrame(() => els.forEach(el => io.observe(el)));

    return () => io.disconnect();
  }, [dep]);

  return ref;
}