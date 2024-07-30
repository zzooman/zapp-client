'use client';

import { useRef } from 'react';
import UploadMedia from '../UploadMedia';
import { PostMedia } from '@/app/_lib/types/types';
import { useForm } from 'react-hook-form';
import PostProductButton from '../PostButton';

export default function PostFeedPage() {
  const mediaRef = useRef<PostMedia[]>([]);
  const onSubmit = () => {
    alert('clicked');
  };

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
        ></textarea>
        <PostProductButton onSubmit={onSubmit} />
      </form>
    </main>
  );
}
