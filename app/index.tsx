import { StyleSheet, TextInput, TouchableOpacity, FlatList, View, Text } from 'react-native'
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
      id: 'example-1',
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
      <ThemedText style={styles.title}>Let's get things done</ThemedText>

      {/* Input Row */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="New Task"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.customButton} onPress={addTodo}>
          <Text style={styles.customButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Category Selector */}
      <View style={styles.categoryRow}>
        <TouchableOpacity style={styles.customButton} onPress={() => setCategory('urgent')}>
          <Text style={styles.customButtonText}>Urgent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customButton} onPress={() => setCategory('important')}>
          <Text style={styles.customButtonText}>Important</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customButton} onPress={() => setCategory('normal')}>
          <Text style={styles.customButtonText}>Normal</Text>
        </TouchableOpacity>
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
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Text style={styles.customButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text>No tasks yet</Text>}
      />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 16, gap: 12, backgroundColor: '#F5F5F5'
  },
  title: { fontSize: 14, fontWeight: '400', marginBottom: 16, color: '#666' },
  inputRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  input: { flex: 1, borderWidth: 1, backgroundColor: '#fff', borderColor: '#ccc', borderRadius: 8, padding: 8 },
  customButton: {
    backgroundColor: '#007bff',
    padding: 8,
    borderRadius: 8,
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customButtonText: { color: '#fff', fontSize: 14, fontWeight: '600' },
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
