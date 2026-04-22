import type { Metadata } from 'next'
import { Press_Start_2P, Inter } from 'next/font/google'
import './globals.css'

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'TEKBAS Kenan — Full Stack Developer',
  description: 'Portfolio of TEKBAS Kenan, Full Stack Developer.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${pressStart2P.variable} ${inter.variable} font-sans bg-white text-[#111111]`}>
        {children}
      </body>
    </html>
  )
}
