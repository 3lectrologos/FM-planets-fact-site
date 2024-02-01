'use client'

import {
  usePlanetMenu,
  usePlanetMenuDispatch,
} from '@/app/planet/[planet]/planetMenuContext'
import { twMerge } from 'tailwind-merge'
import { HamburgerIcon } from '@/app/icons'

export default function Title({ className = '' }: { className?: string }) {
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
      <div
        className={`tablet:hidden`}
        onClick={onClick}
        role="button"
        aria-label="Open menu"
        aria-haspopup="menu"
        aria-expanded={planetMenuState.menuOpen}
      >
        <HamburgerIcon active={planetMenuState.menuOpen} />
      </div>
    </div>
  )
}
