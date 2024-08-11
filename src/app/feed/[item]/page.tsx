import Image from 'next/image';
import MediaSlider from '@/app/_components/common/swiper/MediaSlider';
import { mediasConvertor, timeLapse } from '@/app/_lib/utils/utils';

import 'swiper/css';
import 'swiper/css/pagination';
import API from '@/app/_lib/fetcher/fetcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faComment, faEye } from '@fortawesome/free-regular-svg-icons';

interface Params {
  params: {
    item: string;
  };
}
export default async function FeedDetailPage({ params }: Params) {
  const feed = await API.getFeed(parseInt(params.item));

  return (
    <main>
      <section className="flex flex-col gap-4 my-16">
        {feed.data.medias.filter(Boolean).length > 0 && (
          <div className="w-full h-max p-4">
            <MediaSlider medias={mediasConvertor(feed.data.medias)} aspectRatio="1/1" objectFit="cover" rouneded />
          </div>
        )}

        <article className="flex justify-between items-center px-4">
          <div className="flex items-center gap-2">
            {feed.data.author.profile ? (
              <Image
                src={feed.data.author.profile ?? ''}
                width={30}
                height={30}
                className="rounded-full aspect-square object-cover"
                alt="profile"
                priority
              />
            ) : (
              <div className="flex justify-center items-center w-[30px] aspect-square rounded-full bg-gray-800">
                <FontAwesomeIcon icon={faUser} className="text-slate-400" />
              </div>
            )}
            <span className="text-sm text-slate-300">{feed.data.author.username}</span>
          </div>
        </article>

        <article className="px-4">
          <p className="text-sm text-slate-200">{feed.data.content}</p>
        </article>

        <article className="flex justify-between text-[12px] text-slate-500 px-4">
          <span>{timeLapse(feed.data.created_at)}</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faComment} />
              {feed.data.comments.length}
            </span>
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faEye} />
              {feed.data.views}
            </span>
          </div>
        </article>

        <article></article>
      </section>
    </main>
  );
}
