import React from 'react'

type checkBoxType = {
  is_checked: boolean | undefined
}

const CheckBox = ({ is_checked }: checkBoxType) => {
  return (
    <input
      className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-teal-500  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
      type='checkbox'
      value=''
      id='flexCheckDefault'
      checked={is_checked}
    />
  )
}

export default CheckBox
