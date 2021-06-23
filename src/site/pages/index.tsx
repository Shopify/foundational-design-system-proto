import React from 'react';
import {Link} from 'react-router-dom';
import {Box, Flex} from '@polaris/elements';

import {Heading} from '../components/Heading';
import {Layout} from '../components/Layout';

const IndexPage = () => {
  const sparkles = 'sparkles';

  return (
    <Layout>
      <Heading>
        <Box margin="base">
          <Flex>
            <span role="img" aria-label={sparkles}>
              ✨
            </span>
            <p>Polaris working in the open</p>
          </Flex>
        </Box>
      </Heading>

      <Box margin="base">
        <Link to="/about">About page</Link>
        <Box as="p" textAlign="center">
          Polaris is changing
        </Box>
      </Box>
    </Layout>
  );
};

export default IndexPage;
