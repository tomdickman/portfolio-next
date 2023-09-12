import './globals.css'

import { Audiowide, Roboto } from 'next/font/google'
import { Menu } from '@/components/menu'
import type { Metadata } from 'next'


export const headingFont = Audiowide({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-heading',
  weight: '400'
})

export const textFont = Roboto({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '700']
})

export const metadata: Metadata = {
  title: 'Tom Dickman Web Development',
  description: 'Personal web site of Tom Dickman, professional web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${textFont.variable}`}>
        {children}
        {/* <Menu /> */}
      </body>
    </html>
  )
}
