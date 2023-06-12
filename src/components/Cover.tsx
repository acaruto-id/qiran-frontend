'use client'

import { monteCarlo } from '@/fonts'
import Image from 'next/image'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const Cover = (): React.ReactElement => {
  const [show, setShow] = useState(true)
  const [animate, setAnimate] = useState(false)

  const handleClick = (): void => {
    const audio = new Audio(
      'https://res.cloudinary.com/dk8so2dgw/video/upload/v1686580761/sample/n7oiqea4clgquovgnzhz.mp3'
    )
    setAnimate(true)
    audio.play().catch(error => {
      console.error(error)
    })
  }

  useEffect((): void => {
    document.body.style.overflow = show ? 'hidden' : 'auto'
  }, [show])

  return (
    <div
      className={twMerge(
        'fixed inset-0 z-50 flex flex-col items-center justify-center bg-black',
        animate && 'animate-fade-out'
      )}
      onAnimationEnd={(): void => {
        setShow(false)
      }}
      style={{ visibility: show ? 'visible' : 'hidden' }}
    >
      <Image
        src='/images/template-cover.png'
        alt='Template Cover'
        width={0}
        height={0}
        className='fixed inset-0 object-cover w-full h-full -z-10 brightness-50'
      />
      <div style={monteCarlo.style} className='pb-20 text-5xl text-white'>
        Qolandar & Intan
      </div>
      <div className='pb-12 text-xl text-center text-white'>
        Kepada Yth. <br /> Bapak/Ibu/Saudara/i
      </div>
      <div className='pb-20 font-bold text-white text-3 xl'>Nama</div>
      <Button title='Buka Undangan' onClick={handleClick} />
    </div>
  )
}

export default Cover
