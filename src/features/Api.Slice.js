import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    method: "GET",
    url: "",
  };

export const ApiSlice = createSlice({
  name: "ApiReducers",
  initialState,
  reducers: {
    setApiData: (state, action) => {
        state.method = action.payload.method;
        state.url = action.payload.url;
        console.log(state);
      },
  },
});

export const { setApiData } = ApiSlice.actions;

export default ApiSlice.reducer;
