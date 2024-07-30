'use client';
import { authState } from '@/app/_lib/atom/auth';
import React, { PropsWithChildren, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

interface Props {
  token: string;
}
export default function Personalizer({ token, children }: PropsWithChildren<Props>) {
  const setAuth = useSetRecoilState(authState);
  useEffect(() => {
    setAuth(prev => ({
      ...prev,
      token,
    }));
  }, [setAuth, token]);
  return <React.Fragment>{children}</React.Fragment>;
}
