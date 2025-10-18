import { create } from 'zustand'
import { Todo } from '@/types/todo'

type TodoStore = {
  todos: Todo[]
  input: string
  setInput: (text: string) => void
  addTodo: () => void
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [
    {
      id: '1',
      title: 'Create your daily plan',
      completed: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Focus and complete it with discipline',
      completed: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: '3',
      title: "We'll cheer for you 😍",
      completed: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: '4',
      title: 'Go conquer the day!',
      completed: false,
      createdAt: new Date().toISOString(),
    },
  ],
  input: '',

  setInput: (text) => set({ input: text }),

  addTodo: () => {
    const { input, todos } = get()
    if (!input.trim()) return
    const newTodo: Todo = {
      id: Date.now().toString(),
      title: input.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    }
    set({
      todos: [newTodo, ...todos],
      input: '',
    })
  },

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos
        .map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        .sort((a, b) => (a.completed ? 1 : b.completed ? -1 : 0)),
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}))