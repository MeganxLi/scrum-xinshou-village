interface DropItemType {
  title: string;
  subtitle?: string;
  id: string;
  score?: number;
}

interface TaskPriorityItemsType {
  candidate: DropItemType[];
  sprintList: DropItemType[]
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

interface ImgAnimateType {
  showOrder: number[],
  imgUrl: string,
  delaySec: number,
  direction: "left" | "right",
  style?: React.CSSProperties,
}