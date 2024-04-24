'use client';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

interface Props {
  show: boolean;
}
export default function ButtonCreateFeed({ show }: Props) {
  const router = useRouter();
  return (
    <>
      {show && (
        <button
          onClick={() => router.push('/post/goods')}
          className="absolute bottom-[10%] right-[10%] flex justify-center items-center bg-point-400 text-white rounded-full w-12 h-12 active:scale-90 transition-all"
        >
          <FontAwesomeIcon icon={faPlus} size="1x" />
        </button>
      )}
    </>
  );
}
