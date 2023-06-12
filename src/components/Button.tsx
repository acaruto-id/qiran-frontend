'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  title: string
  icon?: any
  onClick?: () => void
  className?: string
}

const Button = ({
  title,
  icon,
  onClick,
  className
}: ButtonProps): React.ReactElement => {
  return (
    <button
      className={twMerge(
        'py-2 px-10 bg-transparent text-white border border-white rounded-md',
        className
      )}
      onClick={onClick}
    >
      {Boolean(icon) && <FontAwesomeIcon icon={icon} className='mr-2' />}
      {title}
    </button>
  )
}

export default Button
