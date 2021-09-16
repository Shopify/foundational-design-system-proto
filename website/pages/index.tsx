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
import {Link as LocalLink} from '../components/Link';

const IndexPage = () => {
  return (
    <Layout>
      <h2>Card</h2>
      <Grid gap="4" columns={['350px', '350px', '350px']}>
        <Card
          style={{
            backgroundColor: 'whitesmo}e',
            border: '1px solid silver',
            borderRadius: '8px',
          }}
        >
          <h3>Static Card</h3>
          <p>
            <i>--</i>
          </p>
          <p>This card does not have a CardActionArea.</p>
        </Card>
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
          <h3>Clickable Card</h3>
          <p>
            <i>✓ Cover - ✗ Overlay Actn</i>
          </p>
          <p>
            This card has an CardActionArea that is covering the entire card.
            The CardActionArea has no actions.
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
          <h3>Clickable Card (Entire) + Actions</h3>
          <p>
            <i>✓ Cover - ✓ Overlay Actn</i>
          </p>
          <p>
            This card has an CardActionArea that is covering the entire card.
            The CardActionArea has two actions overlaying it.
          </p>
          {/* Styling the link with position: 'realtive' allows the link to overlay the CardActionArea so it can be clicked */}
          <LocalLink to="/about" style={{position: 'relative'}}>
            An overlaying link that takes you to a new page
          </LocalLink>
          <Button
            onClick={() =>
              alert('You clicked the button overlaying the action area')
            }
          >
            Overlaying Button
          </Button>
        </Card>
        <Card
          style={{
            backgroundColor: 'whitesmoke',
            border: '1px solid silver',
            borderRadius: '8px',
          }}
        >
          <CardActionArea onClick={() => alert('You clicked the entire card')}>
            <h3>Partially Clickable Card</h3>
            <p>
              <i>✗ Cover - ✗ Nested Actn</i>
            </p>
            <p>
              This card has an CardActionArea that is NOT covering the entire
              card. The CardActionArea has no actions.
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
            <h3>Partially Clickable Card</h3>
            <p>
              <i>✗ Cover - ✗ Nested Actn</i>
            </p>
            <p>
              This card has an CardActionArea that is NOT covering the entire
              card. The CardActionArea has one action outside of it.
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
        <Card
          style={{
            backgroundColor: 'whitesmoke',
            border: '1px solid silver',
            borderRadius: '8px',
          }}
        >
          <CardActionArea onClick={() => alert('You clicked the entire card')}>
            <h3>Partially Clickable Card (Antipattern)</h3>
            <p>
              <i>✗ Cover - ✓ Nested Actn</i>
            </p>
            <p>
              This card has an CardActionArea that is NOT covering the entire
              card. The CardActionArea has two actions nested inside it.
            </p>
            <LocalLink to="/about" style={{position: 'relative'}}>
              An nested link that takes you to a new page
            </LocalLink>
            <Button
              onClick={(event) => {
                event.stopPropagation();
                alert('You clicked the button inside the action area');
              }}
            >
              Nested Button
            </Button>
          </CardActionArea>
          <hr />
          <p>
            <small>
              THIS PATTERN IS DISCOURAGED!!! <br /> Antipattern: Nesting Buttons
            </small>
          </p>
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
