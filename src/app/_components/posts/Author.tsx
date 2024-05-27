'use client';

import { User } from '@/app/_lib/types/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  author: User;
}
export default function PostAuthor({ author }: Props) {
  const router = useRouter();
  return (
    <div className="flex gap-2 p-4 items-center text-sm" onClick={() => router.push(`/seller/${author.username}`)}>
      <Image
        src={author.profile ?? ''}
        alt={author.username}
        width={35}
        height={35}
        className="rounded-full aspect-square object-cover"
      />
      <span>{author.username}</span>
    </div>
  );
}
