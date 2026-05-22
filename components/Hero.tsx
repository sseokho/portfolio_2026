'use client';

import { useEffect, useRef } from 'react';

const KEYWORDS = ['Semantic', 'Responsive', 'Interactive', 'Optimized'];
const NAME = 'SONSEOKHO PORTFOLIO';
const K_SPD = 280;
const TYPE_START = KEYWORDS.length * K_SPD + 300;
const TYPE_SPD = 65;

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => heroRef.current?.classList.add('in'));
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="grid">

        {/* 키워드 + 이름 인트로 */}
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
          <div className="hero-name">
            {[...NAME].map((ch, i) => (
              <span
                key={i}
                className="tc"
                style={{ '--d': `${TYPE_START + i * TYPE_SPD}ms` } as React.CSSProperties}
              >
                {ch}
              </span>
            ))}
          </div>
        </div>

        {/* 좌상단 스탬프 */}
        <div className="id">
          <span className="stamp">프론트엔드</span>
          <p className="v">IDX V.2.6 · 2026</p>
        </div>

        {/* 타이틀 */}
        <div className="head">
          <h1>
            <span className="line"><span>사용자의</span></span>
            <span className="line"><span>첫<span className="accent"> 0.3초</span>를</span></span>
            <span className="line"><span>설계합니다.<span className="small">since 2021</span></span></span>
          </h1>
        </div>

        {/* 우측 메타 */}
        <div className="meta-right">
          <dl>
            <div>
              <dt>현재 위치</dt>
              <dd>서울, 대한민국</dd>
            </div>
            <div>
              <dt>소속</dt>
              <dd>Layered Inc.</dd>
            </div>
            <div>
              <dt>상태</dt>
              <dd>
                <span className="avail">프리랜스 가능</span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="portrait">
          <span className="lbl">PORTRAIT</span>
        </div>

        <p className="lead">
          디자이너와 가장 가까이 앉는 엔지니어. <em>인터페이스의 무게</em>와 모션의 결,
          그리고 화면이 사용자에게 처음 닿는 0.3초를 가장 오래 들여다봅니다.
        </p>

        <div className="scroll">
          <span className="ln" />
          스크롤
        </div>

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
