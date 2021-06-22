import React from 'react';
import {Box, Flex, Text} from '@polaris/elements';

import {Heading} from '../components/Heading';
import {Layout} from '../components/Layout';
import {Link} from '../components/Link';

const IndexPage = () => {
  const sparkles = 'sparkles';

  return (
    <Layout>
      <Heading>
        <Box margin="base" display="flex" alignItems="center" gap="base">
          <span role="img" aria-label={sparkles}>
            ✨
          </span>
          <Text weight="medium" fontSize="2xl">
            Polaris
          </Text>

          <Text>working in the open</Text>
        </Box>
      </Heading>

      <Box margin="base">
        <Flex gap="base">
          <Link to="/about">About page</Link>
          <Box as="p" textAlign="center">
            Polaris is changing
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default IndexPage;
