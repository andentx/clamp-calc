import styles from '../styles/Inputs.module.scss';

const CalculatorInputs = ({ inputValues, onInputChange }) => {
  return (
    <form className={styles.InputSectionContainer}>
      <div className={styles.Input}>
        <label htmlFor='minSize'>Min Size:</label>
        <input
          id='minSizeInputValue'
          name='minSizeInputValue'
          value={inputValues.minSizeInputValue}
          type='number'
          onChange={onInputChange}
        />
        <p>rem</p>
      </div>
      <div className={styles.Input}>
        <label htmlFor='maxSize'>Max Size:</label>
        <input
          id='maxSizeInputValue'
          name='maxSizeInputValue'
          value={inputValues.maxSizeInputValue}
          type='number'
          onChange={onInputChange}
        />
        <p>rem</p>
      </div>
      <div className={styles.Input}>
        <label htmlFor='minVw'>Min VW:</label>
        <input
          id='minViewWidthInputValue'
          name='minViewWidthInputValue'
          value={inputValues.minViewWidthInputValue}
          type='number'
          onChange={onInputChange}
        />
        <p>vw</p>
      </div>
      <div className={styles.Input}>
        <label htmlFor='maxVw'>Max VW:</label>
        <input
          id='maxViewWidthInputValue'
          name='maxViewWidthInputValue'
          value={inputValues.maxViewWidthInputValue}
          type='number'
          onChange={onInputChange}
        />
        <p>vw</p>
      </div>
    </form>
  );
};

export default CalculatorInputs;
