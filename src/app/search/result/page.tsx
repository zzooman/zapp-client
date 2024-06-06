import SearchForm from '../SearchForm';
import Image from 'next/image';
import API from '@/app/_lib/fetcher/fetcher';
import { currency } from '@/app/_lib/utils/utils';
import Link from 'next/link';
import PostRow from '@/app/_components/common/post/postRow';

export default async function SearchResultPage({ searchParams }: { searchParams: { q: string } }) {
  const res = await API.searchPosts({ limit: 10, page: 1, query: searchParams.q });

  return (
    <main className="p-4">
      <SearchForm />
      <section className="mt-16">
        {res.data.posts.length === 0 && <h2 className="font-bold text-sm text-white">검색 결과가 없습니다.</h2>}
        {res.data.posts.length > 0 && (
          <ul className="flex flex-col divide-y divide-slate-700 my-10">
            {res.data.posts.map((post, i) => (
              <PostRow key={i} post={post} />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
