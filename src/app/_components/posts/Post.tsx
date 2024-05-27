import React from 'react';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/pagination';

import '@/css/swiper.css';

import { currency } from '@/app/_lib/utils/utils';
import MediaSlider from '../common/swiper/MediaSlider';
import PostAuthor from './Author';

interface Props {
  post: any;
}

export default function Post({ post }: Props) {
  return (
    <Link href={`/post-detail/${post.id}`}>
      <PostAuthor post={post} />
      <div className="w-full aspect-video">
        <MediaSlider medias={post.medias} />
      </div>
      <div className="flex flex-col p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg">{post.title}</h2>
          <div className="flex">
            <div>{post.counts.stock}</div>
            <div>{post.counts.like}</div>
            <div>{post.counts.comment}</div>
          </div>
        </div>
        <strong className="mt-1">{currency(post.price)}원</strong>
        <p className="text-sm mt-2 truncate-2">{post.content}</p>
      </div>
    </Link>
  );
}
