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

export const getListSort = (list: DropItemType[]): boolean => {
   let verifyOrder = false;
   for (let i = 0; i < list.length; i++) {
      if (list[i].priority === i + 1) {
         verifyOrder = true;
         continue;
      } else {
         verifyOrder = false;
         break;
      }
   }

   return verifyOrder;
};
