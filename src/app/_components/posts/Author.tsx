'use client';

import { User } from '@/app/_lib/types/types';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  author: User;
}
export default function PostAuthor({ author }: Props) {
  const router = useRouter();
  return (
    <div
      className="flex gap-3 px-4 py-2 items-center text-sm"
      onClick={() => router.push(`/seller/${author.username}`)}
    >
      {author.profile ? (
        <Image
          src={author.profile ?? ''}
          alt={author.username}
          width={30}
          height={30}
          className="rounded-full aspect-square object-cover"
        />
      ) : (
        <div className="flex justify-center items-center w-[30px] aspect-square rounded-full bg-slate-800">
          <FontAwesomeIcon icon={faUser} width={10} />
        </div>
      )}
      <span className="opacity-70">{author.username}</span>
    </div>
  );
}
