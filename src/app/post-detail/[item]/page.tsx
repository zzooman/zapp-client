import Image from 'next/image';
import MediaSlider from '@/app/_components/common/swiper/MediaSlider';
import { mediasConvertor, timeLapse } from '@/app/_lib/utils/utils';

import 'swiper/css';
import 'swiper/css/pagination';
import API from '@/app/_lib/fetcher/fetcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import PostDetailFooter from './PostDetailFooter';

interface Params {
  params: {
    item: string;
  };
}
export default async function PostDetailPage({ params }: Params) {
  const post = await API.getPost(parseInt(params.item));

  return (
    <>
      <main>
        <section className="mb-16">
          <MediaSlider medias={mediasConvertor(post.data.medias)} aspectRatio="1/1" objectFit="cover" />
          <article className="flex justify-between items-center p-3 border-b border-b-slate-800">
            <div className="flex items-center">
              {post.data.author.profile ? (
                <Image
                  src={post.data.author.profile ?? ''}
                  width={35}
                  height={35}
                  className="rounded-full aspect-square object-cover"
                  alt="profile"
                  priority
                />
              ) : (
                <div className="flex justify-center items-center w-[35px] aspect-square rounded-full bg-gray-800">
                  <FontAwesomeIcon icon={faUser} className="text-slate-400" />
                </div>
              )}
              <span className="ml-2">{post.data.author.username}</span>
            </div>
          </article>
          <article className="flex flex-col space-y-2 px-4 mt-3">
            <h2 className="font-bold text-2xl">{post.data.title}</h2>
            <div className="flex space-x-2 opacity-50 text-xs">
              <span>{timeLapse(post.data.created_at)}</span>
            </div>
          </article>
          <article className="px-4 mt-6">
            <p className="text-sm text-slate-300">{post.data.content}</p>
          </article>
        </section>
      </main>
      <PostDetailFooter liked={post.data.isLiked} price={post.data.price} />
    </>
  );
}
