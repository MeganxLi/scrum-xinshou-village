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

interface DialogButtonType {
  text: string,
  onClick: (e: React.MouseEvent<HTMLElement>) => void | React.MouseEventHandler<HTMLSpanElement>,
}

interface DialogComponentType {
  text: JSX.Element,
  button?: DialogButtonType,
  icon?: DialogButtonType
}