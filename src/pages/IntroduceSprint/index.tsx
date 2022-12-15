import { useState } from "react";
import { DialogOrder } from "../../utils/DialogOrder";
import SprintDialog from "./SprintDialog";
import SprintList from "./SprintList";

const IntroduceSprint = () => {
  const [order, setOrder] = useState<number>(0);
  const list: JSX.Element[] = [
    <SprintDialog key="SprintDialog" />,
    <SprintList key="SprintList" setOrder={setOrder} />
  ];

  DialogOrder(order, setOrder, [1]);

  return (
    <section id="IntroduceSprint">
      {list[order]}
    </section>
  );
};

export default IntroduceSprint;
