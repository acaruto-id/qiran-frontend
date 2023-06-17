import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'

import { monteCarlo } from '@/fonts'

interface OpenInvitationProps {
  params: { slug: string }
  searchParams: { name: string }
}

const OpenInvitation = ({
  params,
  searchParams
}: OpenInvitationProps): React.ReactElement => {
  return (
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-black'>
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
      <div className='pb-20 font-bold text-white text-3 xl capitalize'>
        {searchParams.name}
      </div>
      <Link href={`/${params.slug}`}>
        <Button title='Buka Undangan' />
      </Link>
    </div>
  )
}

export default OpenInvitation
