import SearchForm from '../SearchForm';
import Image from 'next/image';
import API from '@/app/_lib/fetcher/fetcher';
import { currency } from '@/app/_lib/utils/utils';
import Link from 'next/link';

export default async function SearchResultPage({ searchParams }: { searchParams: { q: string } }) {
  const res = await API.searchPosts({ limit: 10, page: 1, query: searchParams.q });

  return (
    <main className="p-4">
      <SearchForm />
      <section className="mt-16">
        {res.data.posts.length === 0 && <h2 className="font-bold text-sm text-white">검색 결과가 없습니다.</h2>}
        {res.data.posts.length > 0 && (
          <ul className="flex flex-col divide-y divide-slate-700 mt-10">
            {res.data.posts.map((post, i) => (
              <Link href={`/post-detail/${post.id}`} key={i}>
                <li className="relative flex gap-4 w-full h-32 py-4" key={i}>
                  <Image
                    src={post.medias[0]}
                    width={100}
                    height={100}
                    className="rounded-sm object-cover"
                    alt="image"
                  ></Image>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm">{post.title}</h3>
                    <p className="text-xs">{post.content}</p>
                    <strong className="text-sm">{currency(post.price)} 원</strong>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
