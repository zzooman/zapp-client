import Image from 'next/image';
import MediaSlider from '@/app/_components/common/swiper/MediaSlider';
import { mediasConvertor, timeLapse } from '@/app/_lib/utils/utils';

import 'swiper/css';
import 'swiper/css/pagination';
import API from '@/app/_lib/fetcher/fetcher';

interface Params {
  params: {
    item: string;
  };
}
export default async function PostDetailPage({ params }: Params) {
  const post = await API.getPost(parseInt(params.item));

  return (
    <main>
      <section className="mb-16">
        <MediaSlider medias={mediasConvertor(post.data.medias)} aspectRatio="1/1" objectFit="cover" />
        <article className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <Image
              src={post.data.author.profile ?? ''}
              width={35}
              height={35}
              className="rounded-full aspect-square object-cover"
              alt="profile"
              priority
            />
            <span className="ml-2">{post.data.author.username}</span>
          </div>
        </article>
        <article className="flex flex-col space-y-2 px-4">
          <h2 className="font-bold text-2xl">{post.data.title}</h2>
          <div className="flex space-x-4 text-sm opacity-50">
            <span>{timeLapse(post.data.created_at)}</span>
            <span>조회 {post.data.views}</span>
          </div>
          <p className="text-sm">{post.data.content}</p>
        </article>
      </section>
    </main>
  );
}
