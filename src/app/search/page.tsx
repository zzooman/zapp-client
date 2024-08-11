import SearchForm from './SearchForm';
import Link from 'next/link';
import API from '../_lib/fetcher/fetcher';
import { RecentSearches } from './RecentSearches';

export default async function SearchPage({ searchParams }: { searchParams: Record<string, string> }) {
  const { data: hotSearchTexts } = await API.getHotSearchTexts();

  return (
    <main className="p-4 flex flex-col gap-8">
      <SearchForm />
      {searchParams['no-result'] ? (
        <div className="mt-16">
          <strong className="font-bold">&quot;{searchParams.keyword}&quot;</strong> 검색결과가 없습니다.
        </div>
      ) : (
        <>
          {hotSearchTexts.length > 0 && (
            <section className="mt-16">
              <h2 className="font-bold text-sm mb-2">인기 검색어</h2>
              <div className="overflow-auto scrollbar-hide">
                <ul className="flex w-max h-max gap-3 mt-2 overflow-auto">
                  {hotSearchTexts.map((search, i) => (
                    <li key={i} className="border border-slate-500 text-white px-3 py-1 rounded-full text-sm">
                      <Link href={`/search/result?q=${search.search_text}&tab=feed`}>{search.search_text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
          <RecentSearches />
        </>
      )}
    </main>
  );
}
