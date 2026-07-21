'use client';

import Link from 'next/link';
import { useReveal } from './UseReveal';
import { useParallax } from './useParallax';
import { PROJECTS } from './Data';

const PROJECT_COUNT = PROJECTS.length;

const ITEMS = [
  {
    num: '01',
    href: '/projects',
    title: 'PROJECTS',
    desc: '클라이언트 의뢰부터 개인 작업까지, 직접 만든 결과물들을 담았습니다. React, Next.js, Vue 등 다양한 기술로 구현한 작업들을 확인하실 수 있습니다.',
    label: `${PROJECT_COUNT} Projects`,
  },
  {
    num: '02',
    href: '/about',
    title: 'ABOUT',
    desc: '화면을 만드는 일을 5년째 해오면서 쌓아온 스택과 경력, 그리고 일하는 방식을 소개합니다.',
    label: 'Profile',
  },
];

function OvCard({ num, href, title, desc, label, index }: (typeof ITEMS)[number] & { index: number }) {
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
        <p className="ov-desc">{desc}</p>
        <span className="ov-meta">{label}</span>
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
        <p className="ov-lead reveal">
          <span className="ov-lead-tag">Projects</span>{ITEMS[0].desc}
          {' '}
          <span className="ov-lead-tag">About</span>{ITEMS[1].desc}
        </p>
      </div>

      <div className="ov-cards">
        {ITEMS.map((item, index) => (
          <OvCard key={item.href} {...item} index={index} />
        ))}
      </div>
    </section>
  );
}
