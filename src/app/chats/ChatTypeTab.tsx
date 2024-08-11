'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cls } from '../_lib/utils/utils';

export type ChatType = 'all' | 'chat' | 'buy' | 'sell';
export default function ChatTabType() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const makeTab = (tab: ChatType) => {
    const params = new URLSearchParams();
    params.set('tab', tab);
    return params.toString();
  };

  const [tab, setTab] = useState<ChatType>((searchParams.get('tab') as ChatType) ?? 'all');

  useEffect(() => {
    const tab = searchParams.get('tab') as ChatType;
    setTab(tab);
  }, [searchParams]);

  return (
    <ul className="mt-10 flex gap-2">
      <li
        onClick={() => router.push(pathname + '?' + makeTab('all'))}
        className={cls('border border-slate-700 px-3 py-1 rounded-full text-sm', tab === 'all' ? 'bg-point-500' : '')}
      >
        전체
      </li>
      <li
        onClick={() => router.push(pathname + '?' + makeTab('chat'))}
        className={cls('border border-slate-700 px-3 py-1 rounded-full text-sm', tab === 'chat' ? 'bg-point-500' : '')}
      >
        DM
      </li>
      <li
        onClick={() => router.push(pathname + '?' + makeTab('buy'))}
        className={cls('border border-slate-700 px-3 py-1 rounded-full text-sm', tab === 'buy' ? 'bg-point-500' : '')}
      >
        구매
      </li>
      <li
        onClick={() => router.push(pathname + '?' + makeTab('sell'))}
        className={cls('border border-slate-700 px-3 py-1 rounded-full text-sm', tab === 'sell' ? 'bg-point-500' : '')}
      >
        판매
      </li>
    </ul>
  );
}
