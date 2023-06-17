import { monteCarlo } from '@/fonts'
import { faBell, faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

import { motion } from 'framer-motion'
import { zoomInVariant } from '@/utils/variant'

const Countdown = (): React.ReactElement => {
  return (
    <motion.div
      className='my-9 -mx-5 text-center'
      variants={zoomInVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <h2 style={monteCarlo.style} className='font-medium text-3xl mb-4'>
        The Event Will be Held
      </h2>
      <div className='font-medium mb-4'>
        <h3 className='text-3xl'>69</h3>
        <h3>Days</h3>
      </div>
      <div className='grid grid-cols-3 grid-row-1 font-medium mb-6'>
        <div>
          <h3 className='text-3xl'>69</h3>
          <h3>Hours</h3>
        </div>
        <div>
          <h3 className='text-3xl'>69</h3>
          <h3>Minutes</h3>
        </div>
        <div>
          <h3 className='text-3xl'>69</h3>
          <h3>Second</h3>
        </div>
      </div>
      <p className='text-sm mb-12'>Monday 29 June 2023</p>
      <Button
        title='Save the date'
        icon={faCalendar}
        className='border-sage text-sage text-xs w-56 rounded-full mb-4'
      />
      <Button
        title='Turn on notification'
        icon={faBell}
        className='border-sage text-sage text-xs w-56 rounded-full mb-10'
      />
      <div className='bg-sage text-scotch py-7 px-12 rounded-lg text-xs'>
        <p className='mb-5'>
          <b>20 Guest</b> response will join, let&apos;s send your response too.
        </p>
        <Button
          title='Reservation (RSVP)'
          icon={faDesktop}
          className='bg-sky-400 border-0 text-xs w-56 rounded-full'
        />
      </div>
    </motion.div>
  )
}

export default Countdown
