import * as React from 'react';
import Head from 'next/head';

import styles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Clamp Calc</title>
        <meta
          name='description'
          content='Clamp Calc is a tool for generating clamp CSS functions'
        />
        <meta name='author' content='Andrew Dent' />

        <meta name='theme-color' content='hsl(210, 63%, 16%)' />
      </Head>
      <div className={styles.pageContainer}>
        <main className={styles.mainContent}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
