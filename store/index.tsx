import React from 'react'
import { TodoContextProvider } from './todo-context'

type contextRootProviderTypes = {
  children: React.ReactNode
}

const ContextRootProvider = ({ children }: contextRootProviderTypes) => {
  return <TodoContextProvider>{children}</TodoContextProvider>
}

export default ContextRootProvider
