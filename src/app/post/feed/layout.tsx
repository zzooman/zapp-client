import Container from '@/app/_components/common/Container';
import Header from '@/app/_components/common/header/Header';
import { PropsWithChildren } from 'react';

export default function PostFeedLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header back title="글쓰기" />
      {children}
    </Container>
  );
}
