import { Ref, forwardRef, useCallback, useImperativeHandle, useState } from 'react';

export type OverlayElementProps = { isOpen: boolean; close: () => void; exit: () => void };
export type CreateOverlayElement = (props: OverlayElementProps) => JSX.Element;
export interface OverlayControlRef {
  close: () => void;
}

interface Props {
  overlayElement: CreateOverlayElement;
  onExit: () => void;
}
const OverlayController = forwardRef(function OverlayController(
  { overlayElement: OverlayElement, onExit }: Props,
  ref: Ref<OverlayControlRef>
) {
  const [isOpenOverlay, setIsOpenOverlay] = useState(false);
  const closeOverlay = useCallback(() => {
    setIsOpenOverlay(false);
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      close: closeOverlay,
    }),
    [closeOverlay]
  );

  return <OverlayElement isOpen={isOpenOverlay} close={closeOverlay} exit={onExit} />;
});

export default OverlayController;
