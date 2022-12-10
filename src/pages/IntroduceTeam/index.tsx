import { useState } from "react";
import Dialog from "../../components/Dialog";
import { DialogIconButton } from "../../constants/EnumType";
import { useStep } from "../../context/StepContext";
import { DialogOrder } from "../../utils/DialogOrder";

const IntroduceTeam = () => {
  const { nextStep } = useStep();
  const [order, setOrder] = useState<number>(0);

  DialogOrder(order, setOrder, [1, 3, 6]);

  const nextOrder = () => {
    setOrder(prev => prev + 1);
  };

  const prevOrder = (specifyOrder: number) => {
    setOrder(specifyOrder);
  };

  const DialogList: DialogComponentType[] = [
    {
      text:
        <>
          <p>PO：</p>
          <p>
            產品待辦清單好了之後，我們來召集 Scrum Master 和開發團隊共同召開短衝規劃會議(Sprint Planning)。
          </p>
        </>,
      icon: {
        text: DialogIconButton.DownOne,
        onClick: () => nextOrder(),
      }
    },
    {
      text:
        <>
          <p>PO：</p>
          <p>
            短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出短衝待辦清單（Sprint Backlog），並由開發團隊在接下來的產品開發週期裡執行。
          </p>
        </>,
      button: {
        text: "點擊畫面繼續 >>",
        onClick: nextOrder,
      },
      icon: {
        text: DialogIconButton.Undo,
        onClick: () => prevOrder(0),
      }
    },
    {
      text:
        <>
          <p>Scrum Master (SM):</p>
          <p>
            嗨嗨~你是新來的吧！我是這次的 Scrum Master，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對 Scrum 瞭解。
          </p>
        </>,
      icon: {
        text: DialogIconButton.DownOne,
        onClick: () => nextOrder(),
      }
    },
    {
      text:
        <>
          <p>Scrum Master (SM):</p>
          <p>
            這兩位是小貓和小熊，是我們開發團對的成員唷～
          </p>
        </>,
      button: {
        text: "點擊畫面繼續 >>",
        onClick: nextOrder,
      },
      icon: {
        text: DialogIconButton.Undo,
        onClick: () => prevOrder(2),
      }
    },
    {
      text:
        <>
          <p>Scrum Master (SM):</p>
          <p>
            目前我們團隊一次 Sprint 週期是兩週的時間，依照我的觀察，目前團隊可以負擔的點數 (Sprint Point) 大約是 20 點左右。
          </p>
        </>
    },
    {
      text:
        <>
          <p>Dev 小貓</p>
          <p>
            欸新來的，你應該不知道點數是什麼意思吧～
          </p>
          <p>
            哈哈～我來跟你科普一下吧～ Sprint Point 目的是為了衡量速度，是用大概花費的時間預估出的相對點數。
          </p>
        </>
    },
    {
      text:
        <>
          <p>Dev 小熊:</p>
          <p>
            沒錯，就如小貓姊說的！
          </p>
          <p>
            我這已經把討論好的點數標上去囉～你來把任務排到短衝待辦清單吧！
          </p>
        </>,
      button: {
        text: "Go",
        onClick: nextStep,
      },
      icon: {
        text: DialogIconButton.Undo,
        onClick: () => prevOrder(4),
      }
    },
  ];

  return (
    <section id="IntroduceTeam">
      {DialogList.map((item: DialogComponentType, idx: number) => {
        return order === idx &&
          <Dialog DialogItem={item} key={idx} />;
      })}
    </section>
  );
};

export default IntroduceTeam;
