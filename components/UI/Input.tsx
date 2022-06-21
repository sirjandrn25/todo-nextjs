import React, { ChangeEvent } from 'react'

type inputPropType = {
  value: string
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void
  name: string
  type: string
  placeholder: string
}

const Input = (props: inputPropType) => {
  return (
    <input
      value={props.value}
      onChange={props.changeHandler}
      name={props.name}
      type={props.type}
      className='px-3 py-2 rounded-lg border-2 col-span-3'
      placeholder={props.placeholder}
    />
  )
}

export default Input
