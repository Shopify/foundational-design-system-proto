import React from 'react';

import {isBrowser} from '../utilities';

const DEFAULT_TARGET = isBrowser ? window : undefined;

type Target = Window | Document | HTMLElement;

type ExtractType<T> = T extends Window
  ? keyof WindowEventMap
  : T extends Document
  ? keyof DocumentEventMap
  : T extends HTMLElement
  ? keyof HTMLElementEventMap
  : never;

type ExtractEvent<TType, TTarget> = TTarget extends Window
  ? TType extends keyof WindowEventMap
    ? WindowEventMap[TType]
    : never
  : TTarget extends Document
  ? TType extends keyof DocumentEventMap
    ? DocumentEventMap[TType]
    : never
  : TTarget extends HTMLElement
  ? TType extends keyof HTMLElementEventMap
    ? HTMLElementEventMap[TType]
    : never
  : never;

type ExtractListener<TType, TTarget> = (
  event: ExtractEvent<TType, TTarget>,
) => void;

type ExtractOptions<T> = T extends Target
  ? Parameters<T['addEventListener']>[2]
  : never;

export const useEvent = <
  TType extends ExtractType<TTarget>,
  TListener extends ExtractListener<TType, TTarget>,
  TTarget extends Target = Window,
>(
  type: TType,
  listener: TListener,
  target?: TTarget | null,
  options?: ExtractOptions<TTarget>,
) => {
  const savedListener = React.useRef<typeof listener>();
  const savedOptions = React.useRef<typeof options>();

  // Update ref.current value if listener or options changes.
  // This allows the below effect to always have the latest values and
  // avoid including them in the useEffect dependency array.
  // (Which if not memoized will cause the effect to re-run every render)
  React.useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  React.useEffect(() => {
    savedOptions.current = options;
  }, [options]);

  React.useEffect(() => {
    const targetElement = target || DEFAULT_TARGET;

    if (!savedListener.current || !targetElement) {
      return;
    }

    const eventListener: EventListener = (event) => {
      savedListener.current?.(event as ExtractEvent<TType, TTarget>);
    };

    targetElement.addEventListener(type, eventListener, savedOptions.current);

    return () => {
      targetElement.removeEventListener(
        type,
        eventListener,
        savedOptions.current,
      );
    };
  }, [type, target]);
};
