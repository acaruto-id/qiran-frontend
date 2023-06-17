import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { monteCarlo } from '@/fonts'

import { motion } from 'framer-motion'
import { zoomInVariant } from '@/utils/variant'

interface BrideProfileProps {
  className?: string
}

const BrideProfile = ({ className }: BrideProfileProps): React.ReactElement => {
  return (
    <motion.div
      className={twMerge('text-sage', className)}
      variants={zoomInVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <div
        style={{
          backgroundImage: 'url("/images/male-bride.jpg")'
        }}
        className='relative w-48 mx-auto bg-cover aspect-image rounded-xl shadow-[2px_7px_6px_3px_rgba(0,0,0,0.3)]'
      >
        <Image
          src='/images/BostonAngel.png'
          alt='Flower'
          width={0}
          height={0}
          className='absolute rotate-180 -left-10 -top-12 w-36'
        />
        <Image
          src='/images/BostonAngel.png'
          alt='Flower'
          width={0}
          height={0}
          className='absolute -bottom-12 -right-10 w-36'
        />
      </div>
      <div className='mt-8 text-center'>
        <p style={monteCarlo.style} className='text-3xl mb-7'>
          Annuri O
        </p>
        <div className='text-sm'>
          <p className='font-medium'>Son of</p>
          <p>Bapak Nuri O &</p>
          <p>Ibu Situ O</p>
        </div>
      </div>
    </motion.div>
  )
}
export default BrideProfile
