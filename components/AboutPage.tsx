'use client';

import { useEffect, useRef, useState } from 'react';
import { SKILLS, EXPERIENCE, CONTACT_LINKS } from './Data';

function Reveal({ text, active }: { text: string; active: boolean }) {
  return <span className={`rl${active ? ' on' : ''}`}>{text}</span>;
}

export default function AboutPage() {
  const gridboxRef    = useRef<HTMLDivElement>(null);
  const introTitleRef   = useRef<HTMLHeadingElement>(null);
  const matrixTitleRef  = useRef<HTMLHeadingElement>(null);
  const expTitleRef     = useRef<HTMLHeadingElement>(null);
  const contactTitleRef = useRef<HTMLHeadingElement>(null);
  const [barsVisible, setBarsVisible] = useState(false);
  const [introIn,     setIntroIn]     = useState(false);
  const [matrixIn,    setMatrixIn]    = useState(false);
  const [expIn,       setExpIn]       = useState(false);
  const [contactIn,   setContactIn]   = useState(false);


  useEffect(() => {
    const el = gridboxRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setBarsVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const pairs: [React.RefObject<HTMLElement | null>, (v: boolean) => void][] = [
      [introTitleRef,   setIntroIn],
      [matrixTitleRef,  setMatrixIn],
      [expTitleRef,     setExpIn],
      [contactTitleRef, setContactIn],
    ];
    const observers = pairs.map(([ref, set]) => {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { set(true); obs.disconnect(); } },
        { threshold: 0.5 }
      );
      if (ref.current) obs.observe(ref.current);
      return obs;
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div id="page-about" className="page active">

      {/* ─── 소개 ─── */}
      <section className="about">
        <div className="grid">
          <div className="about-text">
            <h2 ref={introTitleRef}>
              <span className="en-tag">INTRO</span>
              <Reveal text="소개" active={introIn} />
            </h2>
            <p>
              화면을 만드는 일이 생각보다 훨씬 재미있다는 걸, 일을 하면서 알았습니다.<br />
              디자인을 코드로 옮기는 것에서 시작했지만, 어느 순간 그 너머가 궁금해졌습니다.<br /><br />
              단순히 화면을 구현하는 것을 넘어, 사용자가 실제로 경험하는 것들을 직접 만들고 싶었습니다.<br />
              어디서 불편할지, 어떻게 하면 더 자연스러울지<br />
              그 고민이 지금의 저를 만든 이유입니다.<br /><br />
              아직 배워가는 중이지만, 부족한 점은 인정하고 채워가는 편입니다.<br />
              더 넓은 곳으로 나아가고 싶다는 마음 하나로, 지금도 도전하고 있습니다.
            </p>
          </div>
          <div className="about-portrait">
            <span className="p-corner tl" aria-hidden />
            <span className="p-corner tr" aria-hidden />
            <span className="p-corner bl" aria-hidden />
            <span className="p-corner br" aria-hidden />
            <img src="/images/my.jpg" alt="손석호" />
            <div className="portrait-meta">
              <span className="portrait-lbl">PORTRAIT</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 스택 매트릭스 ─── */}
      <section className="matrix">
        <div className="grid">
          <h2 ref={matrixTitleRef}>
            <span className="en-tag">STACK MATRIX</span>
            <Reveal text="기술스택" active={matrixIn} />
          </h2>
          <p className="lede">
            지금까지 손에 쥐고 일해온 기술들입니다. 매일 조금씩 더해가고 있습니다.
          </p>
          <div className="gridbox" ref={gridboxRef}>
            {(() => {
              let cellIdx = 0;
              return SKILLS.map((row, i) => {
                if (row.type === 'sep') {
                  return <div className="gsep" key={`sep-${i}`}>{row.label}</div>;
                }
                const delay = barsVisible ? `${cellIdx++ * 60}ms` : '0ms';
                return (
                  <div className="cell" key={`${row.label}-${row.name}`}>
                    <span className="lbl">{row.label}</span>
                    <span className="val">{row.name}</span>
                    <div className="bar">
                      <i
                        style={{
                          width: barsVisible ? `${row.level}%` : '0',
                          transitionDelay: delay,
                        }}
                      />
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </section>

      {/* ─── 경력 ─── */}
      <section className="exp">
        <div className="grid">
          <h2 ref={expTitleRef}>
            <span className="en-tag">CAREER HISTORY</span>
            <Reveal text="경력 요약" active={expIn} />
          </h2>
          <div className="list">
            {EXPERIENCE.map((item, i) => (
              <div className="item" key={i}>
                <span className="yr">{item.period}</span>
                <div className="role">
                  <span>{item.company}</span>
                  {item.role}
                </div>
                <span className="place">{item.location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 연락처 ─── */}
      <section className="contact" id="contact">
        <div className="grid">
          <h2 ref={contactTitleRef}>
            <span className={`rl${contactIn ? ' on' : ''}`}>CONTACT</span><br />
            <span className={`rl blue${contactIn ? ' on' : ''}`} style={{ transitionDelay: contactIn ? '.1s' : '0s' }}>ME.</span>
          </h2>

          <div className="right">
            {CONTACT_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                {link.label} <span>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
