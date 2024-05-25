'use client';

import { MouseEventHandler, useCallback, useRef } from 'react';
import { CreatePostPayload, Media, Post } from '@/app/_lib/types/types';
import PostTitle from '@/app/post/products/PostTitle';
import UploadMedia from '@/app/post/products/UploadMedia';
import ProductPrice from '@/app/post/products/ProductPrice';
import PostContent from '@/app/post/products/PostContent';
import PostButton from '@/app/post/products/PostButton';
import API from '@/app/_lib/fetcher/fetcher';
import ProductStock from './ProductStock';

export default function PostingPage() {
  const mediaRef = useRef<Media[]>([]);
  const titleRef = useRef<string>('');
  const priceRef = useRef<string>('');
  const contentRef = useRef<string>('');
  const stock = useRef<number>(0);

  const onSubmit: MouseEventHandler<HTMLButtonElement> = useCallback(e => {
    e.preventDefault();
    const postingState: Post = {
      title: titleRef.current,
      content: contentRef.current,
      price: priceRef.current,
      medias: mediaRef.current,
      stock: stock.current,
    };

    const postPayload: CreatePostPayload = {
      ...postingState,
      medias: mediaRef.current.map(media => media.form as FormData),
    };
    API.post(postPayload);
  }, []);

  return (
    <form className="flex flex-col justify-start space-y-6 pt-16 mb-28 px-4 h-screen">
      <UploadMedia ref={mediaRef} />
      <PostTitle ref={titleRef} />
      <ProductPrice ref={priceRef} />
      <ProductStock ref={stock} />
      <PostContent ref={contentRef} />
      <PostButton onSubmit={onSubmit} />
    </form>
  );
}
