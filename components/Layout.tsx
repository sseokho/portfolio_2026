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
  const dotRef    = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);

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
    setOpen(false);
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

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const DR = 3.5;  // dot radius (7px / 2)
    const RR = 17;   // ring radius (34px / 2)
    let mx = 0, my = 0, dx = 0, dy = 0, rx = 0, ry = 0, raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      const hov = !!(e.target as HTMLElement).closest('a, button');
      dot.classList.toggle('hov', hov);
      ring.classList.toggle('hov', hov);
      dot.classList.add('vis');
      ring.classList.add('vis');
      document.documentElement.style.setProperty('--gx', `${(mx / window.innerWidth) * 100}%`);
      document.documentElement.style.setProperty('--gy', `${(my / window.innerHeight) * 100}%`);
    };

    const tick = () => {
      dx += (mx - dx) * .35;
      dy += (my - dy) * .35;
      dot.style.transform = `translate(${dx - DR}px, ${dy - DR}px)`;
      rx += (mx - rx) * .12;
      ry += (my - ry) * .12;
      ring.style.transform = `translate(${rx - RR}px, ${ry - RR}px)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div className="cur-dot" ref={dotRef}  aria-hidden />
      <div className="cur-ring" ref={ringRef} aria-hidden />
      <div className="mouse-glow" aria-hidden />
      <div className="noise" aria-hidden />

      <header className="ruler-top">
        <button className={`ham${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="메뉴">
          <span /><span /><span />
        </button>

        <span className="center">{NAV.find(n => n.href === pathname)?.title ?? 'SEOKHO SON'}</span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span>{clock}</span>
          <div className="dots">
            {NAV.map(({ href }, i) => (
              <i key={href} className={i <= NAV.findIndex(n => n.href === pathname) ? 'on' : ''} />
            ))}
          </div>
        </div>
      </header>

      <div className={`drawer${open ? ' open' : ''}`}>
        <nav>
          {NAV.map(({ href, label }, i) => (
            <Link key={href} href={href} className={pathname === href ? 'on' : ''} onClick={() => setOpen(false)}>
              <span className="n">0{i + 1}</span>
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
        <span>{String(Math.round(progress * 100)).padStart(3, '0')} / 100</span>
        <span>ALL RIGHTS RESERVED</span>
      </footer>
    </>
  );
}
