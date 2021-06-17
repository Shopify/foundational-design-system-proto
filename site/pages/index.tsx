import React from 'react';
import Head from 'next/head';

import {Flex} from '../components/Flex';

export default function Home() {
  const sparklesLabel = 'sparkles';

  return (
    <>
      <Head>
        <title>Polaris Docs</title>
        <meta name="description" content="Polaris Docs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex onClick={() => console.log('test')}>
          Polaris{' '}
          <span role="img" aria-label={sparklesLabel}>
            ✨
          </span>
        </Flex>
      </main>
    </>
  );
}
