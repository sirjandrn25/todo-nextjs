import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className='flex flex-row w-full items-center justify-between px-20 py-4 bg-gray-100 fixed top-0 left-0 right-0 '>
      <Link href={'/'} passHref>
        <a className='text-2xl font-bold uppercase'>next todo App</a>
      </Link>
      <ul className='flex flex-row items-center'>
        <li>
          <Link href={'/login'}>
            <a className='text-lg text-gray-500 font-medium mx-3 hover:text-gray-700'>Login</a>
          </Link>
          <Link href={'/login'}>
            <a className='text-lg text-gray-500 font-medium mx-3 hover:text-gray-700'>Logout</a>
          </Link>
          <Link href={'/login'}>
            <a className='text-lg text-gray-500 font-medium mx-3 hover:text-gray-700'>Dashboard</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
