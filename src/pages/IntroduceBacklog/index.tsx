import { useRef, useState } from "react";
import { useStep } from "../../context/StepContext";
import { DialogIconButton } from "../../constants/EnumType";
import Dialog from "../../components/Dialog";
import { DialogOrder } from "../../utils/DialogOrder";

const IntroduceBacklog = () => {
  const { nextStep } = useStep();
  // true: 0, false: 1;
  const [order, setOrder] = useState<number>(0);
  const blaRef = useRef(false);

  DialogOrder(order, setOrder, [1]);

  const nextOrder = () => {
    setOrder(prev => prev + 1);
    blaRef.current = true;
  };

  const prevOrder = () => {
    setOrder(0);
  };

  const dialogList: DialogComponentType[] = [
    {
      text:
        <>
          <p>
            我是 TT 資訊，開發組的 PO。
          </p>
          <p>
            PO 就是產品負責人（Product Owner），產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。
          </p>
          <p>
            最後排出產品待辦清單（Product Backlog）唷！
          </p>
        </>,
      icon: {
        text: DialogIconButton.DownOne,
        onClick: () => nextOrder(),
      }
    },
    {
      text:
        <p>
          剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。既然你都來了，就讓你來試試看調整產品優先度，排出產品待辦清單吧！
        </p>,
      button: {
        text: "Go",
        onClick: nextStep,
      },
      icon: {
        text: DialogIconButton.Undo,
        onClick: () => prevOrder(),
      }
    },
  ];

  return (
    <section id="IntroduceBacklog">
      <img
        className="role animate__slideInLeft duration"
        src={process.env.PUBLIC_URL + "/images/img_po_2.png"}
      />
      {blaRef.current &&
        <img
          className="bla zoomIn duration"
          src={process.env.PUBLIC_URL + "/images/bla.gif"}
        />
      }
      {dialogList.map((item: DialogComponentType, idx: number) => {
        return order === idx && <Dialog DialogItem={item} key={idx} />;
      })}
    </section>
  );
};

export default IntroduceBacklog;
