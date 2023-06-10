'use-client'

import React from 'react'
import Button from './Button'

const AttendanceForm = (): React.ReactElement => {
  return (
    <div className='bg-sage-400/20 rounded-xl shadow-3xl px-4 py-3'>
      <h2 className='font-medium text-sage-500 text-sm mb-3'>Send a wish</h2>
      <form action='#' className='text-center'>
        <input
          type='text'
          placeholder='Your full name'
          className='bg-transparent text-xs border border-sage-500 rounded-md py-1 px-2 mb-2 w-full placeholder-sage-400'
        />
        <input
          type='text'
          placeholder='Your address'
          className='bg-transparent text-xs border border-sage-500 rounded-md py-1 px-2 mb-2 w-full placeholder-sage-400'
        />
        <textarea
          placeholder='Your Wish'
          className='bg-transparent text-xs border border-sage-500 rounded-md py-1 px-2 mb-2 w-full placeholder-sage-400'
        />
        <Button
          title='Submit'
          className='rounded-full bg-sage-500 border-none text-2xs px-5 py-1'
        />
      </form>
    </div>
  )
}

export default AttendanceForm
