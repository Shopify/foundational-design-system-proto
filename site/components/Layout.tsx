import React, {ComponentProps} from 'react';
import {Grid} from '@polaris/elements';

const Layout = (props: ComponentProps<typeof Grid>) => <Wrapper {...props} />;

const Wrapper = (props: any) => <Grid place="center" gap="5" {...props} />;

export default Layout;
