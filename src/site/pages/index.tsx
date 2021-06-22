import React from 'react';
import {Link} from 'react-router-dom';
import {Box} from '@polaris/elements';

import {Heading} from '../components/Heading';
import {Layout} from '../components/Layout';

const IndexPage = () => {
  const sparkles = 'sparkles';

  return (
    <Layout>
      <Heading>
        <Box margin="medium">
          <span role="img" aria-label={sparkles}>
            ✨
          </span>{' '}
          Polaris wito
        </Box>
      </Heading>

      <Box margin="medium">
        <Link to="/about">About page</Link>
        <p>Polaris is changing</p>
      </Box>
    </Layout>
  );
};

export default IndexPage;
