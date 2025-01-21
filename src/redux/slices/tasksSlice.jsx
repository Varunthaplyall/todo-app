import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ ...action.payload, completed: false, important: false });
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    toggleImportant: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) task.important = !task.important;
    },
  },
});

export const { addTask, removeTask, toggleComplete, toggleImportant } =
  tasksSlice.actions;
export default tasksSlice.reducer;
