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
    id: 'lf-squaremall',
    num: '01',
    title: 'LF 스퀘어몰 — 반응형 웹',
    client: 'LF Corp.',
    role: 'UI 개발',
    desc: '패션 커머스 플랫폼 PC/모바일 반응형 리뉴얼, 상품 목록·상세·결제 등 주요 구매 흐름 페이지 퍼블리싱',
    type: 'work',
    href: '#',
    thumb: '/lf-squaremall.png',
  },
  {
    id: 'kha',
    num: '02',
    title: '대한병원협회 — 반응형 웹',
    client: '대한병원협회',
    role: 'UI 개발',
    desc: '의료기관 대상 공공 웹사이트 신규 구축, 공지·자료실·협회 소개 등 전 페이지 반응형 퍼블리싱',
    type: 'work',
    href: '#',
    thumb: '/kha.png',
  },
  {
    id: 'kma',
    num: '03',
    title: '국민취업지원제도 — 반응형 웹',
    client: 'KMA · 고용노동부',
    role: 'UI 개발',
    desc: '고용노동부 산하 취업 지원 서비스 반응형 제작, 신청 절차·안내·FAQ 등 사용자 유입 주요 화면 구현',
    type: 'work',
    href: '#',
  },
  {
    id: 'nepa',
    num: '04',
    title: '전국경제진흥협의회 — 반응형 웹',
    client: '전국경제진흥협의회',
    role: 'UI 개발',
    desc: '지역 경제 진흥 기관 공식 사이트 반응형 제작, 사업 소개·조직도·게시판 등 기관 정보 전달 중심 화면 구성',
    type: 'work',
    href: '#',
    thumb: '/epaa.png',
  },
  {
    id: 'eum',
    num: '05',
    title: '이음온라인 — 웹 접근성',
    client: '이음온라인',
    role: '웹 접근성',
    desc: '장애인 문화예술 콘텐츠 서비스 웹접근성 고려 퍼블리싱, 스크린리더 대응 및 키보드 탐색 등 WCAG 기준 준수',
    type: 'work',
    href: '#',
    thumb: '/ieum.png',
  },
  {
    id: 'youguard',
    num: '06',
    title: '유가드 — 관리자 대시보드',
    client: '법무부',
    role: 'UI · 대시보드',
    desc: '성범죄자 관리 시스템 관리자 대시보드 제작, 현황 통계·대상자 목록·설정 등 내부 운영 기능 화면 구현',
    type: 'work',
    href: '#',
  },
  // ─── personal ───
  {
    id: 'dive',
    num: '01',
    title: 'Dive — 영화 취향 탐색',
    client: '사이드 프로젝트',
    role: '기획 · 개발',
    desc: '영화 취향 분석 기반 추천 서비스, Next.js PWA로 제작, 선호 장르·키워드 선택 플로우 및 결과 화면 구현',
    type: 'personal',
    href: '#',
  },
  {
    id: 'soil',
    num: '02',
    title: '소일 — 할 일 관리',
    client: '사이드 프로젝트',
    role: '기획 · 개발',
    desc: '일상 태스크 관리 투두 앱, Next.js PWA로 제작, 할 일 등록·완료·분류 등 핵심 기능 화면 및 오프라인 대응 구현',
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

// ─── 자격증 ───
export interface CertItem {
  name: string;
  issuer: string;
  date: string;
}

// ─── 연락처 링크 ───
export const CONTACT_LINKS = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Github',   href: '#' },
  { label: 'Read.cv',  href: '#' },
  { label: 'Are.na',   href: '#' },
  { label: '이력서.pdf', href: '#' },
];