import Container from '@/app/_components/common/Container';
import { PropsWithChildren } from 'react';
import PostDetailFooter from './PostDetailFooter';
import PostDetailHeader from './PostDetailHeader';

export default function PostDetailLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <PostDetailHeader />
      {children}
      <PostDetailFooter liked={post.liked} price={post.price} />
    </Container>
  );
}
