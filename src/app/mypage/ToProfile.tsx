import Link from 'next/link';
import { Me } from '../_lib/types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface Props {
  me: Me;
}
export default function ToProfile({ me }: Props) {
  return (
    <section className="flex justify-between items-center">
      <div className="flex gap-3">
        <div className="relative flex justify-center items-center w-8 h-8 bg-slate-600 rounded-full overflow-hidden">
          {me.profile ? (
            <Image src={me.profile} layout="fill" alt="profile" />
          ) : (
            <FontAwesomeIcon icon={faUser} className="bg-slate-600" />
          )}
        </div>
        <h1 className="font-bold text-lg">{me.username}</h1>
      </div>
      <Link href="/profile/me" className="text-xs px-2 py-1 bg-slate-600 rounded-sm">
        프로필 보기
      </Link>
    </section>
  );
}
