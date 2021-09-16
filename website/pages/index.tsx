/* eslint-disable no-alert */
import React from 'react';
import {
  Box,
  Button,
  ButtonBase,
  Card,
  CardActionArea,
  Flex,
  Grid,
  Inline,
  Link,
  Stack,
} from '@polaris/components';
import {Link as RouterLink} from 'react-router-dom';

import {devDocsThemeClass} from '../components/theme.css';
import {Layout} from '../components/Layout';
import {DevDocsButton} from '../components/DevDocsButton';

const IndexPage = () => {
  return (
    <Layout>
      <h2>Card</h2>
      <p>Explanation</p>
      <Grid gap="4" columns={['350px', '350px', '350px']}>
        <Card
          style={{
            backgroundColor: 'whitesmo}e',
            border: '1px solid silver',
            borderRadius: '8px',
          }}
        >
          <CardActionArea
            cover
            onClick={() => alert('You clicked the entire card')}
          />
          <h3>✓ Cover - ✗ Inner Actn</h3>
          <p>
            CardActionArea is covering entire card and has no inner actions.
          </p>
        </Card>
        <Card
          style={{
            backgroundColor: 'whitesmoke',
            border: '1px solid silver',
            borderRadius: '8px',
          }}
        >
          <CardActionArea
            cover
            onClick={() => alert('You clicked the entire card')}
          />
          <h3>✓ Cover - ✓ Inner Actn - ✓ Separate Actns</h3>
          <p>
            CardActionArea is covering entire card and has{' '}
            <Link href="/about" style={{position: 'relative'}}>
              an inner action that links you to a new page
            </Link>
            .
          </p>
          <Button
            onClick={() => alert('You clicked the button inside the card')}
          >
            Button
          </Button>
        </Card>
        <Card
          style={{
            backgroundColor: 'whitesmoke',
            border: '1px solid silver',
            borderRadius: '8px',
          }}
        >
          <CardActionArea
            cover
            onClick={() => (window.location.href = '/about')}
          />
          <h3>✓ Cover - ✓ Inner Actn - ✓ Same Actns</h3>
          <p>
            CardActionArea is covering entire card and has{' '}
            <Link href="/about" style={{position: 'relative'}}>
              an inner action that links you to a new page
            </Link>
            .
          </p>
        </Card>
        <Card
          style={{
            backgroundColor: 'whitesmoke',
            border: '1px solid silver',
            borderRadius: '8px',
          }}
        >
          <CardActionArea onClick={() => alert('You clicked the entire card')}>
            <h3>✗ Cover - ✗ Inner Actn</h3>
            <p>
              CardActionArea is NOT covering entire card and has no inner
              actions.
            </p>
          </CardActionArea>
        </Card>
        <Card
          style={{
            backgroundColor: 'whitesmoke',
            border: '1px solid silver',
            borderRadius: '8px',
          }}
        >
          <CardActionArea onClick={() => alert('You clicked the entire card')}>
            <h3>✗ Cover - ✓ Inner Actn</h3>
            <p>
              CardActionArea is NOT covering entire card and has{' '}
              <Link href="/about" style={{position: 'relative'}}>
                an inner action that links you to a new page
              </Link>
              .
            </p>
            <Button
              onClick={(event) => {
                event.stopPropagation();
                alert('You clicked the button inside the action area');
              }}
            >
              Button
            </Button>
          </CardActionArea>
        </Card>
        <Card
          style={{
            backgroundColor: 'whitesmoke',
            border: '1px solid silver',
            borderRadius: '8px',
          }}
        >
          <CardActionArea onClick={() => alert('You clicked the entire card')}>
            <h3>✗ Cover - ✗ Inner Actn - ✓ Footer Actn</h3>
            <p>
              CardActionArea is NOT convering the entire card and has no inner
              actions.&nbsp;
            </p>
          </CardActionArea>
          <section>
            <Button
              onClick={() =>
                alert('You clicked the button outside action area')
              }
            >
              Button
            </Button>
          </section>
        </Card>
      </Grid>
      <Divider />
      <h2>Button</h2>
      <Flex gap="4" marginX="4">
        <ButtonBase onClick={() => console.log('Hi')}>Hi</ButtonBase>
        <Button onClick={() => console.log('Hello')}>Button</Button>
        <Button href="http://www.shopify.com/">Link</Button>
        <div className={devDocsThemeClass}>
          <DevDocsButton onClick={() => console.log('Hello')}>
            Button
          </DevDocsButton>
        </div>
      </Flex>

      <Divider />

      <h2>Link</h2>
      <Link href="/about">Hyperlink</Link>
      <br />
      <Link as={RouterLink} to="/about">
        Router Link
      </Link>
      <br />
      <Link href="/about" external>
        Hyperlink - External
      </Link>
      <br />
      <Link as={RouterLink} to="/about" external>
        Router Link - External
      </Link>
      <br />
      <Link href="/about" underline="none">
        Hyperlink - No Underline Variant
      </Link>
      <br />
      <Link as={RouterLink} to="/about" underline="always">
        Router Link - Always Underlined Variant
      </Link>
      <br />
      <Link href="/about" aria-label="Label text here">
        Hyperlink - Aria Label
      </Link>
      <br />
      <Divider />
      <h2>Flex</h2>
      <Flex gap="4">
        <Box style={{backgroundColor: 'silver'}} height="16" width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height="20" width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height="24" width="1/3" />
      </Flex>

      <Divider />

      <h2>Stack</h2>
      <Stack gap="2" align="center">
        <Box style={{backgroundColor: 'silver'}} height="16" width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height="20" width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height="24" width="1/3" />
      </Stack>

      <Divider />

      <h2>Inline – Wrap (Default)</h2>
      <Inline gap="2">
        <Box style={{backgroundColor: 'silver'}} height="16" width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height="20" width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height="24" width="1/3" />
      </Inline>

      <Divider />

      <h2>Inline – No wrap</h2>
      <Inline gap="2" wrap="nowrap">
        <Box style={{backgroundColor: 'silver'}} height="16" width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height="20" width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height="24" width="1/3" />
      </Inline>
    </Layout>
  );
};

const Divider = () => (
  <Box margin="4" height="px" style={{backgroundColor: 'silver'}} />
);

export default IndexPage;
