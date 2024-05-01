'use client';

import GoodsDescription from '@/app/post/goods/GoodsDescription';
import GoodsTitle from '@/app/post/goods/GoodsTitle';
import GoodsPrice from '@/app/post/goods/GoodsPrice';
import PostGoodsButton from '@/app/post/goods/PostGoodsButton';
import UploadMedia from '@/app/post/goods/UploadMedia';

import { MouseEventHandler, useCallback, useRef } from 'react';
import { Media } from '@/app/_lib/types/types';

export interface PostGoodsState {
  goodsName: string;
  goodsPrice: string;
  goodsDescription: string;
  goodsMedias: Media[];
}

export default function PostGoodsPage() {
  const mediaRef = useRef<Media[]>([]);
  const titleRef = useRef<string>('');
  const priceRef = useRef<string>('');
  const descriptionRef = useRef<string>('');

  const onSubmit: MouseEventHandler<HTMLButtonElement> = useCallback(e => {
    e.preventDefault();
    const postGoodsState: PostGoodsState = {
      goodsName: titleRef.current,
      goodsPrice: priceRef.current,
      goodsDescription: descriptionRef.current,
      goodsMedias: mediaRef.current,
    };
  }, []);

  return (
    <form className="flex flex-col justify-start space-y-6 pt-16 mb-28 px-4 h-screen">
      <UploadMedia ref={mediaRef} />
      <GoodsTitle ref={titleRef} />
      <GoodsPrice ref={priceRef} />
      <GoodsDescription ref={descriptionRef} />
      <PostGoodsButton onSubmit={onSubmit} />
    </form>
  );
}
