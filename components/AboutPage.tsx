'use client';

import { SKILLS, EXPERIENCE, CONTACT_LINKS } from './Data';

export default function AboutPage() {
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
          <div className="about-portrait">
            <img src="/my.jpg" alt="손석호" />
            <span className="portrait-lbl">PORTRAIT</span>
          </div>
        </div>
      </section>

      {/* ─── 스택 매트릭스 ─── */}
      <section className="matrix">
        <div className="grid">
          <h2>
            스택 현황,<br />이번 <span className="it">분기.</span>
          </h2>
          <p className="lede">
            매 분기 손에 쥐고 있는 것들. 색이 채워진 도구는 가장 최근에 가장 자주 만진 것들입니다.
          </p>
          <div className="gridbox">
            {SKILLS.map(skill => (
              <div className="cell" key={`${skill.label}-${skill.name}`}>
                <span className="lbl">{skill.label}</span>
                <span className="val">{skill.name}</span>
                <div className="bar">
                  <i
                    className={skill.highlight ? 'h' : ''}
                    style={{ width: `${skill.level}%` }}
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
          <h2>
            경력,<br /><span className="it">요약.</span>
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
            함께<br />만들어봐요,{' '}
            <span className="blue">정밀하게.</span>
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
