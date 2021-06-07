import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const _onChangeText = (value) => {
    setTitle(value);
  };

  const _onPressBtn = () => {
    onAddTask(title);
    setTitle("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TextInput
          style={styles.inputStyle}
          value={title}
          onChangeText={_onChangeText}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonIos}
        onPress={_onPressBtn}
        title="Ajouter"
        color="#841584"
      >
        <Text style={styles.textButton}>Ajouter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 15,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  subContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    paddingLeft: 7,
    // marginBottom: 15,
    width: "70%",
    height: 20,
  },
  buttonIos: {
    marginRight: 40,
    marginLeft: 40,
    // marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#1E6738",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TaskForm;
