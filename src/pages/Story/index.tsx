import { useStep } from "../../context/StepContext";

const Story = () => {
  const { nextStep } = useStep();
  return (
    <section id="Story">
      <img
        src={process.env.PUBLIC_URL + "/images/img_po.png"}
      />

      <div className="pad">
        <p>
          Welcome to TT 資訊，<br />
          在加入我們之前，請先<br />
          了解 Scrum 的精神並通過任務!
        </p>
        <button onClick={nextStep} className="chickara ">
          接受
        </button>
      </div>

    </section>
  );
};

export default Story;
