'use client';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

export default function PostDetailHeader() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-[50%] transform -translate-x-[50%] max-w-3xl z-20 flex justify-between items-center w-full h-14">
      <div className="flex justify-center items-center w-8 h-8 ml-2" onClick={router.back}>
        <FontAwesomeIcon icon={faChevronLeft} className="h-5" />
      </div>
    </header>
  );
}
