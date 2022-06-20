import React from 'react'
import CheckBox from '../UI/CheckBox'
import { TodoType } from '../../models/todo'

type todoItemProps = {
  todo: TodoType
}

const TodoItem = ({ todo }: todoItemProps) => {
  return (
    <li
      key={todo.id}
      className='grid grid-cols-5 items-center active:scale-95 transition-all ease-in duration-900 px-5 py-2 rounded-lg bg-gray-50 my-1 shadow-md hover:cursor-pointer hover:bg-gray-200 '>
      <div className='flex flex-row items-center col-span-3'>
        <CheckBox is_checked={todo.is_complete} />
        <span className='text-gray-500 text-lg  mx-2 capitalize'>{todo.title}</span>
      </div>

      <span className='text-gray-400 text-lg font-medium '>{todo.schedule}</span>
      <div className='flex items-center justify-end'>
        <span className='h-[35px] w-[35px] object-cover mx-3'>
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
