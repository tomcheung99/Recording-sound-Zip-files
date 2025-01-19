import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Colors } from '../constants/Colors';

const minerals = [
  { name: 'Calcium', amount: 500, color: 'red' },
  { name: 'Iron', amount: 18, color: 'blue' },
  { name: 'Magnesium', amount: 400, color: 'green' },
  { name: 'Zinc', amount: 15, color: 'yellow' },
  { name: 'Potassium', amount: 3500, color: 'red' },
  { name: 'Sodium', amount: 1500, color: 'blue' },
  { name: 'Phosphorus', amount: 700, color: 'green' },
  { name: 'Sulfur', amount: 900, color: 'yellow' },
  { name: 'Chlorine', amount: 2300, color: 'red' },
  { name: 'Chromium', amount: 35, color: 'blue' },
  { name: 'Copper', amount: 900, color: 'green' },
  { name: 'Fluorine', amount: 4, color: 'yellow' },
  { name: 'Iodine', amount: 150, color: 'red' },
  { name: 'Manganese', amount: 2.3, color: 'blue' },
  { name: 'Molybdenum', amount: 45, color: 'green' },
  { name: 'Selenium', amount: 55, color: 'yellow' },
  { name: 'Silicon', amount: 30, color: 'red' },
  { name: 'Vanadium', amount: 10, color: 'blue' },
  { name: 'Nickel', amount: 1, color: 'green' },
  { name: 'Cobalt', amount: 0.1, color: 'yellow' },
  // { name: 'Barium', amount: 0.2, color: 'red' },
  // { name: 'Lithium', amount: 0.3, color: 'blue' },
  // { name: 'Strontium', amount: 0.4, color: 'green' },
  // { name: 'Niobium', amount: 0.5, color: 'yellow' },
  // { name: 'Bismuth', amount: 0.6, color: 'red' },
  // { name: 'Lead', amount: 0.7, color: 'blue' },
  // { name: 'Tin', amount: 0.8, color: 'green' },
  // { name: 'Antimony', amount: 0.9, color: 'yellow' },
  // { name: 'Tellurium', amount: 1.0, color: 'red' },
  // { name: 'Polonium', amount: 1.1, color: 'blue' },
];

export default function MineralIntake() {
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.cardBackground }]}>
      <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.cardBackground }]}>
        {minerals.map((mineral, index) => (
          <View key={index} style={[styles.mineralContainer, { backgroundColor: colors.cardBackground }]}>
            <View style={[styles.circle, { borderColor: Colors.borderColors[mineral.color], borderWidth: 2 }]}>
              <Text style={[styles.amountText, { color: colors.text }]}>
                {mineral.amount}
              </Text>
              <Text style={[styles.mgText, { color: colors.text }]}>mg</Text>
            </View>
            <Text style={[styles.mineralText, { color: colors.text }]}>{mineral.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 16,
  },
  mineralContainer: {
    alignItems: 'center',
    width: '25%', // 使每行顯示 5 個
    marginBottom: 16,
    // backgroundColor: Colors.cardBackground
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  mineralText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 9,
  },
  amountText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mgText: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
