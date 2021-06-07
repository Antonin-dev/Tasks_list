import React from "react";
import { FlatList, Text } from "react-native";
import TaskTile from "./TaskTile";

export default function TasksList({ tasks }) {
  const _renderItem = ({ item }) => <TaskTile title={item.title}></TaskTile>;

  return (
    <FlatList
      data={tasks}
      //   Les taches
      renderItem={_renderItem}
      //   Le detail des datas à utiliser
      keyExtractor={(item) => item.title}
      //   Id pour les items
    />
  );
}
