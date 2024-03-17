'use client';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

export default function BackBtn() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center w-10 aspect-square" onClick={() => router.back()}>
      <FontAwesomeIcon icon={faChevronLeft} className="text-white" />
    </div>
  );
}
