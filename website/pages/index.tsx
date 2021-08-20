import React from 'react';
import {Box, Flex, Inline, Stack, ThemeTest} from '@polaris/components';

import {Layout} from '../components/Layout';

import * as styles from './index.css';

const IndexPage = () => {
  return (
    <Layout>
      <h2>Theme Overrides/Extensions</h2>
      <Flex gap={4}>
        <ThemeTest height={16} width="1/4">
          Example of local theme overrides applying to a Foundations component.
        </ThemeTest>
        <Box className={styles.placeholder1} height={16} width="1/4">
          Example of local theme overrides applying to a local component.
        </Box>
        <Box className={styles.placeholder2} height={16} width="1/4">
          Example applying the default theme to a local component.
        </Box>
        <Box className={styles.newPlaceholder} height={16} width="1/4">
          Example of extending the default theme with a new value and applying
          it to a local component.
        </Box>
      </Flex>

      <h2>Flex</h2>
      <Flex gap={4}>
        <Box style={{backgroundColor: 'silver'}} height={16} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={20} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={24} width="1/3" />
      </Flex>

      <Divider />

      <h2>Stack</h2>
      <Stack gap={2} align="center">
        <Box style={{backgroundColor: 'silver'}} height={16} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={20} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={24} width="1/3" />
      </Stack>

      <Divider />

      <h2>Inline – Wrap (Default)</h2>
      <Inline gap={2}>
        <Box style={{backgroundColor: 'silver'}} height={16} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={20} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={24} width="1/3" />
      </Inline>

      <Divider />

      <h2>Inline – No wrap</h2>
      <Inline gap={2} wrap="nowrap">
        <Box style={{backgroundColor: 'silver'}} height={16} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={20} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={24} width="1/3" />
      </Inline>
    </Layout>
  );
};

const Divider = () => (
  <Box margin={4} height="px" style={{backgroundColor: 'silver'}} />
);

export default IndexPage;
