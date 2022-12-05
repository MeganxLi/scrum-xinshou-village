interface DropItemType {
  title: string;
  subtitle?: string;
  id: string;
  priority: number;
}

interface TaskPriorityItemsType {
  candidate: DropItemType[];
  productBacklog: {
    items: []
  }
}