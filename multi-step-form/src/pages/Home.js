import React from "react";
import { useSelector } from "react-redux";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Summary from "../components/Summary";
import ProgressBar from "../components/ProgressBar";
import "../App.css";

const Home = () => {
  const step = useSelector((state) => state.form.step);

  return (
    <div>
      <ProgressBar />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step > 3 && <Summary />}
    </div>
  );
};

export default Home;
