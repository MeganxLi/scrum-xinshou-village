import React from "react";
import { useStep } from "../../context/StepContext";
import Banner from "./Banner";

const AnimateSec = 0.75;

const Start = () => {
  const { nextStep } = useStep();
  return (
    <section id="Start" className="KFhimaji">
      <Banner classNames="animate__fadeInRightBig" />
      <img
        className="img img_left slideInUp"
        style={{ animationDelay: AnimateSec * 1 + "s" }}
        src={process.env.PUBLIC_URL + "/images/img_po_2.png"}
      />
      <img
        className="img giphy slideInUp"
        style={{ animationDelay: AnimateSec * 2 + "s" }}
        src={process.env.PUBLIC_URL + "/images/giphy.gif"}
      />
      <img
        className="img img_right slideInUp"
        style={{ animationDelay: AnimateSec * 2 + "s" }}
        src={process.env.PUBLIC_URL + "/images/img_user.png"}
      />
      <h3>SCRUM</h3>
      <h2>新手村</h2>
      <button
        onClick={nextStep}
        className="KFhimaji animate__fadeIn"
        style={{ animationDelay: AnimateSec * 3 + "s" }}
      >
        START
      </button>
      <p>design by Rong</p>
      <Banner classNames="animate__fadeInLeftBig" />
    </section>
  );
};

export default Start;
