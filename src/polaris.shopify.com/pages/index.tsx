import React, {ComponentProps} from 'react';
import {Grid, Box, Flex, Text} from '@polaris/components';

import {Heading} from '../components/Heading';
import {Layout} from '../components/Layout';
import {Link} from '../components/Link';

const GRID_TEMPLATE_AREAS = [
  'area1 area2 area2 area2',
  'area3 area3 area4 area4',
  'area5 area5 area5 area6',
];

const IndexPage = () => {
  const sparkles = 'sparkles';

  return (
    <Layout>
      <Heading>
        <Flex alignItems="center" gap="4" margin="4">
          <span role="img" aria-label={sparkles}>
            ✨
          </span>
          <Text weight="medium" fontSize="2xl">
            Polaris
          </Text>

          <Text>working in the open</Text>
        </Flex>
      </Heading>

      <Box margin="4">
        <Flex gap="4">
          <Link to="/about">About page</Link>
          <Link to="/demo">Demo</Link>
          <Link to="/demo-admin">Demo Admin</Link>
          <Box as="p" textAlign="center">
            Polaris is changing
          </Box>
        </Flex>
      </Box>

      <Box margin="4">
        <Grid gap="4" areas={GRID_TEMPLATE_AREAS}>
          <GridItem area="area1">area 1</GridItem>
          <GridItem area="area2">area 2</GridItem>
          <GridItem area="area3">area 3</GridItem>
          <GridItem area="area4">area 4</GridItem>
          <GridItem area="area5">area 5</GridItem>
          <GridItem area="area6">area 6</GridItem>
        </Grid>
      </Box>

      <Divider />

      <Box margin="4">
        <Grid gap="4" grid="1fr / auto-flow">
          <GridItem>cell 1</GridItem>
          <GridItem>cell 2</GridItem>
          <GridItem>cell 3</GridItem>
          <GridItem>cell 4</GridItem>
        </Grid>
      </Box>

      <Divider />

      <Box margin="4">
        <Grid gap="4" columns={['1fr', '1fr']} rows={['100px', '1fr']}>
          <GridItem>cell 1</GridItem>
          <GridItem>cell 2</GridItem>
          <GridItem>cell 3</GridItem>
          <GridItem>cell 4</GridItem>
        </Grid>
      </Box>
    </Layout>
  );
};

const Divider = () => (
  <Box margin="4" style={{background: 'lightgray', height: '1px'}} />
);

const GridItem = (props: ComponentProps<typeof Grid>) => (
  <Grid placeContent="center" style={{background: 'lightgray'}} {...props} />
);

export default IndexPage;
