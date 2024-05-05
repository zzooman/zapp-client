import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchForm from './SearchForm';
import Link from 'next/link';

export default function SearchPage() {
  return (
    <main className="p-4 flex flex-col gap-8">
      <SearchForm />
      <section className="mt-16">
        <h2 className="font-bold text-sm mb-2">인기 검색어</h2>
        <div className="overflow-auto scrollbar-hide">
          <ul className="flex w-max h-max gap-3 mt-2 overflow-auto">
            <li className="border border-slate-500 text-white px-3 py-1 rounded-full text-sm">
              <Link href={`/search/result?q=${'코로나'}`}>코로나</Link>
            </li>
            <li className="border border-slate-500 text-white px-3 py-1 rounded-full text-sm">
              <Link href={`/search/result?q=${'코로나'}`}>코로나</Link>
            </li>
            <li className="border border-slate-500 text-white px-3 py-1 rounded-full text-sm">
              <Link href={`/search/result?q=${'코로나'}`}>코로나</Link>
            </li>
            <li className="border border-slate-500 text-white px-3 py-1 rounded-full text-sm">
              <Link href={`/search/result?q=${'코로나'}`}>코로나</Link>
            </li>
            <li className="border border-slate-500 text-white px-3 py-1 rounded-full text-sm">
              <Link href={`/search/result?q=${'코로나'}`}>코로나</Link>
            </li>
            <li className="border border-slate-500 text-white px-3 py-1 rounded-full text-sm">
              <Link href={`/search/result?q=${'코로나'}`}>코로나</Link>
            </li>
            <li className="border border-slate-500 text-white px-3 py-1 rounded-full text-sm">
              <Link href={`/search/result?q=${'코로나'}`}>코로나</Link>
            </li>
            <li className="border border-slate-500 text-white px-3 py-1 rounded-full text-sm">
              <Link href={`/search/result?q=${'코로나'}`}>코로나</Link>
            </li>
            <li className="border border-slate-500 text-white px-3 py-1 rounded-full text-sm">
              <Link href={`/search/result?q=${'코로나'}`}>코로나</Link>
            </li>
            <li className="border border-slate-500 text-white px-3 py-1 rounded-full text-sm">
              <Link href={`/search/result?q=${'코로나'}`}>코로나</Link>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-bold text-sm mb-4">최근 검색어</h2>
        <ul className="flex flex-col gap-4">
          <li className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faClock} className="h-3" />
              <Link href={`/search/result?q=${'코로나'}`}>코로나</Link>
            </div>
            <FontAwesomeIcon icon={faXmark} />
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faClock} className="h-3" />
              <Link href={`/search/result?q=${'코로나'}`}>코로나</Link>
            </div>
            <FontAwesomeIcon icon={faXmark} />
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faClock} className="h-3" />
              <Link href={`/search/result?q=${'코로나'}`}>코로나</Link>
            </div>
            <FontAwesomeIcon icon={faXmark} />
          </li>
        </ul>
      </section>
    </main>
  );
}
