import { useState } from 'react'
import { ThemedView } from '../../components/ThemedView'
import Header from '../../components/Header'
import TodoPanel from '../../components/TodoPanel'
import { StyleSheet } from 'react-native'

// --- types ---
type Todo = {
  id: string
  title: string
  createdAt: string
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
      completed: false,
    },
  ])
  const [completed, setCompleted] = useState(false)

  // --- operations ---
  const addTodo = () => {
    if (!input.trim()) return
    const newTodo: Todo = {
      id: Date.now().toString(),
      title: input.trim(),
      createdAt: new Date().toISOString(),
      completed: false,
    }
    setTodos(prev => [newTodo, ...prev])
    setInput('')
  }

  const checkTodo = (id: string) => {
    setTodos(prev => {
      const updatedTodos = prev.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
      return updatedTodos.sort((a, b) => a.completed ? 1 : b.completed ? -1 : 0)
    })
  }

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  // --- render ---
  return (
    <ThemedView style={styles.container}>
      <Header />
      <TodoPanel input={input} todos={todos} onChangeInput={setInput} onAdd={addTodo} onToggle={checkTodo} onDelete={deleteTodo} />
    </ThemedView>
  )
}

// --- styles ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666'
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    height: 40
  },
  input: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8
  },
  customButton: {
    backgroundColor: '#0a72eb',
    padding: 8,
    borderRadius: 8,
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400'
  },
  checkIcon: {
    color: '#0a72eb',
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteIcon: {
    color: '#f5204a',
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  todoTitle: {
    fontSize: 16,
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center'
  },
  todoTitleCompleted: {
    fontSize: 16,
    color: '#777',
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center',
    textDecorationLine: 'line-through',
  },
  todoStatus: {
    fontSize: 12,
    fontWeight: '300',
    color: '#666'
  },
})


