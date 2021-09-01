import React from 'react';
import {Link} from 'react-router-dom';
import {Box, Flex, Inline, Stack} from '@polaris/components';

import {Layout} from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <Inline
        marginBottom={8}
        padding={{
          xs: 4,
          sm: 8,
          md: 8,
          lg: 16,
          xl: 24,
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
        <h1>Foundation components</h1>
        <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
          <li>
            <Link to="/guides/layout">Layout guide</Link>
          </li>
        </ul>
      </Inline>

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
