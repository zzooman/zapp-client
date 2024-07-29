import Container from '@/app/_components/common/Container';
import Header from '@/app/_components/common/header/Header';
import { PropsWithChildren } from 'react';

export default function PostProductLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header back title="판매물품 등록" />
      {children}
    </Container>
  );
}
