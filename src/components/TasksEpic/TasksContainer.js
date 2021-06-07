import React, { useState } from "react";
import { View, Text } from "react-native";

export default function TasksContainer(props) {
  const [tasks, setTasks] = useState([]);

  return (
    <View>
      <Text>Tasks Container</Text>
    </View>
  );
}
