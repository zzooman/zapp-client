import { ReactNode } from 'react';
import OverlayProvider from '@/app/_lib/hooks/useOverlay/OverlayProvider';
import PersonalProvider from './PersnalProvider';
import QueryProvider from './QueryProvider';
import RecoilProvider from './RecoilProvider';

interface Props {
  children: ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <RecoilProvider>
      <QueryProvider>
        <OverlayProvider>
          <PersonalProvider>{children}</PersonalProvider>
        </OverlayProvider>
      </QueryProvider>
    </RecoilProvider>
  );
}
