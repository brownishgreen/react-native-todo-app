import { ThemedView } from '../../components/ThemedView'
import Header from '../../components/Header'
import TodoPanel from '../../components/TodoPanel'
import { useTodoStore } from '../../stores/todoStore'
import CompletionModal from '../../components/CompletionModal'

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

  return (
    <ThemedView style={{ flex: 1, padding: 24, gap: 12 }}>
      <Header />
      <TodoPanel input={input} todos={todos} onChangeInput={setInput} onAdd={addTodo} onToggle={toggleTodo} onDelete={deleteTodo} />
      <CompletionModal />
    </ThemedView>
  )
}