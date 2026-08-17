'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const NAV = [
  { href: '/',         label: 'HOME',     title: 'HOME'     },
  { href: '/projects', label: 'PROJECTS', title: 'PROJECTS' },
  { href: '/about',    label: 'ABOUT',    title: 'ABOUT'    },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [clock, setClock]       = useState('');
  const [progress, setProgress] = useState(0);
  const [open, setOpen]         = useState(false);
  const [trans, setTrans]       = useState<'idle' | 'in' | 'out'>('idle');
  const [transTitle, setTransTitle] = useState('');
  const isFirst   = useRef(true);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

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

  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return; }
    const title = NAV.find(n => n.href === pathname)?.title ?? '';
    setTransTitle(title);
    setTrans('in');
    const t1 = setTimeout(() => setTrans('out'), 350);
    const t2 = setTimeout(() => setTrans('idle'), 520);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div className="mouse-glow" aria-hidden />
      <div className="noise" aria-hidden />

      <header className="ruler-top">
        <button className={`ham${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="메뉴">
          <span /><span /><span />
        </button>

        <span className="center">{NAV.find(n => n.href === pathname)?.title ?? 'SEOKHO SON'}</span>

        <div className="right">
          <span>{clock}</span>
        </div>
      </header>

      <div className={`drawer${open ? ' open' : ''}`}>
        <nav>
          {NAV.map(({ href, label }) => (
            <Link key={href} href={href} className={pathname === href ? 'on' : ''} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      <div className="rails" aria-hidden>
        {Array.from({ length: 12 }).map((_, i) => <div key={i} className="col" />)}
      </div>

      <div className="progress" aria-hidden>
        <i style={{ width: `${progress * 100}%` }} />
      </div>

      {trans !== 'idle' && (
        <div className={`page-trans ${trans}`} aria-hidden>
          <span>{transTitle}</span>
        </div>
      )}

      <main>{children}</main>

      <footer className="ruler-bot">
        <span>© 2026 SONSEOKHO PORTFOLIO</span>
        <span>ALL RIGHTS RESERVED</span>
      </footer>
    </>
  );
}
