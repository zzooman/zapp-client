import Container from '@/app/_components/common/Container';
import Header from '@/app/_components/common/header/Header';
import { PropsWithChildren } from 'react';

export default function BuyListLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header back title="구매 목록" />
      {children}
    </Container>
  );
}
