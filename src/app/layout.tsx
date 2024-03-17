import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import '@/css/globals.css';
import Providers from '@/components/common/Providers';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zapp',
  description: '세상의 모든것을 연결',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
