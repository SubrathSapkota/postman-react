import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./features/Api.Slice.js";

export const Store = configureStore({
    reducer: {
        api: apiReducer,
      },
});
