'use client';
import { Fragment, ReactNode, createContext, useCallback, useMemo, useState } from 'react';

export const OverlayContext = createContext<{
  addOverlay: (id: number, overlay: ReactNode) => void;
  removeOverlay: (id: number) => void;
} | null>(null);

interface Props {
  children: React.ReactNode;
}
export default function OverlayProvider({ children }: Props) {
  const [overlays, setOverlays] = useState(new Map<number, ReactNode>());

  const addOverlay = useCallback((id: number, overlay: ReactNode) => {
    setOverlays(prev => new Map(prev).set(id, overlay));
  }, []);

  const removeOverlay = useCallback((id: number) => {
    setOverlays(prev => {
      const cloned = new Map(prev);
      cloned.delete(id);
      return cloned;
    });
  }, []);

  const context = useMemo(() => ({ addOverlay, removeOverlay }), [addOverlay, removeOverlay]);

  return (
    <OverlayContext.Provider value={context}>
      {children}
      {[...overlays.entries()].map(([id, overlay]) => (
        <Fragment key={id}>{overlay}</Fragment>
      ))}
    </OverlayContext.Provider>
  );
}
