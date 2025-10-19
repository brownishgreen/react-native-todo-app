import { useEffect } from 'react'
import CompletionModal from '@/components/CompletionModal'
import Header from '@/components/Header'
import { ThemedView } from '@/components/ThemedView'
import TodoPanel from '@/components/TodoPanel'
import { useTodoStore } from '@/stores/todoStore'
import { useModalStore } from '@/stores/useModalStore'

// --- component ---
export default function TasksScreen() {
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