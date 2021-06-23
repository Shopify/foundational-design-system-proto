import {styleVariants} from '@vanilla-extract/css';

import {vars} from '../../themes/vars.css';
import {mapToProperty} from '../../themes/utils';

export const font = styleVariants(vars.fonts, mapToProperty('fontFamily'));
export const weight = styleVariants(
  vars.fontWeights,
  mapToProperty('fontWeight'),
);
