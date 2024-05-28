'use client';

import { GetPostResponse, PostItem } from '@/app/_lib/types/types';
import { useState } from 'react';
import Post from './Post';

interface Params {
  initialPosts: GetPostResponse[];
}
export default function PostList({ initialPosts }: Params) {
  const [posts, setPosts] = useState<GetPostResponse[]>(initialPosts);

  return (
    <div className="min-h-screen max-w-5xl w-full my-16">
      <ul className="flex flex-col space-y-3">
        {posts.map((post, i) => (
          <Post post={post} key={i} />
        ))}
      </ul>
    </div>
  );
}
