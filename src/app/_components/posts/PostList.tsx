'use client';

import { GetPostsResponse, PostItem } from '@/app/_lib/types/types';
import { useState } from 'react';
import Post from './Post';
import { postsConvertor } from '@/app/_lib/utils/utils';

interface Params {
  initialPosts: GetPostsResponse[];
}
export default function PostList({ initialPosts }: Params) {
  const [posts, setPosts] = useState<PostItem[]>(postsConvertor(initialPosts));

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
