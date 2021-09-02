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
    <Layout>
      <Header />

      <Container
        as="main"
        maxWidth="full"
        className={clsx(styles.ContainerRoot)}
      >
        <Navbar />
        <Hero />
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
      xs: 0,
      sm: 8,
      md: 12,
      lg: 16,
      xl: 20,
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
        paddingX={{
          xs: 0,
          sm: 8,
          md: 12,
          lg: 16,
          xl: 20,
        }}
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
          />
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

const Hero = () => {
  return (
    <Flex
      gap={8}
      paddingX={{
        xs: 0,
        sm: 8,
        md: 12,
        lg: 16,
        xl: 20,
      }}
      paddingY={{
        xs: 0,
        sm: 8,
        md: 12,
        lg: 16,
        xl: 20,
      }}
      wrap={{
        xs: 'wrap',
        sm: 'wrap',
      }}
      className={clsx(styles.FlexRoot)}
    >
      <Stack
        flex={1}
        justify="center"
        width="1/2"
        height="auto"
        className={styles.StackRoot}
      >
        <Box width="full" height={24} className={styles.StackRootItem} />
        <Box width="full" height={8} className={styles.StackRootItem} />
        <Box width="full" height={16} className={styles.StackRootItem} />
      </Stack>

      <Grid
        flex={1}
        width="1/2"
        height="full"
        columns={['4fr', '1fr', '1fr', '2fr', '2fr', '3fr', '1fr', '4fr']}
        rows={['.25fr .25fr .25fr .25fr .25fr .25fr .25fr .25fr .25fr']}
        className={styles.GridRoot}
      >
        <Box
          width={{
            xs: 24,
            sm: 32,
            md: 44,
            lg: 56,
            xl: 64,
          }}
          height={{
            xs: 16,
            sm: 24,
            md: 36,
            lg: 48,
            xl: 56,
          }}
          className={styles.GridRootItem}
          style={{
            gridRow: '1 / span 5',
            gridColumn: '4 / span 3',
          }}
        />
        <Box
          width={{
            xs: 24,
            sm: 48,
            md: 64,
            lg: 80,
            xl: 96,
          }}
          height={{
            xs: 16,
            sm: 36,
            md: 48,
            lg: 60,
            xl: 72,
          }}
          className={styles.GridRootItem}
          style={{
            gridRow: 'span 2 / 9',
            gridColumn: 'span 5 / 10',
            justifySelf: 'flex-end',
          }}
        />
        <Box
          width={{
            xs: 32,
            sm: 40,
            md: 48,
            lg: 64,
            xl: 72,
          }}
          height={{
            xs: 20,
            sm: 24,
            md: 36,
            lg: 48,
            xl: 56,
          }}
          className={styles.GridRootItem}
          style={{
            gridRow: 'span 4 / 10',
            gridColumn: '1 / span 4',
            alignSelf: 'flex-end',
          }}
        />
      </Grid>
    </Flex>
  );
};
