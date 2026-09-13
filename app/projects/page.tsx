import { Suspense } from 'react';
import Layout from '@/components/Layout';
import ProjectsPage from '@/components/ProjectsPage';
import TweaksPanel from '@/components/TweaksPanel';

export default function Projects() {
  return (
    <>
      <Layout>
        <Suspense fallback={null}>
          <ProjectsPage />
        </Suspense>
      </Layout>
      <TweaksPanel />
    </>
  );
}
