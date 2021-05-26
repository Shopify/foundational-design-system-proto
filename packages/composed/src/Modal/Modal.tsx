import React, {useContext, createContext, useRef} from 'react';
import {Card} from '@polaris/elements';

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

export function Modal({children, open, onDismiss}: ModalProps) {
  const targetRef = useRef<HTMLButtonElement>(null);

  return (
    <ModalContext.Provider value={{open, targetRef}}>
      {children}
    </ModalContext.Provider>
  );
}

interface ModalTriggerProps {
  children: React.ReactNode;
}

function ModalTrigger({children}: ModalTriggerProps) {
  const {targetRef} = useContext(ModalContext);

  return (
    <button ref={targetRef} type='button'>
      {children}
    </button>
  );
}

interface ModalDialogProps {
  children: React.ReactNode;
}

// Overlay styles and motion
function ModalDialog({children}: ModalDialogProps) {
  const {open} = useContext(ModalContext);
  return open ? (
    <div
      aria-modal='true'
      role='dialog'
      aria-label='TODO: change this polaris-modal'
    >
      {children}
    </div>
  ) : null;
}

Modal.Dialog = ModalDialog;
Modal.Trigger = ModalTrigger;
