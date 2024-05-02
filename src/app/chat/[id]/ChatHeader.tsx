'use client';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

export default function ChatHeader() {
  const router = useRouter();
  return (
    <header className="relative flex items-center p-4 w-full h-16">
      <FontAwesomeIcon icon={faChevronLeft} className="h-5" onClick={router.back} />
      <h1 className="absolute text-center w-full text-xl font-bold transform -translate-x-1/2 left-1/2">
        Cat 님과의 채팅
      </h1>
    </header>
  );
}
