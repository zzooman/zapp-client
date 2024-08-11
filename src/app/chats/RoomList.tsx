'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChatType } from './ChatTypeTab';
import API from '../_lib/fetcher/fetcher';
import { GetRoomResponse } from '../_lib/types/dto';
import Link from 'next/link';
import Image from 'next/image';
import { timeLapse } from '../_lib/utils/utils';

export default function RoomList() {
  const searchParams = useSearchParams();

  const [rooms, setRooms] = useState<GetRoomResponse[]>([]);

  const fetchRooms = useCallback(async (type: ChatType) => {
    const res = await API.getRooms(type);
    console.log('res', res);
  }, []);

  console.log('rooms', rooms);

  useEffect(() => {
    const type = searchParams.get('tab') as ChatType;
    fetchRooms(type);
  }, [searchParams]);
  return (
    <ul className="flex flex-col w-full mt-6 gap-6">
      {Array.isArray(rooms) &&
        rooms.map(room => (
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
                className={`text-sm truncate w-[calc(100%-50px)] text-slate-200 ${room.unread_count && 'font-bold'} ${
                  !room.unread_count && 'opacity-50'
                }`}
              >
                {room.last_message}
              </p>
            </div>
          </Link>
        ))}
    </ul>
  );
}
