// app/page.tsx
'use client';

import Layout from '@/app/components/Layout';
import ProjectsPage from '@/app/components/ProjectsPage';
import AboutPage from '@/app/components/AboutPage';
import TweaksPanel from '@/app/components/TweaksPanel';

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