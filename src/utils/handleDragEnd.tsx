import { DraggableLocation } from "react-beautiful-dnd";

export const handleDragEnd = (
  items: TaskItemsType,
  source: DraggableLocation,
  destination: DraggableLocation
): TaskItemsType => {
  const newItems = { ...items };
  const [dragItem] = newItems[source.droppableId as keyof TaskItemsType].splice(source.index, 1);
  newItems[destination.droppableId as keyof TaskItemsType].splice(destination.index, 0, dragItem);

  return newItems;
};
