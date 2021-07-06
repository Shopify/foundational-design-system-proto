import React from 'react';

import {Heading} from '../components/Heading';
import {Layout} from '../components/Layout';
import {Link} from '../components/Link';

const AboutPage = () => {
  return (
    <Layout>
      <Heading>About page</Heading>
      <Link to="/">Back home</Link>
    </Layout>
  );
};

export default AboutPage;
