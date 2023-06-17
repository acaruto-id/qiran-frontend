import { twMerge } from 'tailwind-merge'

import { motion } from 'framer-motion'
import { zoomInVariant } from '@/utils/variant'

interface SectionTitleProps {
  className: string
}

const SectionTitle = ({ className }: SectionTitleProps): React.ReactElement => {
  return (
    <motion.div
      className={twMerge(
        'relative flex justify-between items-center',
        className
      )}
      variants={zoomInVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <div className='w-1.5 h-1.5 bg-sage rounded-full' />
      <p className='text-sage text-xl font-medium bg-scotch z-10'>
        Our Special Day
      </p>
      <div className='w-1.5 h-1.5 bg-sage rounded-full' />
      <hr className='bg-sage border-0 h-px absolute right-0 left-0' />
    </motion.div>
  )
}

export default SectionTitle
