import { Undo } from "@icon-park/react";
import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import DropList from "../../components/DropList";
import { TaskShortItem } from "../../constants/EnumType";
import { useStep } from "../../context/StepContext";
import { handleDragEnd } from "../../utils/handleDragEnd";

const TaskShort = () => {
  const { nextStep } = useStep();
  const [items, setItems] = useState<TaskItemsType>(JSON.parse(JSON.stringify(TaskShortItem)));
  const [totalScoreSum, setTotalScoreSum] = useState(0);
  const [paused, setPaused] = useState<boolean>(false);

  const onDragEnd = (event: DropResult) => {
    const { source, destination } = event;

    // dropped outside the list
    if (!destination) {
      return;
    }
    setItems(handleDragEnd(items, source, destination));

    const newItems = { ...items };
    const total = newItems.sprintList.reduce((accumulator, currentValue) => accumulator + (currentValue.score || 0), 0);
    setTotalScoreSum(total);
  };

  const handleReset = () => {
    setItems(JSON.parse(JSON.stringify(TaskShortItem)));
  };

  const clickNextStep = () => {
    if (totalScoreSum === 16) {
      nextStep();
    } else {
      setPaused(true);
    }
  };

  useEffect(() => {
    if (!paused) return;

    const interval = setInterval(() => {
      setPaused(false);
    }, 500);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section id="TaskShort" className="flex-center">
      <div className="animate__fadeOut duration animation-forwards" style={{ animationDelay: 1.5 + "s" }}>
        <img className="banner" src={process.env.PUBLIC_URL + "/images/TaskShort_banner.png"} />
        <img className="img-bla" src={process.env.PUBLIC_URL + "/images/bla.gif"} />
        <img className="img-bla" src={process.env.PUBLIC_URL + "/images/bla.gif"} />
      </div>
      <p className="directions animate__fadeIn duration animation-backwards" style={{ animationDelay: 2.25 + "s" }}>
        將產品待辦清單，拖拉過去短衝清單，短衝是有限制可完成的 Point。
      </p>

      <div className="pad animate__slideInUp duration animation-backwards" style={{ animationDelay: 1.5 + "s" }}>
        <div className="pad-content">
          <div className="pad-title">
            <p>Projects / TT / 人才招募系統 </p>
            <h5>
              產品待辦清單 <sub>(Product Backlog)</sub>
            </h5>
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <DropList
              items={items}
              droppableId="candidate"
              className="drop-list"
              style={{ backgroundColor: totalScoreSum > 0 ? "#1a64fb" : "" }}
            />

            <h5 style={{ gridArea: "title2" }}>
              短衝待辦清單 <sub>(Product Backlog)</sub>
            </h5>
            <DropList
              items={items}
              droppableId="sprintList"
              className="drop-sort-list"
              childrenClassName={`${paused ? "animate__headShake" : ""}`}
            />
          </DragDropContext>
          <div className="pad-action">
            <img
              src={process.env.PUBLIC_URL + "/images/go.png"}
              style={{ visibility: totalScoreSum > 0 ? "visible" : "hidden", cursor: "pointer" }}
              onClick={clickNextStep}
            />
            <Undo strokeWidth={4} size={32} className="icon-undo" onClick={handleReset} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskShort;
