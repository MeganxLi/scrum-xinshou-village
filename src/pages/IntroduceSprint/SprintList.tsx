import { Undo } from "@icon-park/react";
import React, { useEffect, useRef, useState } from "react";

interface props {
  setOrder: React.Dispatch<React.SetStateAction<number>>
}

const SprintList = ({ setOrder }: props) => {
  const [sprintStep, setSprintStep] = useState<number>(0);
  const hiddenRef = useRef<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      hiddenRef.current = true;
    }, 1000);
  }, []);

  const textList: {
    text: JSX.Element,
    img?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
  }[] = [
      {
        text:
          <>
            <p>每日站立會議 (Daily Scrum)</p>
            <p>
              每天都要進行的會議，以 15 分鐘為限制
              昨天為團隊的短衝目標（Sprint Goal）做了那些進度
              今天我會如何準備來幫助團隊達到短衝目標
              過程中有遇到什麼問題、難題
              透過團隊分享，追蹤大家的工作狀況。
            </p>
          </>
      },
      {
        text:
          <>
            <p>短衝檢視會議 (Sprint Review)</p>
            <p>用來檢視該次短衝增量的成果，以蒐集相關的回饋數據或意見。</p>
          </>,
        img: <img
          className="img-giphy"
          src={process.env.PUBLIC_URL + "/images/img_dev02.png"}
        />
      },

      {
        text:
          <>
            <p>短衝自省會議 (Retro)</p>
            <p>
              團隊在自省會議裡，會共同回顧該短衝歷程發生的事情，
              好的地方、可以改進的地方，以及如何維持我們已有的成功經驗、
              優化工作流程、讓團隊有變得更好的機會。
            </p>
          </>,
        img: <img
          className="img-giphy"
          src={process.env.PUBLIC_URL + "/images/img_dev01_right.png"}
        />
      }
    ];
  return (
    <div className="sprint-list">
      <p className="sprint-list-hint">
        快速劃重點
        <img
          className="img-giphy"
          src={process.env.PUBLIC_URL + "/images/giphy.gif"}
        />
      </p>
      <div className="dialog-box spring-list-text">
        <div className="dialog-content">
          <img
            className="img-stars"
            src={process.env.PUBLIC_URL + "/images/Stars.png"}
          />
          <Undo
            strokeWidth={4}
            size={32}
            className="icon-undo"
            onClick={() => setOrder(0)}
          />
          <div className="dialog-content-slide">
            {textList.map((item, idx: number) => {
              return <div key={idx} className={`dialog-content-text duration ${sprintStep === idx ?
                "animate__fadeInRightBig" :
                "animate__fadeOutLeft"
                }`}>{item.text}</div>;
            })}
          </div>

          <button className="next-step chickara" style={{
            visibility: sprintStep === 2
              ? "visible" : "hidden"
          }}>了解</button>

          <ul className="slick-list">
            {Array.from(Array(3)).map((val, idx: number) => {
              return <li
                className={sprintStep === idx ? "slick-active" : undefined}
                key={idx}
                onClick={() => setSprintStep(idx)}>
              </li>;
            })}
          </ul>
        </div>
      </div>

      <img
        className={`role role-left duration ${sprintStep === 0 ? "animate__backOutDown" : "animate__backInUp"}`}
        style={{ visibility: hiddenRef.current ? "visible" : "hidden" }}
        src={process.env.PUBLIC_URL + "/images/img_dev02.png"}
      />
      <img
        className={`role role-right duration ${sprintStep !== 2 ? "animate__backOutDown" : "animate__backInUp"}`}
        style={{ visibility: hiddenRef.current ? "visible" : "hidden" }}
        src={process.env.PUBLIC_URL + "/images/img_dev01_right.png"}
      />

    </div>
  );
};

export default SprintList;
