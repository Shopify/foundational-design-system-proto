import React from 'react';
import {Box, Flex, Text} from '@polaris/components';

import {Heading} from '../components/Heading';
import {Layout} from '../components/Layout';
import {Link} from '../components/Link';
import {ThemeSwitcher} from '../components/ThemeSwitcher';

const IndexPage = () => {
  const sparkles = 'sparkles';

  return (
    <Layout>
      <Heading>
        <Flex align="center" gap="4" margin="4">
          <span role="img" aria-label={sparkles}>
            ✨
          </span>
          <Text weight="medium" fontSize="2xl">
            Polaris
          </Text>

          <Text>working in the open</Text>
        </Flex>
      </Heading>

      <Box margin="4">
        <Flex gap="4">
          <Link to="/about">About page</Link>
          <Box as="p" textAlign="center">
            Polaris is changing
          </Box>
        </Flex>
      </Box>

      <ThemeSwitcher />
    </Layout>
  );
};

export default IndexPage;
