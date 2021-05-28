import React, {useContext, createContext, useRef, useMemo} from 'react';
import {Overlay, OverlayProps} from '@polaris/elements';

interface ModalContextValue {
  open: boolean;
  targetRef: React.RefObject<HTMLButtonElement> | null;
}

export interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onDismiss(): void;
}

const ModalContext = createContext<ModalContextValue>({
  open: false,
  targetRef: null,
});

export function ModalRoot({children, open}: ModalProps) {
  const targetRef = useRef<HTMLButtonElement>(null);

  const value = useMemo(
    () => ({
      open,
      targetRef,
    }),
    [open, targetRef],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

interface ModalTriggerProps {
  children: React.ReactNode;
}

function ModalTrigger({children}: ModalTriggerProps) {
  const {targetRef} = useContext(ModalContext);

  return (
    <button ref={targetRef} type="button">
      {children}
    </button>
  );
}

interface ModalDialogProps {
  children: React.ReactNode;
  ariaLabel: string;
}

// Overlay styles and motion
function ModalDialog({children, ariaLabel}: ModalDialogProps) {
  const {open} = useContext(ModalContext);
  return open ? (
    <div aria-modal="true" role="dialog" aria-label={ariaLabel}>
      {children}
    </div>
  ) : null;
}

function ModalOverlay(props: OverlayProps) {
  const {open} = useContext(ModalContext);
  return open ? <Overlay {...props} /> : null;
}

export const Modal = Object.assign(ModalRoot, {
  Dialog: ModalDialog,
  Trigger: ModalTrigger,
  Overlay: ModalOverlay,
});
