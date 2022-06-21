import React from 'react'

type buttonPropsType = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}
const Button = (props: buttonPropsType) => {
  return (
    <button
      onClick={props.onClick}
      className={`bg-purple-500 text-white px-6 py-2 rounded-lg shadow text-lg ${props.className} `}>
      {props.children}
    </button>
  )
}

export default Button
