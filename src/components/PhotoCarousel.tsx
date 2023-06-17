'use client'

import Image from 'next/image'
import { monteCarlo } from '@/fonts'

import { motion } from 'framer-motion'
import { zoomInVariant } from '@/utils/variant'

const PhotoCarousel = (): React.ReactElement => {
  return (
    <motion.div
      className='my-9 -mx-5'
      variants={zoomInVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <h2
        style={monteCarlo.style}
        className='text-4xl font-medium text-center mb-4'
      >
        Precious Moment
      </h2>
      <div>
        <Image
          src='/images/photo4.jpg'
          alt='photo4'
          width={0}
          height={0}
          className='aspect-image w-full rounded-xl object-cover mb-3'
        />
        <div className='grid grid-cols-3 grid-row-1 text-center gap-4'>
          <div>
            <Image
              src='/images/photo4.jpg'
              alt='photo4'
              width={0}
              height={0}
              className='aspect-landscape w-full rounded-xl object-cover'
            />
          </div>
          <div>
            <Image
              src='/images/photo5.jpg'
              alt='photo5'
              width={0}
              height={0}
              className='aspect-landscape w-full rounded-xl object-cover'
            />
          </div>
          <div>
            <Image
              src='/images/photo6.jpg'
              alt='photo6'
              width={0}
              height={0}
              className='aspect-landscape w-full rounded-xl object-cover'
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PhotoCarousel
