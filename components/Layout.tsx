'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { href: '/',         label: '홈'       },
  { href: '/projects', label: '프로젝트' },
  { href: '/about',    label: '어바웃'   },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [clock, setClock]       = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const p = (n: number) => String(n).padStart(2, '0');
      setClock(`SEOUL · ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(window.scrollY / Math.max(max, 1));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="noise" aria-hidden />
      <header className="ruler-top">
        <nav className="nav">
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? 'on' : ''}
            >
              {label}
            </Link>
          ))}
        </nav>

        <span className="center">SEOKHO SON</span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span>{clock}</span>
          <div className="dots">
            {NAV_ITEMS.map(({ href }, i) => (
              <i key={href} className={i <= NAV_ITEMS.findIndex(n => n.href === pathname) ? 'on' : ''} />
            ))}
          </div>
        </div>
      </header>

      <div className="rails" aria-hidden>
        {Array.from({ length: 12 }).map((_, i) => <div key={i} className="col" />)}
      </div>

      <div className="progress" aria-hidden>
        <i style={{ width: `${progress * 100}%` }} />
      </div>

      <main>
        {children}
      </main>

      <footer className="ruler-bot">
        <span>© 2026 SONSEOKHO PORTFOLIO</span>
        <span>{String(Math.round(progress * 100)).padStart(3, '0')} / 100</span>
        <span>ALL RIGHTS RESERVED</span>
      </footer>
    </>
  );
}