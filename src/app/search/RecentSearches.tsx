'use client';

import { faClock, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export function RecentSearches() {
  const recentSearches: string[] = JSON.parse(localStorage.getItem(`zapp-recent-searches`) ?? '[]');
  return (
    <section>
      {recentSearches.length === 0 && <h2 className="font-bold text-sm mb-4">최근 검색어가 없습니다.</h2>}
      {recentSearches.length > 0 && (
        <>
          <h2 className="font-bold text-sm mb-4">최근 검색어</h2>
          <ul className="flex flex-col gap-4">
            {recentSearches.map((search, i) => (
              <li className="flex justify-between items-center" key={i}>
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon icon={faClock} className="h-3" />
                  <Link href={`/search/result?q=${search}`}>search</Link>
                </div>
                <FontAwesomeIcon icon={faXmark} />
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
