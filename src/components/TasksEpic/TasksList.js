import React from "react";
import { FlatList, Text } from "react-native";
import TaskTile from "./TaskTile";

export default function TasksList({ tasks, onChangeStatus }) {
  const _renderItem = ({ item }) => (
    <TaskTile
      id={item.id}
      title={item.title}
      onChangeStatus={onChangeStatus}
    ></TaskTile>
  );

  return (
    <FlatList
      data={tasks}
      //   Les taches
      renderItem={_renderItem}
      //   Le detail des datas à utiliser
      keyExtractor={(item) => item.id}
      //   Id pour les items
    />
  );
}
