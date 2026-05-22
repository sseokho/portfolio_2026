// ─── 프로젝트 목록 ───
export interface Project {
  id: string;
  num: string;
  title: string;
  client: string;
  role: string;
  year: string;
  type: 'work' | 'personal';
  href?: string;
  thumb?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'layered',
    num: '01',
    title: 'Layered — 협업 캔버스',
    client: 'Layered Inc.',
    role: '디자인 엔지니어',
    year: '2025',
    type: 'work',
    href: '#',
  },
  {
    id: 'margiela',
    num: '02',
    title: 'Maison Margiela JP — 룩북',
    client: 'House Margiela JP',
    role: '크리에이티브 테크',
    year: '2024',
    type: 'work',
    href: '#',
  },
  {
    id: 'toss',
    num: '03',
    title: 'Toss Place — 디자인 시스템',
    client: 'Toss Place',
    role: '시스템 엔지니어',
    year: '2024',
    type: 'work',
    href: '#',
  },
  {
    id: 'mwc',
    num: '04',
    title: 'MWC 2024 — 인터랙티브 부스',
    client: 'Samsung · MWC',
    role: '프론트엔드',
    year: '2024',
    type: 'work',
    href: '#',
  },
  {
    id: 'nara',
    num: '03',
    title: 'Studio Nara — 에이전시 사이트',
    client: 'Studio Nara',
    role: '프론트엔드',
    year: '2023',
    type: 'personal',
    href: '#',
  },
  {
    id: 'atelier',
    num: '04',
    title: 'Atelier 222 — 이커머스',
    client: 'Atelier 222',
    role: '프론트엔드',
    year: '2022',
    type: 'personal',
    href: '#',
  },
  {
    id: 'subtle',
    num: '05',
    title: 'Subtle — 메모 앱',
    client: '사이드 프로젝트',
    role: '개인',
    year: '2022',
    type: 'personal',
    href: '#',
  },
  {
    id: 'loop',
    num: '06',
    title: 'Loop — 음악 탐험가',
    client: '사이드 프로젝트',
    role: '개인',
    year: '2022',
    type: 'personal',
    href: '#',
  },
];

// ─── 스택 매트릭스 ───
export interface SkillCell {
  label: string;
  name: string;
  level: number; // 0~100
  highlight?: boolean;
}

export const SKILLS: SkillCell[] = [
  { label: 'Lang',   name: 'TypeScript',  level: 96, highlight: true },
  { label: 'Lang',   name: 'GLSL',        level: 40 },
  { label: 'Lang',   name: 'Python',      level: 30 },
  { label: 'Lang',   name: 'Swift',       level: 25 },
  { label: 'Fwk',    name: 'Next.js',     level: 92, highlight: true },
  { label: 'Fwk',    name: 'Remix',       level: 55 },
  { label: 'Fwk',    name: 'Svelte',      level: 60 },
  { label: 'Fwk',    name: 'RN · Expo',   level: 50 },
  { label: 'Motion', name: 'GSAP',        level: 88, highlight: true },
  { label: 'Motion', name: 'Framer',      level: 80, highlight: true },
  { label: '3D',     name: 'Three / R3F', level: 62 },
  { label: 'Tool',   name: 'Figma',       level: 98, highlight: true },
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
    period: '2025 — 현재',
    role: '디자인 엔지니어',
    company: 'Layered Inc. · 협업 캔버스 SaaS',
    location: '서울 · 한국',
  },
  {
    period: '2024',
    role: '리드 프론트엔드',
    company: 'House Margiela JP · 시즌 룩북 사이트',
    location: '도쿄 · 일본',
  },
  {
    period: '2023 — 2024',
    role: '디자인 시스템 엔지니어',
    company: 'Toss Place · 사내 50개 이상 제품 시스템',
    location: '서울 · 한국',
  },
  {
    period: '2022 — 2023',
    role: '프론트엔드 엔지니어',
    company: 'Studio Nara · 디자인 스튜디오',
    location: '서울 · 한국',
  },
  {
    period: '2021',
    role: '프론트엔드 인턴',
    company: 'Mash-Up Studio · 인턴십',
    location: '서울 · 한국',
  },
];

// ─── 연락처 링크 ───
export const CONTACT_LINKS = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Github',   href: '#' },
  { label: 'Read.cv',  href: '#' },
  { label: 'Are.na',   href: '#' },
  { label: '이력서.pdf', href: '#' },
];