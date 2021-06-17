import React from 'react';
import {Link} from '@polaris/elements';

import Heading from '../components/Heading';
import Layout from '../components/Layout';

import {aboutStyles} from './about.css';

const AboutPage = () => {
  return (
    <Layout className={aboutStyles}>
      <Heading>
        <Link>About page</Link>
      </Heading>
    </Layout>
  );
};

export default AboutPage;
