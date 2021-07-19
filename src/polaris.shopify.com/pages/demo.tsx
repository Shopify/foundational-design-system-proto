import React from 'react';
import {Box, Flex, Text, Grid} from '@polaris/components';
import {Icon} from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css';
import './demo.css';
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
        <Grid rows={['auto', '1fr']}>
          <Box color="gray-0" position="relative">
            <img src="/static/demo/hero.jpg" alt="Snowboarder" />
            <Flex
              justifyContent="space-between"
              paddingX="4"
              position="absolute"
              left="0"
              right="0"
              style={{top: '50%'}}
            >
              <Icon source={ArrowLeftMinor} color="subdued" />
              <Icon source={MobileHorizontalDotsMajor} color="subdued" />
            </Flex>

            <Box
              style={{
                width: '88px',
                bottom: '-44px',
              }}
              position="absolute"
              left="4"
            >
              <img
                src="/static/demo/snowdevil.png"
                alt="SnowDevil"
                width="100%"
              />
            </Box>
          </Box>
          <Box padding="5" backgroundColor="gray-0" paddingTop="16">
            <Flex
              justifyContent="space-between"
              alignItems="center"
              marginBottom="4"
            >
              <Text component="h1" weight="strong" fontSize="3xl">
                SnowDevil
              </Text>
              <Flex
                borderRadius="1"
                paddingX="3"
                backgroundColor="gray-900"
                color="gray-0"
                paddingY="1.5"
              >
                <Text fontSize="xs">Follow</Text>
              </Flex>
            </Flex>
            <Box component="p">
              Snowdevil is not your typical snowboard store. Instead, Snowdevil
              is a partnership among two riders who are only interested in
              selling boards and bindings that they love to ride on...{' '}
              <Link to="#">view more</Link>
            </Box>

            <Box
              padding="3"
              marginY="6"
              borderStyle="solid"
              borderWidth="1px"
              borderColor="gray-300"
              borderRadius="2"
            >
              <Flex>
                <Flex
                  flexShrink={0}
                  flexDirection="row-reverse"
                  marginRight="4"
                >
                  <Box
                    marginLeft="-3"
                    style={{width: '24px', height: '24px'}}
                    backgroundColor="light-violet-09"
                    borderRadius="2"
                  />
                  <Box
                    marginLeft="-3"
                    style={{width: '24px', height: '24px'}}
                    backgroundColor="light-azure-09"
                    borderRadius="2"
                  />
                  <Box style={{width: '24px', height: '24px'}}>
                    <img src="/static/demo/burton-logo.png" alt="Burton" />
                  </Box>
                </Flex>
                <Text fontSize="sm">
                  Similar to Burton, Never Summer, Arbor, and 5 other stores you
                  follow
                </Text>
              </Flex>
            </Box>

            <Flex justifyContent="space-between" marginBottom="5">
              <Text component="h2" weight="strong" fontSize="xl">
                Featured products
              </Text>
              <Icon source={ArrowRightMinor} />
            </Flex>

            <Grid gap="4" columns={['1fr', '1fr']}>
              <Box>
                <Box borderRadius="4" overflow="hidden">
                  <img
                    src="/static/demo/burton-throwback.jpg"
                    alt="Burton Throwback"
                  />
                </Box>
                <Text weight="medium">Burton Throwback</Text>
                <br />
                <Text> $175.00</Text>
              </Box>
              <Box>
                <Box borderRadius="4" overflow="hidden" position="relative">
                  <img
                    src="/static/demo/burton-stylus.jpg"
                    alt="Burton Stylus"
                  />
                  <Flex
                    color="gray-0"
                    borderRadius="1"
                    backgroundColor="brand"
                    paddingX="2"
                    paddingY="0.5"
                    position="absolute"
                    bottom="2"
                    left="2"
                  >
                    <Text fontSize="xs">Sale</Text>
                  </Flex>
                </Box>

                <Text weight="medium">Burton Stylus Flat Top</Text>
                <br />
                <Text textDecoration="line-through" color="gray-500">
                  $899.99
                </Text>
                <Text color="brand">$719.99</Text>
              </Box>
              <Box>
                <Box borderRadius="4" overflow="hidden">
                  <img
                    src="/static/demo/burton-throwback.jpg"
                    alt="Burton Throwback"
                  />
                </Box>
                <Text weight="medium">Burton Throwback</Text>
                <br />
                <Text> $175.00</Text>
              </Box>
              <Box>
                <Box borderRadius="4" overflow="hidden" position="relative">
                  <img
                    src="/static/demo/burton-stylus.jpg"
                    alt="Burton Stylus"
                  />
                  <Flex
                    color="gray-0"
                    borderRadius="1"
                    backgroundColor="brand"
                    paddingX="2"
                    paddingY="1"
                    position="absolute"
                    bottom="2"
                    left="2"
                  >
                    <Text fontSize="xs">Sale</Text>
                  </Flex>
                </Box>

                <Text weight="medium">Burton Stylus Flat Top</Text>
                <br />
                <Text textDecoration="line-through" color="gray-500">
                  $899.99
                </Text>
                <Text color="brand">$719.99</Text>
              </Box>
            </Grid>

            <Box position="sticky" bottom="8">
              <Flex justifyContent="center">
                <Box
                  borderRadius="96"
                  backgroundColor="gray-0"
                  paddingX="6"
                  paddingY="6"
                  style={{
                    boxShadow:
                      '0 9px 46px rgba(0,0,0,0.12), 0 11px 15px rgba(0,0,0,0.20)',
                  }}
                >
                  <Flex gap="5">
                    <Icon source={HomeMajor} />
                    <Icon source={SearchMajor} />
                    <Icon source={CheckoutMajor} />
                    <Icon source={CustomersMajor} />
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Grid>
      </div>
    </Layout>
  );
};

export default DemoPage;
