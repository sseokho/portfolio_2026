'use client';

import { useState } from 'react';
import { useReveal } from './UseReveal';
import { PROJECTS, type Project } from './Data';

type Tab = 'work' | 'personal';

const TABS: { id: Tab; label: string; desc: string }[] = [
  {
    id: 'personal',
    label: 'Personal',
    desc: '스스로 배우고 싶은 것들을 직접 만들어보며 쌓아온 프로젝트들입니다.\nReact, Next.js, TypeScript, JavaScript, React Native를 활용해 다양한 웹 애플리케이션을 제작했으며, 기획부터 구현까지 혼자 고민하고 결정하는 과정에서 가장 많이 성장했습니다.',
  },
  {
    id: 'work',
    label: 'Work',
    desc: '실제 클라이언트와 함께한 프로젝트들입니다.\n관공서, 교육기관, 기업 등 다양한 업종의 웹사이트를 PC와 모바일 환경에 맞게 반응형으로 구현했습니다.\n요구사항을 정확히 파악하고 일정 안에 맞추는 것, 그리고 유지보수까지 책임지는 것이 이 경험에서 배운 것들입니다.',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <a
      className="proj-card reveal"
      href={project.href ?? '#'}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="thumb">
        {project.thumb
          ? <img src={project.thumb} alt={project.title} />
          : <span className="thumb-num">{project.num}</span>
        }
        <span className="arr">↗</span>
      </div>
      <div className="info">
        <span className="n">{project.num}</span>
        <h3 className="title">{project.title}</h3>
        <p className="desc">{project.desc}</p>
        <span className="meta">{project.client} · {project.role}</span>
      </div>
    </a>
  );
}

export default function ProjectsPage() {
  const [tab, setTab] = useState<Tab>('work');
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