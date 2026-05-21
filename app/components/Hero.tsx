'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  // 입장 애니메이션
  useEffect(() => {
    requestAnimationFrame(() => heroRef.current?.classList.add('in'));
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="grid">

        {/* 좌상단 스탬프 */}
        <div className="id">
          <span className="stamp">
            디자인<br />엔지니어
          </span>
          <p className="v">IDX V.2.6 · 2026</p>
        </div>

        {/* 타이틀 */}
        <div className="head">
          <h1>
            <span className="line"><span>인터페이스를</span></span>
            <span className="line"><span>정밀하게<span className="accent"> 조각</span></span></span>
            <span className="line"><span>합니다.<span className="small">since 2021</span></span></span>
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

        {/* 포트레이트 (이미지 교체 가능) */}
        <div className="portrait">
          <span className="lbl">PORTRAIT</span>
          {/* <img src="/portrait.jpg" alt="김지원" /> */}
        </div>

        {/* 리드 문구 */}
        <p className="lead">
          디자이너와 가장 가까이 앉는 엔지니어. <em>인터페이스의 무게</em>와 모션의 결,
          그리고 화면이 사용자에게 처음 닿는 0.3초를 가장 오래 들여다봅니다.
        </p>

        {/* 스크롤 힌트 */}
        <div className="scroll">
          <span className="ln" />
          스크롤
        </div>

      </div>

      {/* 워터마크 */}
      <span className="wm" aria-hidden>JIWON KIM · DESIGN ENGINEER</span>
    </section>
  );
}