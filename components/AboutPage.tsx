'use client';

import { useEffect, useRef, useState } from 'react';
import { SKILLS, EXPERIENCE, CONTACT_LINKS } from './Data';

const STUTTER_DELAYS = [0,1,2,3,4,5,6,7,8,9,10,11].map(i =>
  i * 70 + (i % 3 === 0 ? 120 : i % 2 === 0 ? 60 : 0)
);

function Stutter({ text, active, base = 0 }: { text: string; active: boolean; base?: number }) {
  return (
    <>
      {[...text].map((ch, i) => (
        <span
          key={i}
          className="st"
          style={active ? { '--d': `${base + (STUTTER_DELAYS[i] ?? i * 70)}ms` } as React.CSSProperties : {}}
          data-active={active ? '1' : '0'}
        >
          {ch}
        </span>
      ))}
    </>
  );
}

export default function AboutPage() {
  const portraitRef   = useRef<HTMLDivElement>(null);
  const gridboxRef    = useRef<HTMLDivElement>(null);
  const matrixTitleRef = useRef<HTMLHeadingElement>(null);
  const expTitleRef    = useRef<HTMLHeadingElement>(null);
  const [barsVisible,   setBarsVisible]   = useState(false);
  const [matrixIn,      setMatrixIn]      = useState(false);
  const [expIn,         setExpIn]         = useState(false);

  useEffect(() => {
    const el = portraitRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

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
    const pairs: [React.RefObject<HTMLDivElement | null>, (v: boolean) => void][] = [
      [matrixTitleRef, setMatrixIn],
      [expTitleRef,    setExpIn],
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
            <span className="stamp">§ 02 — 소개</span>
            <p>
              디자이너와 가장 가까이 앉는 엔지니어입니다.{' '}
              <b>인터페이스의 무게</b>, 모션의 결, 그리고 화면이 사용자에게 처음 닿는
              0.3초를 가장 오래 들여다봅니다. 빠르게 만드는 것보다{' '}
              <b>한 번 더 다듬는 것</b>을 언제나 선택합니다.
            </p>
            <span className="signed">— 지원, 2026</span>
          </div>
          <div className="about-portrait" ref={portraitRef}>
            <span className="p-corner tl" aria-hidden />
            <span className="p-corner tr" aria-hidden />
            <span className="p-corner bl" aria-hidden />
            <span className="p-corner br" aria-hidden />
            <img src="/my.jpg" alt="손석호" />
            <div className="portrait-meta">
              <span className="portrait-lbl">PORTRAIT</span>
              <span className="portrait-idx">001</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 스택 매트릭스 ─── */}
      <section className="matrix">
        <div className="grid">
          <h2 ref={matrixTitleRef}>
            <span className="en-tag">STACK MATRIX</span>
            <Stutter text="기술" active={matrixIn} base={0} /><br />
            <span className="it"><Stutter text="스택." active={matrixIn} base={320} /></span>
          </h2>
          <p className="lede">
            매 분기 손에 쥐고 있는 것들. 색이 채워진 도구는 가장 최근에 가장 자주 만진 것들입니다.
          </p>
          <div className="gridbox" ref={gridboxRef}>
            {SKILLS.map((skill, i) => (
              <div className="cell" key={`${skill.label}-${skill.name}`}>
                <span className="lbl">{skill.label}</span>
                <span className="val">{skill.name}</span>
                <div className="bar">
                  <i
                    className={skill.highlight ? 'h' : ''}
                    style={{
                      width: barsVisible ? `${skill.level}%` : '0',
                      transitionDelay: barsVisible ? `${i * 60}ms` : '0ms',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 경력 ─── */}
      <section className="exp">
        <div className="grid">
          <h2 ref={expTitleRef}>
            <span className="en-tag">CAREER HISTORY</span>
            <Stutter text="경력," active={expIn} base={0} /><br />
            <span className="it"><Stutter text="요약." active={expIn} base={320} /></span>
          </h2>
          <div className="list">
            {EXPERIENCE.map((item, i) => (
              <div className="item" key={i}>
                <span className="yr">{item.period}</span>
                <div className="role">
                  {item.role}
                  <span>{item.company}</span>
                </div>
                <span className="place">{item.location}</span>
                <span className="arr">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 연락처 ─── */}
      <section className="contact" id="contact">
        <div className="grid">
          <span className="label">§ 02 — 연락처</span>
          <h2>
            CONTACT<br /><span className="blue">ME.</span>
          </h2>

          <div className="right">
            {CONTACT_LINKS.map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label} <span>↗</span>
              </a>
            ))}
          </div>

          <div className="email-big">
            <a href="mailto:tjrgh538@naver.com">
              tjrgh538@naver.com <span className="c">↗</span>
            </a>
            <span className="note">
              평일 기준<br />24시간 이내로 답변드립니다.
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
