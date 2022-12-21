import uuid from "react-uuid";

export enum DialogIconButton {
  Undo = "Undo",
  DownOne = "DownOne",
}

export const TaskShortItem: TaskPriorityItemsType = {
  candidate: [
    {
      title: "後台職缺管理功能",
      subtitle: "（資訊上架、下架、顯示應徵者資料）",
      id: uuid(),
      score: 8,
    },
    {
      title: "會員系統",
      subtitle: "（登入、註冊、權限管理）",
      id: uuid(),
      score: 8,
    },
    {
      title: "前台職缺列表",
      subtitle: "（職缺詳細內容、發送應徵意願）",
      id: uuid(),
      score: 5,
    },
    {
      title: "線上履歷編輯器",
      id: uuid(),
      score: 15,
    },
  ],
  sprintList: []
};

export const TaskFlowItem: TaskPriorityItemsType = {
  candidate: [
    {
      title: "短衝自省會議",
      subtitle: "(Retro)",
      id: uuid(),
    },
    {
      title: "每日站立會議",
      subtitle: "(Daily Scrum)",
      id: uuid(),
    },
    {
      title: "短衝檢視會議",
      subtitle: "(Sprint Review)",
      id: uuid(),
    },
  ],
  sprintList: []
};