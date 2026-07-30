# SEOKHO SON — Portfolio 2026

안녕하세요. 손석호의 포트폴리오 사이트입니다.

## 기술 스택

- **Framework** : Next.js 16 (App Router)
- **Language** : TypeScript
- **Styling** : CSS (globals.css, 컴포넌트별 클래스)
- **Runtime** : React 19

## 주요 기능

- 프로젝트 소개 및 상세 페이지
- 경력 및 스킬 섹션
- 커스텀 커서 / 스크롤 reveal 애니메이션
- 색상 테마 커스터마이징 (TweaksPanel)

## 실행 방법

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 프로젝트 구조

```
portfolio_2026/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Layout.tsx        ← 레이아웃, 네비게이션
│   ├── Hero.tsx          ← 히어로 섹션
│   ├── ProjectsPage.tsx  ← 프로젝트 목록
│   ├── AboutPage.tsx     ← 소개 페이지
│   ├── Overview.tsx      ← 프로젝트 상세
│   ├── TweaksPanel.tsx   ← 색상 테마 패널
│   ├── Cursor.tsx        ← 커스텀 커서
│   ├── Data.ts           ← 프로젝트/스킬/경력 데이터
│   ├── UseTweaks.ts      ← 테마 설정 훅
│   └── UseReveal.tsx     ← 스크롤 reveal 훅
│
└── public/
    └── images/           ← 프로젝트 썸네일 이미지
```
