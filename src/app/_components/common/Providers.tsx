'use client';

import { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import OverlayProvider from '@/app/_lib/hooks/useOverlay/OverlayProvider';
import { RecoilRoot } from 'recoil';

interface Props {
  children: ReactNode;
}
const queryClient = new QueryClient({});
export default function Providers({ children }: Props) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <OverlayProvider>{children}</OverlayProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
