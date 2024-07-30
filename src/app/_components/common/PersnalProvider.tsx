'use server';

import { cookies } from 'next/headers';
import Personalizer from './Persnalizer';
import { ReactNode } from 'react';

export default async function PersonalProvider({ children }: { children: ReactNode }) {
  const cookie = cookies();
  const token = cookie.get('auth_token')?.value;

  return <Personalizer token={token ?? ''}>{children}</Personalizer>;
}
