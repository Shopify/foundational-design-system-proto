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

import {Layout} from '../../components/Layout';

import * as styles from './layout.css';

const LayoutGuide = () => {
  return (
    <Layout maxWidth="full">
      <Header />

      <Container maxWidth="full" className={clsx(styles.ContainerRoot)}>
        <Navbar />
      </Container>
    </Layout>
  );
};

export default LayoutGuide;

const Header = () => (
  <Inline
    as="header"
    marginBottom={8}
    padding={{
      xs: 4,
      sm: 8,
      md: 8,
      lg: 8,
      xl: 8,
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
    <h1>Guides</h1>
    <Box as="ul" gap={8} className={styles.LinkListRoot}>
      <li>
        <Link to="/">Home</Link>
      </li>
    </Box>
  </Inline>
);

const Navbar = () => {
  const categories = [
    'Accessories',
    'Apparel',
    'Beauty',
    'Food & Drinks',
    'Home & Lifestyle',
    'Jewelry',
    'Kids',
    'Stationary',
    'Pets',
  ];

  return (
    <Stack as="nav" className="Navbar">
      <Inline
        paddingX={8}
        align="center"
        justify="space-between"
        className={clsx(styles.InlineRoot)}
      >
        <Box
          height={20}
          width={64}
          borderStyle="dashed"
          className={clsx(styles.InlineRootItem)}
        />

        <Box
          height={10}
          display={{
            xs: 'none',
            sm: 'block',
            md: 'block',
            lg: 'block',
            xl: 'block',
          }}
          width={{
            sm: 48,
            md: 96,
            lg: 96,
            xl: 96,
          }}
          borderStyle="dashed"
          className={clsx(styles.InlineRootItem)}
        />

        <Center
          as="ul"
          gap={8}
          className={clsx(styles.CenterRoot, styles.LinkListRoot)}
        >
          <Box
            height={4}
            width={16}
            borderStyle="dashed"
            className={clsx(styles.CenterRootItem)}
          />
          <Box
            height={8}
            width={16}
            borderStyle="dashed"
            className={clsx(styles.CenterRootItem)}
          >
            Sign up
          </Box>
        </Center>
      </Inline>

      <Center
        as="ul"
        gap={8}
        flexWrap="wrap"
        paddingX={8}
        paddingY={4}
        className={clsx(styles.CenterRoot, styles.LinkListRoot)}
      >
        {categories.map((category) => (
          <Box
            as="li"
            key={`https://handshake.com/${category}`}
            height={4}
            width={16}
            borderStyle="dashed"
            className={clsx(styles.CenterRootItem)}
          />
        ))}
      </Center>
    </Stack>
  );
};
