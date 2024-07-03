import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: JSON.parse(localStorage.getItem("currentStep")) || 1,
  formData: JSON.parse(localStorage.getItem("formData")) || {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  },
  errors: {},
  submissions: JSON.parse(localStorage.getItem("submissions")) || [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
      localStorage.setItem("formData", JSON.stringify(state.formData));
    },
    nextStep: (state) => {
      state.step += 1;
      localStorage.setItem("currentStep", JSON.stringify(state.step));
    },
    prevStep: (state) => {
      state.step -= 1;
      localStorage.setItem("currentStep", JSON.stringify(state.step));
    },
    setError: (state, action) => {
      state.errors[action.payload.field] = action.payload.message;
    },
    clearError: (state, action) => {
      delete state.errors[action.payload.field];
    },
    submitForm: (state) => {
      state.submissions.push(state.formData);
      localStorage.setItem("submissions", JSON.stringify(state.submissions));
      state.formData = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zip: "",
      };
      localStorage.removeItem("formData");
      state.step = 1;
      localStorage.removeItem("currentStep");
      state.errors = {};
    },
  },
});

export const {
  setFormData,
  nextStep,
  prevStep,
  submitForm,
  setError,
  clearError,
} = formSlice.actions;

export default formSlice.reducer;
