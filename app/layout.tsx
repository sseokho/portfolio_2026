import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SEOKHO SON',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}