import { useEffect } from 'react'
import { ThemedView } from '../../components/ThemedView'
import Header from '../../components/Header'
import TodoPanel from '../../components/TodoPanel'
import { useTodoStore } from '../../stores/todoStore'
import CompletionModal from '../../components/CompletionModal'
import { useModalStore } from '../../stores/useModalStore'

// --- component ---
export default function HomeScreen() {
  const {
    input,
    todos,
    setInput,
    addTodo,
    toggleTodo,
    deleteTodo,
  } = useTodoStore()
  const { openModal } = useModalStore()

  useEffect(() => {
    if (todos.length > 0 && todos.every((todo) => todo.completed)) {
      openModal()
    }
  }, [todos])
  
  return (
    <ThemedView style={{ flex: 1, padding: 24, gap: 12 }}>
      <Header />
      <TodoPanel input={input} todos={todos} onChangeInput={setInput} onAdd={addTodo} onToggle={toggleTodo} onDelete={deleteTodo} />
      <CompletionModal />
    </ThemedView>
  )
}