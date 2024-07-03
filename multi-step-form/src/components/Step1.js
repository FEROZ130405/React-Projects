import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormData,
  nextStep,
  setError,
  clearError,
} from "../store/formSlice";
import "../App.css";

const Step1 = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const errors = useSelector((state) => state.form.errors);

  const handleChange = (e) => {
    dispatch(setFormData({ [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      dispatch(clearError({ field: e.target.name }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      dispatch(nextStep());
    } else {
      Object.keys(validationErrors).forEach((field) => {
        dispatch(setError({ field: field, message: validationErrors[field] }));
      });
    }
  };

  return (
    <div className="container">
      <h2>Step 1: Personal Details</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <button type="button" onClick={handleNext} className="next">
          Next
        </button>
      </form>
    </div>
  );
};

export default Step1;
