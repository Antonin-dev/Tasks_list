import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  const date = new Date();

  const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];

  const months = [
    "Janv",
    "Fev",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {days[date.getDay()] +
          " " +
          date.getDate() +
          " " +
          months[date.getMonth()]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
