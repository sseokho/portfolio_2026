'use client';

import { useState, useEffect, useCallback } from 'react';

export interface Tweaks {
  accent: string;
  dark: boolean;
  rails: boolean;
  density: 'dense' | 'comfortable' | 'loose';
}

const DEFAULTS: Tweaks = {
  accent: '#0033ff',
  dark: false,
  rails: true,
  density: 'comfortable',
};

const STORAGE_KEY = 'portfolio-tweaks';

export function useTweaks() {
  const [tweaks, setTweaks] = useState<Tweaks>(DEFAULTS);

  // 로컬스토리지에서 복원
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setTweaks({ ...DEFAULTS, ...JSON.parse(saved) });
    } catch {}
  }, []);

  // DOM에 적용
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accent);
    document.body.classList.toggle('dark', tweaks.dark);
    document.body.classList.toggle('no-rails', !tweaks.rails);
    const gutMap = { dense: '12px', comfortable: '16px', loose: '24px' };
    document.documentElement.style.setProperty('--gut', gutMap[tweaks.density]);
  }, [tweaks]);

  const set = useCallback(<K extends keyof Tweaks>(key: K, value: Tweaks[K]) => {
    setTweaks(prev => {
      const next = { ...prev, [key]: value };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  return { tweaks, set };
}