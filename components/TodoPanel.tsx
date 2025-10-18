import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import TodoItem from '@/components/TodoItem'

type Todo = {
  id: string
  title: string
  completed: boolean
  createdAt: string
}

type Props = {
  input: string
  todos: Todo[]
  onChangeInput: (text: string) => void
  onAdd: () => void
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TodoPanel({ input, todos, onChangeInput, onAdd, onToggle, onDelete }: Props) {
  return (
    <View>
      {/* Input */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="New Task"
          value={input}
          onChangeText={onChangeInput}
        />
        <TouchableOpacity style={styles.addButton} onPress={onAdd}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TodoItem
            title={item.title}
            completed={item.completed}
            onToggle={() => onToggle(item.id)}
            onDelete={() => onDelete(item.id)}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No tasks yet</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
  },
  addButton: {
    backgroundColor: '#0a72eb',
    padding: 8,
    borderRadius: 8,
    width: '18%',
    alignItems: 'center',
  },
  addText: {
    color: '#fff',
    fontSize: 14,
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    marginTop: 12,
  },
})
