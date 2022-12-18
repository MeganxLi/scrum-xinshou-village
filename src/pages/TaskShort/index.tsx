import { Undo } from "@icon-park/react";
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DropItem from "../../components/DropItem";
import { TaskShortItem } from "../../constants/EnumType";

const TaskShort = () => {
  const [items, setItems] = useState<TaskPriorityItemsType>(JSON.parse(JSON.stringify(TaskShortItem)));
  const [totalScoreSum, setTotalScoreSum] = useState(0);

  const onDragEnd = (event: any) => {
    const { source, destination } = event;
    console.log(source, destination);

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
      (accumulator, currentValue) => accumulator + currentValue.priority,
      0
    );
    setTotalScoreSum(total);
  };

  const handleReset = () => {
    setItems(JSON.parse(JSON.stringify(TaskShortItem)));
  };

  return (
    <section id="TaskShort">
      <img className="banner" src={process.env.PUBLIC_URL + "/images/TaskShort_banner.png"} />
      <img className="img-bla" src={process.env.PUBLIC_URL + "/images/bla.gif"} />
      <img className="img-bla" src={process.env.PUBLIC_URL + "/images/bla.gif"} />
      <p className="directions">將產品待辦清單，拖拉過去短衝清單，短衝是有限制可完成的 Point。</p>

      <div className="pad">
        <img className="img-pad" src={process.env.PUBLIC_URL + "/images/pad_2.png"} />
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
            <div className="drop-sort-list">
              <Droppable droppableId="sprintList">
                {(provided) => (
                  <div
                    className="drop-list"
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
            </div>

          </DragDropContext>
          <div className="pad-action">
            <img src={process.env.PUBLIC_URL + "/images/go.png"} />
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
