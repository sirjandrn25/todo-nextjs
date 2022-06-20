import { createContext, useContext, useState } from 'react'
import { TodoType } from '../models/todo'

type TodoContextType = {
  items: TodoType[]
  addNewTodo: (item: TodoType) => void
  removeTodo: (todo_id: number) => void
  editTodo: (todo_id: number) => void
}

const TodoContext = createContext<TodoContextType>({
  items: [],
  addNewTodo: () => {},
  removeTodo: () => {},
  editTodo: () => {},
})

type todoContextProps = {
  children: React.ReactNode
}

const dummy_todos = [
  {
    id: 1,
    title: 'make physics notes',
    schedule: '07:05',
    is_complete: true,
  },
  {
    id: 2,
    title: 'make youtube videos',
    schedule: '18:05',
    is_complete: false,
  },
  {
    id: 3,
    title: 'will go to market',
    schedule: '14:40',
    is_complete: false,
  },
]

export const TodoContextProvider = ({ children }: todoContextProps) => {
  const [items, setItems] = useState<TodoType[]>(dummy_todos)

  const addNewTodo = (item: TodoType) => {
    setItems((prevState) => {
      return [item, ...prevState]
    })
  }
  const editTodo = (todo_id: number) => {}
  const removeTodo = (todo_id: number) => {}

  const todoContextObj = {
    items,
    addNewTodo,
    editTodo,
    removeTodo,
  }
  return <TodoContext.Provider value={todoContextObj}>{children}</TodoContext.Provider>
}

export const UseTodoContext = () => useContext(TodoContext)
