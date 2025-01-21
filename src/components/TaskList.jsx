import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTask,
  toggleComplete,
  toggleImportant,
} from "../redux/slices/tasksSlice";
import { getWeather } from "../api/weatherApi";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherData = await getWeather();
        setWeather(weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error.message);
      }
    };
    fetchWeather();
  }, []);

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.important !== b.important) {
      return b.important - a.important;
    }
    if (a.completed !== b.completed) {
      return a.completed - b.completed;
    }
    return a.id - b.id;
  });

  return (
    <Box sx={{ p: 3 }}>
      {weather && (
        <Card sx={{ mb: 3, p: 2 }}>
          <Typography variant="h6">Weather in {weather.name}</Typography>
          <Typography variant="body2">
            {weather.weather[0].description}, Temperature:{" "}
            {Math.round(weather.main.temp - 273.15)}°C
          </Typography>
        </Card>
      )}

      <Stack spacing={2}>
        {sortedTasks.map((task) => (
          <Card
            key={task.id}
            sx={{
              backgroundColor: task.important ? "#fff4e5" : "#ffffff",
              border: "1px solid #e0e0e0",
            }}
          >
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="body1"
                  sx={{
                    textDecoration: task.completed ? "line-through" : "none",
                    fontWeight: task.important ? "bold" : "normal",
                    color: task.completed ? "gray" : "black",
                  }}
                >
                  {task.title}
                </Typography>

                <Stack direction="row" spacing={1}>
                  <IconButton
                    onClick={() => dispatch(toggleComplete(task.id))}
                    color={task.completed ? "success" : "default"}
                  >
                    {task.completed ? (
                      <CheckCircleIcon />
                    ) : (
                      <RadioButtonUncheckedIcon />
                    )}
                  </IconButton>
                  <IconButton
                    onClick={() => dispatch(toggleImportant(task.id))}
                    color="warning"
                  >
                    {task.important ? <StarIcon /> : <StarBorderIcon />}
                  </IconButton>
                  <IconButton
                    onClick={() => dispatch(removeTask(task.id))}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </Stack>
              <Divider sx={{ mt: 1 }} />
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default TaskList;
