import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import Providers from '@/app/_components/common/Providers';
import { PropsWithChildren } from 'react';

import '@/css/globals.css';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zapp',
  description: '세상의 모든것을 연결',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
