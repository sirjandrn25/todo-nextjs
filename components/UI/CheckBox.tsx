import React, { ChangeEvent, useState } from 'react'

type checkBoxType = {
  is_checked: boolean | undefined
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const CheckBox = ({ is_checked, changeHandler }: checkBoxType) => {
  return (
    <input
      className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-teal-500  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
      type='checkbox'
      onChange={changeHandler}
      checked={is_checked}
    />
  )
}

export default CheckBox
