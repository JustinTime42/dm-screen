import { Montserrat, Merriweather } from 'next/font/google';

export const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'

});

export const merriweather = Merriweather({
  subsets: ['latin'],
  weight: '300',
  display: 'swap',
  variable: '--font-merriweather'
});