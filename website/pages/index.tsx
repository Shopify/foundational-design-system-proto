import React from 'react';
import {
  Box,
  Flex,
  Inline,
  Stack,
  ButtonBase,
  Button,
  Link,
} from '@polaris/components';
import {Link as RouterLink} from 'react-router-dom';

import {devDocsThemeClass, DevDocsButton, Layout, Header} from '../components';

const IndexPage = () => {
  return (
    <Layout>
      <Header
        title="Foundations kitchen sink"
        links={[
          {to: '/about', children: 'About'},
          {to: '/guides/layout', children: 'Layout guide'},
        ]}
      />
      <Stack
        as="main"
        paddingX={{
          xs: '4',
          sm: '8',
          md: '12',
          lg: '16',
          xl: '20',
        }}
        paddingBottom="12"
      >
        <h2>Button</h2>
        <Flex gap="4">
          <ButtonBase onClick={() => console.log('Hi')}>Button base</ButtonBase>
          <Button onClick={() => console.log('Hello')}>Button</Button>
          <Button href="http://www.shopify.com/">Button as link</Button>
          <div className={devDocsThemeClass}>
            <DevDocsButton onClick={() => console.log('Hello')}>
              Dev docs button
            </DevDocsButton>
          </div>
        </Flex>

        <Divider />

        <h2>Link</h2>
        <Link href="/about">Hyperlink</Link>
        <Link as={RouterLink} to="/about">
          Router Link
        </Link>
        <Link href="/about" external>
          Hyperlink - External
        </Link>
        <Link as={RouterLink} to="/about" external>
          Router Link - External
        </Link>
        <Link href="/about" underline="none">
          Hyperlink - No Underline Variant
        </Link>
        <Link as={RouterLink} to="/about" underline="always">
          Router Link - Always Underlined Variant
        </Link>
        <Link href="/about" aria-label="Label text here">
          Hyperlink - Aria Label
        </Link>

        <Divider />

        <h2>Flex</h2>
        <Flex gap="4">
          <Box style={{backgroundColor: 'silver'}} height="16" width="1/3" />
          <Box style={{backgroundColor: 'silver'}} height="20" width="1/3" />
          <Box style={{backgroundColor: 'silver'}} height="24" width="1/3" />
        </Flex>

        <Divider />

        <h2>Stack</h2>
        <Stack gap="2" align="center">
          <Box style={{backgroundColor: 'silver'}} height="16" width="1/3" />
          <Box style={{backgroundColor: 'silver'}} height="20" width="1/3" />
          <Box style={{backgroundColor: 'silver'}} height="24" width="1/3" />
        </Stack>

        <Divider />

        <h2>Inline – Wrap (Default)</h2>
        <Inline gap="2">
          <Box style={{backgroundColor: 'silver'}} height="16" width="1/3" />
          <Box style={{backgroundColor: 'silver'}} height="20" width="1/3" />
          <Box style={{backgroundColor: 'silver'}} height="24" width="1/3" />
        </Inline>

        <Divider />

        <h2>Inline – No wrap</h2>
        <Inline gap="2" wrap="nowrap">
          <Box style={{backgroundColor: 'silver'}} height="16" width="1/3" />
          <Box style={{backgroundColor: 'silver'}} height="20" width="1/3" />
          <Box style={{backgroundColor: 'silver'}} height="24" width="1/3" />
        </Inline>
      </Stack>
    </Layout>
  );
};

const Divider = () => (
  <Box margin="4" height="px" style={{backgroundColor: 'silver'}} />
);

export default IndexPage;
