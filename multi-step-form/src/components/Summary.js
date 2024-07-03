import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { prevStep, submitForm } from "../store/formSlice";
import "../App.css";

const Summary = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const navigate = useNavigate();

  const handlePrev = () => {
    dispatch(prevStep());
  };

  const handleSubmit = () => {
    dispatch(submitForm());
    navigate("/user-details");
  };

  return (
    <div className="container">
      <h2>Summary</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <button type="button" onClick={handlePrev}>
        Previous
      </button>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Summary;
