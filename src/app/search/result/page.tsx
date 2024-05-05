import { faHeart } from '@fortawesome/free-solid-svg-icons';
import SearchForm from '../SearchForm';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchResultPage() {
  return (
    <main className="p-4">
      <SearchForm />
      <ul className="flex flex-col divide-y divide-slate-700 mt-10">
        <li className="relative flex gap-4 w-full h-32 py-4">
          <Image src="/images/cat.jpg" width={100} height={100} className="rounded-sm object-cover" alt="image"></Image>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm">타이틀이지 뭐</h3>
            <p className="text-xs">내용이지 뭐</p>
            <strong className="text-sm">50000 원</strong>
          </div>
          <FontAwesomeIcon icon={faHeart} className="absolute right-2 bottom-4 h-4" />
        </li>
        <li className="relative flex gap-4 w-full h-32 py-4">
          <Image src="/images/cat.jpg" width={100} height={100} className="rounded-sm object-cover" alt="image"></Image>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm">타이틀이지 뭐</h3>
            <p className="text-xs">내용이지 뭐</p>
            <strong className="text-sm">50000 원</strong>
          </div>
          <FontAwesomeIcon icon={faHeart} className="absolute right-2 bottom-4 h-4" />
        </li>
        <li className="relative flex gap-4 w-full h-32 py-4">
          <Image src="/images/cat.jpg" width={100} height={100} className="rounded-sm object-cover" alt="image"></Image>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm">타이틀이지 뭐</h3>
            <p className="text-xs">내용이지 뭐</p>
            <strong className="text-sm">50000 원</strong>
          </div>
          <FontAwesomeIcon icon={faHeart} className="absolute right-2 bottom-4 h-4" />
        </li>
        <li className="relative flex gap-4 w-full h-32 py-4">
          <Image src="/images/cat.jpg" width={100} height={100} className="rounded-sm object-cover" alt="image"></Image>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm">타이틀이지 뭐</h3>
            <p className="text-xs">내용이지 뭐</p>
            <strong className="text-sm">50000 원</strong>
          </div>
          <FontAwesomeIcon icon={faHeart} className="absolute right-2 bottom-4 h-4" />
        </li>
        <li className="relative flex gap-4 w-full h-32 py-4">
          <Image src="/images/cat.jpg" width={100} height={100} className="rounded-sm object-cover" alt="image"></Image>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm">타이틀이지 뭐</h3>
            <p className="text-xs">내용이지 뭐</p>
            <strong className="text-sm">50000 원</strong>
          </div>
          <FontAwesomeIcon icon={faHeart} className="absolute right-2 bottom-4 h-4" />
        </li>
      </ul>
    </main>
  );
}
