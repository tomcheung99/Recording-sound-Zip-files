import React, { useLayoutEffect } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { useTheme, useNavigation } from '@react-navigation/native';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export default function CalendarPage() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.closeButton}
        >
          <Ionicons name="close" size={24} color={colors.text} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, colors]);

  const customDatesStyles = [
    {
      date: new Date(),
      style: { backgroundColor: 'red' },
      textStyle: { color: colors.text },
    },
  ];

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <ThemedView>
        <CalendarPicker
          customDatesStyles={customDatesStyles}
          textStyle={{ color: colors.text }}
          selectedDayStyle={{ backgroundColor: 'gray' }}
          selectedDayTextColor={colors.text}
        />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  closeButton: {
    padding: 8,
    marginLeft: 8,
  },
});
