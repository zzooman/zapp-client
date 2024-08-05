'use client';

import { User } from '@/app/_lib/types/types';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  user: User;
}
export default function SellerProfile({ user }: Props) {
  const router = useRouter();
  return (
    <div className="flex gap-3 p-3 items-center text-sm" onClick={() => router.push(`/seller/${user.username}`)}>
      {user.profile ? (
        <Image
          src={user.profile ?? ''}
          alt={user.username}
          width={30}
          height={30}
          className="rounded-full aspect-square object-cover"
        />
      ) : (
        <div className="flex justify-center items-center w-[30px] aspect-square rounded-full bg-slate-800">
          <FontAwesomeIcon icon={faUser} width={10} />
        </div>
      )}
      <span className="opacity-70">{user.username}</span>
    </div>
  );
}
