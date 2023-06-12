import React from 'react'

const Footer = (): React.ReactElement => {
  return (
    <footer className='text-center bg-black py-2'>
      <p className='text-3xs text-white'>Powered by</p>
      <a href='https://qiran.id' className='text-2xs text-white font-bold'>
        qiran.id
      </a>
    </footer>
  )
}

export default Footer
