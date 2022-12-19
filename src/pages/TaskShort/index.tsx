import { Undo } from "@icon-park/react";
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DropItem from "../../components/DropItem";
import { TaskShortItem } from "../../constants/EnumType";
import { useStep } from "../../context/StepContext";

const TaskShort = () => {
  const { nextStep } = useStep();
  const [items, setItems] = useState<TaskPriorityItemsType>(JSON.parse(JSON.stringify(TaskShortItem)));
  const [totalScoreSum, setTotalScoreSum] = useState(0);

  const onDragEnd = (event: any) => {
    const { source, destination } = event;

    // dropped outside the list
    if (!destination) {
      return;
    }

    const newItems = { ...items };

    if (!destination) {
      return;
    }

    const [dragItem] = newItems[
      source.droppableId as keyof TaskPriorityItemsType
    ].splice(source.index, 1);

    newItems[destination.droppableId as keyof TaskPriorityItemsType].splice(
      destination.index,
      0,
      dragItem
    );

    setItems(newItems);

    const total = newItems.sprintList.reduce(
      (accumulator, currentValue) => accumulator + (currentValue.score || 0),
      0
    );
    setTotalScoreSum(total);
  };

  const handleReset = () => {
    setItems(JSON.parse(JSON.stringify(TaskShortItem)));
  };

  return (
    <section id="TaskShort" className="flex-center">
      <div
        className="animate__fadeOut duration animation-forwards"
        style={{ animationDelay: 1.5 + "s" }}
      >
        <img className="banner" src={process.env.PUBLIC_URL + "/images/TaskShort_banner.png"} />
        <img className="img-bla" src={process.env.PUBLIC_URL + "/images/bla.gif"} />
        <img className="img-bla" src={process.env.PUBLIC_URL + "/images/bla.gif"} />
      </div>
      <p
        className="directions animate__fadeIn duration animation-backwards"
        style={{ animationDelay: 2.25 + "s" }}
      >
        將產品待辦清單，拖拉過去短衝清單，短衝是有限制可完成的 Point。
      </p>

      <div
        className="pad animate__slideInUp duration animation-backwards"
        style={{ animationDelay: 1.5 + "s" }}
      >
        <div className="pad-content">
          <div className="pad-title">
            <p>Projects / TT / 人才招募系統 </p>
            <h5>產品待辦清單 <sub>(Product Backlog)</sub></h5>
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="candidate">
              {(provided) => (
                <div
                  className="drop-list"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ backgroundColor: totalScoreSum > 0 ? "#1a64fb" : "" }}
                >
                  {items.candidate.map((item: DropItemType, index: number) => {
                    return (
                      <DropItem item={item} index={index} key={item.id} />
                    );
                  })}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <h5 style={{
              gridArea: "title2"
            }}>
              短衝待辦清單 <sub>(Product Backlog)</sub>
            </h5>
            <Droppable droppableId="sprintList">
              {(provided) => (
                <div
                  className="drop-sort-list"
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

          </DragDropContext>
          <div className="pad-action">
            <img
              src={process.env.PUBLIC_URL + "/images/go.png"}
              style={{ visibility: totalScoreSum === 16 ? "visible" : "hidden", cursor: "pointer" }}
              onClick={nextStep}
            />
            <Undo
              strokeWidth={4}
              size={32}
              className="icon-undo"
              onClick={handleReset}
            />
          </div>
        </div>

      </div>

    </section>
  );
};

export default TaskShort;
