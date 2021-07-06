import React from 'react';
import {Link} from 'react-router-dom';
import {Box, Flex, Text} from '@polaris/elements';

import {Heading} from '../components/Heading';
import {Layout} from '../components/Layout';

const IndexPage = () => {
  const sparkles = 'sparkles';

  return (
    <Layout>
      <Heading>
        <Box margin="4" display="flex" alignItems="center" gap="4">
          <span role="img" aria-label={sparkles}>
            ✨
          </span>
          <Text weight="medium" fontSize="2xl">
            Polaris
          </Text>

          <Text>working in the open</Text>
        </Box>
      </Heading>

      <Box margin="4">
        <Flex gap="4">
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
