'use client';

import { MouseEventHandler, useCallback, useRef } from 'react';
import { Media } from '@/app/_lib/types/types';
import PostTitle from '@/app/post/products/PostTitle';
import UploadMedia from '@/app/post/products/UploadMedia';
import ProductPrice from '@/app/post/products/ProductPrice';
import PostContent from '@/app/post/products/PostContent';
import PostButton from '@/app/post/products/PostButton';

export interface PostingState {
  postTitle: string;
  postContent: string;
  productPrice: string;
  postMedias: Media[];
}

export default function PostingPage() {
  const mediaRef = useRef<Media[]>([]);
  const titleRef = useRef<string>('');
  const priceRef = useRef<string>('');
  const contentRef = useRef<string>('');

  const onSubmit: MouseEventHandler<HTMLButtonElement> = useCallback(e => {
    e.preventDefault();
    const postingState: PostingState = {
      postTitle: titleRef.current,
      productPrice: priceRef.current,
      postContent: contentRef.current,
      postMedias: mediaRef.current,
    };
  }, []);

  return (
    <form className="flex flex-col justify-start space-y-6 pt-16 mb-28 px-4 h-screen">
      <UploadMedia ref={mediaRef} />
      <PostTitle ref={titleRef} />
      <ProductPrice ref={priceRef} />
      <PostContent ref={contentRef} />
      <PostButton onSubmit={onSubmit} />
    </form>
  );
}
