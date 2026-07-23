'use client';

import { useEffect, useRef } from 'react';
import { PROJECTS } from './Data';
import { useParallax } from './useParallax';

const KEYWORDS = ['Semantic', 'Responsive', 'Interactive', 'Optimized'];
const K_SPD = 280;
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const introRef   = useParallax<HTMLDivElement>(.05);
  const stickerRef = useParallax<HTMLDivElement>(-.12);
  const stickerInlineRef = useParallax<HTMLDivElement>(-.08);

  useEffect(() => {
    requestAnimationFrame(() => heroRef.current?.classList.add('in'));
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="grid">

        {/* 키워드 인트로 */}
        <div className="hero-intro" ref={introRef}>
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
              <span className="h1-strong">SONSEOKHO</span>
            </span>
            <span className="line"><span className="h1-outline">PORTFOLIO</span></span>
          </h1>
          <p className="lead">
            사용자가 마주하는 화면을 만드는 일에 진심인 손석호입니다. <br className="lead-br" />
            더 넓은 세상에서 다양한 경험과 도전을 쌓아가고 싶습니다.
          </p>
        </div>

        {/* GitHub 배지 */}
        <a className="hero-github-badge" href="https://github.com/sseokho" target="_blank" rel="noreferrer">
          <span className="sticker-dot" />
          OPEN TO GITHUB
        </a>

        {/* 스티커 — 모바일에서 그리드 내 배치 */}
        <div className="sticker sticker-circle sticker-circle--inline" ref={stickerInlineRef} aria-hidden>
          <svg viewBox="0 0 100 100" width="100" height="100">
            <defs>
              <path id="cp2" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"/>
            </defs>
            <g className="sticker-ring">
              <text fontFamily="'JetBrains Mono',monospace" fontSize="9" letterSpacing="2.2" fill="currentColor" textAnchor="start">
                <textPath href="#cp2">THINK · MAKE · SHIP · 2026 · </textPath>
              </text>
            </g>
            <text x="50" y="56" textAnchor="middle" fontSize="18" fill="currentColor">✦</text>
          </svg>
        </div>

      </div>

      {/* 하단: 스탯 + 메타 */}
      <div className="hero-bottom">
        <div className="hb-stats">
          <div className="hb-stat">
            <span className="hb-stat-num">05</span>
            <span className="hb-stat-lbl">Years Exp</span>
          </div>
          <div className="hb-stat">
            <span className="hb-stat-num">{PROJECTS.length}</span>
            <span className="hb-stat-lbl">Projects</span>
          </div>
          <div className="hb-stat">
            <span className="hb-stat-num">2021</span>
            <span className="hb-stat-lbl">Since</span>
          </div>
        </div>
        <div className="hb-meta">
          <div className="hb-meta-item">
            <span className="hb-meta-lbl">Location</span>
            <span className="hb-meta-val">서울, 대한민국</span>
          </div>
          <div className="hb-meta-item">
            <span className="hb-meta-lbl">Experience</span>
            <span className="hb-meta-val">5년차 퍼블리셔</span>
          </div>
          <div className="hb-meta-item">
            <span className="hb-meta-lbl">Status</span>
            <span className="hb-meta-val hb-avail">입사 가능</span>
          </div>
          <a className="hb-meta-item hb-email" href="mailto:tjrgh538@naver.com">
            <span className="hb-meta-lbl">Email</span>
            <span className="hb-meta-val">tjrgh538@naver.com</span>
          </a>
        </div>
      </div>

      {/* 스티커 */}
      <div className="sticker sticker-circle" ref={stickerRef} aria-hidden>
        <svg viewBox="0 0 120 120" width="120" height="120">
          <defs>
            <path id="cp" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"/>
          </defs>
          <g className="sticker-ring">
            <text fontFamily="'JetBrains Mono',monospace" fontSize="10.5" letterSpacing="2.8" fill="currentColor" textAnchor="start">
              <textPath href="#cp">THINK · MAKE · SHIP · 2026 · </textPath>
            </text>
          </g>
          <text x="60" y="67" textAnchor="middle" fontSize="22" fill="currentColor">✦</text>
        </svg>
      </div>

    </section>
  );
}
