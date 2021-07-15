import React from 'react';
import {Box, Flex, Text, Grid} from '@polaris/components';
import {Icon} from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css';
import {
  ArrowRightMinor,
  ArrowLeftMinor,
  HomeMajor,
  SearchMajor,
  CheckoutMajor,
  CustomersMajor,
  MobileHorizontalDotsMajor,
} from '@shopify/polaris-icons';

import {Heading} from '../components/Heading';
import {Layout} from '../components/Layout';
import {Link} from '../components/Link';

const DemoPage = () => {
  return (
    <Layout>
      <Heading>Demo page</Heading>
      <Link to="/">Back home</Link>

      <div
        style={{
          width: '375px',
          height: '858px',
          border: '5px solid black',
          borderRadius: '40px',
          marginTop: '50px',
          marginLeft: '50px',
          overflow: 'hidden',
        }}
      >
        <Box>
          <img src="/static/demo/hero.jpg" alt="Snowboarder" />
          <Flex justifyContent="space-between">
            <Icon source={ArrowLeftMinor} color="subdued" />
            <Icon source={MobileHorizontalDotsMajor} color="subdued" />
          </Flex>

          <Box>
            <img src="/static/demo/snowdevil.png" alt="SnowDevil" />
          </Box>
        </Box>
        <Box margin="5">
          <Flex justifyContent="space-between">
            <Text weight="strong" fontSize="5xl">
              SnowDevil
            </Text>
            <Box>Follow</Box>
          </Flex>
          <Box as="p">
            Snowdevil is not your typical snowboard store. Instead, Snowdevil is
            a partnership among two riders who are only interested in selling
            boards and bindings that they love to ride on...{' '}
            <Link to="#">view more</Link>
          </Box>

          <Box padding="4">
            <Flex>
              <Box>
                <img src="/static/demo/burton-logo.png" alt="Burton" />
              </Box>
              <Text>
                Similar to Burton, Never Summer, Arbor, and 5 other stores you
                follow
              </Text>
            </Flex>
          </Box>

          <Flex justifyContent="space-between">
            <Text weight="strong" fontSize="3xl">
              Featured products
            </Text>
            <Icon source={ArrowRightMinor} />
          </Flex>

          <Grid gap="4" columns={['1fr', '1fr']}>
            <Box>
              <img
                src="/static/demo/burton-throwback.jpg"
                alt="Burton Throwback"
              />
              <Text weight="medium">Burton Throwback</Text>
              <br />
              <Text> $175.00</Text>
            </Box>
            <Box>
              <img src="/static/demo/burton-stylus.jpg" alt="Burton Stylus" />
              <Text weight="medium">Burton Stylus Flat Top</Text>
              <br />
              <Text>$899.99</Text>
              <Text>$719.99</Text>
            </Box>
          </Grid>

          <Box borderRadius="96">
            <Flex>
              <Icon source={HomeMajor} />
              <Icon source={SearchMajor} />
              <Icon source={CheckoutMajor} />
              <Icon source={CustomersMajor} />
            </Flex>
          </Box>
        </Box>
      </div>
    </Layout>
  );
};

export default DemoPage;
