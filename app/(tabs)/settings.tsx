import { View, Text, StyleSheet, Switch } from 'react-native'
import { useState } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { useThemeStore } from '@/stores/useThemeStore'

export default function SettingsScreen() {
  const { theme, toggleTheme } = useThemeStore()
  const isDarkMode = theme === 'dark'

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.headerTitle}>Settings</ThemedText>

      {/* Theme Switch */}
      <View style={styles.row}>
        <ThemedText style={styles.title}>Dark Mode</ThemedText>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* About */}
      <View>
        <ThemedText style={styles.aboutTitle}>About</ThemedText>
        <ThemedText style={styles.aboutText}>Minimal Todo v1.0.0</ThemedText>
        <ThemedText style={styles.aboutText}>Designed & Developed by Yuan WU</ThemedText>
        <ThemedText style={styles.quote}>“Less noise, more clarity.”</ThemedText>
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  label: {
    fontSize: 16,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: 24,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  aboutText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  quote: {
    fontSize: 12,
    color: '#999',
    marginTop: 12,
    fontStyle: 'italic',
  },
})
