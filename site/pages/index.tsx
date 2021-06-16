import React from 'react';
import Head from 'next/head';
import {Button} from '@polaris/elements';

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
        <Button variant="primary">
          Polaris{' '}
          <span role="img" aria-label={sparklesLabel}>
            ✨
          </span>
        </Button>
      </main>
    </>
  );
}
