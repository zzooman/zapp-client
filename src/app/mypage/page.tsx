'use client';
import { useCallback, useEffect, useState } from 'react';
import API from '../_lib/fetcher/fetcher';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
import ToProfile from './ToProfile';
import TransactionLinks from './TransactionLinks';
import { MydataResponse } from '../_lib/types/dto';

export default function MypagePage() {
  const router = useRouter();
  const [cookie, _] = useCookies(['auth_token']);
  const [me, setMe] = useState<MydataResponse>();

  const fetchMe = useCallback(() => {
    API.mydata().then(res => setMe(res.data));
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
