import React, { useState, useEffect } from 'react';

import { useGlobalContext } from '../contexts';

import CalculatorInputs from './CalculatorInputs';

const Calculator = () => {
  const {
    minViewWidthInREM,
    setMinViewWidthInREM,
    maxViewWidthInREM,
    setMaxViewWidthInREM,
    minSizeInREM,
    setMinSizeInREM,
    maxSizeInREM,
    setMaxSizeInREM,
    slope,
    setSlope,
    yAxis,
    setYAxis,
    preferredString,
    setPreferredString,
    fullFunctionString,
    setFullFunctionString,
  } = useGlobalContext();

  const [calculatorInputValues, setCalculatorInputValues] = useState({
    minViewWidthInputValue: 300,
    maxViewWidthInputValue: 700,
    minSizeInputValue: 1,
    maxSizeInputValue: 3,
  });

  useEffect(() => {
    setMinViewWidthInREM(calculatorInputValues.minViewWidthInputValue / 16);
    setMaxViewWidthInREM(calculatorInputValues.maxViewWidthInputValue / 16);
    setMinSizeInREM(calculatorInputValues.minSizeInputValue);
    setMaxSizeInREM(calculatorInputValues.maxSizeInputValue);
  }, [calculatorInputValues]);

  useEffect(() => {
    setSlope(
      Math.round(
        ((maxSizeInREM - minSizeInREM) /
          (maxViewWidthInREM - minViewWidthInREM)) *
          10000
      ) / 10000
    );
  });

  useEffect(() => {
    setYAxis(
      Math.round((-1 * minViewWidthInREM * slope + minSizeInREM) * 100) / 100
    );
  });

  useEffect(() => {
    setPreferredString(`${yAxis}rem + ${Math.round(slope * 10000) / 100}vw`);
  }, [slope, yAxis]);

  useEffect(() => {
    setFullFunctionString(
      `clamp(${minSizeInREM}rem, ${preferredString}, ${maxSizeInREM}rem)`
    );
  });

  function handleInputValuesChange(event) {
    const { name, valueAsNumber, value } = event.target;

    if (value === '') {
      setCalculatorInputValues((previousValues) => ({
        ...previousValues,
        [name]: 0,
      }));
      return;
    }

    setCalculatorInputValues((previousValues) => ({
      ...previousValues,
      [name]: valueAsNumber,
    }));
  }

  return (
    <>
      <CalculatorInputs
        inputValues={calculatorInputValues}
        onInputChange={handleInputValuesChange}
      />
    </>
  );
};

export default Calculator;
