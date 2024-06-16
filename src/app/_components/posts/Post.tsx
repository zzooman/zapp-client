import React from 'react';
import Link from 'next/link';
import { currency, mediasConvertor, timeLapse } from '@/app/_lib/utils/utils';
import MediaSlider from '../common/swiper/MediaSlider';
import PostAuthor from './Author';

import 'swiper/css';
import 'swiper/css/pagination';
import '@/css/swiper.css';
import { GetPostResponse } from '@/app/_lib/types/dto';

interface Props {
  post: GetPostResponse;
}

export default function Post({ post }: Props) {
  return (
    <Link href={`/post-detail/${post.id}`}>
      <PostAuthor author={post.author} />
      <div className="w-full aspect-video">
        <MediaSlider medias={mediasConvertor(post.medias)} />
      </div>
      <div className="flex flex-col p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-bold text-slate-200 flex justify-between items-center w-full">
            {post.title}
            <span className="text-xs ml-2 text-slate-600">{timeLapse(post.created_at)}</span>
          </h2>
          <div className="flex">
            <div className="font-bold">{post.isLiked}</div>
          </div>
        </div>
        <strong className="mt-2 text-slate-200">{currency(post.price)} 원</strong>
        <p className="text-xs mt-2 truncate-2 text-slate-400">{post.content}</p>
      </div>
    </Link>
  );
}
