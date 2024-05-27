'use client';

import { MouseEventHandler, useCallback, useRef } from 'react';
import { CreatePostParams, PostMedia } from '@/app/_lib/types/types';
import PostTitle from '@/app/post/products/PostTitle';
import UploadMedia from '@/app/post/products/UploadMedia';
import ProductPrice from '@/app/post/products/ProductPrice';
import PostContent from '@/app/post/products/PostContent';
import PostButton from '@/app/post/products/PostButton';
import API from '@/app/_lib/fetcher/fetcher';
import ProductStock from './ProductStock';

import AWS from 'aws-sdk';
import { useRouter } from 'next/navigation';

export default function PostingPage() {
  const mediaRef = useRef<PostMedia[]>([]);
  const titleRef = useRef<string>('');
  const priceRef = useRef<string>('');
  const contentRef = useRef<string>('');
  const stock = useRef<number>(1);

  const router = useRouter();

  const onSubmit: MouseEventHandler<HTMLButtonElement> = useCallback(
    async e => {
      e.preventDefault();
      const postingState: any = {
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

      const mideasPromise = mediaRef.current.map(async media => {
        const upload = new AWS.S3.ManagedUpload({
          params: {
            ACL: 'public-read',
            Bucket: process.env.NEXT_PUBLIC_S3_BUCKET!,
            Key: `${Date.now()}/${media.file.name}`,
            Body: media.file,
          },
        });
        return await upload.promise().then(data => data.Location);
      });

      const medias = await Promise.all(mideasPromise);
      const posting: CreatePostParams = {
        ...postingState,
        medias,
      };
      const response = await API.post(posting);
      if (response.status === 200) {
        alert('게시물이 성공적으로 등록되었습니다.');
        router.push('/');
      }
    },
    [router]
  );

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
