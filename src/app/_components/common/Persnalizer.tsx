'use client';
import { authState } from '@/app/_lib/atom/auth';
import React, { PropsWithChildren, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

interface Props {
  token: string;
  username: string;
}
export default function Personalizer({ token, username, children }: PropsWithChildren<Props>) {
  const setAuth = useSetRecoilState(authState);

  useEffect(() => {
    setAuth(prev => ({
      ...prev,
      token,
      username,
    }));
  }, [setAuth, token, username]);
  return <React.Fragment>{children}</React.Fragment>;
}
