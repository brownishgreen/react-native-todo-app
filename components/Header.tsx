import { ThemedText } from '@/components/ThemedText'
import { StyleSheet } from 'react-native'
import { ThemedView } from '@/components/ThemedView'

export default function Header() {
  return (
    <ThemedView style={styles.header}>
      <ThemedText style={styles.title}>Minimal Todo</ThemedText>
      <ThemedText style={styles.subtitle}>Let's get things done 🚀</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#e1e2e3',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.125)',
    padding: 8,
    borderRadius: 8,
    marginVertical: 4,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666',
  },
})
