'use client';
import { IFeed } from '@/app/_lib/types/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  feed: IFeed;
}
export default function FeedSeller({ feed }: Props) {
  const router = useRouter();
  return (
    <div className="flex gap-2 p-4 items-center text-sm" onClick={() => router.push(`/seller/${feed.seller.username}`)}>
      <Image
        src={feed.seller.profile}
        alt={feed.seller.username}
        width={35}
        height={35}
        className="rounded-full aspect-square object-cover"
      />
      <span>{feed.seller.username}</span>
    </div>
  );
}
