import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/tasksSlice";
import { Box, TextField, Button, Typography } from "@mui/material";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(
        addTask({ id: Date.now(), title: task.trim(), priority: "medium" })
      );
      setTask("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: 3,
        border: "1px solid #ddd",
        borderRadius: 2,

        margin: "50px auto",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" component="h1" sx={{ textAlign: "center" }}>
        Add a Task
      </Typography>
      <TextField
        label="Task Title"
        variant="standard"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTask}
        sx={{ alignSelf: "flex-end" }}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default TaskInput;
