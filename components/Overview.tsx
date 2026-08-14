'use client';

import Link from 'next/link';
import { useReveal } from './UseReveal';
import { useParallax } from './useParallax';

const ITEMS = [
  {
    num: '01',
    href: '/projects',
    title: 'PROJECTS',
    words: 'Work · Client · Personal',
  },
  {
    num: '02',
    href: '/about',
    title: 'ABOUT',
    words: 'Profile · Career · Skills',
  },
];

function OvCard({ num, href, title, words, index }: (typeof ITEMS)[number] & { index: number }) {
  const ref = useParallax<HTMLAnchorElement>(.06);
  return (
    <Link href={href} className="ov-card reveal" ref={ref} style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="ov-card-head">
        <div className="ov-card-head-top">
          <span className="ov-n">{num}</span>
          <span className="ov-arr">↗</span>
        </div>
        <h2 className="ov-title">{title}</h2>
      </div>
      <div className="ov-card-body">
        <span className="ov-words">{words}</span>
      </div>
    </Link>
  );
}

export default function Overview() {
  const ref = useReveal();

  return (
    <section className="overview" ref={ref}>
      <div className="grid">
        <span className="ov-label reveal">OVERVIEW</span>
        <div className="ov-lead reveal">
          <p className="ov-lead-block">
            <span className="ov-lead-word">PROJECTS</span>는 클라이언트 의뢰부터 개인 작업까지, 직접 만든 결과물들을 담았습니다. React, Next.js, Vue 등 다양한 기술로 구현한 작업들을 확인하실 수 있습니다.
            <br />
            <span className="ov-lead-word">ABOUT</span>은 저에 대한 소개와 함께, 5년째 화면을 만들어오며 쌓은 기술과 경험을 정리했습니다.
          </p>
        </div>
      </div>

      <div className="ov-cards">
        {ITEMS.map((item, index) => (
          <OvCard key={item.href} {...item} index={index} />
        ))}
      </div>
    </section>
  );
}
