import Container from '@/app/_components/common/Container';
import Header from '@/app/_components/common/header/Header';
import { PropsWithChildren } from 'react';

export default function LikeListLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header back title="관심 목록" />
      {children}
    </Container>
  );
}
