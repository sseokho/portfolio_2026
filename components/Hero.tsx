'use client';

import { useEffect, useRef, useState } from 'react';
import { PROJECTS } from './Data';
import { useParallax } from './useParallax';

const KEYWORDS = ['Semantic', 'Responsive', 'Interactive', 'Optimized'];
const K_SPD = 280;
const TITLE = 'SONSEOKHO';
const SUB = 'PORTFOLIO';
const TYPE_MS = 85;

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const introRef   = useParallax<HTMLDivElement>(.05);
  const stickerRef = useParallax<HTMLDivElement>(-.12);
  const [titleLen, setTitleLen] = useState(0);
  const [subLen, setSubLen] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => heroRef.current?.classList.add('in'));
  }, []);

  // 타이틀 타이핑 인터렉션: SONSEOKHO를 먼저 치고, 잠깐 멈췄다가 PORTFOLIO를 이어서 침
  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const typeTitle = (i: number) => {
      if (cancelled) return;
      setTitleLen(i);
      if (i < TITLE.length) {
        timers.push(setTimeout(() => typeTitle(i + 1), TYPE_MS));
      } else {
        timers.push(setTimeout(() => typeSub(0), 280));
      }
    };
    const typeSub = (i: number) => {
      if (cancelled) return;
      setSubLen(i);
      if (i < SUB.length) {
        timers.push(setTimeout(() => typeSub(i + 1), TYPE_MS));
      }
    };

    timers.push(setTimeout(() => typeTitle(0), 400));
    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>

      <div className="hero-center">
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

        {/* 타이틀: 타이핑 인터렉션 */}
        <div className="head">
          <h1>
            <span className="line">
              <span className="h1-strong">
                {TITLE.slice(0, titleLen)}
                {titleLen < TITLE.length && <span className="type-caret" />}
              </span>
            </span>
            <span className="line">
              <span className="h1-outline">
                {SUB.slice(0, subLen)}
                {titleLen >= TITLE.length && subLen < SUB.length && <span className="type-caret" />}
              </span>
            </span>
          </h1>
          <p className={`lead${subLen >= SUB.length ? ' in' : ''}`}>
            사용자가 마주하는 화면을 만드는 일에 진심인 손석호입니다. <br className="lead-br" />
            더 넓은 세상에서 다양한 경험과 도전을 쌓아가고 싶습니다.
          </p>
        </div>
      </div>

      {/* GitHub 배지: hero-bottom과 완전히 분리된 독립 요소 */}
      <a className="hero-github-badge" href="https://github.com/sseokho" target="_blank" rel="noreferrer">
        <span className="sticker-dot" />
        OPEN TO GITHUB
      </a>

      {/* 하단: 스탯 + 메타 */}
      <div className="hero-bottom">
        <div className="hb-stats">
          <div className="hb-stat">
            <span className="hb-stat-lbl">Years Exp</span>
            <span className="hb-stat-num">05</span>
          </div>
          <div className="hb-stat">
            <span className="hb-stat-lbl">Projects</span>
            <span className="hb-stat-num">{PROJECTS.length}</span>
          </div>
          <div className="hb-stat">
            <span className="hb-stat-lbl">Since</span>
            <span className="hb-stat-num">2021</span>
          </div>
        </div>
        <div className="hb-meta">
          <div className="hb-meta-item">
            <span className="hb-meta-lbl">Location</span>
            <span className="hb-meta-val">서울, 대한민국</span>
          </div>
          <div className="hb-meta-item">
            <span className="hb-meta-lbl">Experience</span>
            <span className="hb-meta-val">웹 퍼블리셔 · 프론트엔드 개발자</span>
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
        <svg viewBox="0 0 120 120">
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
