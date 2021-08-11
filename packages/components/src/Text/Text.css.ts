import {styleVariants} from '@vanilla-extract/css';
import {vars} from '@polaris/themes';

import mapToProperty from '../utilities/mapToProperty';

export const font = styleVariants(vars.fonts, mapToProperty('fontFamily'));
