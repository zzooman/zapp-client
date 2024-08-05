'use client';

import { FormEventHandler, useCallback, useRef, useState } from 'react';
import UploadMedia from '../UploadMedia';
import { PostMedia } from '@/app/_lib/types/types';
import PostProductButton from '../PostButton';
import API from '@/app/_lib/fetcher/fetcher';
import AWS from 'aws-sdk';
import { useRouter } from 'next/navigation';

export default function PostFeedPage() {
  const router = useRouter();
  const mediaRef = useRef<PostMedia[]>([]);
  const [content, setContent] = useState('');
  const onSubmit: FormEventHandler = useCallback(
    e => {
      e.preventDefault();

      (async () => {
        let medias = [''];

        if (mediaRef.current.length) {
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
          medias = await Promise.all(mideasPromise);
        }

        const response = await API.createFeed({
          medias,
          content,
        });
        if (response.status === 200) {
          alert('피드 생성!');
          return router.push('/');
        }
        alert(response.data);
        return router.push('/login');
      })();
    },
    [content, router]
  );

  return (
    <main className="mt-16 p-4">
      <form className="w-full">
        <UploadMedia ref={mediaRef} />
        <textarea
          className="w-full h-max bg-transparent text-white mt-10"
          placeholder="글을 작성해주세요."
          style={{
            minHeight: 'calc(100vh - 280px)',
          }}
          onChange={e => setContent(e.target.value)}
        ></textarea>
        <PostProductButton onSubmit={onSubmit} />
      </form>
    </main>
  );
}
