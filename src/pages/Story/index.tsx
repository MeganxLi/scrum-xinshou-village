import React from "react";
import { useStep } from "../../context/StepContext";

const Story = () => {
  const { nextStep } = useStep();
  return (
    <div>
      Story
      <button onClick={nextStep} className="mt-5 btn">
        2
      </button>
    </div>
  );
};

export default Story;
