'use client';

import Layout from '@/components/Layout';
import ProjectsPage from '@/components/ProjectsPage';
import AboutPage from '@/components/AboutPage';
import TweaksPanel from '@/components/TweaksPanel';

export default function Home() {
  return (
    <>
      <Layout>
        {(page) => (
          <>
            {/* 두 페이지 모두 DOM에 마운트, CSS로 active 제어 */}
            <ProjectsPage active={page === 'projects'} />
            <AboutPage    active={page === 'about'}    />
          </>
        )}
      </Layout>

      <TweaksPanel />
    </>
  );
}