import { DownOne } from "@icon-park/react";
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DropItem from "../../components/DropItem";
import { TaskFlowItem } from "../../constants/EnumType";
import { useStep } from "../../context/StepContext";
import { DialogOrder } from "../../utils/DialogOrder";

const TaskFlow = () => {
  const { nextStep } = useStep();
  const [other, setOther] = useState<number>(0);
  DialogOrder(other, setOther, []);

  const [items, setItems] = useState<TaskPriorityItemsType>(TaskFlowItem);

  const onDragEnd = (event: any) => {
    const { source, destination } = event;
    console.log(source, destination);

    // dropped outside the list
    if (!destination) {
      return;
    }

    const newItems = { ...items };

    const [dragItem] = newItems[
      source.droppableId as keyof TaskPriorityItemsType
    ].splice(source.index, 1);

    console.log("dragItem", dragItem);

    newItems[destination.droppableId as keyof TaskPriorityItemsType].splice(
      destination.index,
      0,
      dragItem
    );

    setItems(newItems);
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
            <Droppable droppableId="sprintList" >
              {(provided) => (
                <div
                  className="sprint-drop"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {items.sprintList.map((item: DropItemType, index: number) => {
                    return (
                      <DropItem item={item} index={index} key={item.id} />
                    );
                  })}

                  {provided.placeholder}
                </div>

              )}
            </Droppable>

            <Droppable droppableId="candidate">
              {(provided) => (
                <div className="sprint-list" ref={provided.innerRef} {...provided.droppableProps}>
                  {items.candidate.map((item: DropItemType, index: number) => {
                    return <DropItem item={item} index={index} key={item.id} />;
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <button
            className="next-step chickara"
            onClick={nextStep}
          >提交</button>
        </div>
      </div>
    </section>
  );
};

export default TaskFlow;
