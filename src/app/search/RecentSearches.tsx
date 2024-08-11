'use client';
import { faClock, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function RecentSearches() {
  const [recentSearches, setRecentSearches] = useState<string[] | null>(null);
  useEffect(() => {
    setRecentSearches(JSON.parse(localStorage.getItem(`zapp-recent-searches`) ?? '[]'));
  }, [setRecentSearches]);

  const removeRecentSearch = (search: string) => (e: any) => {
    if (!recentSearches) return;
    e.preventDefault();
    const filtered = recentSearches.filter(s => s !== search);
    localStorage.setItem(`zapp-recent-searches`, JSON.stringify(filtered));
    setRecentSearches(filtered);
  };

  return (
    <section>
      {recentSearches && recentSearches.length === 0 && (
        <h2 className="font-bold text-sm mb-4">최근 검색어가 없습니다.</h2>
      )}
      {recentSearches && recentSearches.length > 0 && (
        <>
          <h2 className="font-bold text-sm mb-4">최근 검색어</h2>
          <ul className="flex flex-col gap-4">
            {recentSearches.toReversed().map((search, i) => (
              <li className="flex justify-between items-center" key={i}>
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon icon={faClock} className="h-3" />
                  <Link href={`/search/result?q=${search}&tab=feed`}>{search}</Link>
                </div>

                <FontAwesomeIcon icon={faXmark} className="cusor-pointer" onClick={removeRecentSearch(search)} />
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
