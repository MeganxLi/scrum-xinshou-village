import { useState } from "react";
import uuid from "react-uuid";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useStep } from "../../context/StepContext";
import { handleDragEnd } from "../../utils/handleDragEnd";
import DropList from "../../components/DropList";

const animationDelay = { animationDelay: "1s" };

const TaskPriority = () => {
  const { nextStep } = useStep();
  const [items, setItems] = useState<TaskPriorityItemsType>({
    candidate: [
      {
        title: "後台職缺管理功能",
        subtitle: "（資訊上架、下架、顯示應徵者資料）",
        id: uuid(),
      },
      {
        title: "會員系統",
        subtitle: "（登入、註冊、權限管理）",
        id: uuid(),
      },
      {
        title: "線上履歷編輯器",
        id: uuid(),
      },
      {
        title: "前台職缺列表",
        subtitle: "（職缺詳細內容、發送應徵意願）",
        id: uuid(),
      },
    ],
    sprintList: [],
  });

  const onDragEnd = (event: DropResult) => {
    const { source, destination } = event;

    // dropped outside the list
    if (!destination) {
      return;
    }
    setItems(handleDragEnd(items, source, destination));
  };

  return (
    <section id="TaskPriority" className="flex-center">
      <img
        className="img-crocodile animate__fadeOut duration animation-forwards"
        src={process.env.PUBLIC_URL + "/images/img_po.png"}
        style={animationDelay}
      />
      <p className="directions animate__fadeInRight duration animation-backwards" style={animationDelay}>
        請把需求放到產品待辦清單，並調整待辦的優先度順序。
      </p>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="pad animate__rotateInUpLeft duration animation-backwards" style={animationDelay}>
          <div className="pad-content">
            <div className="pad-title">
              <p>Projects / TT / 人才招募系統 </p>
              <h5>
                產品待辦清單 <sub>(Product Backlog)</sub>
              </h5>
            </div>

            <DropList items={items} droppableId="candidate" className="drop-list">
              {items.candidate.length === 0 && (
                <button className="next-step chickara" onClick={nextStep}>
                  Done!
                </button>
              )}
            </DropList>

            <div className="drop-sort-list-content">
              <p>依優先排序</p>
              <DropList items={items} droppableId="sprintList" className="drop-sort-list" />

              {/* {
                Array.from(Array(4 - items.sprintList.length), (e, i: number) => {
                  const iPage = i + items.sprintList.length + 1;
                  return (
                    <div
                      className="drop-sort-item openhuninn"
                      key={i}
                    >
                      <span>{iPage}</span>
                    </div>
                  );
                })
              } */}
              <img className="drop-sort-tip" src={process.env.PUBLIC_URL + "/images/arrow.png"} />
            </div>
          </div>
        </div>
      </DragDropContext>
    </section>
  );
};

export default TaskPriority;
