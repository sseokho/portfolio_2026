'use client';

import { useState } from 'react';
import { useReveal } from './UseReveal';
import { PROJECTS, type Project } from './Data';

type Tab = 'work' | 'personal';

const TABS: { id: Tab; label: string }[] = [
  { id: 'personal', label: 'Personal' },
  { id: 'work',     label: 'Work'     },
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
        <div className="ph-left">
          <span className="ph-label">§ 01 — Selected Works</span>
          <h1 className="ph-title">Projects</h1>
          <div className="tabs" style={{ marginTop: 32 }}>
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
        </div>
        <div className="ph-right">
          <p className="ph-desc">
            클라이언트 의뢰부터 개인 실험까지 — 인터페이스의 질감과
            모션의 결을 치밀하게 다듬어온 작업들입니다.
          </p>
          <span className="ph-count">{filtered.length} Projects</span>
        </div>
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