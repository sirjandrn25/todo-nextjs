import React from 'react'
import TodoList from '../../components/todo/TodoList'
import AddTodo from '../../components/todo/AddTodo'

const index = () => {
  return (
    <div className='h-full w-full relative'>
      <div className='w-[750px] h-auto absolute top-[100px] left-1/2 -translate-x-1/2'>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  )
}

export default index
