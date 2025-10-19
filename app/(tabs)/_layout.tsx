import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

export default function RootLayout() {
  return (
    <Tabs
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0a72eb',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '400',
          paddingBottom: 4,
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tasks',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list-ul" color={color} size={size} />
        ),
      }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bar-chart" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gear" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
