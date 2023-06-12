import { MonteCarlo, Montserrat } from 'next/font/google'

const monteCarlo = MonteCarlo({
  weight: ['400'],
  subsets: ['latin']
})

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export { monteCarlo, montserrat }
