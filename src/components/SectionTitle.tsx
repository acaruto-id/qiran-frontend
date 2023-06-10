import { twMerge } from 'tailwind-merge'

interface SectionTitleProps {
  className: string
}

const SectionTitle = ({ className }: SectionTitleProps): React.ReactElement => {
  return (
    <div
      className={twMerge(
        'relative flex justify-between items-center',
        className
      )}
    >
      <div className='w-1.5 h-1.5 bg-sage rounded-full' />
      <p className='text-sage text-xl font-medium bg-scotch z-10'>
        Our Special Day
      </p>
      <div className='w-1.5 h-1.5 bg-sage rounded-full' />
      <hr className='bg-sage border-0 h-px absolute right-0 left-0' />
    </div>
  )
}

export default SectionTitle
