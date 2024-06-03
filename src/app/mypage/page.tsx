'use client';
import { useEffect, useState } from 'react';
import API from '../_lib/fetcher/fetcher';
import { Me } from '../_lib/types/types';

export default function MypagePage() {
  const [me, setMe] = useState<Me>();
  useEffect(() => {
    API.me().then(res => {
      if (res.status !== 200) alert('로그인이 필요합니다.');
      setMe(res.data);
    });
  }, []);

  return <main className="mt-10"></main>;
}
