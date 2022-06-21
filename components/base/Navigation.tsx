import React from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'

const Navigation = () => {
  const { data: session, status } = useSession()
  console.log({ session, status })
  return (
    <nav className='flex flex-row w-full items-center z-40 justify-between px-20 py-4 bg-gray-100 fixed top-0 left-0 right-0 '>
      <Link href={'/'} passHref>
        <a className='text-2xl font-bold uppercase'>next todo App</a>
      </Link>
      <ul className='flex flex-row items-center'>
        {!session && status !== 'loading' && (
          <li>
            <Link href={'/auth/login'} passHref>
              <a className='text-lg text-gray-500 font-medium mx-3 hover:text-gray-700'>Login</a>
            </Link>
          </li>
        )}
        {session && status !== 'loading' && (
          <>
            <li>
              <Link href={'/api/auth/signout'} passHref>
                <a
                  onClick={(event) => {
                    event.preventDefault()
                    signOut({ redirect: false })
                  }}
                  className='text-lg text-gray-500 font-medium mx-3 hover:text-gray-700'>
                  Logout
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/login'}>
                <a className='text-lg text-gray-500 font-medium mx-3 hover:text-gray-700'>Dashboard</a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navigation
