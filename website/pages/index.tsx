import React from 'react';
import {Box, Flex, Inline, Link, Modal, Stack} from '@polaris/components';
import {Link as RouterLink} from 'react-router-dom';

import {Layout} from '../components/Layout';

import * as styles from './index.css';

const IndexPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Layout>
      <h2>Modal</h2>
      <p>isOpen: {isOpen.toString()}</p>
      <button type="button" onClick={() => setIsOpen(true)}>
        Toggle Modal
      </button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={styles.modalRoot}
      >
        <section className={styles.modalContent}>
          <h3>Modal Content</h3>
          {Array.from({length: 20}, (_) => (
            <button
              style={{display: 'block'}}
              type="button"
              // eslint-disable-next-line no-alert
              onClick={() => alert('Clickable')}
            >
              Test Focus Trap
            </button>
          ))}
        </section>
      </Modal>

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
