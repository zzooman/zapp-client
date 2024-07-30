'use client';
import { useCallback, useEffect, useState } from 'react';
import API from '../_lib/fetcher/fetcher';
import { useRouter } from 'next/navigation';

import ToProfile from './ToProfile';
import TransactionLinks from './TransactionLinks';
import { MydataResponse } from '../_lib/types/dto';
import { useRecoilValue } from 'recoil';
import { authState } from '../_lib/atom/auth';

export default function MypagePage() {
  const router = useRouter();
  const auth = useRecoilValue(authState);
  const [me, setMe] = useState<MydataResponse>();

  const fetchMe = useCallback(() => {
    API.mydata().then(res => setMe(res.data));
  }, []);

  useEffect(() => {
    if (!auth.token) {
      alert('로그인이 필요합니다.');
      router.push('/login');
    } else {
      fetchMe();
    }
  }, [router, auth, fetchMe]);

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
