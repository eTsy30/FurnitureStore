import { Poppins, Montserrat } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '700', '900'],
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
})
