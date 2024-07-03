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

const Step3 = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const errors = useSelector((state) => state.form.errors);

  const handleChange = (e) => {
    dispatch(setFormData({ [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      dispatch(clearError({ field: e.target.name }));
    }
  };

  const validateZip = (zip) => {
    const zipRegex = /^\d+$/;
    return zipRegex.test(zip);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.zip) newErrors.zip = "ZIP Code is required";
    else if (!validateZip(formData.zip))
      newErrors.zip = "ZIP Code must contain only numbers";
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
      <h2>Step 3: Address Details</h2>
      <form>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <span className="error">{errors.city}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="zip">ZIP Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
          />
          {errors.zip && <span className="error">{errors.zip}</span>}
        </div>
        <button type="button" onClick={handlePrev} className="previous">
          Previous
        </button>
        <button type="button" onClick={handleNext} className="next">
          Next
        </button>
      </form>
    </div>
  );
};

export default Step3;
