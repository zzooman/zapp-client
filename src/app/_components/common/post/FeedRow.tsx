import React from 'react';
import Link from 'next/link';
import { mediasConvertor, timeLapse } from '@/app/_lib/utils/utils';

import 'swiper/css';
import 'swiper/css/pagination';
import '@/css/swiper.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faEye } from '@fortawesome/free-regular-svg-icons';
import { FeedWithAuthorRaw, User } from '@/app/_lib/types/types';
import AuthorProfile from '../../feeds/AuthorProfile';

interface Props {
  feed: FeedWithAuthorRaw;
}

export default function FeedRow({ feed }: Props) {
  const user: User = {
    username: feed.author,
    email: feed.email,
    phone: feed.phone,
    profile: feed.profile,
  };
  return (
    <Link href={`/feed/${feed.id}`} className="flex flex-col gap-3 p-4">
      <AuthorProfile user={user} createdAt={timeLapse(feed.created_at)} />

      <div className="flex flex-col">
        <p className="truncate-6 text-slate-300">{feed.content}</p>
      </div>
      <div className="flex gap-4 text-[12px] text-slate-500">
        <span className="flex items-center gap-1">
          <FontAwesomeIcon icon={faEye} />
          {feed.views}
        </span>
      </div>
    </Link>
  );
}
