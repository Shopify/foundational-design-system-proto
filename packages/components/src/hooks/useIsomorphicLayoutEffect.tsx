import React from 'react';

import {isBrowser} from '../utilities';

export const useIsomorphicLayoutEffect = isBrowser
  ? React.useLayoutEffect
  : React.useEffect;
