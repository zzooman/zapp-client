'use client';

import { MouseEventHandler, useCallback, useRef } from 'react';
import { Media, Post } from '@/app/_lib/types/types';
import PostTitle from '@/app/post/products/PostTitle';
import UploadMedia from '@/app/post/products/UploadMedia';
import ProductPrice from '@/app/post/products/ProductPrice';
import PostContent from '@/app/post/products/PostContent';
import PostButton from '@/app/post/products/PostButton';
import API from '@/app/_lib/fetcher/fetcher';
import ProductStock from './ProductStock';

import AWS from 'aws-sdk';

export default function PostingPage() {
  const mediaRef = useRef<Media[]>([]);
  const titleRef = useRef<string>('');
  const priceRef = useRef<string>('');
  const contentRef = useRef<string>('');
  const stock = useRef<number>(1);

  const onSubmit: MouseEventHandler<HTMLButtonElement> = useCallback(async e => {
    e.preventDefault();
    const postingState: Omit<Post, 'medias'> = {
      title: titleRef.current,
      content: contentRef.current,
      price: priceRef.current,
      stock: stock.current,
    };

    AWS.config.update({
      region: process.env.NEXT_PUBLIC_AWS_REGION,
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    });

    mediaRef.current.forEach(async media => {
      if (media.file) {
        const upload = new AWS.S3.ManagedUpload({
          params: {
            ACL: 'public-read',
            Bucket: process.env.NEXT_PUBLIC_S3_BUCKET!,
            Key: `${Date.now()}/${media.file.name}`,
            Body: media.file,
          },
        });
        await upload.promise().then(data => {
          data.Location;
        });
      }
    });
    // const res1 = await API.post(postingState);
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
