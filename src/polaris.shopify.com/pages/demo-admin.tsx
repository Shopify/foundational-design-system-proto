import React from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import {
  AppProvider,
  Card,
  TextContainer,
  Heading as PolarisHeading,
  Thumbnail,
  Icon,
  Stack,
  Avatar,
  Page,
} from '@shopify/polaris';
import {ArrowRightMinor} from '@shopify/polaris-icons';
import '@shopify/polaris/dist/styles.css';

import {Heading} from '../components/Heading';
import {Layout} from '../components/Layout';
import {Link} from '../components/Link';

const DemoPage = () => {
  return (
    <Layout>
      <Heading>Demo Admin page</Heading>
      <Link to="/">Back home</Link>

      <div
        style={{width: '375px', height: '858px', border: '1px solid hotpink'}}
      >
        <AppProvider i18n={enTranslations}>
          <Page
            title="SnowDevil"
            breadcrumbs={[{content: 'Home', url: '/'}]}
            thumbnail={
              <Thumbnail
                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                alt="Black leather pet collar"
              />
            }
            primaryAction={{content: 'Follow'}}
            secondaryActions={[
              {
                content: 'Duplicate',
                accessibilityLabel: 'Secondary action label',
                onAction: () => {},
              },
              {
                content: 'View on your store',
                onAction: () => {},
              },
            ]}
          >
            <Stack distribution="fillEvenly">
              <Card sectioned>
                <TextContainer>
                  <p>
                    Snowdevil is not your typical snowboard store. Instead,
                    Snowdevil is a partnership among two riders who are only
                    interested in selling boards and bindings that they love to
                    ride on... <Link to="#">more</Link>
                  </p>
                </TextContainer>
              </Card>

              <Card sectioned>
                <Stack wrap={false}>
                  <Stack.Item>
                    <Stack wrap={false}>
                      <Stack.Item>
                        <Avatar name="Burton" size="small" initials="B" />
                      </Stack.Item>
                      <Stack.Item>
                        <Avatar name="Summer" size="small" initials="S" />
                      </Stack.Item>
                      <Stack.Item>
                        <Avatar name="Arbor" size="small" initials="A" />
                      </Stack.Item>
                    </Stack>
                  </Stack.Item>
                  <Stack.Item fill>
                    <p>
                      Similar to Burton, Never Summer, Arbor, and 5 other stores
                      you follow
                    </p>
                  </Stack.Item>
                </Stack>
              </Card>

              <Stack wrap={false}>
                <Stack.Item fill>
                  <TextContainer>
                    <PolarisHeading>Featured products</PolarisHeading>
                  </TextContainer>
                </Stack.Item>
                <Stack.Item>
                  <Icon source={ArrowRightMinor} />
                </Stack.Item>
              </Stack>
              <Stack>
                <Stack.Item>
                  <Thumbnail
                    size="large"
                    source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                    alt="Black choker necklace"
                  />
                  <TextContainer>
                    <p>Hello world</p>
                  </TextContainer>
                </Stack.Item>
                <Stack.Item>
                  <Thumbnail
                    size="large"
                    source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                    alt="Black choker necklace"
                  />
                  <TextContainer>
                    <p>Hello world</p>
                  </TextContainer>
                </Stack.Item>
                <Stack.Item>
                  <Thumbnail
                    size="large"
                    source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                    alt="Black choker necklace"
                  />
                  <TextContainer>
                    <p>Hello world</p>
                  </TextContainer>
                </Stack.Item>
                <Stack.Item>
                  <Thumbnail
                    size="large"
                    source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                    alt="Black choker necklace"
                  />
                  <TextContainer>
                    <p>Hello world</p>
                  </TextContainer>
                </Stack.Item>
              </Stack>
            </Stack>
          </Page>
        </AppProvider>
      </div>
    </Layout>
  );
};

export default DemoPage;
