import React from 'react';
import {Link} from 'react-router-dom';

import Heading from '../components/Heading';
import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <Heading>About page</Heading>
      <Link to="/">Back home</Link>
    </Layout>
  );
};

export default AboutPage;
