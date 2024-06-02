'use client';

import { PostWithAuthor } from '@/app/_lib/types/types';
import { useCallback, useRef, useState } from 'react';
import Post from './Post';
import Observer from '../common/Observer';
import API from '@/app/_lib/fetcher/fetcher';

interface Params {
  initialPosts: PostWithAuthor[];
}
export default function PostList({ initialPosts }: Params) {
  const [posts, setPosts] = useState<PostWithAuthor[]>(initialPosts);
  const page = useRef(1);

  const next = useCallback(async () => {
    const response = await API.getPosts({ limit: 10, page: ++page.current });
    if (response.status !== 200) return;
    // setPosts(prev => prev.concat(response.data));
  }, []);

  return (
    <div className="min-h-screen max-w-5xl w-full my-16">
      <ul className="flex flex-col space-y-3">
        {posts?.map((post, i) => (
          <Post post={post} key={i} />
        ))}
      </ul>
      <Observer onShow={next} onHide={() => {}} />
    </div>
  );
}
