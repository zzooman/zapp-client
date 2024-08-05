import Container from '@/app/_components/common/Container';
import Header from '@/app/_components/common/header/Header';
import { PropsWithChildren } from 'react';

export default function PostDetailLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header back />
      {children}
    </Container>
  );
}
