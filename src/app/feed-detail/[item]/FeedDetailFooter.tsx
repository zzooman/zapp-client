'use client';

import { currency } from '@/app/_lib/utils/utils';
import { faHeart as lineHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

interface Props {
  price: number;
  liked: boolean;
}
export default function FeedDetailFooter({ price, liked }: Props) {
  const router = useRouter();
  return (
    <footer className="fixed left-0 bottom-0 z-20 w-full h-16 flex justify-between items-center px-4 border-t border-gray-500">
      <div className="flex space-x-3 items-center">
        <div className="flex justify-center items-center w-8 h-8">
          <FontAwesomeIcon icon={liked ? fullHeart : lineHeart} className="h-5 text-gray-500" />
        </div>
        <strong>{currency(price)}원</strong>
      </div>
      <button className="rounded-md bg-point-400 py-2 px-4 text-sm font-bold" onClick={() => router.push(`/chat/1`)}>
        채팅하기
      </button>
    </footer>
  );
}
