import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['cyrillic', 'latin'] })
const poppins600 = Poppins({ weight: '600', subsets: ['latin'], variable: '--font-poppins' })

export { inter, poppins600 }
