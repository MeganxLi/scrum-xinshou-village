import React from "react";
import { DownOne, Undo } from "@icon-park/react";
import { useStep } from "../../context/StepContext";

const IntroduceBacklog = () => {
  const { nextStep } = useStep();
  return <section id="IntroduceBacklog">
    <img
      className="role"
      src={process.env.PUBLIC_URL + "/images/img_po.png"}
    />
    <img
      className="bla"
      src={process.env.PUBLIC_URL + "/images/bla.gif"}
    />
    <div className="dialog-box">
      <div className="dialog-content">
        <div>
          <p>
            我是 TT 資訊，開發組的 PO。
          </p>
          <p>
            PO 就是產品負責人（Product Owner），產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。<br />
            最後排出產品待辦清單（Product Backlog）唷！
          </p>
        </div>
        <div>
          剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。既然你都來了，就讓你來試試看調整產品優先度，排出產品待辦清單吧！
        </div>
        <div>
          <DownOne theme="filled" size="30" className="icon-down" />
          <button onClick={nextStep} className="next-step chickara ">
            Go
          </button>
        </div>
        <Undo strokeWidth={4} className="icon-undo" />

      </div>
    </div>
  </section>;
};

export default IntroduceBacklog;
