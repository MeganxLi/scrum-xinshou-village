import React, { useEffect, useState } from "react";
import PagesStepList from "./constants/PagesStepList";
import { useStep } from "./context/StepContext";
import "animate.css/animate.css";
import "./styles/App.scss";
import { createPortal } from "react-dom";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { activeStep } = useStep();

  const elNotice = document.getElementById("notice");

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <>
      {!elNotice ?
        null :
        createPortal(<div className="notice">
          <img src={process.env.PUBLIC_URL + "/images/bla.gif"} />
          <p>建議使用 1024 x 768 以上螢幕解析度，<br />以獲得最佳瀏覽體驗。</p>
        </div>, elNotice)
      }
      {loading ? null : PagesStepList[activeStep]}
    </>
  );
}

export default App;
