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

import {devDocsThemeClass} from '../components/theme.css';
import {Layout} from '../components/Layout';
import {DevDocsButton} from '../components/DevDocsButton';

const IndexPage = () => {
  return (
    <Layout>
      <h2>Button</h2>
      <Flex gap="400" marginX="400">
        <ButtonBase onClick={() => console.log('Hi')}>Hi</ButtonBase>
        <Button onClick={() => console.log('Hello')}>Button</Button>
        <Button href="http://www.shopify.com/">Link</Button>
        <div className={devDocsThemeClass}>
          <DevDocsButton onClick={() => console.log('Hello')}>
            Button
          </DevDocsButton>
        </div>
      </Flex>

      <Divider />

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
      <Link href="/about" underline="none">
        Hyperlink - No Underline Variant
      </Link>
      <br />
      <Link as={RouterLink} to="/about" underline="always">
        Router Link - Always Underlined Variant
      </Link>
      <br />
      <Link href="/about" aria-label="Label text here">
        Hyperlink - Aria Label
      </Link>
      <br />
      <Divider />
      <h2>Flex</h2>
      <Flex gap="400">
        <Box style={{backgroundColor: 'silver'}} height="1600" width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height="2000" width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height="2400" width="1/3" />
      </Flex>

      <Divider />

      <h2>Stack</h2>
      <Stack gap="200" align="center">
        <Box style={{backgroundColor: 'silver'}} height="1600" width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height="2000" width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height="2400" width="1/3" />
      </Stack>

      <Divider />

      <h2>Inline – Wrap (Default)</h2>
      <Inline gap="200">
        <Box style={{backgroundColor: 'silver'}} height="1600" width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height="2000" width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height="2400" width="1/3" />
      </Inline>

      <Divider />

      <h2>Inline – No wrap</h2>
      <Inline gap="200" wrap="nowrap">
        <Box style={{backgroundColor: 'silver'}} height="1600" width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height="2000" width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height="2400" width="1/3" />
      </Inline>
    </Layout>
  );
};

const Divider = () => (
  <Box margin="400" height="px" style={{backgroundColor: 'silver'}} />
);

export default IndexPage;
