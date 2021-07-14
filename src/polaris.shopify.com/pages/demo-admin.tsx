import React from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import {
  AppProvider,
  Card,
  Button,
  TextContainer,
  Heading as PolarisHeading,
  Thumbnail,
  Icon,
  Stack,
  Avatar,
  DisplayText,
  MediaCard,
} from '@shopify/polaris';
import {
  ArrowRightMinor,
  ArrowLeftMinor,
  MobileHorizontalDotsMajor,
} from '@shopify/polaris-icons';
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
          <Stack alignment="center" distribution="equalSpacing">
            <Stack.Item>
              <Icon source={ArrowLeftMinor} />
            </Stack.Item>
            <Stack.Item>
              <Icon source={MobileHorizontalDotsMajor} />
            </Stack.Item>
          </Stack>
          <Avatar customer name="SnowDevil" size="large" />
          <Stack alignment="center">
            <Stack.Item fill>
              <DisplayText size="large" element="h1">
                SnowDevil
              </DisplayText>
            </Stack.Item>
            <Stack.Item>
              <Button primary onClick={() => alert('Button clicked!')}>
                Follow
              </Button>
            </Stack.Item>
          </Stack>

          <TextContainer>
            <p>
              Snowdevil is not your typical snowboard store. Instead, Snowdevil
              is a partnership among two riders who are only interested in
              selling boards and bindings that they love to ride on... more
            </p>
          </TextContainer>

          <Card>
            <Stack wrap={false}>
              <Stack.Item>
                <Stack wrap={false}>
                  <Stack.Item>
                    <Avatar name="Burton" size="small" initials="B" />
                  </Stack.Item>
                  <Stack.Item>
                    <Avatar name="Never Summer" size="small" initials="NS" />
                  </Stack.Item>
                  <Stack.Item>
                    <Avatar name="Arbor" size="small" initials="A" />
                  </Stack.Item>
                </Stack>
              </Stack.Item>
              <Stack.Item fill>
                <p>
                  Similar to Burton, Never Summer, Arbor, and 5 other stores you
                  follow
                </p>
              </Stack.Item>
            </Stack>
          </Card>

          <Stack>
            <Stack.Item fill>
              <PolarisHeading>Featured products</PolarisHeading>
            </Stack.Item>
            <Stack.Item>
              <Icon source={ArrowRightMinor} />
            </Stack.Item>
          </Stack>

          <Thumbnail
            source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
            alt="Black choker necklace"
          />
        </AppProvider>
      </div>
    </Layout>
  );
};

export default DemoPage;
