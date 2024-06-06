'use client';
import { useCallback, useEffect, useState } from 'react';
import API from '../_lib/fetcher/fetcher';
import { Me } from '../_lib/types/types';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
import ToProfile from './ToProfile';
import TransactionLinks from './TransactionLinks';

export default function MypagePage() {
  const router = useRouter();
  const [cookie, _] = useCookies(['auth_token']);
  const [me, setMe] = useState<Me>();

  const fetchMe = useCallback(() => {
    API.me().then(res => setMe(res.data));
  }, []);

  useEffect(() => {
    if (!cookie.auth_token) {
      alert('로그인이 필요합니다.');
      router.push('/login');
    } else {
      fetchMe();
    }
  }, [router, cookie, fetchMe]);

  return (
    <main className="mt-10 p-4">
      {me && (
        <>
          <ToProfile me={me} />
          <TransactionLinks />
        </>
      )}
    </main>
  );
}
