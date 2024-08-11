'use client';

import { authState } from '@/app/_lib/atom/auth';
import API from '@/app/_lib/fetcher/fetcher';
import { currency } from '@/app/_lib/utils/utils';
import { faHeart as lineHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

interface Props {
  id: number;
  price: number;
  liked: boolean;
  seller: string;
}
export default function ProductDetailFooter({ id, price, liked, seller }: Props) {
  const auth = useRecoilValue(authState);
  const router = useRouter();

  const [isLiked, setIsLiked] = useState(liked);
  const onClick = async () => {
    setIsLiked(!isLiked);
    const response = await API.toggleLikePost(id, !isLiked);
    if (response.status !== 200) {
      alert(response.data);
      setIsLiked(liked);
    }
  };

  const enterChatRoom = async () => {
    const response = await API.makeRoom({
      host: auth.username,
      guest: seller,
    });
    if (response.status === 200) router.push(`/chats/${response.data.id}`);
  };

  return (
    <footer className="fixed bottom-0 left-[50%] transform -translate-x-[50%] max-w-3xl z-20 w-full h-16 flex justify-between items-center px-4 border-t border-slate-700 bg-base">
      <div className="flex space-x-3 items-center">
        <div className="flex justify-center items-center w-8 h-8" onClick={onClick}>
          <FontAwesomeIcon icon={isLiked ? fullHeart : lineHeart} className="h-5 text-gray-500" />
        </div>
        <strong>{currency(price)}원</strong>
      </div>
      {auth.username !== seller && (
        <button className="rounded-md bg-point-400 py-2 px-4 text-sm font-bold" onClick={enterChatRoom}>
          채팅하기
        </button>
      )}
    </footer>
  );
}
