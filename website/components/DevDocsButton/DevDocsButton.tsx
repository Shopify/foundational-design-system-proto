import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import {ButtonBase, ButtonBaseProps} from '@polaris/components';

import * as styles from './DevDocsButton.css';

interface Props {}

type PolymorphicDevDocsButton = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof ButtonBase>,
  ButtonBaseProps & Props
>;

export type DevDocsButtonProps = Polymorphic.OwnProps<PolymorphicDevDocsButton>;

export const DevDocsButton = React.forwardRef((props, ref) => {
  return <ButtonBase ref={ref} className={styles.root} {...props} />;
}) as PolymorphicDevDocsButton;
