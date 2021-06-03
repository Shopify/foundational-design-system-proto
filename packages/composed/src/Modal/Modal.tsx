import React, {createContext, forwardRef, useContext, useEffect} from 'react';
import {styled} from '@polaris/themes';
import {Box, Overlay, Portal} from '@polaris/elements';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

const ModalContext = createContext<boolean>(false);

interface ModalProps {
  open: boolean;
  onDismiss(open: false): void;
}

const ModalRoot: React.FC<ModalProps> = ({children, open, onDismiss}) => {
  useEffect(() => {
    if (!open) onDismiss?.(false);
  }, [open, onDismiss]);

  return <ModalContext.Provider value={open}>{children}</ModalContext.Provider>;
};

type ModalOverlayProps = Polymorphic.OwnProps<typeof Overlay>;
type ModalOverlayComponent = Polymorphic.ForwardRefExoticComponent<
  typeof Overlay,
  ModalOverlayProps
>;
const ModalOverlay = forwardRef((props, ref) => {
  const open = useContext(ModalContext);

  return open ? (
    <Portal>
      <Overlay {...props} ref={ref} />
    </Portal>
  ) : null;
}) as ModalOverlayComponent;

// Implement the following behavioral components in @polaris/elements
const ScrollLock: React.FC = (props) => <Box {...props} />;
const FocusTrap: React.FC = (props) => <Box {...props} />;

const StyledModalContent = styled('div', {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxHeight: '85vh',
  width: '$modalContent',
  padding: '$4',
  marginTop: '-5vh',
  willChange: 'transform',
  '&:focus': {
    outline: 'none',
  },
});

type ModalContentProps = Polymorphic.OwnProps<typeof StyledModalContent>;
type ModalContentComponent = Polymorphic.ForwardRefComponent<
  typeof StyledModalContent,
  ModalContentProps
>;
const ModalContent = forwardRef((props, ref) => {
  const open = useContext(ModalContext);

  return open ? (
    <Portal>
      <ScrollLock>
        <FocusTrap>
          <StyledModalContent role="dialog" aria-modal {...props} ref={ref} />
        </FocusTrap>
      </ScrollLock>
    </Portal>
  ) : null;
}) as ModalContentComponent;

export const Modal = Object.assign(ModalRoot, {
  Overlay: ModalOverlay,
  Content: ModalContent,
});

export type {ModalProps};
