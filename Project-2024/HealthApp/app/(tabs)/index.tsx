import { Image, StyleSheet, Platform, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import WeekCalendar from "@/components/WeekCalendar";
import MineralIntake from "@/components/MineralIntake";
import { useTheme, useNavigation } from '@react-navigation/native'; // 新增 useNavigation
import { Ionicons } from '@expo/vector-icons';

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation(); // 新增 navigation

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <StatusBar translucent={true} />
      <ThemedView headerBackgroundColor={{ light: Colors.light.headerBackground, dark: Colors.dark.headerBackground }}>
        <ThemedView>
          <TouchableOpacity style={styles.userIcon}>
            <Ionicons name="person" size={24} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.calendarIcon} onPress={() => navigation.navigate('CalendarPage')}> {/* 新增 onPress */}
            <Ionicons name="calendar" size={24} color={colors.text} />
          </TouchableOpacity>
        </ThemedView>
        <WeekCalendar />    
        <MineralIntake /> 
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  calendarContainer: {
    marginBottom: 16,
    backgroundColor: Colors.light.background,
  },
  weekCalendarContainer: {
    marginBottom: 16,
    backgroundColor: Colors.light.background,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  calendarIcon: {
    position: 'absolute',
    top: 0,
    right: 20,
  },
  userIcon: {
    position: 'absolute',
    top: 0,
    left: 20,
  },
});
