import { useState } from "react";
import uuid from "react-uuid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DropItem from "./DropItem";

const TaskPriority = () => {
  const [items, setItems] = useState<TaskPriorityItemsType>(
    {
      candidate: [
        {
          title: "後台職缺管理功能",
          subtitle: "（資訊上架、下架、顯示應徵者資料）",
          id: uuid(),
          priority: 1,
        },
        {
          title: "會員系統",
          subtitle: "（登入、註冊、權限管理）",
          id: uuid(),
          priority: 2,
        },
        {
          title: "線上履歷編輯器",
          id: uuid(),
          priority: 4,
        },
        {
          title: "前台職缺列表",
          subtitle: "（職缺詳細內容、發送應徵意願）",
          id: uuid(),
          priority: 3,
        }
      ],
      productBacklog: {
        items: []
      }
    });

  const onDragEnd = (event: any) => {
    const { source, destination } = event;

    // dropped outside the list
    if (!destination) {
      return;
    }

    const newItemObj = { ...items };

  };

  return (
    <section id="TaskPriority">
      <p className="directions">請把需求放到產品待辦清單，並調整待辦的優先度順序。</p>
      <img
        className="img-crocodile"
        src={process.env.PUBLIC_URL + "/images/img_po.png"}
      />

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="pad">
          <div className="pad-title">
            <p>Projects / TT / 人才招募系統 </p>
            <h5>產品待辦清單 <sub>(Product Backlog)</sub></h5>
          </div>

          <Droppable droppableId="candidate">
            {(provided, snapshot) => (
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
          <div className="drop-sort-list">
            <p>
              依優先排序
            </p>
            {
              Array.from(Array(4), (e, i: number) => {
                const iPage = i + 1;
                return (
                  <div
                    className="drop-sort-item openhuninn"
                    key={i}
                  >
                    <span>{iPage}</span>
                  </div>
                );
              })
            }
            <img className="drop-sort-tip"
              src={process.env.PUBLIC_URL + "/images/arrow.png"}
            />
          </div>

        </div>

      </DragDropContext>

    </section>
  );
};

export default TaskPriority;
