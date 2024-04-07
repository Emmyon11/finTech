import Header from '@/components/UI/Header';
import Colors from '@/constants/Colors';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Stack, Tabs } from 'expo-router';
import { View, Text } from 'react-native';
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: Colors.dark.background },
        tabBarActiveTintColor: Colors.dark.tabIconSelected,
        tabBarInactiveTintColor: Colors.dark.tabIconDefault,
        headerTintColor: Colors.dark.background,
        headerShown: false,

        headerStyle: {
          backgroundColor: Colors.white,
        },
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="house" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="income"
        options={{
          title: 'Income',
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="money" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="expenses"
        options={{
          title: 'Expenses',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="attach-money" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabLayout;
