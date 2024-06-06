'use client';
import PostRow from '@/app/_components/common/post/postRow';
import API from '@/app/_lib/fetcher/fetcher';
import { PostWithAuthor } from '@/app/_lib/types/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SoldListPage() {
  const [posts, setPosts] = useState<PostWithAuthor[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    API.postsISold({ limit: 10, page: 1 })
      .then(res => {
        if (res.status === 200) {
          setPosts(res.data);
        } else {
          alert(res.data);
          router.push('/');
        }
      })
      .finally(() => setLoading(false));
  }, [router]);

  return (
    <main>
      {!loading && posts?.length === 0 && <p className="mt-32 w-full text-center">판매한 상품이 없습니다.</p>}
      <ul className="flex flex-col divide-y divide-slate-700 my-10">
        {posts?.map((post, i) => (
          <PostRow key={i} post={post} />
        ))}
      </ul>
    </main>
  );
}
