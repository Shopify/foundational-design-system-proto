import React from 'react';
import {
  Box,
  Flex,
  Inline,
  Stack,
  ButtonBase,
  Button,
} from '@polaris/components';

import {Layout} from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <h2>Button</h2>
      <ButtonBase onClick={() => console.log('Hi')}>Hi</ButtonBase>
      <Button onClick={() => console.log('Hello')}>A button</Button>
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
