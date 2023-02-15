import React, { useState } from 'react';

export const GlobalContext = React.createContext({});

export const GlobalContextProvider = (props) => {
  const [minViewWidthInREM, setMinViewWidthInREM] = useState();
  const [maxViewWidthInREM, setMaxViewWidthInREM] = useState();
  const [minSizeInREM, setMinSizeInREM] = useState();
  const [maxSizeInREM, setMaxSizeInREM] = useState();

  const [slope, setSlope] = useState();
  const [yAxis, setYAxis] = useState();

  const [preferredString, setPreferredString] = useState();
  const [fullFunctionString, setFullFunctionString] = useState();

  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        minViewWidthInREM: minViewWidthInREM,
        setMinViewWidthInREM: setMinViewWidthInREM,
        maxViewWidthInREM: maxViewWidthInREM,
        setMaxViewWidthInREM: setMaxViewWidthInREM,
        minSizeInREM: minSizeInREM,
        setMinSizeInREM: setMinSizeInREM,
        maxSizeInREM: maxSizeInREM,
        setMaxSizeInREM: setMaxSizeInREM,
        slope: slope,
        setSlope: setSlope,
        yAxis: yAxis,
        setYAxis: setYAxis,
        preferredString: preferredString,
        setPreferredString: setPreferredString,
        fullFunctionString: fullFunctionString,
        setFullFunctionString: setFullFunctionString,
        currentCarouselIndex: currentCarouselIndex,
        setCurrentCarouselIndex: setCurrentCarouselIndex,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
