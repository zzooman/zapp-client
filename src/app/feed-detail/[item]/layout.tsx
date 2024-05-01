import Container from '@/app/_components/common/Container';
import { PropsWithChildren } from 'react';
import FeedDetailHeader from './FeedDetailHeader';
import FeedDetailFooter from './FeedDetailFooter';
import { DUMMY } from '@/app/_components/feeds/FeedsList';

export default function FeedDetailLayout({ children }: PropsWithChildren) {
  const feed = DUMMY[0];
  return (
    <Container>
      <FeedDetailHeader />
      {children}
      <FeedDetailFooter liked={feed.liked} price={feed.price} />
    </Container>
  );
}
