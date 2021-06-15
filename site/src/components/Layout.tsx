import React from 'react';
import {retailTheme, shopTheme} from '@polaris/themes';
import {Grid, Text} from '@polaris/elements';

function Layout() {
  const retailClassName = retailTheme.className;
  const shopClassName = shopTheme.className;
  const sparkles = 'sparkles';

  return (
    <Wrapper>
      <Heading>
        <span role="img" aria-label={sparkles}>
          ✨
        </span>{' '}
        Polaris wito
      </Heading>
    </Wrapper>
  );
}

const Wrapper = (props: any) => <div {...props} />;

const Heading = (props: any) => <Text as="h2" size="heading" {...props} />;

export default Layout;
