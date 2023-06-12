import React from 'react'
import Button from './Button'

import { monteCarlo } from '@/fonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { convertTime, convertDate } from '@/utils/date'

interface PlaceProps {
  title: string
  dateStart: Date
  dateEnd?: Date
  address: string
}

const Place = ({
  title,
  dateStart,
  dateEnd,
  address
}: PlaceProps): React.ReactElement => {
  return (
    <div className='text-center mb-7'>
      <h2 style={monteCarlo.style} className='text-4xl font-medium mb-2 '>
        {title}
      </h2>
      <p className='text-xs mb-1'>
        <FontAwesomeIcon className='mr-1' icon={faCalendar} />{' '}
        {convertDate(dateStart)}
      </p>
      <p className='text-xs mb-1'>
        <FontAwesomeIcon className='mr-1' icon={faClock} />
        {convertTime(dateStart)} -{' '}
        {dateEnd !== undefined ? convertTime(dateEnd) : 'Finish'}
      </p>
      <p className='text-xs mb-4'>
        <FontAwesomeIcon className='mr-1' icon={faLocationDot} />
        {address}
      </p>
      <Button
        title='See location'
        icon={faLocationDot}
        className='rounded-full border-sage text-sage text-xs'
      />
    </div>
  )
}

export default Place
