import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {useEvent} from '../../hooks';
import {Portal, PortalProps} from '../Portal';
import {FocusLock, FocusLockProps} from '../FocusLock';

import * as styles from './Modal.css';

type OnCloseEvent = KeyboardEvent | React.MouseEvent;
type OnCloseReason = 'escapeKeyDown' | 'backdropClick';

interface Props {
  children?: React.ReactNode;
  BackdropComponent?: React.ComponentType<BackdropProps>;
  open?: FocusLockProps['enabled'];
  onClose?: (
    event: OnCloseEvent,
    context: {
      reason: OnCloseReason;
      isEscapeKeyDown(event: OnCloseEvent): event is KeyboardEvent;
      isBackdropClick(event: OnCloseEvent): event is React.MouseEvent;
    },
  ) => void;
  disableEscapeKeyDown?: boolean;
}

type PolymorphicModal = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Portal>,
  PortalProps & Props
>;

export type ModalProps = Polymorphic.OwnProps<PolymorphicModal>;

export const Modal = React.forwardRef((props, ref) => {
  const {
    BackdropComponent = Backdrop,
    children,
    open = false,
    onClose,
    disableEscapeKeyDown = false,
    ...restProps
  } = props;

  useEvent('keydown', (event) => {
    if (event.key !== 'Escape') {
      return;
    }

    if (!disableEscapeKeyDown) {
      // Stope propagation in case there is listener for the escape key higher in the DOM.
      event.stopPropagation();

      if (onClose) {
        onClose(event, createOnCloseContext('escapeKeyDown'));
      }
    }
  });

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (onClose) {
      onClose(event, createOnCloseContext('backdropClick'));
    }
  };

  // eslint-disable-next-line no-negated-condition
  return !open ? null : (
    <Portal ref={ref} {...restProps}>
      <FocusLock enabled={open}>
        <BackdropComponent onClick={handleBackdropClick} />
        {children}
      </FocusLock>
    </Portal>
  );
}) as PolymorphicModal;

export interface BackdropProps {
  onClick?: React.MouseEventHandler;
}

function Backdrop(props: BackdropProps) {
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  return <div className={styles.backdrop} onClick={props.onClick} />;
}

function createOnCloseContext(reason: OnCloseReason) {
  return {
    reason,
    isEscapeKeyDown: (event: OnCloseEvent): event is KeyboardEvent => {
      return reason === 'escapeKeyDown' && event instanceof KeyboardEvent;
    },
    isBackdropClick: (event: OnCloseEvent): event is React.MouseEvent => {
      return reason === 'backdropClick' && !(event instanceof KeyboardEvent);
    },
  };
}
