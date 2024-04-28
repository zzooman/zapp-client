import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IFeed } from '@/app/_lib/types/types';

import 'swiper/css';
import 'swiper/css/pagination';

import '@/css/swiper.css';
import { currency } from '@/app/_lib/utils/utils';
import MediaSlider from '../common/swiper/MediaSlider';

interface Props {
  feed: IFeed;
}

export default function Feed({ feed }: Props) {
  return (
    <Link href={`/feed-detail/${feed.id}`}>
      <Link href={`/seller/${feed.seller.username}`} className="flex gap-2 p-4 items-center text-sm">
        <Image
          src={feed.seller.profile}
          alt={feed.seller.username}
          width={35}
          height={35}
          className="rounded-full aspect-square object-cover"
        />
        <span>{feed.seller.username}</span>
      </Link>
      <div className="w-full aspect-video">
        <MediaSlider medias={feed.medias} />
      </div>
      <div className="flex flex-col p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg">{feed.title}</h2>
          <div className="flex">
            <div>{feed.counts.stock}</div>
            <div>{feed.counts.like}</div>
            <div>{feed.counts.comment}</div>
          </div>
        </div>
        <strong className="mt-1">{currency(feed.price)}원</strong>
        <p className="text-sm mt-2 truncate-2">{feed.content}</p>
      </div>
    </Link>
  );
}
