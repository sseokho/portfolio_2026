'use client';

import { Fragment, type ReactNode } from 'react';
import Link from 'next/link';
import { useReveal } from './UseReveal';
import type { Project } from './Data';

function mainTitle(title: string): string {
  return title.split(/\s[-—]\s/)[0];
}

function highlightText(text: string, keywords: string[]): ReactNode {
  if (!keywords.length) return text;
  const escaped = [...keywords].sort((a, b) => b.length - a.length).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const re = new RegExp(`(${escaped.join('|')})`, 'g');
  return text.split(re).map((part, i) => (
    keywords.includes(part) ? <span key={i} className="hl">{part}</span> : <Fragment key={i}>{part}</Fragment>
  ));
}

export default function ProjectDetailPage({ project }: { project: Project }) {
  const ref = useReveal(project.id);

  const introParagraphs = project.intro ?? [project.desc];

  return (
    <div id="page-project-detail" className="page active" ref={ref}>

      {/* ─── 히어로 ─── */}
      <section className="pd-hero">
        <div className="grid">
          <Link href={`/projects?tab=${project.type}`} className="pd-back reveal">← BACK</Link>
        </div>
      </section>

      {/* ─── 1. 프로젝트 소개 ─── */}
      <section className="pd-intro-sec">
        <div className="grid">
          <h1 className="pd-title reveal">{mainTitle(project.title)}</h1>
        </div>
        <div className="grid pd-box">
          {introParagraphs.map((p, i) => (
            <p key={i} className="pd-intro reveal">{highlightText(p, project.descKeywords)}</p>
          ))}
        </div>
      </section>

      {/* ─── 2. 프로젝트 정보 ─── */}
      <section className="pd-info">
        <div className="grid">
          <h2 className="reveal">프로젝트 정보</h2>
        </div>
        <div className="grid pd-box">
          <dl className="pd-infolist reveal">
            <div className="pd-info-row">
              <dt>기간</dt>
              <dd>{project.period ?? '비공개'}</dd>
            </div>
            <div className="pd-info-row">
              <dt>주요 기능</dt>
              <dd>{project.features.join(', ')}</dd>
            </div>
            <div className="pd-info-row">
              <dt>주요 기술</dt>
              <dd>{project.stack.join(', ')}</dd>
            </div>
            <div className="pd-info-row">
              <dt>기여도</dt>
              <dd>{project.contribution}%</dd>
            </div>
            {(project.href || project.githubUrl) && (
              <div className="pd-info-row">
                <dt>링크</dt>
                <dd className="pd-info-links">
                  {project.href && (
                    <a className="pd-pill" href={project.href} target="_blank" rel="noreferrer">라이브 사이트</a>
                  )}
                  {project.githubUrl && (
                    <a className="pd-pill" href={project.githubUrl} target="_blank" rel="noreferrer">깃허브</a>
                  )}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      {/* ─── 3. 프로젝트 관련 자료 ─── */}
      {project.type === 'personal' && (
        <section className="pd-case">
          <div className="grid">
            <h2 className="reveal">프로젝트 관련 자료</h2>
          </div>
          <div className="grid pd-box">
            <div className="pd-devlog-list reveal">
              {(project.resources?.length ? project.resources : [{ label: '정리 예정입니다' }]).map(r => (
                r.href ? (
                  <a key={r.label} className="pd-devlog" href={r.href} target="_blank" rel="noreferrer">
                    {r.label} <span>↗</span>
                  </a>
                ) : (
                  <span key={r.label} className="pd-devlog disabled">{r.label}</span>
                )
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
