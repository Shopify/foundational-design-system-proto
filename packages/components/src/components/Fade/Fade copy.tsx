// import * as React from 'react';
// import {Transition, TransitionProps} from 'react-transition-group';

// export type AnyRef<T> =
//   | React.MutableRefObject<T | null>
//   | React.RefCallback<T>
//   | null
//   | undefined;

// export function assignRef<T>(ref: AnyRef<T>, value: T) {
//   if (ref == null) return;

//   if (typeof ref === 'function') {
//     ref(value);
//     return;
//   }

//   try {
//     ref.current = value;
//   } catch (error) {
//     throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
//   }
// }

// /**
//  * React hook that merges react refs into a single memoized function
//  *
//  * @example
//  * import React from 'react';
//  * import { useMergeRefs } from './hooks';
//  *
//  * const Component = React.forwardRef((props, ref) => {
//  *   const internalRef = React.useRef();
//  *   return <div {...props} ref={useMergeRefs(internalRef, ref)} />;
//  * });
//  *
//  * Adapted from: https://github.com/chakra-ui/chakra-ui/blob/a8bfa9f5fdaa840a9035024fc9e434b32244c83f/packages/hooks/src/use-merge-refs.ts#L34
//  */
// export function useMergeRefs<T>(...refs: AnyRef<T>[]) {
//   return React.useMemo(() => {
//     if (refs.every((ref) => ref == null)) {
//       return null;
//     }

//     return (node: T) => {
//       refs.forEach((ref) => {
//         if (ref) assignRef(ref, node);
//       });
//     };

//     // Intentionally disabled as we care about the equality check for each `ref`
//     // in the the `refs` array rather than the `refs` array itself.
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, refs);
// }

// export const reflow = (node) => node.scrollTop;

// export function getTransitionProps(props, options) {
//   const {timeout, style = {}} = props;

//   return {
//     duration:
//       style.transitionDuration || typeof timeout === 'number'
//         ? timeout
//         : timeout[options.mode] || 0,
//     delay: style.transitionDelay,
//   };
// }

// // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// // to learn when use what timing
// export const duration = {
//   shortest: 150,
//   shorter: 200,
//   short: 250,
//   // most basic recommended timing
//   standard: 300,
//   // this is to be used in complex animations
//   complex: 375,
//   // recommended when something is entering screen
//   enteringScreen: 225,
//   // recommended when something is leaving screen
//   leavingScreen: 195,
// };

// const styles = {
//   entering: {
//     opacity: 1,
//   },
//   entered: {
//     opacity: 1,
//   },
// };

// const defaultTimeout = {
//   enter: duration.enteringScreen,
//   exit: duration.leavingScreen,
// };

// export interface FadeProps extends Omit<TransitionProps, 'children'> {
//   children?: React.ReactElement<any, any>;

//   /**
//    * Enable this prop if you encounter 'Function components cannot be given refs',
//    * use `unstable_createStrictModeTheme`,
//    * and can't forward the ref in the child component.
//    */
//   disableStrictModeCompat?: boolean;

//   /**
//    * If `true`, the component will transition in.
//    */

//   in?: boolean;
//   ref?: React.Ref<unknown>;

//   /**
//    * The duration for the transition, in milliseconds.
//    * You may specify a single timeout for all transitions, or individually with an object.
//    */
//   timeout?: TransitionProps['timeout'];
// }

// /**
//  * The Fade transition is used by the [Modal](/components/modal/) component.
//  * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
//  */
// const Fade = React.forwardRef<Element, FadeProps>(function Fade(props, ref) {
//   const {
//     children,
//     disableStrictModeCompat = false,
//     in: inProp,
//     onEnter,
//     onEntered,
//     onEntering,
//     onExit,
//     onExited,
//     onExiting,
//     style,
//     TransitionComponent = Transition,
//     timeout = defaultTimeout,
//     ...other
//   } = props;

//   const enableStrictModeCompat = disableStrictModeCompat;

//   const nodeRef = React.useRef(null);
//   const foreignRef = useMergeRefs(
//     (children as unknown as {ref: React.Ref<unknown>})?.ref ? children.ref : null,
//     ref,
//   );
//   const handleRef = useMergeRefs(
//     enableStrictModeCompat ? nodeRef : undefined,
//     foreignRef,
//   );

//   const normalizedTransitionCallback =
//     (callback) => (nodeOrAppearing, maybeAppearing) => {
//       if (callback) {
//         const [node, isAppearing] = enableStrictModeCompat
//           ? [nodeRef.current, nodeOrAppearing]
//           : [nodeOrAppearing, maybeAppearing];

//         // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
//         if (isAppearing === undefined) {
//           callback(node);
//         } else {
//           callback(node, isAppearing);
//         }
//       }
//     };

//   const handleEntering = ;

//   const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
//     reflow(node); // So the animation always start from the start.

//     const transitionProps = getTransitionProps(
//       {style, timeout},
//       {
//         mode: 'enter',
//       },
//     );

//     node.style.webkitTransition = theme.transitions.create(
//       'opacity',
//       transitionProps,
//     );
//     node.style.transition = theme.transitions.create(
//       'opacity',
//       transitionProps,
//     );

//     if (onEnter) {
//       onEnter(node, isAppearing);
//     }
//   });

//   const handleEntered = normalizedTransitionCallback(onEntered);

//   const handleExiting = normalizedTransitionCallback(onExiting);

//   const handleExit = normalizedTransitionCallback((node) => {
//     const transitionProps = getTransitionProps(
//       {style, timeout},
//       {
//         mode: 'exit',
//       },
//     );

//     node.style.webkitTransition = theme.transitions.create(
//       'opacity',
//       transitionProps,
//     );
//     node.style.transition = theme.transitions.create(
//       'opacity',
//       transitionProps,
//     );

//     if (onExit) {
//       onExit(node);
//     }
//   });

//   const handleExited = normalizedTransitionCallback(onExited);

//   return (
//     <TransitionComponent
//       appear
//       in={inProp}
//       nodeRef={enableStrictModeCompat ? nodeRef : undefined}
//       onEnter={handleEnter}
//       onEntered={handleEntered}
//       onEntering={handleEntering}
//       onExit={handleExit}
//       onExited={handleExited}
//       onExiting={handleExiting}
//       timeout={timeout}
//       {...other}
//     >
//       {(state, childProps) => {
//         return React.cloneElement(children, {
//           style: {
//             opacity: 0,
//             visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
//             ...styles[state],
//             ...style,
//             ...children.props.style,
//           },
//           ref: handleRef,
//           ...childProps,
//         });
//       }}
//     </TransitionComponent>
//   );
// });
