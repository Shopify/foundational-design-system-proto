import React from 'react';

import Heading from '../components/Heading';
import Layout from '../components/Layout';

const IndexPage = () => {
  const sparkles = 'sparkles';

  return (
    <Layout>
      <Heading>
        <span role="img" aria-label={sparkles}>
          ✨
        </span>{' '}
        Polaris wito
      </Heading>
    </Layout>
  );
};

export default IndexPage;
