import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import { motion } from 'framer-motion'
import { zoomInVariant } from '@/utils/variant'

interface CommentProps {
  name: string
  address: string
  comment: string
}

const Comment = ({
  name,
  address,
  comment
}: CommentProps): React.ReactElement => {
  return (
    <motion.div
      className='flex gap-5 text-3xs mb-4'
      variants={zoomInVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <div className='w-10 h-10 bg-neutral-400 flex items-center justify-center text-xs rounded-full text-black font-medium'>
        ACR
      </div>
      <div className='relative grow'>
        <FontAwesomeIcon
          icon={faPlay}
          className='text-white text-2xl absolute rotate-180 -left-3'
        />
        <div className='bg-white rounded-xl rounded-tl-lg px-4 py-2 text-black shadow-3xl'>
          <p className='font-bold'>{name}</p>
          <p className='font-medium'>at {address}</p>
          <p>{comment}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Comment
