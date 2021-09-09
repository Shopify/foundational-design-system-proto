import React from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import {
  Box,
  Container,
  Center,
  Flex,
  Inline,
  Stack,
  Grid,
} from '@polaris/components';

import {Layout} from '../../components';

import * as styles from './layout.css';

export default function LayoutGuide() {
  return (
    <Layout>
      <Header />

      <Container
        as="main"
        maxWidth="full"
        className={clsx(styles.ContainerRoot)}
      >
        {/* Analytics grid */}
        {/* Marketing apps grid */}
        {/* Marketing video card carousel */}
      </Container>
    </Layout>
  );
}

const Header = () => (
  <Inline
    as="header"
    marginBottom="8"
    padding={{
      xs: '0',
      sm: '8',
      md: '12',
      lg: '16',
      xl: '20',
    }}
    justify="space-between"
    align="center"
    wrap={{
      xs: 'wrap',
      sm: 'nowrap',
      md: 'nowrap',
      lg: 'nowrap',
      xl: 'nowrap',
    }}
  >
    <h1>Guides: layout</h1>
    <Box as="ul" gap="8" className={styles.LinkListRoot}>
      <li>
        <Link to="/">Home</Link>
      </li>
    </Box>
  </Inline>
);
