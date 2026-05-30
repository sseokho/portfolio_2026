'use client';

import Link from 'next/link';
import { useReveal } from './UseReveal';

const ITEMS = [
  {
    num: '01',
    href: '/projects',
    title: 'PROJECTS',
    desc: '클라이언트 의뢰부터 개인 실험까지, 인터페이스의 질감과 모션의 결을 다듬어온 작업들. Work와 Personal로 나뉩니다.',
    label: '8 Projects',
  },
  {
    num: '02',
    href: '/about',
    title: 'ABOUT',
    desc: '사용하는 스택, 걸어온 경력, 그리고 연락처. 빠르게 만드는 것보다 한 번 더 다듬는 것을 선택하는 엔지니어입니다.',
    label: 'Profile',
  },
];

export default function Overview() {
  const ref = useReveal();

  return (
    <section className="overview" ref={ref}>
      <div className="grid">
        <span className="ov-label reveal">Overview</span>
      </div>

      {ITEMS.map(({ num, href, title, desc, label }) => (
        <Link key={href} href={href} className="ov-row reveal">
          <div className="grid">
            <span className="ov-num">{num}</span>
            <h2 className="ov-title">{title}</h2>
            <p className="ov-desc">{desc}</p>
            <div className="ov-meta">
              <span>{label}</span>
              <span className="ov-arr">↗</span>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
