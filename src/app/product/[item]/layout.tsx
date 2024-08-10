import Container from '@/app/_components/common/Container';
import { PropsWithChildren } from 'react';
import Header from '@/app/_components/common/header/Header';

export default function ProductDetailLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header back />
      {children}
    </Container>
  );
}
