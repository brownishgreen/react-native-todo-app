import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import TodoItem from '@/components/TodoItem'
import { buttonStyles } from '@/styles/buttonStyles'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { useThemeStore } from '@/stores/useThemeStore'


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
  const theme = useThemeStore((state) => state.theme)

  return (
    <ThemedView>
      {/* Input */}
      <ThemedView style={styles.inputRow}>
        <TextInput
          style={[styles.input, { color: theme === 'light' ? '#333' : '#EDEDED' }]}
          placeholder="New Task"
          value={input}
          onChangeText={onChangeInput}
          returnKeyType="done"
          onSubmitEditing={onAdd}
        />
        <TouchableOpacity style={[buttonStyles.primary, buttonStyles.base]} onPress={onAdd}>
          <ThemedText style={buttonStyles.text}>Add</ThemedText>
        </TouchableOpacity>
      </ThemedView>

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
    </ThemedView>
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
    borderRadius: 8,
    padding: 8,
  },
  empty: {
    textAlign: 'center',
    marginTop: 12,
  },
})
