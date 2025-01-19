import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export default function RemindersScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Reminders</ThemedText>
      <ThemedText>
        Here you can see your supplement reminders and the best times to take them.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.light.background,
  },
});
