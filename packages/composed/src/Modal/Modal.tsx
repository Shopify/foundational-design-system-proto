import React, {useContext, createContext, useRef} from 'react';
import {Overlay} from '@polaris/elements';
import {styled} from '../../../../stitches.config';

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
  accessibilityLabel: string;
  children: React.ReactNode;
}

const StyledDialog = styled('div', {
  height: '100%',
});

const StyledChildren = styled('div', {
  position: 'relative',
  zIndex: 10,
  maxWidth: '360px',
  margin: '0 auto',
});

// Overlay styles and motion
function ModalDialog({children, accessibilityLabel}: ModalDialogProps) {
  const {open} = useContext(ModalContext);
  return open ? (
    <StyledDialog
      aria-modal='true'
      role='dialog'
      aria-label={accessibilityLabel}
      style={{height: '100%'}}
    >
      <StyledChildren>{children}</StyledChildren>
      <Overlay />
    </StyledDialog>
  ) : null;
}

Modal.Dialog = ModalDialog;
Modal.Trigger = ModalTrigger;
