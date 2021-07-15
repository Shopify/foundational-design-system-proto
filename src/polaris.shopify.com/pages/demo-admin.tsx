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
              <Avatar
                name="SnowDevil"
                size="large"
                source="/static/demo/snowdevil.png"
              />
            }
            primaryAction={{content: 'Follow'}}
          >
            <Stack distribution="fillEvenly">
              <Card sectioned>
                <TextContainer>
                  <p>
                    Snowdevil is not your typical snowboard store. Instead,
                    Snowdevil is a partnership among two riders who are only
                    interested in selling boards and bindings that they love to
                    ride on... <Link to="#">view more</Link>
                  </p>
                </TextContainer>
              </Card>

              <Card sectioned>
                <Stack wrap={false}>
                  <Stack.Item>
                    <Stack wrap={false}>
                      <Stack.Item>
                        <Avatar
                          name="Burton"
                          size="small"
                          source="/static/demo/burton-logo.png"
                        />
                      </Stack.Item>
                      <Stack.Item>
                        <Avatar
                          name="Never Summer"
                          size="small"
                          initials="NS"
                        />
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
                    source="/static/demo/burton-throwback.jpg"
                    alt="Black choker necklace"
                  />
                  <TextContainer>
                    <p>
                      Burton Throwback
                      <br />
                      $175.00
                    </p>
                  </TextContainer>
                </Stack.Item>
                <Stack.Item>
                  <Thumbnail
                    size="large"
                    source="/static/demo/burton-stylus.jpg"
                    alt="Black choker necklace"
                  />
                  <TextContainer>
                    <p>
                      Burton Stylus Flat Top <br />
                      <span>$899.99</span> <span>$719.99</span>
                    </p>
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
