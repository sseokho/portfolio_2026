'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useReveal } from './UseReveal';
import { PROJECTS, type Project } from './Data';

type Tab = 'work' | 'personal';

const TABS: { id: Tab; label: string; desc: string }[] = [
  {
    id: 'personal',
    label: 'Personal',
    desc: '스스로 배우고 싶은 것들을 직접 만들어보며 쌓아온 프로젝트들입니다.\nReact, Next.js, Vue, JavaScript를 활용해 다양한 웹 애플리케이션을 기획부터 구현, 배포까지 직접 진행했습니다.',
  },
  {
    id: 'work',
    label: 'Work',
    desc: '실제 클라이언트와 함께한 프로젝트들입니다.\n공공기관, 교육기관, 쇼핑몰 등 다양한 업종의 웹사이트를 PC와 모바일 환경에 반응형으로 대응하고, 크로스 브라우징과 접근성까지 고려해 어떤 환경에서도 안정적으로 동작하도록 구현했습니다.',
  },
];

function splitTitle(title: string): { main: string; sub?: string } {
  const m = title.match(/^(.*?)\s[-—]\s(.*)$/);
  return m ? { main: m[1], sub: m[2] } : { main: title };
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { main, sub } = splitTitle(project.title);
  return (
    <Link
      className="proj-card reveal"
      href={`/projects/${project.id}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="thumb">
        {project.thumb && <img src={project.thumb} alt={project.title} />}
        <span className="arr">↗</span>
      </div>
      <div className="info">
        <h3 className="title">{main}</h3>
        {sub && <p className="desc">{sub}</p>}
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const initialTab: Tab = searchParams.get('tab') === 'work' ? 'work' : 'personal';
  const [tab, setTab] = useState<Tab>(initialTab);
  const ref = useReveal(tab);

  const filtered = PROJECTS.filter(p => p.type === tab);

  return (
    <div id="page-projects" className="page active" ref={ref}>

      {/* 섹션 헤더 */}
      <div className="projects-header grid">
        <div className="tabs">
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              className={`tab${tab === id ? ' on' : ''}`}
              onClick={() => setTab(id)}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="ph-desc">
          {TABS.find(t => t.id === tab)?.desc.split('\n').map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </p>
      </div>

      {/* 카드 그리드 */}
      <section className="proj-grid">
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </section>

    </div>
  );
}