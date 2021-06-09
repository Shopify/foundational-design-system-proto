import React from 'react';
import {retailTheme, shopTheme, themeClass} from '@polaris/themes';
import {Grid, Text, Link} from '@polaris/elements';

import DesktopModal from './components/DesktopModal';
import MobileModal from './components/MobileModal';

function App() {
  const retailClassName = retailTheme.className;
  const shopClassName = shopTheme.className;

  return (
    <Wrapper className={themeClass}>
      <Section>
        <Heading>Admin</Heading>
        <DesktopModal />
      </Section>

      <Section className={retailClassName}>
        <Heading>Retail</Heading>
        <MobileModal className={retailClassName} />
      </Section>

      <Section className={shopClassName}>
        <Heading>Shop</Heading>
        <MobileModal className={shopClassName} />
      </Section>

      <Link>A link</Link>
    </Wrapper>
  );
}

const Wrapper = (props: any) => (
  <Grid
    align="center"
    justify="spaceAround"
    columns="3"
    gap="9"
    css={{
      margin: 'auto',
      marginTop: '5vh',
      maxWidth: '50vw',
      textAlign: 'center',
    }}
    {...props}
  />
);

const Section = (props: any) => (
  <Grid place="center" gap="6" css={{marginTop: '$6'}} {...props} />
);

const Heading = (props: any) => <Text as="h2" size="heading" {...props} />;

export default App;
