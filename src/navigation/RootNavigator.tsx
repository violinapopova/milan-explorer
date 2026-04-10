import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen } from '../screens/detail-screen/DetailScreen';
import { IntroScreen } from '../screens/intro-screen/IntroScreen';
import { MainTabNavigator } from './MainTabNavigator';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="MainTabs" component={MainTabNavigator} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          animation: 'slide_from_right',
          presentation: 'card',
        }}
      />
    </Stack.Navigator>
  );
}
