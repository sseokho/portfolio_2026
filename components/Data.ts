// ─── 프로젝트 목록 ───
export interface Project {
  id: string;
  num: string;
  title: string;
  client: string;
  role: string;
  desc: string;
  type: 'work' | 'personal';
  href?: string;
  thumb?: string;
}

export const PROJECTS: Project[] = [
  // ─── work ───
  {
    id: 'nhis',
    num: '01',
    title: '건강보험빅데이터플랫폼 — 반응형 웹',
    client: '국민건강보험공단',
    role: 'UI 개발',
    desc: '건강보험 빅데이터 분석·제공 플랫폼 반응형 구축, 데이터 신청·현황·통계 등 주요 화면 퍼블리싱',
    type: 'work',
    href: 'https://nhiss.nhis.or.kr/',
    thumb: '/images/nhis.png',
  },
  {
    id: 'lf-squaremall',
    num: '02',
    title: 'LF 스퀘어몰 — 반응형 웹',
    client: 'LF Corp.',
    role: 'UI 개발',
    desc: '패션 커머스 플랫폼 PC/모바일 반응형 리뉴얼, 상품 목록·상세·결제 등 주요 구매 흐름 페이지 퍼블리싱',
    type: 'work',
    href: 'https://www.lfsquare.com/',
    thumb: '/images/lf-squaremall.png',
  },
  {
    id: 'mybeaker',
    num: '03',
    title: '마이비커 — 반응형 웹',
    client: '마이비커',
    role: 'UI 개발',
    desc: '실험실 소모품 B2B 커머스 플랫폼 반응형 제작, 상품 탐색·주문·마이페이지 등 핵심 구매 흐름 화면 구현',
    type: 'work',
    href: 'https://sseokho.github.io/myBEAKER/',
    thumb: '/images/myBeaker.png',
  },
  {
    id: 'kha',
    num: '04',
    title: '대한병원협회 — 반응형 웹',
    client: '대한병원협회',
    role: 'UI 개발',
    desc: '의료기관 대상 공공 웹사이트 신규 구축, 공지·자료실·협회 소개 등 전 페이지 반응형 퍼블리싱',
    type: 'work',
    href: 'https://www.kha.or.kr/kha_home/index.do',
    thumb: '/images/kha.png',
  },
  {
    id: 'ieum',
    num: '05',
    title: '이음온라인 — 웹 접근성',
    client: '이음온라인',
    role: '웹 접근성',
    desc: '장애인 문화예술 콘텐츠 서비스 웹접근성 고려 퍼블리싱, 스크린리더 대응 및 키보드 탐색 등 WCAG 기준 준수',
    type: 'work',
    href: 'https://www.ieum.or.kr',
    thumb: '/images/ieum.png',
  },
  {
    id: 'kctdi',
    num: '06',
    title: '관세무역개발원 — 반응형 웹',
    client: '관세무역개발원',
    role: 'UI 개발',
    desc: '관세·무역 교육기관 공식 사이트 반응형 제작, 교육과정·공지·기관 소개 등 정보 전달 중심 화면 구성',
    type: 'work',
    href: 'https://www.kctdi.or.kr/kctdi/index.do',
    thumb: '/images/kctdi.png',
  },
  // ─── personal ───
  {
    id: 'dive',
    num: '01',
    title: 'DIVE — 영화 취향 탐색',
    client: '사이드 프로젝트',
    role: '기획 · 개발',
    desc: 'Next.js와 Gemini AI로 만든 영화 디스커버리 서비스 — 취향 퀴즈, 자연어 검색, TMDB 트렌딩, OTT 정보까지 지원',
    type: 'personal',
    href: 'https://dive-five.vercel.app',
    thumb: '/images/dive.png',
  },
  {
    id: 'littleDay',
    num: '02',
    title: '소일 — 할 일 관리',
    client: '사이드 프로젝트',
    role: '기획 · 개발',
    desc: 'Next.js와 Supabase로 만든 미니멀 할 일 관리 앱 — Google 로그인, 실시간 상태 업데이트, PWA 설치까지 지원',
    type: 'personal',
    href: 'https://littleday-nine.vercel.app',
    thumb: '/images/littleday.png',
  },
  {
    id: 'sizzle',
    num: '03',
    title: 'Sizzle — 음식 취향 기반 SNS',
    client: '사이드 프로젝트',
    role: '기획 · 개발',
    desc: 'Vue 3와 Firebase로 만든 음식 사진 SNS — 팔로우 피드, 실시간 인기 랭킹, 카카오맵 맛집 지도를 담은 소셜 서비스',
    type: 'personal',
    href: 'https://sizzle-sns.vercel.app',
    thumb: '/images/sizzle.png',
  },
  {
    id: 'nova',
    num: '04',
    title: 'NOVA — AI 기반 차세대 플랫폼',
    client: '사이드 프로젝트',
    role: '기획 · 개발',
    desc: 'React와 GSAP ScrollTrigger로 만든 AI 플랫폼 랜딩 페이지 — 수평 스크롤, 패럴랙스, 섹션별 인터랙션 애니메이션을 담은 인터랙티브 웹',
    type: 'personal',
    href: 'https://nova-plat.vercel.app',
    thumb: '/images/nova.png',
  },
];

// ─── 스택 매트릭스 ───
export type SkillRow =
  | { type: 'sep'; label: string }
  | { type: 'cell'; label: string; name: string; level: number };

export const SKILLS: SkillRow[] = [
  { type: 'sep',  label: 'Front-end' },
  { type: 'cell', label: 'Lang',  name: 'JavaScript',        level: 85 },
  { type: 'cell', label: 'Fwk',   name: 'Vue',               level: 75 },
  { type: 'cell', label: 'Fwk',   name: 'React',             level: 83 },
  { type: 'cell', label: 'Fwk',   name: 'Next.js',           level: 75 },
  { type: 'sep',  label: 'UI & State' },
  { type: 'cell', label: 'Style', name: 'Tailwind CSS',      level: 72 },
  { type: 'cell', label: 'Style', name: 'Gsap',              level: 65 },
  { type: 'cell', label: 'State', name: 'Zustand',           level: 75 },
  { type: 'cell', label: 'Tool',  name: 'Figma',             level: 82 },
  { type: 'sep',  label: 'Backend & Infra' },
  { type: 'cell', label: 'BaaS',  name: 'Firebase',          level: 62 },
  { type: 'cell', label: 'BaaS',  name: 'Supabase',          level: 70 },
  { type: 'cell', label: 'Infra', name: 'Vercel',            level: 82 },
  { type: 'cell', label: 'Tool',  name: 'GitHub',            level: 85 },
];

// ─── 경력 ───
export interface ExpItem {
  period: string;
  role: string;
  company: string;
  location: string;
  href?: string;
}

export const EXPERIENCE: ExpItem[] = [
  {
    period: '2022.05 — 현재',
    role: '퍼블리셔팀 주임',
    company: '워드앤코드',
    location: '서울',
  },
  {
    period: '2021.05 — 2021.12',
    role: '디자인팀 사원',
    company: '에듀라인',
    location: '서울',
  },
];

// ─── 자격증 ───
export interface CertItem {
  name: string;
  issuer: string;
  date: string;
}

// ─── 연락처 링크 ───
export const CONTACT_LINKS = [
  { label: 'Email',    href: 'mailto:tjrgh538@naver.com' },
  { label: 'GitHub',   href: 'https://github.com/seokho538' },
  { label: 'Certificate', href: '/etc/software.pdf' },
  { label: 'Resume',   href: '/etc/resume.pdf' },
];