import React from 'react';
import {Box, Flex, Inline, Stack, Link} from '@polaris/components';
import {Link as RouterLink} from 'react-router-dom';

import {Layout} from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <h2>Link</h2>
      <Link href="/about">Hyperlink</Link>
      <br />
      <Link as={RouterLink} to="/about">
        Router Link
      </Link>
      <br />
      <Link href="/about" external>
        Hyperlink - External
      </Link>
      <br />
      <Link as={RouterLink} to="/about" external>
        Router Link - External
      </Link>
      <br />
      <Link href="/about" variant="underlineNone">
        Hyperlink - No Underline Variant
      </Link>
      <br />
      <Link as={RouterLink} to="/about" variant="underlineAlways">
        Router Link - Always Underlined Variant
      </Link>
      <br />
      <Link href="/about" aria-label="Label text here">
        Hyperlink - Aria Label
      </Link>
      <br />
      <Divider />
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
