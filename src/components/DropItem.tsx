import { Draggable } from "react-beautiful-dnd";

interface props {
  item: DropItemType,
  index: number
}

const DropItem = ({ item, index }: props) => {
  return (
    <Draggable draggableId={item.id} index={index} >
      {(provided, snapshot) => (
        <div
          className="drop-item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="drop-item-title">{item.title}</p>
          <p className="drop-item-subtitle">{item.subtitle}</p>
        </div>
      )}
    </Draggable>
  );
};

export default DropItem;
