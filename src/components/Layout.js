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

        <link rel='icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='/icons/favicon.ico' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='icons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='icons/favicon-16x16.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='icons/apple-touch-icon.png'
        />
        <link
          rel='mask-icon'
          href='icons/safari-pinned-tab.svg'
          color='hsl(210, 63%, 16%)'
        />
        <link rel='manifest' href='icons/site.webmanifest' />
        <meta name='msapplication-TileColor' content='hsl(210, 63%, 16%)' />
        <meta name='msapplication-config' content='icons/browserconfig.xml' />

        <meta
          property='og:title'
          content='Clamp Calc | A tool for generating clamp CSS functions'
        />
        <meta
          property='og:description'
          content='Clamp Calc is a tool for generating clamp CSS functions.'
        />
        <meta property='og:image' content='https://i.imgur.com/PvK7j7G.png' />
        <meta
          property='og:image:alt'
          content='A screenshot of the Clamp Calc website'
        />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://clamp-calc.vercel.app/' />

        <meta name='twitter:card' content='summary' />

        <meta name='theme-color' content='hsl(210, 63%, 16%)' />
      </Head>

      <div className={styles.pageContainer}>
        <main className={styles.mainContent}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
