import React from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <div>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Home;
