'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  post: any;
}
export default function PostAuthor({ post }: Props) {
  const router = useRouter();
  return (
    <div className="flex gap-2 p-4 items-center text-sm" onClick={() => router.push(`/seller/${post.seller.username}`)}>
      <Image
        src={post.seller.profile}
        alt={post.seller.username}
        width={35}
        height={35}
        className="rounded-full aspect-square object-cover"
      />
      <span>{post.seller.username}</span>
    </div>
  );
}
