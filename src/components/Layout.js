import * as React from 'react';

import styles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.pageContainer}>
        <main className={styles.mainContent}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
