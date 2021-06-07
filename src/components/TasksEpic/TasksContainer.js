import React, { useState } from "react";
import { View, Text } from "react-native";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";

export default function TasksContainer(props) {
  const [tasks, setTasks] = useState([
    { title: "Nouvelle tâche", completed: false },
  ]);

  const onAddTask = (title) => {
    const newTask = {
      title: title,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
  };

  return (
    <View style={{ paddingLeft: 20, paddingRight: 20 }}>
      <TaskForm onAddTask={onAddTask} />
      <TasksList tasks={tasks} />
    </View>
  );
}
