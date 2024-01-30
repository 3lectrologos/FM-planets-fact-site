import { twMerge } from 'tailwind-merge'
import { ChevronIcon, HamburgerIcon } from '@/app/icons'
import { Planet, planetCircleColor, planetList } from '@/app/types'
import Link from 'next/link'

export function Title({
  className = '',
  isMenuOpen,
  onMenuToggle,
}: {
  className?: string
  isMenuOpen: boolean
  onMenuToggle: () => void
}) {
  return (
    <div
      className={twMerge(
        `flex flex-row items-center justify-between`,
        `${className}`
      )}
    >
      <h1 className={`textStyle-title`}>The planets</h1>
      <button
        onClick={onMenuToggle}
        aria-haspopup="menu"
        aria-expanded={isMenuOpen}
      >
        <HamburgerIcon active={isMenuOpen} />
      </button>
    </div>
  )
}

export function HamburgerMenu({
  currentPlanet,
  onClick,
}: {
  currentPlanet: Planet
  onClick: (_p: Planet) => void
}) {
  return (
    <ul className={`flex flex-col px-6 pt-6 pb-8 bg-background/50`} role="menu">
      {planetList.map((planet, index) => (
        <li
          key={index}
          className={`${index < planetList.length - 1 ? 'after:block after:w-full after:h-px after:bg-white/10' : ''}`}
          role="menuitem"
          aria-label={planet}
        >
          <Link
            href={`/${planet}`}
            onClick={() => (currentPlanet === planet ? onClick(planet) : {})}
          >
            <MenuItem planet={planet} active={currentPlanet === planet} />
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
