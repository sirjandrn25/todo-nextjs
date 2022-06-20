import React from 'react'

import Link from 'next/link'

const HomePage = () => {
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <Link href={'/logout'}>
        <a className='w-[120px] bg-yellow-400 rounded-lg shadow py-1 text-lg text-center'>Logout</a>
      </Link>
    </div>
  )
}

export default HomePage
