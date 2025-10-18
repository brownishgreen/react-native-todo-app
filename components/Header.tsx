import { ThemedText } from '@/components/ThemedText'
import { StyleSheet } from 'react-native'
import { ThemedView } from '@/components/ThemedView'

export default function Header() {
  return (
    <ThemedView style={styles.header}>
      <ThemedText style={styles.title}>Let's get things done 🚀</ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666',
  },
})
