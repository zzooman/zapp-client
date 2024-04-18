import { ReactNode, useContext, useMemo, useRef } from 'react';
import { OverlayContext } from './OverlayProvider';
import OverlayController, { CreateOverlayElement } from './OverlayController';

let overlayId = 1;
export default function useOverlay() {
  const context = useContext(OverlayContext);
  if (!context) throw new Error('useOverlay must be used within OverlayProvider');

  const overlayRef = useRef<{ close: () => void }>(null);
  const { addOverlay, removeOverlay } = context;
  const id = useMemo(() => overlayId++, []);

  return useMemo(
    () => ({
      open: (overlayElement: CreateOverlayElement) => {
        addOverlay(
          id,
          <OverlayController key={Date.now()} overlayElement={overlayElement} onExit={() => removeOverlay(id)} />
        );
      },
      close: () => {
        overlayRef.current?.close();
      },
      exit: () => {
        removeOverlay(id);
      },
    }),
    [id, addOverlay, removeOverlay]
  );
}
