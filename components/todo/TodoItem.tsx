import React, { ChangeEvent, useState } from 'react'
import CheckBox from '../UI/CheckBox'
import { TodoType } from '../../models/todo'
import { UseTodoContext } from '../../store/todo-context'

type todoItemProps = {
  todo: TodoType
}

const TodoItem = ({ todo }: todoItemProps) => {
  const [isComplete, setIsComplete] = useState(todo.is_complete)
  const { removeTodo } = UseTodoContext()

  const changeHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsComplete(event.target.checked)

    const response = await fetch(`/api/todo/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify({ is_complete: event.target.checked }),
    })
    const data = await response.json()
    console.log(data)

    // console.log(event.target.checked)
  }

  const onDeleteTodoItem = async (todo_id: number) => {
    // console.log(todo_id)
    const response = await fetch(`/api/todo/${todo_id}`, {
      method: 'DELETE',
    })
    console.log(response)
    // const data = await response.json()
    // console.log(data)
    removeTodo(todo_id)
  }
  return (
    <li
      key={todo.id}
      className='grid grid-cols-5 items-center px-5 py-2 rounded-lg bg-gray-50 my-1 shadow-md hover:cursor-pointer hover:bg-gray-200 '>
      <div className='flex flex-row items-center col-span-3'>
        <CheckBox changeHandler={changeHandler} is_checked={isComplete} />
        <span className='text-gray-500 text-lg  mx-2 capitalize'>{todo.title}</span>
      </div>

      <span className='text-gray-400 text-lg font-medium '>{todo.schedule}</span>
      <div className='flex items-center justify-end'>
        <span
          onClick={(e) => onDeleteTodoItem(todo.id)}
          className='h-[35px] w-[35px] object-cover mx-3 active:scale-90 transition-all ease-in duration-900'>
          <img src='remove.png' className='w-full h-full' alt='' />
        </span>
        {/* <span className='h-[35px] w-[35px] object-cover'>
          <img src='edit.png' className='w-full h-full' alt='' />
        </span> */}
      </div>
    </li>
  )
}

export default TodoItem
