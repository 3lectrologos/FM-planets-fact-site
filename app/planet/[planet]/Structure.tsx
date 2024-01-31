'use client'

import { InfoMenuItem, Planet, PlanetData } from '@/app/types'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { FullMenu, HamburgerMenu, Title } from '@/app/title'
import { Content } from '@/app/planet/[planet]/Content'

function FixedHeight({ height }: { height: string }) {
  return <div className={`w-full ${height}`}></div>
}

export default function Structure({ planetData }: { planetData: PlanetData }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [info, setInfo] = useState<InfoMenuItem>('overview')

  function onMenuToggle() {
    setMenuOpen(!menuOpen)
  }

  function onPlanetSelect(planet: Planet) {
    setMenuOpen(false)
  }

  function onInfoSelect(info: InfoMenuItem) {
    setInfo(info)
  }

  return (
    <div
      className={twMerge(
        `flex flex-col min-h-dvh min-w-fit bg-background text-white`,
        `bg-[url('/images/background-stars.svg')] bg-left-top bg-no-repeat`
      )}
    >
      <div className={`flex flex-col justify-center`}>
        <FixedHeight height={`h-4 tablet:h-8`} />
        <Title
          className={`px-6`}
          isMenuOpen={menuOpen}
          onMenuToggle={onMenuToggle}
        />
        <FixedHeight height={`h-4 tablet:h-10`} />
        <FullMenu
          className={`hidden tablet:flex`}
          currentPlanet={planetData.name as Planet}
          onClick={onPlanetSelect}
        />
        <FixedHeight height={`h-0 tablet:h-[27px]`} />
        <div className={`w-full h-px bg-white/20`} />
        {menuOpen && (
          <HamburgerMenu
            currentPlanet={planetData.name as Planet}
            onClick={onPlanetSelect}
          />
        )}
        {!menuOpen && (
          <Content
            planetData={planetData}
            info={info}
            onInfoSelect={onInfoSelect}
          />
        )}
      </div>
    </div>
  )
}
