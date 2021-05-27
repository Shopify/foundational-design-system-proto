import React, {HTMLAttributes, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';

const MAX_Z_INDEX = 2147483647;

interface PortalProps extends HTMLAttributes<HTMLDivElement> {
  containerRef?: React.RefObject<HTMLElement>;
}

export const Portal = React.forwardRef<HTMLDivElement, PortalProps>(
  (props, ref) => {
    const {containerRef, style, ...portalProps} = props;
    const host = containerRef?.current ?? globalThis?.document?.body;
    const [, forceUpdate] = React.useState({});

    useLayoutEffect(() => {
      forceUpdate({});
    }, []);

    const portalStyle =
      host === document.body
        ? {
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: MAX_Z_INDEX,
            ...style,
          }
        : {};

    if (host) {
      return ReactDOM.createPortal(
        <div
          data-polaris-portal=""
          {...portalProps}
          ref={ref}
          style={portalStyle}
        />,
        host,
      );
    }
    return null;
  },
);
