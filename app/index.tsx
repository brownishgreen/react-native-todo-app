import { StyleSheet, TextInput, Button, FlatList, View, Text } from 'react-native'
import { useState } from 'react'
import { ThemedView } from '../components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

// --- types ---
type Todo = {
  id: string
  title: string
  createdAt: string
  category: 'urgent' | 'important' | 'normal'
  completed: boolean
}

// --- component ---
export default function HomeScreen() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      title: 'Complete the project',
      createdAt: new Date().toISOString(),
      category: 'important',
      completed: false,
    },
  ])
  const [category, setCategory] = useState<'urgent' | 'important' | 'normal'>('normal')
  const [completed, setCompleted] = useState(false)

  // --- operations ---
  const addTodo = () => {
    if (!input.trim()) return
    const newTodo: Todo = {
      id: Date.now().toString(),
      title: input.trim(),
      createdAt: new Date().toISOString(),
      category: category,
      completed: false,
    }
    setTodos(prev => [newTodo, ...prev])
    setInput('')
  }

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  // --- render ---
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Minimal Todo</ThemedText>

      {/* Input Row */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="New Task"
          value={input}
          onChangeText={setInput}
        />
        <Button title="Add" onPress={addTodo} />
      </View>

      {/* Category Selector */}
      <View style={styles.categoryRow}>
        <Button title="Urgent" onPress={() => setCategory('urgent')} />
        <Button title="Important" onPress={() => setCategory('important')} />
        <Button title="Normal" onPress={() => setCategory('normal')} />
      </View>

      {/* Todo List */}
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={{ flex: 1}}>
              <Text style={styles.todoTitle}>{item.title}</Text>
              <Text style={styles.todoStatus}>{item.completed ? 'Completed' : 'Pending'}</Text>
            </View>
            <Button title="Delete" onPress={() => deleteTodo(item.id)} />
          </View>
        )}
        ListEmptyComponent={<Text>No tasks yet</Text>}
      />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 16, gap: 12
  },
  title: { fontSize: 22, fontWeight: '600' },
  inputRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 8 },
  categoryRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 10,
  },
  todoTitle: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  todoStatus: { fontSize: 12, color: '#666' },
})
