import React, { useEffect } from 'react'
import TodoList from '../../components/todo/TodoList'
import AddTodo from '../../components/todo/AddTodo'
import { GetServerSideProps } from 'next'
import { TodoType } from '../../models/todo'
import { UseTodoContext } from '../../store/todo-context'
import { supabase } from '../../utils/supabaseClient'
import { useSession, getSession } from 'next-auth/react'

type todoPropsType = {
  todos: TodoType[]
}

const index = ({ todos }: todoPropsType) => {
  const { fetchAllTodosItems } = UseTodoContext()

  // console.log(session)
  useEffect(() => {
    // console.log(todos)
    fetchAllTodosItems(todos)
  }, [])
  return (
    <div className='h-full w-full relative'>
      <div className='w-[750px] h-auto absolute top-[100px] left-1/2 -translate-x-1/2'>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // const response = await supabase.from('todo').select('*')

  // const data = response.data
  const session = await getSession({ req })

  // console.log(session.accessToken)
  // console.log(session?.accessToken)
  const response = await fetch('http://localhost:8000/api/v1/tasks/', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
    },
  })
  const data = await response.json()
  // console.log(data)

  return {
    props: {
      todos: data,
    },
  }
}

export default index
