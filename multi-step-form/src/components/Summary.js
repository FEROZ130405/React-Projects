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
      <div className="summary-details">
        <div className="summary-field">First Name:</div>
        <div className="summary-value">{formData.firstName}</div>

        <div className="summary-field">Last Name:</div>
        <div className="summary-value">{formData.lastName}</div>

        <div className="summary-field">Email:</div>
        <div className="summary-value">{formData.email}</div>

        <div className="summary-field">Phone:</div>
        <div className="summary-value">{formData.phone}</div>

        <div className="summary-field">Address:</div>
        <div className="summary-value">{formData.address}</div>

        <div className="summary-field">City:</div>
        <div className="summary-value">{formData.city}</div>

        <div className="summary-field">ZIP Code:</div>
        <div className="summary-value">{formData.zip}</div>
      </div>
      <div className="button-group">
        <button type="button" onClick={handlePrev} className="previous">
          Previous
        </button>
        <button type="button" onClick={handleSubmit} className="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Summary;
