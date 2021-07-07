import React from 'react';

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
        <Flex align="center" gap="4" margin="4">
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
          <Box as="p" textAlign="center">
            Polaris is changing
          </Box>
        </Flex>
      </Box>

      <Box margin="base">
        <Grid gap="base" gridTemplateAreas={GRID_TEMPLATE_AREAS}>
          <Box
            display="grid"
            gridArea="area1"
            placeContent="center"
            style={{background: 'lightgray'}}
          >
            grid area 1
          </Box>
          <Box
            display="grid"
            gridArea="area2"
            placeContent="center"
            style={{background: 'lightgray'}}
          >
            grid area 2
          </Box>
          <Box
            display="grid"
            gridArea="area3"
            placeContent="center"
            style={{background: 'lightgray'}}
          >
            grid area 3
          </Box>
          <Box
            display="grid"
            gridArea="area4"
            placeContent="center"
            style={{background: 'lightgray'}}
          >
            grid area 4
          </Box>
          <Box
            display="grid"
            gridArea="area5"
            placeContent="center"
            style={{background: 'lightgray'}}
          >
            grid area 5
          </Box>
          <Box
            display="grid"
            gridArea="area6"
            placeContent="center"
            style={{background: 'lightgray'}}
          >
            grid area 6
          </Box>
        </Grid>
      </Box>

      <Box
        margin="extraLoose"
        style={{background: 'lightgray', height: '1px'}}
      />

      <Box margin="base">
        <Grid gap="base" grid="1fr / auto-flow">
          <Grid placeContent="center" style={{background: 'lightgray'}}>
            cell 1
          </Grid>
          <Grid placeContent="center" style={{background: 'lightgray'}}>
            cell 2
          </Grid>
          <Grid placeContent="center" style={{background: 'lightgray'}}>
            cell 3
          </Grid>
          <Grid placeContent="center" style={{background: 'lightgray'}}>
            cell 4
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default IndexPage;
