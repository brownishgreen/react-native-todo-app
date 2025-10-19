import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useThemeStore } from '@/stores/useThemeStore'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
type Props = {
  title: string
  completed: boolean
  onToggle: () => void
  onDelete: () => void
}

export default function TodoItem({ title, completed, onToggle, onDelete }: Props) {
  return (
    <ThemedView style={styles.item}>
      <ThemedView style={styles.left}>
        <TouchableOpacity onPress={onToggle}>
          <FontAwesome
            name={completed ? 'check-circle' : 'circle-o'}
            size={20}
            style={styles.checkIcon}
          />
        </TouchableOpacity>
        <ThemedText style={completed ? styles.completedTitle : styles.title}>{title}</ThemedText>
      </ThemedView>
      <TouchableOpacity onPress={onDelete}>
        <FontAwesome name="trash-o" size={20} style={styles.deleteIcon} />
      </TouchableOpacity>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 12,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
  },
  completedTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#777',
    textDecorationLine: 'line-through',
  },
  checkIcon: {
    color: '#0a72eb',
  },
  deleteIcon: {
    color: '#f5204a',
  },
})
