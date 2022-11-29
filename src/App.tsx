import React, { useEffect, useState } from "react";
import PagesStepList from "./constants/PagesStepList";
import { useStep } from "./context/StepContext";
import "animate.css/animate.css";
import "./styles/App.scss";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { activeStep } = useStep();

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return <>{loading ? null : <div className="App">{PagesStepList[activeStep]}</div>}</>;
}

export default App;
