import './globals.css'
import { Inter } from 'next/font/google'

import Link from 'next/link'
import Appbar from './Components/Appbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My First Next App',
  description: 'Generated by My First Next App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Appbar />
        {children}
        </body>
    </html>
  )
}