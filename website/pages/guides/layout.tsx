import React from 'react';
import {Link} from 'react-router-dom';
import {
  Box,
  Container,
  Center,
  Flex,
  Inline,
  Stack,
  Grid,
} from '@polaris/components';

import {Heading} from '../../components/Heading';
import {Layout} from '../../components/Layout';

const LayoutGuide = () => {
  return (
    <Layout>
      <Heading>Layout</Heading>
      <Link to="/">Home</Link>
    </Layout>
  );
};

export default LayoutGuide;
