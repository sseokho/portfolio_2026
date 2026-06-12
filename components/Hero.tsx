'use client';

import { useEffect, useRef } from 'react';

const KEYWORDS = ['Semantic', 'Responsive', 'Interactive', 'Optimized'];
const K_SPD = 280;

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => heroRef.current?.classList.add('in'));
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="grid">

        {/* 키워드 인트로 */}
        <div className="hero-intro">
          <div className="hero-kw">
            {KEYWORDS.map((kw, i) => (
              <span
                key={kw}
                className="kw"
                style={{ '--d': `${i * K_SPD + 80}ms` } as React.CSSProperties}
              >
                {kw}{i < KEYWORDS.length - 1 && <span className="sep"> · </span>}
              </span>
            ))}
          </div>
        </div>

        {/* 타이틀 */}
        <div className="head">
          <h1>
            <span className="line">
              <span className="h1-strong">
                SONSEOKHO
                <svg className="h1-underline" viewBox="0 0 520 14" preserveAspectRatio="none" aria-hidden>
                  <path d="M 3,10 Q 70,2 140,9 Q 210,16 280,7 Q 360,1 440,9 Q 480,13 517,8" />
                </svg>
              </span>
            </span>
            <span className="line"><span className="h1-outline">PORTFOLIO</span></span>
          </h1>
          <p className="lead">
            디자이너와 가장 가까이 앉는 엔지니어. <em>인터페이스의 무게</em>와 모션의 결,
            그리고 화면이 사용자에게 처음 닿는 0.3초를 가장 오래 들여다봅니다.
          </p>
        </div>

        {/* 하단: stats + meta 통합 */}
        <div className="hero-bottom">
          <div className="hb-stats">
            <div className="hb-stat">
              <span className="hb-n">04</span>
              <span className="hb-l">Years Exp.</span>
            </div>
            <div className="hb-stat">
              <span className="hb-n">20+</span>
              <span className="hb-l">Projects</span>
            </div>
            <div className="hb-stat">
              <span className="hb-n">2020</span>
              <span className="hb-l">Since</span>
            </div>
          </div>
          <dl className="hb-meta">
            <div><dt>위치</dt><dd>서울, 대한민국</dd></div>
            <div><dt>경력</dt><dd>4년차 프론트엔드</dd></div>
            <div><dt>상태</dt><dd><span className="avail">프리랜스 가능</span></dd></div>
            <div><dt>이메일</dt><dd>tjrgh538@naver.com</dd></div>
          </dl>
        </div>

      </div>

      {/* 스티커 */}
      <div className="sticker sticker-circle" aria-hidden>
        <svg viewBox="0 0 120 120" width="120" height="120">
          <defs>
            <path id="cp" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"/>
          </defs>
          <g className="sticker-ring">
            <text fontFamily="'JetBrains Mono',monospace" fontSize="10.5" letterSpacing="2.8" fill="currentColor" textAnchor="start">
              <textPath href="#cp">FRONTEND · DEVELOPER · 2026 · </textPath>
            </text>
          </g>
          <text x="60" y="67" textAnchor="middle" fontSize="22" fill="currentColor">✦</text>
        </svg>
      </div>

      <div className="sticker sticker-badge" aria-hidden>
        <span className="sticker-dot"/>
        OPEN TO WORK
      </div>

      <div className="wm-track" aria-hidden>
        {[0, 1].map(i => (
          <span key={i} className="wm">
            {Array.from({ length: 6 }).map((_, j) => (
              <span key={j}>SEOKHO SON · FRONTEND DEVELOPER · </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
}
