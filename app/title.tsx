import { twMerge } from 'tailwind-merge'
import { ChevronIcon, HamburgerIcon } from '@/app/icons'
import { Planet, planetBgColor, planetList } from '@/app/types'

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

export function HamburgerMenu({ onClick }: { onClick: (_p: Planet) => void }) {
  return (
    <ul className={`flex flex-col px-6 pt-6 pb-8 bg-background/50`} role="menu">
      {planetList.map((planet, index) => (
        <>
          <li
            role="menuitem"
            aria-label={planet}
            onClick={() => onClick(planet)}
          >
            <MenuItem planet={planet} key={index} />
          </li>
          {index < planetList.length - 1 && (
            <div className={`w-full h-px bg-white/10`} />
          )}
        </>
      ))}
    </ul>
  )
}

function MenuItem({ planet }: { planet: Planet }) {
  return (
    <div className={`flex flex-row py-5 items-center`}>
      <div
        className={`w-5 h-5 rounded-full ${planetBgColor.get(planet)} mr-[25px]`}
      />
      <span className={`textStyle-menu`}>{planet}</span>
      <div className={`flex-grow`} />
      <ChevronIcon className={`pr-2`} />
    </div>
  )
}
