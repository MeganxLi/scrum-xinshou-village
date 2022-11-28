import { createContext, useContext } from "react";

interface StepContextInterface {
  activeStep: number;
  nextStep: () => void;
  resetStep: () => void;
}

const StepContext = createContext<StepContextInterface>({} as StepContextInterface);

export const useStep = () => useContext(StepContext);

export default StepContext;
