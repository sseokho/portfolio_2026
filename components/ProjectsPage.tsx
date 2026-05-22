'use client';

import { useState } from 'react';
import { useReveal } from './UseReveal';
import { PROJECTS, type Project } from './Data';

type Tab = 'work' | 'personal';

const TABS: { id: Tab; label: string }[] = [
  { id: 'personal', label: 'Personal' },
  { id: 'work',     label: 'Work'     },
];

function IndexRow({ project }: { project: Project }) {
  return (
    <a
      className="index-row reveal"
      href={project.href ?? '#'}
      role="row"
    >
      <span className="n">{project.num}</span>
      <span className="title">{project.title}</span>
      <span className="client">{project.client}</span>
      <span className="role">{project.role}</span>
      <span className="yr">{project.year}</span>
      <span className="arr">↗</span>

      <div className="hover-img">
        <span className="cap">{project.num} — {project.client}</span>
        {project.thumb
          ? <img src={project.thumb} alt={project.title} />
          : <div style={{ width: '100%', height: '100%', background: 'var(--paper)' }} />
        }
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

      {/* 인덱스 테이블 */}
      <section className="index-table" role="table" aria-label="프로젝트 목록">
        {filtered.map(project => (
          <IndexRow key={project.id} project={project} />
        ))}
      </section>

    </div>
  );
}