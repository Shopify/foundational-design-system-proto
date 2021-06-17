import {HTMLAttributes} from 'react';

import {root} from './Flex.css';

export const Flex = (props: HTMLAttributes<HTMLDivElement>) => (
  <div className={root} {...props} />
);
