import React from 'react';
import {Box, Container, Inline, Stack, Grid} from '@polaris/components';

import {Layout, Header} from '../../components';

import * as styles from './layout.css';

export default function LayoutGuide() {
  return (
    <Layout>
      <Header
        title="Layout quick start guide"
        links={[
          {to: '/', children: 'Home'},
          {to: '/about', children: 'About'},
        ]}
      />
      <Container
        as="main"
        maxWidth="full"
        minHeight="full"
        height={{md: 'full'}}
        width="full"
        paddingX={{sm: '8'}}
        className={styles.ContainerRoot}
      >
        <AnalyticsGrid />
        <MarketingAppsGrid />
      </Container>
    </Layout>
  );
}

const AnalyticsGrid = () => {
  const marketingReports = [
    'Online store sessions',
    'Orders from marketing',
    'Sales from marketing',
    'Marketing cost',
  ];

  return (
    <Grid
      className={styles.GridRoot}
      justifyContent="space-between"
      alignItems="center"
      gridTemplateColumns={{xs: 'one', sm: 'two', md: 'four'}}
      gap="2"
    >
      {marketingReports.map((report) => (
        <Box
          key={report}
          className={styles.GridRootItem}
          width="full"
          height="24"
          padding="4"
        >
          <Stack className={styles.StackRoot}>
            <Box className={styles.StackRootItem} width="full" height="6" />
            <Box className={styles.StackRootItem} width="full" height="6">
              <Inline
                className={styles.InlineRoot}
                height="full"
                justifyContent="flex-start"
              >
                <Box className={styles.InlineRootItem} width="8" />
                <Box className={styles.InlineRootItem} width="12" />
              </Inline>
            </Box>
          </Stack>
        </Box>
      ))}
    </Grid>
  );
};

const MarketingAppsGrid = () => {
  const marketingApps = [
    'Shop',
    'Google',
    'Pinterest',
    'Microsoft Advertising',
    'Snapchat Ads',
    'Seguno: Email Marketing',
    'Omnisend Email Marketing',
    'SMSBump Marketing & Automation',
  ];

  return (
    <Grid
      as="ul"
      className={styles.GridRoot}
      padding="6"
      marginTop="6"
      justifyContent="space-between"
      alignItems="center"
      // TO DOC => what belongs as an atom? how do you add one?
      gridTemplateColumns={{xs: 'one', sm: 'two', md: 'three'}}
      gap="6"
    >
      {marketingApps.map((app) => (
        <Box
          key={app}
          as="li"
          className={styles.GridRootItem}
          width="full"
          height="full"
        >
          <Inline className={styles.InlineRoot} wrap="nowrap" height="full">
            <Box
              className={styles.InlineRootItem}
              width="8"
              height="full"
              marginRight="4"
            />
            <Box className={styles.InlineRootItem} width="full" height="full">
              <Stack className={styles.StackRoot}>
                <Box className={styles.StackRootItem} width="full" height="6" />
                <Box
                  className={styles.StackRootItem}
                  width="full"
                  height="12"
                />
                <Box className={styles.StackRootItem} width="full" height="6" />
              </Stack>
            </Box>
          </Inline>
        </Box>
      ))}
    </Grid>
  );
};
