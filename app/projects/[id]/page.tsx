import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Layout from '@/components/Layout';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import TweaksPanel from '@/components/TweaksPanel';
import { PROJECTS } from '@/components/Data';

export function generateStaticParams() {
  return PROJECTS.map(p => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find(p => p.id === id);
  return { title: project ? `${project.title} · SEOKHO SON` : 'SEOKHO SON' };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = PROJECTS.find(p => p.id === id);
  if (!project) notFound();

  return (
    <>
      <Layout>
        <ProjectDetailPage project={project} />
      </Layout>
      <TweaksPanel />
    </>
  );
}
