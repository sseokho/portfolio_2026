import Layout from '@/components/Layout';
import ProjectsPage from '@/components/ProjectsPage';
import TweaksPanel from '@/components/TweaksPanel';

export default function Projects() {
  return (
    <>
      <Layout>
        <ProjectsPage />
      </Layout>
      <TweaksPanel />
    </>
  );
}
