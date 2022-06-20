import React from 'react'

import TodoItem from './TodoItem'
import { UseTodoContext } from '../../store/todo-context'

const TodoList = () => {
  const { items } = UseTodoContext()
  return (
    <div className='w-full min-h-[400px]'>
      <ul className='flex flex-col w-full '>
        {items.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
