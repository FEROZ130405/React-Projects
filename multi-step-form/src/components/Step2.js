import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormData,
  nextStep,
  prevStep,
  setError,
  clearError,
} from "../store/formSlice";
import "../App.css";

const Step2 = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const errors = useSelector((state) => state.form.errors);

  const handleChange = (e) => {
    dispatch(setFormData({ [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      dispatch(clearError({ field: e.target.name }));
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phone);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone) newErrors.phone = "Phone is required";
    else if (!validatePhone(formData.phone))
      newErrors.phone = "Phone must contain only numbers";
    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      dispatch(nextStep());
      localStorage.setItem("formData", JSON.stringify(formData));
    } else {
      Object.keys(validationErrors).forEach((field) => {
        dispatch(setError({ field: field, message: validationErrors[field] }));
      });
    }
  };

  const handlePrev = () => {
    dispatch(prevStep());
  };

  return (
    <div className="container">
      <h2>Step 2: Contact Details</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <button type="button" onClick={handlePrev}className="previous">
          Previous
        </button>
        <button type="button" onClick={handleNext}className="next">
          Next
        </button>
      </form>
    </div>
  );
};

export default Step2;
