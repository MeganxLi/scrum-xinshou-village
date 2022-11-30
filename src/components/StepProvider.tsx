import React, { useState } from "react";
import StepContext from "../context/StepContext";

const StepContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const nextStep = () => {
    setActiveStep((prevState) => prevState + 1);
  };

  const resetStep = () => {
    setActiveStep(0);
  };
  return (
    <StepContext.Provider
      value={{
        nextStep,
        resetStep,
        activeStep,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

export default StepContextProvider;
