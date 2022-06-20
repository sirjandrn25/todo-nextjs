import React from 'react'
import Navigation from './Navigation'

type layoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: layoutProps) => {
  return (
    <div className='h-screen w-screen '>
      <Navigation />
      <main className='h-screen w-screen '>{children}</main>
    </div>
  )
}

export default Layout
