import type { Metadata } from 'next';
import './globals.css';
import Cursor from '@/components/Cursor';

export const metadata: Metadata = {
  title: 'SEOKHO SON',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}