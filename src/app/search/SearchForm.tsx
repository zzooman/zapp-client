'use client';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

export default function SearchForm() {
  const router = useRouter();
  return (
    <section className="fixed left-[50%] top-0 transform -translate-x-[50%] w-full max-w-3xl p-4 z-30 bg-base">
      <form action="" className="flex justify-between items-center gap-4">
        <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5 z-10" onClick={router.back} />
        <input type="text" className="w-full rounded-sm bg-slate-700 px-2 py-1 text-white" placeholder="검색어 입력" />
      </form>
    </section>
  );
}
