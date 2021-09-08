import React from 'react';
import clsx from 'clsx';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {useEvent} from '../../hooks';
import {Backdrop, BackdropProps} from '../Backdrop';
import {Portal, PortalProps} from '../Portal';
import {FocusLock, FocusLockProps} from '../FocusLock';

import * as styles from './Modal.css';

type OnCloseEvent = KeyboardEvent | React.MouseEvent;
type OnCloseReason = 'escapeKeyDown' | 'backdropClick';

interface Props {
  disableEscapeKeyDown?: boolean;
  focusLock?: FocusLockProps['focusLock'];
  scrollLock?: FocusLockProps['scrollLock'];
  BackdropComponent?: React.ComponentType<BackdropProps> | null;
  backdropProps?: BackdropProps;
  children?: React.ReactNode;
  container?: PortalProps['container'];
  onClose?: (
    event: OnCloseEvent,
    context: {
      reason: OnCloseReason;
      isEscapeKeyDown(event: OnCloseEvent): event is KeyboardEvent;
      isBackdropClick(event: OnCloseEvent): event is React.MouseEvent;
    },
  ) => void;
  open?: FocusLockProps['enabled'];
}

type PolymorphicModal = Polymorphic.ForwardRefComponent<'div', Props>;

export type ModalProps = Polymorphic.OwnProps<PolymorphicModal>;

export const Modal = React.forwardRef((props, ref) => {
  const {
    as: Component = 'div',
    BackdropComponent = Backdrop,
    backdropProps,
    children,
    className,
    disableEscapeKeyDown = false,
    focusLock = true,
    onClose,
    open = false,
    scrollLock = true,
    ...restProps
  } = props;

  useEvent('keydown', (event) => {
    if (event.key !== 'Escape') {
      return;
    }

    if (!disableEscapeKeyDown) {
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
    <Portal className={styles.fixedStackingContext}>
      <FocusLock
        className={styles.resetStackingContext}
        enabled={open}
        focusLock={focusLock}
        scrollLock={scrollLock}
      >
        {BackdropComponent && (
          <BackdropComponent {...backdropProps} onClick={handleBackdropClick} />
        )}
        <div
          className={styles.contentContainer}
          style={{border: '2px solid red'}}
        >
          <Component
            ref={ref}
            className={clsx(styles.content, className)}
            style={{border: '2px solid blue'}}
            {...restProps}
          >
            {children}
          </Component>
        </div>
      </FocusLock>
    </Portal>
  );
}) as PolymorphicModal;

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

/*
            {!React.isValidElement(children) ? children : React.cloneElement(
              React.Children.only(children) ? children : null,
              {
                className: clsx(styles.content, children.props.className),
              },
            )}
*/
