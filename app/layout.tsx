import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import NavBar from '@/components/NavBar'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UCSC Artificial Intelligence',
  description: 'SCAI Club',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar/>
        {children}
        </body>
    </html>
  )
}
