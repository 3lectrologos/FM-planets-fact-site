'use client'

import { InfoMenuItem, Planet, PlanetData } from '@/app/types'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { HamburgerMenu, Title } from '@/app/title'
import { Content } from '@/app/content'

function FixedHeight({ height }: { height: string }) {
  return <div className={`w-full ${height}`}></div>
}

export default function Structure({ data }: { data: PlanetData[] }) {
  const [planet, setPlanet] = useState<Planet>('Earth')
  const [menuOpen, setMenuOpen] = useState(false)
  const [info, setInfo] = useState<InfoMenuItem>('overview')

  function onMenuToggle() {
    setMenuOpen(!menuOpen)
  }

  function onPlanetSelect(planet: Planet) {
    setPlanet(planet)
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
      <div className={``}>
        <FixedHeight height={`h-4`} />
        <Title
          className={`px-6`}
          isMenuOpen={menuOpen}
          onMenuToggle={onMenuToggle}
        />
        <FixedHeight height={`h-4`} />
        <div className={`w-full h-px bg-white/20`} />
        {menuOpen && <HamburgerMenu onClick={onPlanetSelect} />}
        {!menuOpen && (
          <Content
            planet={planet}
            planetData={data.find((d) => d.name === planet)!}
            info={info}
            onInfoSelect={onInfoSelect}
          />
        )}
        <FixedHeight height={`h-12`} />
      </div>
    </div>
  )
}
