import type { Metadata } from 'next'
import { Antonio, League_Spartan } from 'next/font/google'
import './globals.css'
import { FullMenu } from '@/app/planet/[planet]/FullMenu'
import PlanetContextProvider from '@/app/planet/[planet]/PlanetContextProvider'
import { twMerge } from 'tailwind-merge'
import Title from '@/app/planet/[planet]/Title'
import FixedHeight from '@/app/FixedHeight'
import React from 'react'

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
      <body>
        <PlanetContextProvider>
          <div
            className={twMerge(
              `flex flex-col min-h-dvh min-w-fit bg-background text-white`,
              `bg-[url('/images/background-stars.svg')] bg-left-top bg-repeat`
            )}
          >
            <div className={`flex flex-col justify-center`}>
              <FixedHeight height={`h-4 tablet:h-8 desktop:hidden`} />
              <div
                className={twMerge(
                  `flex flex-col desktop:flex-row`,
                  `desktop:items-center desktop:justify-between desktop:pl-8 desktop:pr-10`
                )}
              >
                <header>
                  <Title className={`px-6 desktop:px-0`} />
                </header>
                <FixedHeight height={`h-4 tablet:h-10 desktop:hidden`} />
                <nav>
                  <FullMenu className={`hidden tablet:flex`} />
                </nav>
              </div>
              <FixedHeight height={`h-0 tablet:h-[27px] desktop:hidden`} />
              <div className={`w-full h-px bg-white/20`} />
            </div>
            <main>{children}</main>
          </div>
        </PlanetContextProvider>
      </body>
    </html>
  )
}
