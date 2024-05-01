import Container from '@/app/_components/common/Container';
import Image from 'next/image';
import { DUMMY } from '@/app/_components/feeds/FeedsList';
import MediaSlider from '@/app/_components/common/swiper/MediaSlider';
import { timeLapse } from '@/app/_lib/utils/utils';
import FeedDetailHeader from '@/app/_components/feedDetail/FeedDetailHeader';
import FeedDetailFooter from '@/app/_components/feedDetail/FeedDetailFooter';

import 'swiper/css';
import 'swiper/css/pagination';

export default function FeedDetailPage() {
  const feed = DUMMY[0];

  return (
    <Container>
      <FeedDetailHeader />
      <main>
        <section className="mb-16">
          <MediaSlider medias={feed.medias} aspectRatio="1/1" objectFit="cover" />
          <article className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <Image
                src={feed.seller.profile}
                width={35}
                height={35}
                className="rounded-full aspect-square object-cover"
                alt="profile"
                priority
              />
              <span className="ml-2">{feed.seller.username}</span>
            </div>
          </article>
          <article className="flex flex-col space-y-2 px-4">
            <h2 className="font-bold text-2xl">{feed.title}</h2>
            <div className="flex space-x-4 text-sm opacity-50">
              <span>{timeLapse(feed.createdAt)}</span>
              <span>조회 {feed.counts.views}</span>
            </div>
            <p className="text-sm">{feed.content}</p>
          </article>
        </section>
      </main>
      <FeedDetailFooter liked={feed.liked} price={feed.price} />
    </Container>
  );
}
