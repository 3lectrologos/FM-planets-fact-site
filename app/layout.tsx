import type { Metadata } from 'next'
import { Antonio, League_Spartan } from 'next/font/google'
import './globals.css'

const antonio = Antonio({
  subsets: ['latin'],
  variable: '--font-heading',
})
const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Planets Fact Site',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${antonio.variable} ${leagueSpartan.variable}`} lang="en">
      <body>{children}</body>
    </html>
  )
}
