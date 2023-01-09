import { useState } from "react";
import { DragDropContext, DragUpdate, DropResult } from "react-beautiful-dnd";
import { useStep } from "../../context/StepContext";
import { handleDragEnd } from "../../utils/handleDragEnd";
import DropList from "../../components/DropList";
import { TaskPriorityItem } from "../../constants/EnumType";
import { useHeadShake } from "../../utils/HeadShakeHook";

const animationDelay = { animationDelay: "1s" };
const totalLength = JSON.parse(JSON.stringify(TaskPriorityItem)).candidate.length;

const TaskPriority = () => {
   const { nextStep } = useStep();
   const [items, setItems] = useState<TaskItemsType>(TaskPriorityItem);
   const [reduceLength, setReduceLength] = useState<number>(0);
   const [paused, setPaused] = useState<boolean>(false);

   const onDragEnd = (event: DropResult) => {
      const { source, destination } = event;

      // dropped outside the list
      if (!destination) {
         return;
      }
      const newItems = handleDragEnd(items, source, destination);
      setItems(newItems);

      setReduceLength(newItems.sprintList.length);
   };

   const onDragUpdate = (update: DragUpdate) => {
      const { destination } = update;

      // break error "Cannot update a component from inside the function body of a different component."
      if (items.sprintList.length === totalLength) return;

      if (destination?.droppableId === "sprintList") {
         setReduceLength(items.sprintList.length + 1);
      } else {
         setReduceLength(items.sprintList.length);
      }
   };

   const clickNextStep = () => {
      let verifyOrder = false;
      const sprintList = items.sprintList;

      for (let i = 0; i < sprintList.length; i++) {
         if (sprintList[i].priority === i + 1) {
            verifyOrder = true;
            continue;
         } else {
            verifyOrder = false;
            break;
         }
      }

      if (verifyOrder) {
         nextStep();
      } else {
         setPaused(true);
      }
   };

   useHeadShake(paused, setPaused);

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

         <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
            <div className="pad animate__rotateInUpLeft duration animation-backwards" style={animationDelay}>
               <div className="pad-content">
                  <div className="pad-title">
                     <p>Projects / TT / 人才招募系統 </p>
                     <h5>
                        產品待辦清單 <sub>(Product Backlog)</sub>
                     </h5>
                  </div>

                  <DropList
                     items={items}
                     droppableId="candidate"
                     className="drop-list"
                     isDropDisabled={items.candidate.length === 0}
                     style={{ gridTemplateRows: items.candidate.length === 0 ? "repeat(1, 1fr)" : "" }}
                  >
                     {items.candidate.length === 0 && (
                        <button className="next-step chickara" onClick={clickNextStep}>
                           Done!
                        </button>
                     )}
                  </DropList>

                  <div className="drop-sort-list-content">
                     <p>依優先排序</p>
                     <DropList
                        items={items}
                        droppableId="sprintList"
                        className="drop-sort-list"
                        childrenClassName={`${paused ? "animate__headShake duration" : ""}`}
                        style={{ gridTemplateRows: `repeat(${reduceLength}, min-content)` }}
                     >
                        {Array.from(Array(4 - reduceLength), (e, i: number) => {
                           const iPage = i + reduceLength + 1;
                           return (
                              <div className="drop-item drop-sort-item openhuninn" key={i}>
                                 <span>{iPage}</span>
                              </div>
                           );
                        })}
                     </DropList>
                     <img className="drop-sort-tip" src={process.env.PUBLIC_URL + "/images/arrow.png"} />
                  </div>
               </div>
            </div>
         </DragDropContext>
      </section>
   );
};

export default TaskPriority;
