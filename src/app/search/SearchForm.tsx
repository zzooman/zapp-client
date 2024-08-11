'use client';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEventHandler, useEffect, useState } from 'react';
import API from '../_lib/fetcher/fetcher';

export default function SearchForm() {
  const router = useRouter();
  const qs = useSearchParams();
  const [query, setQuery] = useState('');

  const search: FormEventHandler = e => {
    e.preventDefault();
    handleRecentSearch();
    router.push(`/search/result?q=${query}&tab=feed`);
  };

  const handleRecentSearch = () => {
    const recentSearches = JSON.parse(localStorage.getItem(`zapp-recent-searches`) ?? '[]');
    if (!recentSearches.includes(query)) {
      if (recentSearches.length > 10) {
        recentSearches.shift();
      }
      recentSearches.push(query);
      localStorage.setItem(`zapp-recent-searches`, JSON.stringify(recentSearches));
    }
  };

  useEffect(() => {
    const query = qs.get('q');
    if (query) setQuery(query);
  }, [qs]);

  return (
    <section className="fixed left-[50%] top-0 transform -translate-x-[50%] w-full max-w-3xl p-4 z-30 bg-base">
      <form action="" className="flex justify-between items-center gap-4" onSubmit={search}>
        <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5 z-10" onClick={router.back} />
        <input
          type="text"
          className="w-full rounded-sm bg-slate-700 px-2 py-1 text-white"
          placeholder="검색어 입력"
          onChange={e => setQuery(e.target.value)}
          value={query}
        />
      </form>
    </section>
  );
}
