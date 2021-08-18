import React from 'react';
import {Stack} from '@polaris/components';

import {AdminBox} from '../components/AdminBox';
import {Layout} from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <Stack gap={4}>
        <AdminBox
          width="full"
          height="baseLoose"
          style={{backgroundColor: 'silver'}}
        >
          Admin box 1
        </AdminBox>

        <AdminBox
          width="full"
          height="base"
          style={{backgroundColor: 'silver'}}
        >
          Admin box 2
        </AdminBox>

        <AdminBox
          width="full"
          height="baseExtraTight"
          style={{backgroundColor: 'silver'}}
        >
          Admin box 3
        </AdminBox>
      </Stack>
    </Layout>
  );
};

export default IndexPage;
