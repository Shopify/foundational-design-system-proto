import {Box} from '@polaris/components';
import React from 'react';

import {Heading} from '../components/Heading';
import {Layout} from '../components/Layout';
import {Link} from '../components/Link';

const DemoPage = () => {
  return (
    <Layout>
      <Heading>Demo page</Heading>
      <Link to="/">Back home</Link>

      <div>content</div>
    </Layout>
  );
};

export default DemoPage;
