import React from "react";
import { useStep } from "../../context/StepContext";

const Start = () => {
  const { nextStep } = useStep();
  return (
    <div>
      Start
      <button onClick={nextStep} className="mt-5 btn">
        1
      </button>
    </div>
  );
};

export default Start;
