import { motion } from 'framer-motion'
import { zoomInVariant } from '@/utils/variant'

const MotivationLetter = (): React.ReactElement => {
  return (
    <motion.div
      className='text-center text-sage'
      variants={zoomInVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <p className='text-xs italic mb-2 font-medium'>
        “Love is patient; love is kind; it is not jealous. It does not boast and
        it is not proud”
      </p>
      <p className='text-xs'>1 Corinthians 13:4</p>
    </motion.div>
  )
}

export default MotivationLetter
