import { DownOne } from "@icon-park/react";
import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import DropList from "../../components/DropList";
import { TaskFlowItem } from "../../constants/EnumType";
import { useStep } from "../../context/StepContext";
import { DialogOrder } from "../../utils/DialogOrder";
import { handleDragEnd } from "../../utils/handleDragEnd";

const TaskFlow = () => {
  const { nextStep } = useStep();
  const [other, setOther] = useState<number>(0);
  DialogOrder(other, setOther, []);

  const [items, setItems] = useState<TaskPriorityItemsType>(TaskFlowItem);

  const onDragEnd = (event: DropResult) => {
    const { source, destination } = event;

    // dropped outside the list
    if (!destination) {
      return;
    }
    setItems(handleDragEnd(items, source, destination));
  };

  return (
    <section id="TaskFlow">
      <div className={`flow-talk-box duration ${other > 0 ? "animate__slideOutUp animation-forwards" : ""}`}>
        <img className="banner" src={process.env.PUBLIC_URL + "/images/TaskShort_banner.png"} />
        <img className="img-bla" src={process.env.PUBLIC_URL + "/images/bla.gif"} />
        <img className="img-bla img-bla-right" src={process.env.PUBLIC_URL + "/images/bla.gif"} />

        <div className="flow-talk-dialog">
          <div className="flow-talk-content">
            <h3 className="chickara">最終任務</h3>
            <p className="task-directions">
              Sprint 流程記憶大考驗
              <br />
              把貼紙貼到對應的格子內，全部正確才會出現提交按鈕！
            </p>
            <DownOne theme="filled" size="30" className="icon-down animate__fadeIn" onClick={() => setOther(1)} />
          </div>
        </div>
      </div>

      <div className={`flow-sprint-dialog duration ${other === 1 ? "flowSprintInUp animation-forwards" : ""}`}>
        <div className="sprint-content">
          <h5>Sprint 流程圖</h5>

          <DragDropContext onDragEnd={onDragEnd}>
            <DropList items={items} droppableId="sprintList" className="sprint-drop" />
            <DropList items={items} droppableId="candidate" horizontal={true} className="sprint-list" />
          </DragDropContext>

          {items.sprintList.length === 3 && (
            <button className="next-step chickara" onClick={nextStep}>
              提交
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskFlow;
