import { TaskPriorityDropList } from "../../constants/TaskPrioritySetting";

const TaskPriority = () => {
  return (
    <section id="TaskPriority">
      <p className="directions">請把需求放到產品待辦清單，並調整待辦的優先度順序。</p>
      <img
        className="img-crocodile"
        src={process.env.PUBLIC_URL + "/images/img_po.png"}
      />
      <div className="pad">
        <div className="pad-title">
          <p>Projects / TT / 人才招募系統 </p>
          <h5>產品待辦清單 <sub>(Product Backlog)</sub></h5>
        </div>
        <div className="drop-list">
          {TaskPriorityDropList.map((item: DropItemType, idx: number) => {
            return (
              <div key={idx} className="drop-item">
                <p className="drop-item-title">{item.title}</p>
                <p className="drop-item-subtitle">{item.subtitle}</p>
              </div>
            );
          })
          }
        </div>
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

    </section>
  );
};

export default TaskPriority;
