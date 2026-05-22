import Layout from '@/components/Layout';
import AboutPage from '@/components/AboutPage';
import TweaksPanel from '@/components/TweaksPanel';

export default function About() {
  return (
    <>
      <Layout>
        <AboutPage />
      </Layout>
      <TweaksPanel />
    </>
  );
}
