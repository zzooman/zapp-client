'use client';

import { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import OverlayProvider from '@/lib/useOverlay/OverlayProvider';

interface Props {
  children: ReactNode;
}
const queryClient = new QueryClient({});
export default function Providers({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <OverlayProvider>{children}</OverlayProvider>
    </QueryClientProvider>
  );
}
