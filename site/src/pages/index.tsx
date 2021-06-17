import React from 'react';
import {Link} from 'react-router-dom';

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
      <Link to="/about">About page</Link>
    </Layout>
  );
};

export default IndexPage;
