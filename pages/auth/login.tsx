import React, { ChangeEvent, FormEvent, useState } from 'react'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

const login = () => {
  const [userState, setUserState] = useState({
    email: '',
    password: '',
  })
  const router = useRouter()
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setUserState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault()
    const response = await signIn('credentials', { ...userState, redirect: false })
    // console.log(response)
    router.push('/todo')
  }

  return (
    <div className='p-5 rounded-lg bg-white shadow w-[400px] absolute top-[100px] left-1/2 -translate-x-1/2'>
      <form action='' onSubmit={submitHandler}>
        <div className='flex flex-col my-2'>
          <label htmlFor='email' className='my-1'>
            Email Address
          </label>
          <Input
            value={userState.email}
            changeHandler={changeHandler}
            name='email'
            type='email'
            placeholder='Enter Email Address'
          />
        </div>
        <div className='flex flex-col my-2'>
          <label htmlFor='password' className='my-1'>
            Password
          </label>
          <Input
            value={userState.password}
            changeHandler={changeHandler}
            name='password'
            type='password'
            placeholder='Enter password'
          />
          <Button className='my-3 w-[120px]'>Login</Button>
        </div>
      </form>
    </div>
  )
}

export default login
