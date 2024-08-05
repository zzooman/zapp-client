import Container from '@/app/_components/common/Container';
import { PropsWithChildren } from 'react';
import PostDetailHeader from './ProductDetailHeader';

export default function PostDetailLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <PostDetailHeader />
      {children}
    </Container>
  );
}
