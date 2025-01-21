import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlices";
import { tasksSlice } from "./slices/tasksSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    tasks: tasksSlice.reducer,
  },
});

export default store;
