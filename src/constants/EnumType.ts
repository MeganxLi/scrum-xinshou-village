import uuid from "react-uuid";

export enum DialogIconButton {
  Undo = "Undo",
  DownOne = "DownOne",
}

export const TaskShortItem = {
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