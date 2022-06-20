import React, { ChangeEvent, FormEvent, useState } from 'react'

const AddTodo = () => {
  const [todoState, setTodoState] = useState({
    title: '',
    time: '',
  })

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value

    setTodoState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()
    console.log(todoState)
  }

  return (
    <div className='w-full py-3 px-5 rounded-lg shadow mb-3'>
      <form action='' onSubmit={submitHandler}>
        <div className='w-full grid grid-cols-5 gap-2'>
          <input
            value={todoState.title}
            onChange={changeHandler}
            name='title'
            type='text'
            className='px-3 py-2 rounded-lg border-2 col-span-3'
            placeholder='Enter Todo Title'
          />
          <input
            name='time'
            type='time'
            value={todoState.time}
            onChange={changeHandler}
            className='px-3 py-2 rounded-lg border-2'
          />
          <button className='rounded-lg py-1 px-3 bg-cyan-500 text-white font-bold hover:bg-cyan-700'>Add New</button>
        </div>
      </form>
    </div>
  )
}

export default AddTodo
