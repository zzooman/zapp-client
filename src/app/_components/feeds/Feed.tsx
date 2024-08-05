import React from 'react';
import Link from 'next/link';
import { mediasConvertor, timeLapse } from '@/app/_lib/utils/utils';
import MediaSlider from '../common/swiper/MediaSlider';
import { GetFeedResponse } from '@/app/_lib/types/dto';

import 'swiper/css';
import 'swiper/css/pagination';
import '@/css/swiper.css';
import AuthorProfile from './AuthorProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faEye } from '@fortawesome/free-regular-svg-icons';

interface Props {
  feed: GetFeedResponse;
}

export default function Feed({ feed }: Props) {
  return (
    <Link href={`/feed/${feed.id}`} className="flex flex-col gap-3 p-4">
      <AuthorProfile user={feed.author} createdAt={timeLapse(feed.created_at)} />

      {feed.medias.filter(Boolean).length > 0 && (
        <div className="w-full aspect-auto rounded-md overflow-hidden">
          <MediaSlider aspectRatio="4/3" medias={mediasConvertor(feed.medias)} />
        </div>
      )}
      <div className="flex flex-col">
        <p className="truncate-6 text-slate-300">{feed.content}</p>
      </div>
      <div className="flex gap-4 text-[12px] text-slate-500">
        <span className="flex items-center gap-1">
          <FontAwesomeIcon icon={faComment} />
          {feed.comments}
        </span>
        <span className="flex items-center gap-1">
          <FontAwesomeIcon icon={faEye} />
          {feed.views}
        </span>
      </div>
    </Link>
  );
}
