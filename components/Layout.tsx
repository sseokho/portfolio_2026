'use client';

import { useEffect, useRef, useState } from 'react';

type Page = 'projects' | 'about';

interface LayoutProps {
  children: (page: Page) => React.ReactNode;
}

const NAV_ITEMS: { id: Page; label: string }[] = [
  { id: 'projects', label: '프로젝트' },
  { id: 'about',    label: '어바웃'   },
];

export default function Layout({ children }: LayoutProps) {
  const [page, setPage]       = useState<Page>('projects');
  const [progress, setProgress] = useState(0);
  const [clock, setClock]     = useState('');

  // 서울 시계
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

  // 스크롤 프로그레스
  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(window.scrollY / Math.max(max, 1));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 페이지 전환 시 스크롤 최상단
  const switchPage = (id: Page) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const pct = Math.round(progress * 100);

  return (
    <>
      {/* 상단 루러 */}
      <header className="ruler-top">
        <nav className="nav">
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={page === id ? 'on' : ''}
              onClick={e => { e.preventDefault(); switchPage(id); }}
            >
              {label}
            </a>
          ))}
        </nav>

        <span className="center">JIWON KIM</span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span>{clock}</span>
          <div className="dots">
            {NAV_ITEMS.map(({ id }, i) => (
              <i key={id} className={page === id || (i === 0 && page === 'projects') || (i <= NAV_ITEMS.findIndex(n => n.id === page)) ? 'on' : ''} />
            ))}
          </div>
        </div>
      </header>

      {/* 컬럼 레일 */}
      <div className="rails" aria-hidden>
        {Array.from({ length: 12 }).map((_, i) => <div key={i} className="col" />)}
      </div>

      {/* 프로그레스 바 */}
      <div className="progress" aria-hidden>
        <i style={{ width: `${progress * 100}%` }} />
      </div>

      {/* 페이지 콘텐츠 */}
      <main>
        {children(page)}
      </main>

      {/* 하단 루러 */}
      <footer className="ruler-bot">
        <span>© 2026 JIWON KIM · IDX V.2.6</span>
        <span>{String(pct).padStart(3, '0')} / 100</span>
        <span>SET IN ONEST · PRETENDARD · JETBRAINS MONO</span>
      </footer>
    </>
  );
}