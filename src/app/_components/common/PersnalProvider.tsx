import { cookies } from 'next/headers';
import Personalizer from './Persnalizer';
import { ReactNode } from 'react';

export default function PersonalProvider({ children }: { children: ReactNode }) {
  const cookie = cookies();
  const token = cookie.get('auth_token')?.value;
  const username = cookie.get('zapp_username')?.value;

  return (
    <Personalizer token={token ?? ''} username={username ?? ''}>
      {children}
    </Personalizer>
  );
}
