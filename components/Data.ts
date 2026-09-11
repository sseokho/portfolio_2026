// ─── 프로젝트 목록 ───
export interface Resource {
  label: string;
  href?: string;
}

export interface Project {
  id: string;
  num: string;
  title: string;
  client: string;
  role: string;
  desc: string;
  intro?: string[];
  type: 'work' | 'personal';
  contribution: number;
  href?: string;
  githubUrl?: string;
  resources?: Resource[];
  thumb?: string;
  period?: string;
  stack: string[];
  features: string[];
  descKeywords: string[];
}

export const PROJECTS: Project[] = [
  // ─── work ───
  {
    id: 'inaea',
    num: '01',
    title: '학업성취도평가지원포털 - 반응형 웹',
    client: '한국교육과정평가원',
    role: 'UI 개발',
    desc: 'Next.js 15(App Router) · MUI 기반 SSR/CSR 하이브리드 구조로 공공 포털 반응형 퍼블리싱',
    type: 'work',
    contribution: 90,
    href: 'https://www.inaea.re.kr/portal',
    thumb: '/images/inaea.png',
    period: '2025.05 – 2025.12',
    stack: ['Next.js 15 (App Router)', 'React', 'TypeScript', 'MUI', 'REST API', 'SCSS'],
    features: ['SSR/CSR 하이브리드 렌더링', 'MUI 커스텀 테마', '반응형 그리드', '웹 접근성 준수'],
    descKeywords: ['SSR/CSR 하이브리드', 'MUI', '반응형 퍼블리싱'],
  },
  {
    id: 'nhis',
    num: '02',
    title: '건강보험빅데이터플랫폼 - 반응형 웹',
    client: '국민건강보험공단',
    role: 'UI 개발',
    desc: '건강보험 빅데이터 분석·제공 플랫폼 반응형 구축, 데이터 신청·현황·통계 등 주요 화면 퍼블리싱',
    type: 'work',
    contribution: 85,
    href: 'https://nhiss.nhis.or.kr/',
    thumb: '/images/nhis.png',
    period: '2024.04 – 2024.05',
    stack: ['HTML5', 'SCSS', 'JavaScript (jQuery)', 'Figma', '반응형 퍼블리싱'],
    features: ['데이터 신청 화면', '현황·통계 화면', '반응형 테이블', '크로스 브라우징'],
    descKeywords: ['반응형 구축', '데이터 신청·현황·통계'],
  },
  {
    id: 'lf-squaremall',
    num: '03',
    title: 'LF 스퀘어몰 - 반응형 웹',
    client: 'LF Corp.',
    role: 'UI 개발',
    desc: '패션 커머스 플랫폼 PC/모바일 반응형 리뉴얼, 상품 목록·상세·결제 등 주요 구매 흐름 페이지 퍼블리싱',
    type: 'work',
    contribution: 100,
    href: 'https://www.lfsquare.com/',
    thumb: '/images/lf-squaremall.png',
    period: '2025.07 – 2025.10',
    stack: ['HTML5', 'SCSS', 'JavaScript (jQuery)', 'JSP(Spring MVC) 연동', 'Figma'],
    features: ['상품 목록·상세', '장바구니·결제', 'PC/모바일 반응형', '옵션 실시간 반영'],
    descKeywords: ['PC/모바일 반응형', '구매 흐름'],
  },
  {
    id: 'mybeaker',
    num: '04',
    title: '마이비커',
    client: '마이비커',
    role: 'UI 개발',
    desc: '아모레퍼시픽 제품 개발용 내부 대시보드 디자인, 미니멀하고 가시성 높은 블루 톤 UX/UI 구현',
    type: 'work',
    contribution: 100,
    href: 'https://sseokho.github.io/myBEAKER/',
    githubUrl: 'https://github.com/sseokho/myBEAKER',
    thumb: '/images/myBeaker.png',
    period: '2026.06 – 2026.08',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Figma'],
    features: ['대시보드 UI 설계', '정보 위계 설계', '블루 톤 컬러 시스템'],
    descKeywords: ['내부 대시보드', '블루 톤'],
  },
  {
    id: 'kha',
    num: '05',
    title: '대한병원협회 - 반응형 웹',
    client: '대한병원협회',
    role: 'UI 개발',
    desc: '의료기관 대상 공공 웹사이트 신규 구축, 전 페이지 반응형 퍼블리싱',
    type: 'work',
    contribution: 100,
    href: 'https://www.kha.or.kr/kha_home/index.do',
    thumb: '/images/kha.png',
    period: '2025.02 – 2025.06',
    stack: ['HTML5', 'SCSS', 'JavaScript (jQuery)', '지니웍스(CMS)', 'JSP(Spring MVC)'],
    features: ['전 페이지 신규 구축', 'CMS 연동', '반응형 퍼블리싱'],
    descKeywords: ['신규 구축', '전 페이지 반응형'],
  },
  {
    id: 'ieum',
    num: '06',
    title: '이음온라인 - 웹 접근성',
    client: '이음온라인',
    role: '웹 접근성',
    desc: '장애인 문화예술 콘텐츠 서비스 웹접근성 고려 퍼블리싱, 스크린리더 대응 및 키보드 탐색 등 WCAG 기준 준수',
    type: 'work',
    contribution: 100,
    href: 'https://www.ieum.or.kr',
    thumb: '/images/ieum.png',
    period: '2022.06 – 2023.12',
    stack: ['HTML5', 'CSS3', 'JavaScript (jQuery)', 'WCAG 2.1', '스크린리더 대응'],
    features: ['스크린리더 대응', '키보드 탐색', 'WCAG 2.1 준수'],
    descKeywords: ['웹접근성', '스크린리더 대응', 'WCAG'],
  },
  // ─── personal ───
  {
    id: 'dive',
    num: '01',
    title: 'DIVE — AI 영화 디스커버리',
    client: '사이드 프로젝트',
    role: '기획 · 개발',
    desc: '당신의 취향을 발견하는 시네마 디스커버리 서비스 - Next.js와 Google Gemini로 만든 AI 영화 디스커버리 서비스',
    intro: [
      'DIVE는 트렌드를 그냥 나열하는 대신, "지금 나에게 맞는 한 편"을 찾아주는 것을 목표로 만든 AI 영화 디스커버리 서비스입니다. 5문항짜리 취향 퀴즈에 답하면 Google Gemini가 답변을 분석해 취향 프로필을 만들고, 그 프로필을 기반으로 영화를 추천합니다.',
      '검색도 키워드 대신 문장으로 할 수 있습니다. "비 오는 날 혼자 보기 좋은 일본 영화"처럼 자연스럽게 말하면 Gemini가 이를 장르·키워드 같은 실제 검색 조건으로 해석해 TMDB 데이터와 연결합니다.',
      'TMDB 실시간 트렌딩, 홈/상세 화면의 YouTube 트레일러 재생, 국내 OTT 제공 여부 표시까지 더해 "볼지 말지" 고민하는 시간을 줄이는 데 집중했습니다. Supabase로 이메일·Google 로그인과 찜 목록을 지원하고, PWA로 설치해 앱처럼 쓸 수 있습니다.',
    ],
    type: 'personal',
    contribution: 100,
    href: 'https://dive-five.vercel.app',
    thumb: '/images/dive.png',
    period: '2025.03 – 2025.05',
    stack: [
      'Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui',
      'Zustand', 'Supabase (Auth/PostgreSQL)', 'Google Gemini API', 'TMDB API', 'Serwist (PWA)',
    ],
    features: [
      '취향 퀴즈 → AI 추천', '자연어 검색', 'TMDB 실시간 트렌딩', 'YouTube 트레일러 재생',
      '국내 OTT 제공 정보', 'PWA 설치',
    ],
    descKeywords: ['Google Gemini', 'TMDB', 'PWA', 'YouTube 트레일러'],
    resources: [
      { label: 'shadcn/ui란?', href: 'https://velog.io/@sonseokho/shadcnui란' },
      { label: 'Google Gemini AI 취향 연동', href: 'https://velog.io/@sonseokho/DIVE-개발기록-Google-Gemini-AI-취향-연동은-어떻게-했나' },
      { label: '트러블슈팅', href: 'https://velog.io/@sonseokho/DIVE-트러블슈팅' },
    ],
  },
  {
    id: 'littleDay',
    num: '02',
    title: '소일 — 할 일 관리',
    client: '사이드 프로젝트',
    role: '기획 · 개발',
    desc: 'Next.js와 Supabase로 만든 미니멀 할 일 관리 앱 - Google 로그인, 실시간 상태 업데이트, PWA 설치까지 지원',
    type: 'personal',
    contribution: 100,
    href: 'https://littleday-nine.vercel.app',
    thumb: '/images/littleday.png',
    period: '2026.03 – 2026.06',
    stack: ['Next.js', 'Supabase', 'Google OAuth', 'PWA', 'Zustand'],
    features: ['Google 로그인', '실시간 동기화', 'PWA 설치'],
    descKeywords: ['Supabase', '실시간 상태 업데이트', 'PWA'],
    resources: [
      { label: 'SSR, SSG, ISR', href: 'https://velog.io/@sonseokho/Next.js의-SSR-SSG-ISR-언제-뭘-써야-할까' },
      { label: '트러블슈팅', href: 'https://velog.io/@sonseokho/할-일-완료-체크에-낙관적-업데이트-적용하기' },
    ],
  },
  {
    id: 'airmug-pro',
    num: '03',
    title: 'AirMug Pro — 세라믹 머그 스크롤 랜딩 페이지',
    client: '사이드 프로젝트',
    role: '개발',
    desc: '바닐라 HTML/CSS/JS로 만들어진 강의용 스크롤 애니메이션 소스를 React + Vite 구조로 새로 이식한 제품 랜딩 페이지 - 캔버스 프레임 시퀀스로 구현한 스크럽 비디오, 이미지 블렌드 전환, 스크롤 반응형 내비게이션을 담았습니다. 포팅 과정에서 원본에 있던 실제 버그 여러 건을 발견해 고쳤습니다.',
    type: 'personal',
    contribution: 100,
    href: 'https://airmug-pro.vercel.app',
    githubUrl: 'https://github.com/sseokho/airmug-pro',
    thumb: '/images/airmug-pro.png',
    period: '2026.08',
    stack: ['React', 'Vite', 'Canvas API', 'Intersection Observer', 'requestAnimationFrame'],
    features: ['캔버스 프레임 시퀀스 스크럽', '이미지 블렌드 전환', '스크롤 반응형 내비게이션', '스크롤 진행률 표시 바'],
    descKeywords: ['React + Vite', '캔버스 프레임 시퀀스', '실제 버그 여러 건'],
    resources: [
      { label: 'Canvas API', href: 'https://velog.io/@sonseokho/Canvas-API-문법과-AirMug-Pro-적용-정리' },
      { label: 'IntersectionObserver', href: 'https://velog.io/@sonseokho/IntersectionObserver-문법과-AirMug-Pro-적용-정리' },
      { label: 'requestAnimationFrame', href: 'https://velog.io/@sonseokho/requestAnimationFrame-문법과-AirMug-Pro-적용-정리' },
      { label: '트러블슈팅', href: 'https://velog.io/@sonseokho/트러블슈팅-이미지-블렌딩-캔버스가-왼쪽으로-쏠려-보이는-문제' },
    ],
  },
  {
    id: 'sizzle',
    num: '04',
    title: 'Sizzle — 음식 취향 기반 SNS',
    client: '사이드 프로젝트',
    role: '기획 · 개발',
    desc: 'Vue 3(Composition API)와 Firebase로 만든 음식 사진 SNS - 팔로우 기반 피드, 카테고리 필터·검색, 실시간 인기 랭킹, 저장 기능을 지원합니다. (카카오맵 기반 맛집 지도는 개발 예정)',
    type: 'personal',
    contribution: 100,
    href: 'https://sizzle-sns.vercel.app',
    githubUrl: 'https://github.com/sseokho/sizzle',
    thumb: '/images/sizzle.png',
    period: '2024.10 – 2026.08',
    stack: ['Vue 3 (Composition API)', 'Vue Router 4', 'Vuex 4', 'Vite', 'Firebase (Auth/Firestore)'],
    features: ['팔로우 피드', '카테고리 필터·검색', '실시간 인기 랭킹', '게시물 업로드·저장'],
    descKeywords: ['Vue 3(Composition API)', '실시간 인기 랭킹', '개발 예정'],
    resources: [
      { label: 'Vue 컴포넌트 작성 방식', href: 'https://velog.io/@sonseokho/Vue-컴포넌트-작성-방식-Composition-API-vs-Options-API' },
      { label: 'Vue 상태관리', href: 'https://velog.io/@sonseokho/Vue-상태관리-전역-vs-로컬-그리고-Vuex-vs-Pinia' },
      { label: '서버리스 아키텍처', href: 'https://velog.io/@sonseokho/서버리스-아키텍처-보안과-데이터-흐름-개념' },
      { label: 'PWA 개념', href: 'https://velog.io/@sonseokho/PWA-프레임워크-기능이-아니라-빌드-도구의-산출물' },
      { label: '트러블슈팅', href: 'https://velog.io/@sonseokho/SIZZLE-트러블슈팅-카카오맵-연동에서-겪은-문제들' },
    ],
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
  { label: 'GitHub',   href: 'https://github.com/sseokho' },
  { label: 'Career Summary', href: '/etc/career.pdf' },
  { label: 'Resume',   href: '/etc/resume.pdf' },
];