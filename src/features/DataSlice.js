import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: [],
  parmasData: [],
  headersData: [],
  bodyData: "",
};

export const ApiSlice = createSlice({
  name: "ApiReducers",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    setParmasData: (state, action) => {
      state.parmasData = action.payload;
    },
    setHeadersDatas: (state, action) => {
      state.headersData = action.payload;
    },
    setBodyData: (state, action) => {
      state.bodyData = action.payload;
    },
  },
});

export const { setFormData, setParmasData, setHeadersDatas, setBodyData } =
  ApiSlice.actions;

export default ApiSlice.reducer;
