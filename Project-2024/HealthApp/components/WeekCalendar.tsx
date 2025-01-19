import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from '@react-navigation/native';
import { Colors } from '../constants/Colors';

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function isToday(dayIndex) {
  const today = new Date();
  const todayIndex = (today.getDay() + 6) % 7; // Adjust for Monday start
  return dayIndex === todayIndex;
}

function getDateOfWeek(dayIndex) {
  const today = new Date();
  const firstDayOfWeek = today.getDate() - today.getDay() + 1; // Adjust for Monday start
  const date = new Date(today.setDate(firstDayOfWeek + dayIndex));
  return date.getDate();
}

export default function WeekCalendar() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.cardBackground }]}>
      {daysOfWeek.map((day, index) => (
        <View
          key={index}
          style={[styles.dayContainer, isToday(index) && styles.todayContainer]}
        >
          <Text style={[styles.dayText, { color: colors.text }]}>{day}</Text>
          <Text style={[styles.dateText, { color: colors.text }]}>{getDateOfWeek(index)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop:20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  dayContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 60,
    borderRadius: 8,
  },
  todayContainer: {
    borderWidth: 2,
    borderColor: "gray",
  },
  dayText: {
    fontSize: 14,
  },
  dateText: {
    marginTop: 4,
    fontSize: 14,
  },
});
