import { Undo } from "@icon-park/react";
import { useStep } from "../../context/StepContext";

const End = () => {
  const { resetStep } = useStep();
  return (
    <section id="End">
      <img
        className="end-role"
        src={process.env.PUBLIC_URL + "/images/end_role.gif"}
      />
      <img
        className="end-banner"
        src={process.env.PUBLIC_URL + "/images/end_banner.gif"}
      />
      <Undo
        strokeWidth={4}
        size={32}
        className="icon-undo"
        onClick={resetStep} />
    </section>
  );
};

export default End;
