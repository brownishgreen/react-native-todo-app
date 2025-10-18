import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

type Props = {
  title: string
  completed: boolean
  onToggle: () => void
  onDelete: () => void
}

export default function TodoItem({ title, completed, onToggle, onDelete }: Props) {
  return (
    <View style={styles.item}>
      <View style={styles.left}>
        <TouchableOpacity onPress={onToggle}>
          <FontAwesome
            name={completed ? 'check-circle' : 'circle-o'}
            size={20}
            style={styles.checkIcon}
          />
        </TouchableOpacity>
        <Text style={completed ? styles.completedTitle : styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <FontAwesome name="trash-o" size={20} style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
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
