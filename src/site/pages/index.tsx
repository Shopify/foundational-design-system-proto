import React from 'react';
import {Link} from 'react-router-dom';
import {Box} from '@polaris/elements';

import Heading from '../components/Heading';
import Layout from '../components/Layout';

const IndexPage = () => {
  const sparkles = 'sparkles';

  return (
    <Layout>
      <Heading>
        <Box marginY="small">
          <span role="img" aria-label={sparkles}>
            ✨
          </span>{' '}
          Polaris wito
        </Box>
      </Heading>
      <Link to="/about">About page</Link>
      <Box margin="medium">Polaris is changing</Box>
    </Layout>
  );
};

export default IndexPage;
