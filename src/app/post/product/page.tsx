'use client';

import { MouseEventHandler, useCallback, useRef } from 'react';
import { PostMedia } from '@/app/_lib/types/types';

import API from '@/app/_lib/fetcher/fetcher';

import AWS from 'aws-sdk';
import { useRouter } from 'next/navigation';
import UploadMedia from '../UploadMedia';
import PostProductContent from './PostProductContent';
import PostProductPrice from './PostProductPrice';
import PostButton from '../PostButton';
import PostProductTitle from './PostProductTitle';

export default function PostProductPage() {
  const mediaRef = useRef<PostMedia[]>([]);
  const titleRef = useRef<string>('');
  const priceRef = useRef<string>('');
  const contentRef = useRef<string>('');

  const router = useRouter();

  const onSubmit: MouseEventHandler<HTMLButtonElement> = useCallback(
    async e => {
      e.preventDefault();
      const postingState: any = {
        title: titleRef.current,
        content: contentRef.current,
        price: priceRef.current,
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
      const posting = {
        ...postingState,
        medias,
      };
      const response = await API.createProduct(posting);
      if (response.status !== 200) return alert(response.data);
      alert('게시물이 성공적으로 등록되었습니다.');
      router.push('/');
    },
    [router]
  );

  return (
    <form className="flex flex-col justify-start space-y-6 pt-16 mb-28 px-4 h-screen">
      <UploadMedia ref={mediaRef} />
      <PostProductTitle ref={titleRef} />
      <PostProductPrice ref={priceRef} />
      <PostProductContent ref={contentRef} />
      <PostButton onSubmit={onSubmit} />
    </form>
  );
}
