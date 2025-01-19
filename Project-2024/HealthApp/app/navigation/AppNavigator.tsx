import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../(tabs)/index'; // 修正 HomeScreen 路徑
import CalendarPage from '../CalendarPage'; // 修正 CalendarPage 路徑

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CalendarPage" component={CalendarPage} /> {/* 新增 CalendarPage route */}
    </Stack.Navigator>
  );
}
