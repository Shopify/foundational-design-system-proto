/* eslint-disable react/jsx-child-element-spacing */
import React from 'react';
import {
  Box,
  Flex,
  Inline,
  Stack,
  Link,
  Slide,
  SlideProps,
} from '@polaris/components';
import {Link as RouterLink} from 'react-router-dom';

import {Layout} from '../components/Layout';

const IndexPage = () => {
  const [inProp, setIn] = React.useState(false);
  const [direction, setDirection] =
    React.useState<SlideProps['direction']>('bottom');

  function toggleIn() {
    setIn((prevIn) => !prevIn);
  }

  return (
    <Layout>
      <h2>Slide: {inProp.toString()}</h2>
      <button type="button" onClick={toggleIn}>
        Toggle Slide
      </button>
      <br />
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label>
        Slide Direction:
        <select
          value={direction}
          onChange={(event) =>
            setDirection(event.target.value as SlideProps['direction'])
          }
        >
          <option value="top">Top</option>
          <option value="right">Right</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
        </select>
      </label>
      <Slide
        in={inProp}
        direction={direction}
        duration={{enter: 2500, exit: 750}}
      >
        <Box
          style={{backgroundColor: 'silver'}}
          height="16"
          width="16"
          marginY="4"
        />
      </Slide>

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
