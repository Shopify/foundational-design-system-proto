import React from 'react';
import {
  Box,
  BoxProps,
  Flex,
  Grid,
  GridProps,
  Inline,
  Stack,
} from '@polaris/components';
import {Link} from 'react-router-dom';

import {Heading} from '../components/Heading';
import {Layout} from '../components/Layout';

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
        <Flex alignItems="center" gap={4} margin={4}>
          <span role="img" aria-label={sparkles}>
            ✨
          </span>
          <h1>Polaris</h1>

          <p>working in the open</p>
        </Flex>
      </Heading>

      <Box margin={4}>
        <Flex gap={4}>
          <Link to="/about">About page</Link>
          <Box as="p" textAlign="center">
            Polaris is changing
          </Box>
        </Flex>
      </Box>

      <Box margin={4}>
        <Grid gap={4} areas={GRID_TEMPLATE_AREAS}>
          <GridItem area="area1">area 1</GridItem>
          <GridItem area="area2">area 2</GridItem>
          <GridItem area="area3">area 3</GridItem>
          <GridItem area="area4">area 4</GridItem>
          <GridItem area="area5">area 5</GridItem>
          <GridItem area="area6">area 6</GridItem>
        </Grid>
      </Box>

      <Divider />

      <Box margin={4}>
        <Grid gap={4} grid="1fr / auto-flow">
          <GridItem>cell 1</GridItem>
          <GridItem>cell 2</GridItem>
          <GridItem>cell 3</GridItem>
          <GridItem>cell 4</GridItem>
        </Grid>
      </Box>

      <Divider />

      <Box margin={4}>
        <Grid gap={4} columns={['1fr', '1fr']} rows={['100px', '1fr']}>
          <GridItem>cell 1</GridItem>
          <GridItem>cell 2</GridItem>
          <GridItem>cell 3</GridItem>
          <GridItem>cell 4</GridItem>
        </Grid>
      </Box>

      <Divider />

      <Box margin={4}>
        <Stack align="center" justify="space-evenly" spacing={4}>
          <BoxItem style={{minHeight: '100px'}}>Stack 1</BoxItem>
          <BoxItem style={{minHeight: '80px'}}>Stack 2</BoxItem>
          <BoxItem style={{minHeight: '120px'}}>Stack 3</BoxItem>
        </Stack>
      </Box>

      <Divider />

      <Box margin={4}>
        <Inline align="center" justify="flex-end" spacing={4}>
          <BoxItem style={{minWidth: '100px'}}>Inline 1</BoxItem>
          <BoxItem style={{minWidth: '80px'}}>Inline 2</BoxItem>
          <BoxItem style={{minWidth: '120px'}}>Inline 3</BoxItem>
        </Inline>
      </Box>

      {/* negative margins */}
      <Box margin={4}>
        <Inline align="center" spacing={-5}>
          <BoxItem style={{minWidth: '80px', border: 'solid black 1px'}}>
            Inline 1
          </BoxItem>
          <BoxItem style={{minWidth: '80px', border: 'solid black 1px'}}>
            Inline 2
          </BoxItem>
          <BoxItem style={{minWidth: '80px', border: 'solid black 1px'}}>
            Inline 3
          </BoxItem>
        </Inline>
      </Box>
    </Layout>
  );
};

const Divider = () => (
  <Box margin={4} height="px" style={{backgroundColor: 'silver'}} />
);

const GridItem = (props: GridProps) => (
  <Grid placeContent="center" style={{backgroundColor: 'silver'}} {...props} />
);

const BoxItem = (props: BoxProps) => (
  <Box style={{backgroundColor: 'silver'}} {...props} />
);

export default IndexPage;
