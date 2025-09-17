import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slideBarSlice";

const appStore = configureStore({
  reducer: {
    menu : menuReducer,
  },
});

export default appStore;