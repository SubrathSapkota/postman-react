import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./features/DataSlice.js";

export const Store = configureStore({
    reducer: {
        api: apiReducer,
      },
});
