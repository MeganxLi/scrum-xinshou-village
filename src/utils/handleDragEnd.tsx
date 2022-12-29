import { DraggableLocation } from "react-beautiful-dnd";

export const handleDragEnd = (
  items: TaskPriorityItemsType,
  source: DraggableLocation,
  destination: DraggableLocation
): TaskPriorityItemsType => {
  const newItems = { ...items };
  const [dragItem] = newItems[source.droppableId as keyof TaskPriorityItemsType].splice(source.index, 1);
  newItems[destination.droppableId as keyof TaskPriorityItemsType].splice(destination.index, 0, dragItem);

  return newItems;
};
