import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

const ProgressBar = () => {
  const step = useSelector((state) => state.form.step);
  const steps = [1, 2, 3, 4];

  return (
    <div className="progress-bar">
      {steps.map((num, index) => (
        <React.Fragment key={num}>
          <div
            className={`progress-step ${step === num ? "active" : ""} ${
              step > num ? "completed" : ""
            }`}
          >
            {num}
          </div>
          {index !== steps.length - 1 && <div className="progress-dash"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
