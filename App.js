import React from "react";
import { StyleSheet, SafeAreaView, View, Platform } from "react-native";
import TasksContainer from "./src/components/TasksEpic/TasksContainer";
import Header from "./src/components/_shared/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TasksContainer />
    </SafeAreaView>
    // SafeAreView permet de se retrouver dans la zonne visible du display (uniquement pour ios)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 50 : 50,
    // J'utilise le composant platform pour savoir sur quel OS je suis
    paddingLeft: 20,
    paddingRight: 20,
  },
});
