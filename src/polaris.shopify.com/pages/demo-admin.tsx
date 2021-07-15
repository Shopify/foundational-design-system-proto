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
  Badge,
  TextStyle,
  ButtonGroup,
  Button,
} from '@shopify/polaris';
import {
  ArrowRightMinor,
  HomeMajor,
  SearchMajor,
  CheckoutMajor,
  CustomersMajor,
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
        style={{
          width: '375px',
          height: '858px',
          border: '5px solid black',
          borderRadius: '40px',
          marginTop: '50px',
        }}
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
            <div style={{marginLeft: '2rem', marginRight: '2rem'}}>
              <Stack distribution="fillEvenly" spacing="loose" vertical>
                <TextContainer>
                  <p>
                    Snowdevil is not your typical snowboard store. Instead,
                    Snowdevil is a partnership among two riders who are only
                    interested in selling boards and bindings that they love to
                    ride on... <Link to="#">view more</Link>
                  </p>
                </TextContainer>

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
                        Similar to Burton, Never Summer, Arbor, and 5 other
                        stores you follow
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
                <Stack spacing="loose" distribution="fillEvenly">
                  <Stack.Item>
                    <Thumbnail
                      size="large"
                      source="/static/demo/burton-throwback.jpg"
                      alt="Black choker necklace"
                    />
                    <TextContainer>
                      <p>
                        <TextStyle variation="strong">
                          Burton Throwback
                        </TextStyle>
                        <br />
                        $175.00
                      </p>
                    </TextContainer>
                  </Stack.Item>
                  <Stack.Item>
                    <div style={{position: 'relative'}}>
                      <Thumbnail
                        size="large"
                        source="/static/demo/burton-stylus.jpg"
                        alt="Black choker necklace"
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '3px',
                          left: '3px',
                        }}
                      >
                        <Badge status="success">Sale</Badge>
                      </div>
                    </div>

                    <TextContainer>
                      <p>
                        <TextStyle variation="strong">
                          Burton Stylus Flat Top
                        </TextStyle>
                        <br />
                        <TextStyle variation="subdued">$899.99</TextStyle>{' '}
                        <TextStyle variation="positive">$719.99</TextStyle>
                      </p>
                    </TextContainer>
                  </Stack.Item>
                </Stack>
                <Stack distribution="center">
                  <ButtonGroup segmented>
                    <Button
                      icon={HomeMajor}
                      accessibilityLabel="Home"
                      pressed
                    />
                    <Button icon={SearchMajor} accessibilityLabel="Search" />
                    <Button
                      icon={CheckoutMajor}
                      accessibilityLabel="Checkout"
                    />
                    <Button
                      icon={CustomersMajor}
                      accessibilityLabel="Customer"
                    />
                  </ButtonGroup>
                </Stack>
              </Stack>
            </div>
          </Page>
        </AppProvider>
      </div>
    </Layout>
  );
};

export default DemoPage;
