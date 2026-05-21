'use client';

import { useReveal } from './useReveal';
import { PROJECTS, type Project } from './data';
import Hero from './Hero';

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

      {/* 호버 썸네일 */}
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
  const ref = useReveal();

  return (
    <div id="page-projects" className="page active" ref={ref}>

      <Hero />

      {/* 섹션 헤더 */}
      <div className="sec-title">
        <span className="num">§ 01</span>
        <h2>선택된 <span className="it">작업들.</span></h2>
        <span className="right">{PROJECTS.length}개 프로젝트</span>
      </div>

      {/* 인덱스 테이블 */}
      <section className="index-table" role="table" aria-label="프로젝트 목록">
        {PROJECTS.map(project => (
          <IndexRow key={project.id} project={project} />
        ))}
      </section>

    </div>
  );
}