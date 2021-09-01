import React from 'react';
import {Box, Flex, Inline, Stack, FocusLock} from '@polaris/components';

import {Layout} from '../components/Layout';

const IndexPage = () => {
  const [isFocusLocked, setIsFocusLocked] = React.useState(false);
  const [isScrollLocked, setScrollLocked] = React.useState(false);

  function toggleFocusLock() {
    setIsFocusLocked((prevIsFocusLocked) => !prevIsFocusLocked);
  }

  function toggleScrollLock() {
    setScrollLocked((prevIsScrollLocked) => !prevIsScrollLocked);
  }

  return (
    <Layout>
      <h2>Focus Lock</h2>
      <p>isFocusLocked: {isFocusLocked.toString()}</p>
      <p>isScrollLocked: {isScrollLocked.toString()}</p>

      <br />
      <br />

      <button type="button" onClick={toggleFocusLock}>
        Toggle Focus Lock
      </button>
      <button type="button" onClick={toggleScrollLock}>
        Toggle Scroll Lock
      </button>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <p>
        👆 Focus will return to this button when the Focus Lock is disabled.
      </p>

      <br />
      <br />

      <FocusLock
        focusLock={isFocusLocked}
        scrollLock={isScrollLocked}
        onEscapeKey={toggleFocusLock}
      >
        <h3>Focus Lock Group</h3>
        <Flex gap={4}>
          <button type="button" onClick={toggleFocusLock}>
            Toggle Focus Lock
          </button>
          <button type="button" onClick={toggleFocusLock}>
            Toggle Focus Lock
          </button>
          <button type="button" onClick={toggleFocusLock}>
            Toggle Focus Lock
          </button>
        </Flex>
      </FocusLock>

      <Divider />

      <h2>Flex</h2>
      <Flex gap={4}>
        <Box style={{backgroundColor: 'silver'}} height={16} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={20} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={24} width="1/3" />
      </Flex>

      <Divider />

      <h2>Stack</h2>
      <Stack gap={2} align="center">
        <Box style={{backgroundColor: 'silver'}} height={16} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={20} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={24} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={16} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={20} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={24} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={16} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={20} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={24} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={16} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={20} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={24} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={16} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={20} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={24} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={16} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={20} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={24} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={16} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={20} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={24} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={16} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={20} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={24} width="1/3" />
      </Stack>

      <Divider />

      <h2>Inline – Wrap (Default)</h2>
      <Inline gap={2}>
        <Box style={{backgroundColor: 'silver'}} height={16} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={20} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={24} width="1/3" />
      </Inline>

      <Divider />

      <h2>Inline – No wrap</h2>
      <Inline gap={2} wrap="nowrap">
        <Box style={{backgroundColor: 'silver'}} height={16} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={20} width="1/3" />
        <Box style={{backgroundColor: 'silver'}} height={24} width="1/3" />
      </Inline>
    </Layout>
  );
};

const Divider = () => (
  <Box margin={4} height="px" style={{backgroundColor: 'silver'}} />
);

export default IndexPage;
