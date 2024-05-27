'use client';

import { useState } from 'react';

interface Params {
  initialPosts: any[];
}
export default function PostList({ initialPosts }: Params) {
  const [posts, setPosts] = useState(initialPosts);
  return (
    <div className="min-h-screen max-w-5xl w-full my-16">
      <ul className="flex flex-col space-y-3"></ul>
    </div>
  );
}
