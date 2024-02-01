'use client'

import { ChevronIcon } from '@/app/icons'
import { Planet, planetList } from '@/app/types'
import { usePlanetMenuDispatch } from '@/app/planet/[planet]/planetMenuContext'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { planetCircleColor } from '@/app/constants'

export function HamburgerMenu({
  planet,
  className = '',
}: {
  planet: Planet
  className?: string
}) {
  const planetMenuDispatch = usePlanetMenuDispatch()

  return (
    <ul
      className={twMerge(
        `flex flex-col px-6 pt-6 pb-8 bg-background/50`,
        className
      )}
      role="menu"
    >
      {planetList.map((nextPlanet, index) => (
        <li
          key={index}
          className={`${index < planetList.length - 1 ? 'after:block after:w-full after:h-px after:bg-white/10' : ''}`}
          role="menuitem"
          aria-label={nextPlanet}
        >
          <Link
            href={`/planet/${nextPlanet}`}
            onClick={() => {
              planetMenuDispatch({ type: 'CLOSE_MENU' })
            }}
          >
            <HamburgerMenuItem
              planet={nextPlanet}
              active={planet === nextPlanet}
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}

function HamburgerMenuItem({
  planet,
  active = false,
}: {
  planet: Planet
  active?: boolean
}) {
  return (
    <div
      className={twMerge(
        `flex flex-row py-5 items-center`,
        `${active ? 'opacity-100' : 'opacity-60'}`
      )}
    >
      <div
        className={`w-5 h-5 rounded-full ${planetCircleColor.get(planet)} mr-[25px]`}
      />
      <span className={`textStyle-menu`}>{planet}</span>
      <div className={`flex-grow`} />
      <ChevronIcon className={`pr-2`} />
    </div>
  )
}
