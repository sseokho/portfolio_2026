# portfolio_2026

# 포트폴리오 React 전환 가이드

## 프로젝트 세팅

```bash
npx create-next-app@latest portfolio --typescript --tailwind=false --app --src-dir=false
cd portfolio
```

## 파일 배치

```
portfolio/
├── app/
│   ├── layout.tsx        ← <html>, <body>, globals.css import
│   ├── page.tsx          ← ★ 제공된 파일
│   └── globals.css       ← ★ 제공된 파일
│
└── components/
    ├── Layout.tsx         ← ★ 루러, 레일, 네비
    ├── Hero.tsx           ← ★ 히어로 섹션
    ├── ProjectsPage.tsx   ← ★ 프로젝트 인덱스
    ├── AboutPage.tsx      ← ★ 어바웃 페이지
    ├── TweaksPanel.tsx    ← ★ 설정 패널
    ├── data.ts            ← ★ 프로젝트/스킬/경력 데이터
    ├── useTweaks.ts       ← ★ 설정 훅
    └── useReveal.ts       ← ★ 스크롤 reveal 훅
```

## app/layout.tsx 예시

```tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEOKHO SON — Index v.2',
  description: '디자인 엔지니어 김지원의 포트폴리오',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
```

## page.tsx 수정 사항

`Layout` 컴포넌트에 `active` prop을 넘겨야 합니다.  
`ProjectsPage`와 `AboutPage`에 `active: boolean`을 추가하고  
컴포넌트 내부에서:

```tsx
// ProjectsPage.tsx / AboutPage.tsx
export default function ProjectsPage({ active }: { active: boolean }) {
  return (
    <div className={`page${active ? ' active' : ''}`} ...>
```

## 커스터마이징 포인트

| 파일 | 수정 내용 |
|------|----------|
| `data.ts` | 프로젝트 목록, 경력, 스킬 수치 |
| `Hero.tsx` | 이름, 타이틀 문구, 포트레이트 이미지 |
| `globals.css` `:root` | 기본 accent 색상 |
| `TweaksPanel.tsx` | 색상 프리셋 목록 |

## 이미지 추가

`Project` 타입의 `thumb` 필드에 `/public` 경로 입력:

```ts
{ id: 'layered', thumb: '/thumbs/layered.jpg', ... }
```