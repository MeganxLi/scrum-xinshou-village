import { useRef, useState } from "react";
import { DownOne, Undo } from "@icon-park/react";
import { useStep } from "../../context/StepContext";

const animationDelay = "0.5s";

const IntroduceBacklog = () => {
  const { nextStep } = useStep();
  // true: 0, false: 1;
  const [dialog, setDialog] = useState<boolean>(true);
  const blaRef = useRef(false);

  return (
    <section id="IntroduceBacklog">
      <img
        className="role slideInLeft duration"
        src={process.env.PUBLIC_URL + "/images/img_po.png"}
      />
      {blaRef.current &&
        <img
          className="bla zoomIn duration"
          src={process.env.PUBLIC_URL + "/images/bla.gif"}
        />
      }
      <div className="dialog-box">
        <div className="dialog-content">
          {dialog &&
            < >
              <div className="animate__slideInUp duration">
                <p>
                  我是 TT 資訊，開發組的 PO。
                </p>
                <p>
                  PO 就是產品負責人（Product Owner），產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。
                </p>
                <p>
                  最後排出產品待辦清單（Product Backlog）唷！
                </p>
              </div>
              <DownOne
                theme="filled"
                size="30"
                className="icon-down animate__fadeIn"
                style={{ animationDelay: animationDelay }}
                onClick={() => {
                  setDialog(false);
                  blaRef.current = true;
                }}
              />
            </>
          }
          {!dialog &&
            <>
              <div className="animate__slideInUp duration">
                剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。既然你都來了，就讓你來試試看調整產品優先度，排出產品待辦清單吧！
              </div>
              <button
                onClick={nextStep}
                className="next-step chickara animate__fadeIn"
                style={{ animationDelay: animationDelay }}
              >
                Go
              </button>
              <Undo
                strokeWidth={4}
                size={32}
                className="icon-undo"
                onClick={() => setDialog(true)}
              />
            </>
          }

        </div>
      </div>
    </section>
  );
};

export default IntroduceBacklog;
