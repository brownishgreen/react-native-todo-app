import { ThemedText } from '@/components/ThemedText'
import { StyleSheet } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { useThemeStore } from '@/stores/useThemeStore'

export default function Header() {
  const { theme } = useThemeStore()

  const backgroundColor = theme === 'light' ? '#e1e2e3' : '#2C2C2C'
  const shadowColor = theme === 'light' ? 'rgba(14, 11, 11, 0.13)' : 'rgba(255, 255, 255, 0.13)'

  return (
    <ThemedView style={[styles.header, {
      backgroundColor,
      boxShadow: `0 0 10px 0 ${shadowColor}`
    }]}>
      <ThemedText style={styles.title}>Minimal Todo</ThemedText>
      <ThemedText style={styles.subtitle}>Let's get things done 🚀</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 8,
    borderRadius: 8,
    marginVertical: 4,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400'
  },
})
