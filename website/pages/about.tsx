import React from 'react';

import {Header, Layout} from '../components';

const AboutPage = () => {
  return (
    <Layout>
      <Header
        title="About"
        links={[
          {to: '/', children: 'Home'},
          {to: '/guides/layout', children: 'Layout guide'},
        ]}
      />
    </Layout>
  );
};

export default AboutPage;
