import Image from 'next/image';
import MediaSlider from '@/app/_components/common/swiper/MediaSlider';
import { timeLapse } from '@/app/_lib/utils/utils';

import 'swiper/css';
import 'swiper/css/pagination';

export default function PostDetailPage() {
  return (
    <main>
      <section className="mb-16">
        <MediaSlider medias={post.medias} aspectRatio="1/1" objectFit="cover" />
        <article className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <Image
              src={post.seller.profile}
              width={35}
              height={35}
              className="rounded-full aspect-square object-cover"
              alt="profile"
              priority
            />
            <span className="ml-2">{post.seller.username}</span>
          </div>
        </article>
        <article className="flex flex-col space-y-2 px-4">
          <h2 className="font-bold text-2xl">{post.title}</h2>
          <div className="flex space-x-4 text-sm opacity-50">
            <span>{timeLapse(post.createdAt)}</span>
            <span>조회 {post.counts.views}</span>
          </div>
          <p className="text-sm">{post.content}</p>
        </article>
      </section>
    </main>
  );
}
