import React, { useState } from "react";
import { View, Text } from "react-native";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";

export default function TasksContainer(props) {
  const [tasks, setTasks] = useState([
    { id: new Date().getTime(), title: "Nouvelle tâche", completed: false },
  ]);

  const onAddTask = (title) => {
    const newTask = {
      id: new Date().getTime(),
      title: title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const onChangeStatus = (id) => {
    const newTask = [];
    tasks.forEach((task) => {
      if (task.id === id) {
        newTask.push({
          id: id,
          title: task.title,
          completed: !task.completed,
        });
        console.log(task);
      } else {
        newTask.push(task);
      }
    });
    setTasks(newTask);
  };
  console.log(tasks);

  return (
    <View style={{ paddingLeft: 20, paddingRight: 20 }}>
      <TaskForm onAddTask={onAddTask} />
      <TasksList tasks={tasks} onChangeStatus={onChangeStatus} />
    </View>
  );
}
