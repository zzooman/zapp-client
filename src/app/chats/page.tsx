import Image from 'next/image';
import Link from 'next/link';
import Footer from '../_components/common/footer/Footer';
import API from '../_lib/fetcher/fetcher';
import { cookies } from 'next/headers';
import { timeLapse } from '../_lib/utils/utils';

export default async function ChatsPage() {
  const cookieStore = cookies();
  const token = cookieStore.get('auth_token')?.value;
  const rooms = await API.allRooms(token ?? '');

  return (
    <>
      <main className="p-4">
        <ul className="mt-10 flex gap-2">
          <li className="border border-slate-700 px-3 py-1 rounded-full text-sm">전체</li>
          <li className="border border-slate-700 px-3 py-1 rounded-full text-sm">판매</li>
          <li className="border border-slate-700 px-3 py-1 rounded-full text-sm">구매</li>
        </ul>
        <ul className="flex flex-col w-full mt-6 gap-6">
          {Array.isArray(rooms.data) &&
            rooms.data.map(room => (
              <Link
                href={`/chats/${room.room_id}`}
                className="flex gap-2 h-14 w-full cursor-pointer"
                key={room.last_message_at}
              >
                <Image
                  src="/images/cat.jpg"
                  width={54}
                  height={54}
                  alt="image"
                  className="rounded-full object-cover aspect-square"
                />
                <div className="flex flex-col justify-around  w-full">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">{room.recipient}</span>
                    <span className="text-xs text-slate-500">{timeLapse(room.last_message_at)}</span>
                  </div>
                  <p
                    className={`text-sm truncate w-[calc(100%-50px)] text-slate-200 ${
                      room.unread_count && 'font-bold'
                    } ${!room.unread_count && 'opacity-50'}`}
                  >
                    {room.last_message}
                  </p>
                </div>
              </Link>
            ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
