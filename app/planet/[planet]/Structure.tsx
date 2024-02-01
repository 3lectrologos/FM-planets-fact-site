'use client'

import { PlanetData } from '@/app/types'
import { twMerge } from 'tailwind-merge'
import { FullMenu, HamburgerMenu, Title } from '@/app/title'
import { Content } from '@/app/planet/[planet]/Content'
import { PlanetMenuProvider, usePlanetMenu } from '@/app/PlanetMenuContext'

function FixedHeight({ height }: { height: string }) {
  return <div className={`w-full ${height}`}></div>
}

function WithContext({ planetData }: { planetData: PlanetData }) {
  const planetMenuState = usePlanetMenu()
  const planet = planetData.name

  return (
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
          <Title className={`px-6 desktop:px-0`} />
          <FixedHeight height={`h-4 tablet:h-10 desktop:hidden`} />
          <FullMenu planet={planet} className={`hidden tablet:flex`} />
        </div>
        <FixedHeight height={`h-0 tablet:h-[27px] desktop:hidden`} />
        <div className={`w-full h-px bg-white/20`} />
        {planetMenuState.menuOpen && <HamburgerMenu planet={planet} />}
        {!planetMenuState.menuOpen && <Content planetData={planetData} />}
      </div>
    </div>
  )
}

export default function Structure({ planetData }: { planetData: PlanetData }) {
  return (
    <PlanetMenuProvider>
      <WithContext planetData={planetData} />
    </PlanetMenuProvider>
  )
}
