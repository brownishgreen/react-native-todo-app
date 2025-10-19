import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import { useThemeStore } from '@/stores/useThemeStore'
export default function RootLayout() {

  const theme = useThemeStore((state) => state.theme)
  const isDarkMode = theme === 'dark'
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: isDarkMode ? '#4da3ff' : '#0a72eb',
        tabBarInactiveTintColor: isDarkMode ? '#888' : '#999',
        tabBarStyle: {
          backgroundColor: isDarkMode ? '#1a1a1a' : '#fff',
          borderTopWidth: 0.5,
          borderTopColor: isDarkMode ? '#333' : '#ddd',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        tabBarIconStyle: {
          marginBottom: -2,
        },
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
