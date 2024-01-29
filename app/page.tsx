'use client'

import { twMerge } from 'tailwind-merge'
import { useState } from 'react'
import {
  InfoMenuItem,
  infoMenuItems,
  Planet,
  planetBorderColor0,
  planetBorderColor100,
} from '@/app/types'
import { HamburgerMenu, Title } from '@/app/title'
import Image from 'next/image'

function FixedHeight({ height }: { height: string }) {
  return <div className={`w-full ${height}`}></div>
}

function InfoMenu({
  planet,
  onSelect,
}: {
  planet: Planet
  onSelect: (info: InfoMenuItem) => void
}) {
  const [activeInfo, setActiveInfo] = useState<InfoMenuItem>('Overview')

  function onClick(info: InfoMenuItem) {
    setActiveInfo(info)
    onSelect(info)
  }

  return (
    <div className={`flex flex-col`}>
      <ul className={`flex flex-row justify-between px-6`} role="menubar">
        {infoMenuItems.map((item, index) => (
          <li
            className={twMerge(
              `textStyle-h3 w-[80px] pt-5 pb-4 text-center`,
              `cursor-pointer transition-colors`,
              item === activeInfo ? `text-white` : `text-white/50`,
              item === activeInfo
                ? `border-b-[4px] ${planetBorderColor100.get(planet)}`
                : `border-b-[4px] ${planetBorderColor0.get(planet)}`
            )}
            key={index}
            role="menuitem"
            tabIndex={0}
            onClick={() => onClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className={`w-full h-px bg-white/20`} />
    </div>
  )
}

function Content({
  planet,
  info,
  onInfoSelect,
}: {
  planet: Planet
  info: InfoMenuItem
  onInfoSelect: (info: InfoMenuItem) => void
}) {
  const planetNameLowercase = planet.toLowerCase()

  return (
    <div className={`flex flex-col`}>
      <InfoMenu planet={planet} onSelect={onInfoSelect} />
      <div className={`flex flex-col w-full items-center mt-24 mb-6`}>
        {info !== 'Structure' && (
          <Image
            src={`/images/planet-${planetNameLowercase}.svg`}
            alt={`Planet ${planetNameLowercase}`}
            width={111}
            height={111}
          />
        )}
        {info === 'Structure' && (
          <Image
            src={`/images/planet-${planetNameLowercase}-internal.svg`}
            alt={`Planet ${planetNameLowercase}`}
            width={111}
            height={111}
          />
        )}
        <Image
          className={`-mt-6 ${info === 'Surface' ? 'visible' : 'invisible'}`}
          src={`/images/geology-${planetNameLowercase}.png`}
          alt={`Planet ${planetNameLowercase} geology`}
          width={80}
          height={80}
        />
      </div>
      <span className={`textStyle-h1 text-center`}>{planet}</span>
    </div>
  )
}

export default function Home() {
  const [planet, setPlanet] = useState<Planet>('Earth')
  const [menuOpen, setMenuOpen] = useState(false)
  const [info, setInfo] = useState<InfoMenuItem>('Overview')

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
          <Content planet={planet} info={info} onInfoSelect={onInfoSelect} />
        )}
      </div>
    </div>
  )
}
