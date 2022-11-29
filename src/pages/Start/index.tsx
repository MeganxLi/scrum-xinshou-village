import React from "react";
import { useStep } from "../../context/StepContext";
import Banner from "./Banner";

const Start = () => {
  const { nextStep } = useStep();
  return (
    <section id="Start" className="KFhimaji">
      <Banner />
      <img className="img img_left" src={process.env.PUBLIC_URL + "/images/img_po_2.png"} />
      <img className="img img_right" src={process.env.PUBLIC_URL + "/images/img_user.png"} />
      <h3>SCRUM</h3>
      <h2>新手村</h2>
      <button
        // onClick={nextStep} 
        className="KFhimaji">
        START
      </button>
      <p>design by Rong</p>
      <Banner />
    </section>
  );
};

export default Start;
