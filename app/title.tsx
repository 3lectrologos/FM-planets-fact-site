import { twMerge } from 'tailwind-merge'
import { ChevronIcon, HamburgerIcon } from '@/app/icons'
import { Planet, planetList } from '@/app/types'
import Link from 'next/link'
import {
  planetCircleColor,
  planetDesktopBorderColor0,
  planetDesktopHoverBorderColor100,
} from '@/app/constants'
import { usePlanetMenu, usePlanetMenuDispatch } from '@/app/PlanetMenuContext'

export function FullMenu({
  planet,
  className = '',
}: {
  planet: Planet
  className?: string
}) {
  const planetMenuState = usePlanetMenu()
  const planetMenuDispatch = usePlanetMenuDispatch()

  return (
    <div className={`w-full flex flex-col items-center desktop:w-fit`}>
      <ul
        className={twMerge(`flex flex-row gap-x-[33px]`, `${className}`)}
        role="menu"
      >
        {planetList.map((nextPlanet, index) => (
          <li
            key={index}
            className={twMerge(`desktop:flex desktop:flex-col`)}
            role="menuitem"
            aria-label={nextPlanet}
          >
            <Link
              className={twMerge(
                `desktop:flex desktop:flex-col desktop:justify-center desktop:h-[85px] desktop:hover:pt-[8px]`,
                `cursor-pointer`,
                `desktop:transition-[border-color,opacity,padding] desktop:ease-linear`,
                `desktop:hover:transition-[border-color,opacity,padding] desktop:hover:ease-linear`,
                `${planetDesktopBorderColor0.get(nextPlanet)}`,
                `desktop:hover:border-t-[4px] ${planetDesktopHoverBorderColor100.get(nextPlanet)}`
              )}
              href={`/planet/${nextPlanet}`}
            >
              <span
                className={`textStyle-menu ${planet === nextPlanet ? 'opacity-100' : 'opacity-60'}`}
              >
                {nextPlanet}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Title({ className = '' }: { className?: string }) {
  const planetMenuState = usePlanetMenu()
  const planetMenuDispatch = usePlanetMenuDispatch()

  function onClick() {
    if (planetMenuState.menuOpen) {
      planetMenuDispatch({ type: 'CLOSE_MENU' })
    } else {
      planetMenuDispatch({ type: 'OPEN_MENU' })
    }
  }

  return (
    <div
      className={twMerge(
        `flex flex-row items-center justify-between tablet:justify-center`,
        `${className}`
      )}
    >
      <h1 className={`textStyle-title`}>The planets</h1>
      <button
        className={`tablet:hidden`}
        onClick={onClick}
        aria-haspopup="menu"
        aria-expanded={planetMenuState.menuOpen}
      >
        <HamburgerIcon active={planetMenuState.menuOpen} />
      </button>
    </div>
  )
}

export function HamburgerMenu({
  planet,
  className = '',
}: {
  planet: Planet
  className?: string
}) {
  const planetMenuState = usePlanetMenu()
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
            <MenuItem planet={nextPlanet} active={planet === nextPlanet} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

function MenuItem({
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
