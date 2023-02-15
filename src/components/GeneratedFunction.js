import React, { useState } from 'react';
import { useGlobalContext } from '../contexts';

import styles from '../styles/GeneratedFunction.module.scss';

const GeneratedFunction = () => {
  const { fullFunctionString } = useGlobalContext();

  const [showTooltip, setShowTooltip] = useState(false);
  const [toolTipText, setToolTipText] = useState('copy to clipboard');

  const handleCopyToClipboardClick = () => {
    async function copyToClipboard() {
      try {
        await navigator.clipboard.writeText(fullFunctionString);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
    copyToClipboard();

    setToolTipText('copied!');
    setTimeout(() => {
      setShowTooltip(false);
      setToolTipText('copy to clipboard');
    }, 3000);
  };

  return (
    <div className={styles.SectionContainer}>
      <div className={styles.FunctionAndButtonContainer}>
        <p className={styles.FunctionStringContainer}>{fullFunctionString}</p>
        <button
          className={styles.ButtonContainer}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          onClick={handleCopyToClipboardClick}
        >
          <svg
            clipRule='evenodd'
            fillRule='evenodd'
            strokeLinejoin='round'
            strokeMiterlimit='2'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m6 19v2c0 .621.52 1 1 1h2v-1.5h-1.5v-1.5zm7.5 3h-3.5v-1.5h3.5zm4.5 0h-3.5v-1.5h3.5zm4-3h-1.5v1.5h-1.5v1.5h2c.478 0 1-.379 1-1zm-1.5-1v-3.363h1.5v3.363zm0-4.363v-3.637h1.5v3.637zm-13-3.637v3.637h-1.5v-3.637zm11.5-4v1.5h1.5v1.5h1.5v-2c0-.478-.379-1-1-1zm-10 0h-2c-.62 0-1 .519-1 1v2h1.5v-1.5h1.5zm4.5 1.5h-3.5v-1.5h3.5zm3-1.5v-2.5h-13v13h2.5v-1.863h1.5v3.363h-4.5c-.48 0-1-.379-1-1v-14c0-.481.38-1 1-1h14c.621 0 1 .522 1 1v4.5h-3.5v-1.5z'
              fillRule='nonzero'
            />
          </svg>
        </button>
      </div>
      <div className={styles.ToolTipContainer}>
        {showTooltip && <div className={styles.ToolTip}>{toolTipText}</div>}
      </div>
    </div>
  );
};

export default GeneratedFunction;
