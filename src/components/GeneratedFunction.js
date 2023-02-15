import React from 'react';
import { useGlobalContext } from '../contexts';

import styles from '../styles/GeneratedFunction.module.scss';

const GeneratedFunction = () => {
  const { fullFunctionString } = useGlobalContext();

  return (
    <div className={styles.SectionContainer}>
      <div className={styles.FunctionAndButtonContainer}>
        <p className={styles.FunctionStringContainer}>{fullFunctionString}</p>
      </div>
    </div>
  );
};

export default GeneratedFunction;
