import { Draggable, Droppable } from "react-beautiful-dnd";

interface props {
  items: TaskItemsType;
  droppableId: string;
  horizontal?: boolean;
  className: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const DropList = ({ items, droppableId, horizontal, className, style, children }: props) => {
  return (
    <Droppable droppableId={droppableId} direction={horizontal ? "horizontal" : "vertical"}>
      {(provided) => (
        <div className={className} ref={provided.innerRef} {...provided.droppableProps} style={style}>
          {items[droppableId as keyof TaskItemsType].map((item: DropItemType, index: number) => {
            return (
              <Draggable draggableId={item.id} index={index} key={item.id}>
                {(provided) => (
                  <div
                    className="drop-item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    data-score={item.score}
                  >
                    <p className="drop-item-title">{item.title}</p>
                    <p className="drop-item-subtitle">{item.subtitle}</p>
                  </div>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
          {children}
        </div>
      )}
    </Droppable>
  );
};

export default DropList;
